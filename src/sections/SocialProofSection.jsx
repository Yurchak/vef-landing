import React from 'react';
import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';
import { useLanguage } from '../i18n/LanguageContext';

import BiteLogo from '../assets/Bite.svg';
import BonavaLogo from '../assets/Bonava.svg';
import IndexoLogo from '../assets/Indexo.svg';
import KeuneLogo from '../assets/Keune.svg';
import KineticsLogo from '../assets/Kinteics.svg';
import LMTLogo from '../assets/LMT.svg';
import LSMLogo from '../assets/LSM.svg';
import PauligLogo from '../assets/Paulig.svg';

const PARTNERS = [
    { name: "Bite", logo: BiteLogo },
    { name: "Bonava", logo: BonavaLogo },
    { name: "Indexo", logo: IndexoLogo },
    { name: "Keune", logo: KeuneLogo },
    { name: "Kinetics", logo: KineticsLogo },
    { name: "LMT", logo: LMTLogo },
    { name: "LSM", logo: LSMLogo },
    { name: "Paulig", logo: PauligLogo }
];

export default function SocialProofSection() {
    const { t } = useLanguage();
    const carouselItems = [...PARTNERS, ...PARTNERS];
    const headingLines = t.socialProofHeading.split('\n');

    return (
        <section id="social-proof" className="w-full border-b border-grid bg-[var(--color-brand-bg)] overflow-hidden">
            <div className="w-full grid grid-cols-1 md:grid-cols-4 bg-[var(--color-brand-border)] gap-[var(--stroke-width)]">

                {/* Text Area */}
                <div className="relative p-8 md:p-12 flex flex-col justify-center bg-[var(--color-brand-bg-alt)] text-[var(--color-brand-text)] z-10">
                    <GridMarker className="top-0 right-[-1px] hidden md:block text-[var(--color-brand-text)] opacity-40" />
                    <GridMarker className="bottom-0 right-[-1px] hidden md:block text-[var(--color-brand-text)] opacity-40" />
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl tracking-tight uppercase font-heading leading-none"
                    >
                        {headingLines.map((line, i) => (
                            <React.Fragment key={i}>{line}{i < headingLines.length - 1 && <br />}</React.Fragment>
                        ))}
                    </motion.h2>
                </div>

                {/* Logos Scrolling Carousel Area */}
                <div className="md:col-span-3 flex overflow-hidden bg-[var(--color-brand-bg)]">
                    <motion.div
                        className="flex gap-[var(--stroke-width)] w-max bg-[var(--color-brand-border)]"
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {carouselItems.map((partner, i) => (
                            <div
                                key={`${partner.name}-${i}`}
                                className="relative bg-[var(--color-brand-bg)] flex items-center justify-center transition-colors duration-400 group cursor-default h-[120px] md:h-full w-[160px] md:w-[200px] flex-shrink-0 p-4"
                            >
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
