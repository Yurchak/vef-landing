import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';
import { useLanguage } from '../i18n/LanguageContext';

import imgBrivdabasKoncerti from '../assets/vef-events/vef-brivdabas-koncerti.webp';
import imgStreetFood from '../assets/vef-events/vef-street-food.webp';
import imgModesSkates from '../assets/vef-events/vef-modes-skates.webp';
import imgTiesraides from '../assets/vef-events/vef-tiesraides.webp';
import imgBiznesaForumi from '../assets/vef-events/vef-biznesa-forumi.webp';
import imgKinoVakari from '../assets/vef-events/vef-kino-vakari.webp';
import imgAutoPrezentacijas from '../assets/vef-events/vef-auto-prezentacijas.webp';
import imgCeremonijas from '../assets/vef-events/vef-ceremonijas.webp';

const EVENT_IMAGES = [
    imgBrivdabasKoncerti,
    imgStreetFood,
    imgModesSkates,
    imgTiesraides,
    imgBiznesaForumi,
    imgKinoVakari,
    imgAutoPrezentacijas,
    imgCeremonijas,
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
};

function EventCard({ name, image }) {
    return (
        <motion.div
            variants={cardVariants}
            className="aspect-square bg-[var(--color-brand-bg)] group relative flex items-end overflow-hidden transition-all duration-500"
        >
            <img
                src={image}
                alt={name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-white/35 z-[1] group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="relative z-10 font-heading leading-tight uppercase transition-colors duration-500 text-white group-hover:text-[var(--color-brand-accent)] text-sm lg:text-base p-4 lg:p-6">
                {name}
            </h4>
        </motion.div>
    );
}

export default function BentoGridSection() {
    const { t } = useLanguage();

    return (
        <section id="bento-grid" className="w-full border-b border-grid flex flex-col overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="grid grid-cols-2 lg:grid-cols-5 w-full bg-[var(--color-brand-border)] gap-[var(--stroke-width)]"
            >
                {/* Headline Block */}
                <div className="col-span-2 lg:aspect-auto flex items-center px-8 py-16 md:px-12 lg:p-16 bg-[var(--color-brand-bg)] relative">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block z-20" />
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="leading-[0.9] uppercase tracking-tight flex flex-col relative z-20"
                    >
                        <span>{t.bentoHeadingLine1}</span>
                        <span>{t.bentoHeadingLine2}</span>
                    </motion.h2>
                </div>

                {/* Event Cards */}
                {t.events.map((name, i) => (
                    <EventCard key={i} name={name} image={EVENT_IMAGES[i]} />
                ))}

            </motion.div>
        </section>
    );
}
