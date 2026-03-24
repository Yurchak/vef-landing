import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'VEF Kvartāls <events@vefkvartals.lv>';
const TO_EMAIL = process.env.CONTACT_EMAIL || 'events@vefkvartals.lv';
const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK;

// Map venue IDs to Google Drive file IDs
// Client uploads PDFs to Drive, shares with "Anyone with link",
// and we use the file ID here. Update via Vercel env vars.
const VENUE_PDF_MAP = {
    'VEF Mansards': process.env.PDF_MANSARDS,
    'VEF Spīdola': process.env.PDF_SPIDOLA,
    'VEF Vasarnīca': process.env.PDF_VASARNICA,
    'VEF Promenāde': process.env.PDF_PROMENADE,
};

function getDriveLink(fileId) {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, venueName, lang } = req.body;

    if (!email || !venueName) {
        return res.status(400).json({ error: 'Email and venue name are required' });
    }

    const fileId = VENUE_PDF_MAP[venueName];
    if (!fileId) {
        return res.status(400).json({ error: 'Unknown venue' });
    }

    const downloadUrl = getDriveLink(fileId);
    const isEn = lang === 'en';

    try {
        // Send PDF link to the visitor
        await resend.emails.send({
            from: FROM_EMAIL,
            replyTo: TO_EMAIL,
            to: email,
            subject: isEn
                ? `${venueName} — Your venue offer`
                : `${venueName} — Jūsu telpas piedāvājums`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px;">
                    <h2>${isEn ? `Here's your ${venueName} offer` : `Jūsu ${venueName} piedāvājums`}</h2>
                    <p style="font-size: 16px; line-height: 1.6;">
                        ${isEn
                            ? 'Thank you for your interest! Click the link below to download the detailed venue information.'
                            : 'Paldies par interesi! Noklikšķiniet uz zemāk esošās saites, lai lejupielādētu detalizētu informāciju par telpu.'}
                    </p>
                    <a href="${downloadUrl}" style="display: inline-block; margin: 24px 0; padding: 14px 28px; background: #f76b34; color: #fff; border-radius: 2px; text-decoration: none; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; font-size: 13px;">
                        ${isEn ? 'Download PDF' : 'Lejupielādēt PDF'}
                    </a>
                    <p style="font-size: 14px; color: #666; margin-top: 24px;">
                        ${isEn
                            ? 'Have questions? Reply to this email and our team will get back to you.'
                            : 'Ir jautājumi? Atbildiet uz šo e-pastu un mūsu komanda ar Jums sazināsies.'}
                    </p>
                    <hr style="margin: 32px 0; border: none; border-top: 1px solid #eee;" />
                    <p style="font-size: 12px; color: #999;">VEF Kvartāls · Bērzaunes iela 11A, Rīga, LV-1039</p>
                </div>
            `,
        });

        // Log lead to Google Sheet (fire and forget)
        if (SHEET_WEBHOOK) {
            fetch(SHEET_WEBHOOK, {
                method: 'POST',
                redirect: 'follow',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({ email, venueName, lang }),
            }).catch(() => {});
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Lead magnet error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
