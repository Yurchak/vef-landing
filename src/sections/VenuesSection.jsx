import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowsOutIcon, UserIcon, ChairIcon, ForkKnifeIcon, CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';
import VenueEmailCTA from '../components/VenueEmailCTA';
import { useLanguage } from '../i18n/LanguageContext';

// Local venue images
import mansards1 from '../assets/vef-venues/mansards-1.webp';
import mansards2 from '../assets/vef-venues/mansards-2.webp';
import mansards3 from '../assets/vef-venues/mansards-3.webp';
import spidola1 from '../assets/vef-venues/spidola-1.webp';
import spidola2 from '../assets/vef-venues/spidola-2.webp';
import spidola3 from '../assets/vef-venues/spidola-3.webp';
import vasarnica1 from '../assets/vef-venues/vasarnica-1.webp';
import vasarnica2 from '../assets/vef-venues/vasarnica-2.webp';
import vasarnica3 from '../assets/vef-venues/vasarnica-3.webp';
import promenade1 from '../assets/vef-venues/promenade-1.webp';
import promenade2 from '../assets/vef-venues/promenade-2.webp';
import promenade3 from '../assets/vef-venues/promenade-3.webp';

const VENUE_DATA = [
    { id: "mansards", area: "286m²", guests: "100", standing: "120", seated: "120", images: [mansards1, mansards2, mansards3] },
    { id: "spidola", area: "314m²", guests: "120", standing: "250", seated: "240", images: [spidola1, spidola2, spidola3] },
    { id: "vasarnica", area: "926m²", guests: "450", standing: "1400", seated: "500", images: [vasarnica1, vasarnica2, vasarnica3] },
    { id: "promenade", area: "3136m²", guests: "2000", standing: "4000", seated: "3000", images: [promenade1, promenade2, promenade3] },
];

