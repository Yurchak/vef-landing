import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL || 'events@vefkvartals.lv';
const FROM_EMAIL = process.env.FROM_EMAIL || 'VEF Kvartāls <events@vefkvartals.lv>';
const CONTACT_WEBHOOK = 'https://hooks.tglk.ru/in/PYyJAoL7Kw3XAdtKoktWMZ7bmaZ8ev';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email, phone, date, guests, venues, message, lang } = req.body;

    if (!email || !phone) {
        return res.status(400).json({ error: 'Email and phone are required' });
    }

    const venueList = venues?.length ? venues.join(', ') : '—';
    const langLabel = lang === 'en' ? 'EN' : 'LV';

    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `Jauns pieprasījums no VEF Kvartāls [${langLabel}]`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px;">
                    <h2 style="margin-bottom: 24px;">Jauns pieprasījums no mājaslapas</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">E-pasts</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${email}</td></tr>
                        <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold;">Tālrunis</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone}</td></tr>
                        <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold;">Datums</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${date || '—'}</td></tr>
                        <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold;">Viesi</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${guests || '—'}</td></tr>
                        <tr><td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold;">Telpas</td><td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${venueList}</td></tr>
                    </table>
                    ${message ? `<div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 4px;"><strong>Ziņa:</strong><br/><p style="margin: 8px 0 0; white-space: pre-wrap;">${message}</p></div>` : ''}
                </div>
            `,
        });

        await fetch(CONTACT_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, phone, date, guests, venues, message }),
        }).catch(() => {});

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
