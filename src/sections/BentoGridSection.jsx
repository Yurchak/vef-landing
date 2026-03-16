import React from 'react';
import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';

const EVENTS = [
    { name: "Brīvdabas koncerti", image: "https://picsum.photos/seed/vef-concerts/800/800" },
    { name: "Street food", image: "https://picsum.photos/seed/vef-streetfood/800/800" },
    { name: "Modes skates", image: "https://picsum.photos/seed/vef-fashion/800/800" },
    { name: "Tiešraides", image: "https://picsum.photos/seed/vef-streams/800/800" },
    { name: "Biznesa forumi", image: "https://picsum.photos/seed/vef-business/800/800" },
    { name: "Kino vakari", image: "https://picsum.photos/seed/vef-cinema/800/800" },
    { name: "Auto prezentācijas", image: "https://picsum.photos/seed/vef-automotive/800/800" },
    { name: "Sports", image: "https://picsum.photos/seed/vef-sports/800/800" }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
};

function EventCard({ event }) {
    return (
        <motion.div
            variants={cardVariants}
            className="aspect-square bg-[var(--color-brand-bg)] group relative flex items-end overflow-hidden transition-all duration-500"
        >
            <img
                src={event.image}
                alt={event.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="relative z-10 font-heading leading-tight uppercase transition-colors duration-500 text-white group-hover:text-[var(--color-brand-accent)] text-sm lg:text-base p-4 lg:p-6">
                {event.name}
            </h4>
        </motion.div>
    );
}

export default function BentoGridSection() {
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
                        <span>Telpa tavai</span>
                        <span>iztēlei.</span>
                    </motion.h2>
                </div>

                {/* Event Cards with stagger */}
                {EVENTS.map((event) => (
                    <EventCard key={event.name} event={event} />
                ))}

            </motion.div>
        </section>
    );
}
