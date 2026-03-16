import React from 'react';
import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';

const EVENTS = [
    { name: "Brīvdabas Koncerti", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=800&fit=crop" },
    { name: "Street Food", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=800&fit=crop" },
    { name: "Modes Skates", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=800&fit=crop" },
    { name: "Tiešraides", image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=800&fit=crop" },
    { name: "Biznesa Forumi", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop" },
    { name: "Kino Vakari", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=800&fit=crop" },
    { name: "Auto Prezentācijas", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=800&fit=crop" },
    { name: "Sports", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=800&fit=crop" }
];

function EventCard({ event, index }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="aspect-square bg-[var(--color-brand-bg)] group relative flex items-end overflow-hidden transition-all duration-500"
        >
            <img
                src={event.image}
                alt=""
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
            <div className="grid grid-cols-2 lg:grid-cols-5 w-full bg-[var(--color-brand-border)] gap-[var(--stroke-width)]">

                {/* ── Headline Block (2 columns wide, 1 row tall) ── */}
                <div className="col-span-2 lg:aspect-auto flex items-center px-8 py-16 md:px-12 lg:p-16 bg-[var(--color-brand-bg)] relative">
                    <GridMarker className="bottom-[-1px] right-[-1px] hidden md:block z-20" />
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="leading-[0.9] uppercase tracking-tight flex flex-col relative z-20"
                    >
                        <span>Telpa Tavai</span>
                        <span>Iztēlei.</span>
                    </motion.h2>
                </div>

                {/* ── Event Cards ── */}
                {EVENTS.map((event, i) => (
                    <EventCard key={event.name} event={event} index={i} />
                ))}

            </div>
        </section>
    );
}