function VenueCard({ venue, venueText, statLabels }) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const images = venue.images;

    return (
        <div
            className="w-full h-full flex-shrink-0 flex flex-col group transition-colors duration-500 border-r border-grid"
            style={{ minWidth: "100%" }}
        >
            {/* 1. Image */}
            <div className="w-full aspect-[4/3] relative overflow-hidden flex items-center justify-center border-b border-grid shrink-0">
                <img src={images[activeImageIndex]} alt={venueText.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {images.length > 1 && (
                    <div className="absolute bottom-4 left-4 flex gap-2 z-20">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImageIndex(i)}
                                className={`w-12 h-12 md:w-16 md:h-16 overflow-hidden border transition-all duration-300 cursor-pointer ${activeImageIndex === i ? 'border-white/50 scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'}`}
                                aria-label={`View image ${i + 1}`}
                            >
                                <img src={img} alt={`${venueText.title} thumbnail ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* 2. Venue name + tags */}
            <div className="w-full border-b border-grid p-6 flex flex-col xl:flex-row xl:items-center justify-between gap-4 shrink-0">
                <h3 className="text-2xl md:text-3xl font-heading uppercase">{venueText.title}</h3>
                <div className="flex flex-wrap gap-2">
                    {venueText.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 border border-grid opacity-80 font-data">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* 3. Stats 4x1 grid */}
            <div className="w-full grid grid-cols-4 bg-[var(--color-brand-border)] gap-[var(--stroke-width)] border-b border-grid shrink-0">
                <div className="bg-[var(--color-brand-bg)] p-3 md:p-6 flex flex-col gap-1 md:gap-2 relative group/stat overflow-hidden">
                    <span className="font-bold uppercase tracking-widest text-[8px] md:text-[9px] opacity-60 truncate font-data">{statLabels.area}</span>
                    <span className="text-sm md:text-base font-medium flex items-center gap-1.5 font-data"><ArrowsOutIcon className="opacity-40" size={14} />{venue.area}</span>
                </div>
                <div className="bg-[var(--color-brand-bg)] p-3 md:p-6 flex flex-col gap-1 md:gap-2 relative group/stat overflow-hidden">
                    <span className="font-bold uppercase tracking-widest text-[8px] md:text-[9px] opacity-60 truncate font-data">{statLabels.standing}</span>
                    <span className="text-sm md:text-base font-medium flex items-center gap-1.5 font-data"><UserIcon className="opacity-40" size={14} />{venue.standing}</span>
                </div>
                <div className="bg-[var(--color-brand-bg)] p-3 md:p-6 flex flex-col gap-1 md:gap-2 relative group/stat overflow-hidden">
                    <span className="font-bold uppercase tracking-widest text-[8px] md:text-[9px] opacity-60 truncate font-data">{statLabels.seated}</span>
                    <span className="text-sm md:text-base font-medium flex items-center gap-1.5 font-data"><ChairIcon className="opacity-40" size={14} />{venue.seated}</span>
                </div>
                <div className="bg-[var(--color-brand-bg)] p-3 md:p-6 flex flex-col gap-1 md:gap-2 relative group/stat overflow-hidden">
                    <span className="font-bold uppercase tracking-widest text-[8px] md:text-[9px] opacity-60 truncate font-data">{statLabels.banquet}</span>
                    <span className="text-sm md:text-base font-medium flex items-center gap-1.5 font-data"><ForkKnifeIcon className="opacity-40" size={14} />{venue.guests}</span>
                </div>
            </div>

            {/* 4. Description */}
            <div className="w-full p-6 flex-grow flex flex-col justify-center min-h-[140px]">
                <p className="opacity-80 leading-relaxed text-sm">
                    {venueText.description}
                </p>
            </div>

            {/* 5. CTA */}
            <VenueEmailCTA venueName={venueText.title} />
        </div>
    );
}

export default function VenuesSection() {
    const { t } = useLanguage();
    const [itemsVisible, setItemsVisible] = useState(3);
    const controls = useAnimation();
    const currentIndexRef = useRef(VENUE_DATA.length);
    const [isAnimating, setIsAnimating] = useState(false);

    const extendedVenues = [...VENUE_DATA, ...VENUE_DATA, ...VENUE_DATA];

    const statLabels = { area: t.statArea, standing: t.statStanding, seated: t.statSeated, banquet: t.statBanquet };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsVisible(3);
            else if (window.innerWidth >= 768) setItemsVisible(2);
            else setItemsVisible(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const slideTo = async (index, transition = true) => {
        setIsAnimating(true);
        currentIndexRef.current = index;
        const xPercent = -(index * (100 / itemsVisible));

        if (transition) {
            await controls.start({
                x: `${xPercent}%`,
                transition: { type: "tween", ease: "easeInOut", duration: 0.5 }
            });

            if (currentIndexRef.current >= VENUE_DATA.length * 2) {
                currentIndexRef.current -= VENUE_DATA.length;
                controls.set({ x: `-${currentIndexRef.current * (100 / itemsVisible)}%` });
            } else if (currentIndexRef.current < VENUE_DATA.length) {
                currentIndexRef.current += VENUE_DATA.length;
                controls.set({ x: `-${currentIndexRef.current * (100 / itemsVisible)}%` });
            }
        } else {
            controls.set({ x: `${xPercent}%` });
        }
        setIsAnimating(false);
    };

    const handlePrev = () => { if (!isAnimating) slideTo(currentIndexRef.current - 1); };
    const handleNext = () => { if (!isAnimating) slideTo(currentIndexRef.current + 1); };

    useEffect(() => {
        controls.set({ x: `-${currentIndexRef.current * (100 / itemsVisible)}%` });
    }, [itemsVisible, controls]);

    return (
        <section id="venues" className="w-full border-b border-grid flex flex-col overflow-hidden">
            {/* Top Header Row */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-[var(--color-brand-border)] gap-[var(--stroke-width)]">
                <div className="relative px-8 py-16 md:px-12 lg:p-20 bg-[var(--color-brand-bg)] flex items-end">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block" />
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="leading-[0.9] uppercase tracking-tight flex flex-col"
                    >
                        <span>{t.venuesHeading}</span>
                    </motion.h2>
                </div>
                <div className="px-8 py-16 md:px-12 lg:p-20 flex items-center bg-[var(--color-brand-bg)]">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-[1rem] max-w-sm xl:max-w-md opacity-80 leading-relaxed"
                    >
                        {t.venuesDescription}
                    </motion.p>
                </div>
            </div>

            {/* Navigation Arrows Row */}
            <div className="w-full h-16 flex items-center justify-end border-t border-b border-grid">
                <button onClick={handlePrev} className="w-16 h-16 flex items-center justify-center border-l border-grid hover:bg-[var(--color-brand-accent)] transition-colors group cursor-pointer" aria-label={t.venuesPrevLabel}>
                    <CaretLeftIcon size={24} weight="light" className="group-hover:-translate-x-0.5 group-active:-translate-x-1.5 transition-transform" />
                </button>
                <button onClick={handleNext} className="w-16 h-16 flex items-center justify-center border-l border-grid hover:bg-[var(--color-brand-accent)] transition-colors group cursor-pointer" aria-label={t.venuesNextLabel}>
                    <CaretRightIcon size={24} weight="light" className="group-hover:translate-x-0.5 group-active:translate-x-1.5 transition-transform" />
                </button>
            </div>

            {/* Venues Carousel Track */}
            <div className="w-full overflow-hidden relative">
                <motion.div className="flex w-full items-stretch h-full" animate={controls}>
                    {extendedVenues.map((venue, i) => (
                        <div key={`${venue.id}-${i}`} style={{ width: `${100 / itemsVisible}%`, flexShrink: 0 }} className="flex h-full">
                            <VenueCard venue={venue} venueText={t.venues[i % VENUE_DATA.length]} statLabels={statLabels} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
