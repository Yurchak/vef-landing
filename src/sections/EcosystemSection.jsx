import { useState } from 'react';
import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';
import { SpeakerHifiIcon, ForkKnifeIcon, MartiniIcon, PaletteIcon, ShieldIcon, CameraIcon, LightbulbIcon, NewspaperIcon } from '@phosphor-icons/react';
import MapViewer3D from '../components/MapViewer3D';

const SERVICES = [
    { name: "Audio Tehnika", Icon: SpeakerHifiIcon, desc: "Skaņa jebkura mēroga pasākumam, ekrāni, projektori un tehniskais personāls." },
    { name: "Apgaismojums", Icon: LightbulbIcon, desc: "Radošs gaismas dizains un atmosfēras veidošana." },
    { name: "Ēdināšana", Icon: ForkKnifeIcon, desc: "Augstākās kvalitātes uzkodas, furšeti un pilna servisa ēdināšana." },
    { name: "Bārs", Icon: MartiniIcon, desc: "VEF Kvartāla nodrošināts bārs, personāls un plašs dzērienu klāsts." },
    { name: "Inventārs un Dekorēšana", Icon: PaletteIcon, desc: "Galdi, krēsli un telpu noformējums no labākajiem dekoratoriem." },
    { name: "Apsardze", Icon: ShieldIcon, desc: "Profesionāls drošības personāls un apsardzes risinājumi." },
    { name: "Foto & Video", Icon: CameraIcon, desc: "Profesionāla pasākuma dokumentēšana un tiešraides nodrošinājums." },
    { name: "Mediju Atbalsts", Icon: NewspaperIcon, desc: "Sadarbības tīkls ar ziņu aģentūrām un radio stacijām publisko pasākumu popularizēšanai." }
];

function ServiceItem({ service, index, isOpen, onToggle }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="px-6 border-b border-grid last:border-b-0 bg-[var(--color-brand-bg)] group cursor-pointer flex flex-col justify-center h-[80px]"
            onClick={onToggle}
        >
            <div className="flex items-center gap-4 shrink-0">
                <service.Icon size={24} weight="thin" className={`${isOpen ? 'opacity-80' : 'opacity-40'} group-hover:opacity-80 transition-opacity duration-300 flex-shrink-0`} />
                <span className="font-heading tracking-widest uppercase text-[1rem] opacity-90">
                    {service.name}
                </span>
            </div>
            <div className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out pl-10`}>
                <div className="overflow-hidden">
                    <p className="text-xs opacity-50 leading-relaxed font-sans">
                        {service.desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function ServicesList() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="flex flex-col w-full bg-[var(--color-brand-bg)]">
            {SERVICES.map((s, i) => (
                <ServiceItem
                    key={s.name}
                    service={s}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}

export default function EcosystemSection() {
    return (
        <section id="ecosystem" className="w-full border-b border-grid bg-[var(--color-brand-bg)] flex flex-col">

            {/* ── Top Header Row ── */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[var(--color-brand-border)] gap-[var(--stroke-width)] border-b border-grid">
                <div className="relative px-8 py-16 md:px-12 lg:p-20 bg-[var(--color-brand-bg)] flex items-end">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden lg:block" />
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="leading-[0.9] uppercase tracking-tight flex flex-col"
                    >
                        <span>Viss Pasākumam.</span>
                        <span>Vienuviet.</span>
                    </motion.h2>
                </div>
                <div className="px-8 py-16 md:px-12 lg:p-20 flex items-center bg-[var(--color-brand-bg)]">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-[1rem] max-w-sm xl:max-w-md opacity-80 leading-relaxed font-sans"
                    >
                        Vienīgā pasākumu vieta Rīgā, kur viss tehniskais, radošais un servisa nodrošinājums atrodas rokas stiepiena attālumā.
                    </motion.p>
                </div>
            </div>

            {/* ── Second Row: 3D Map (Left) + List (Right) ── */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">

                {/* Left Column: 3D Map Viewer */}
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-auto min-h-[100%] border-b lg:border-b-0 lg:border-r border-grid bg-[var(--color-brand-bg)] overflow-hidden">
                    <MapViewer3D />
                </div>

                {/* Right Column: Services List */}
                <ServicesList />

            </div>
        </section>
    );
}
