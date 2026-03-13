import React from 'react';
import { motion } from 'framer-motion';
import { GridMarker } from '../components/GridMarker';
import { Martini, ForkKnife, SpeakerHifi, Palette, Shield } from '@phosphor-icons/react';

const PARTNERS = [
    { name: "Bārs", Icon: Martini },
    { name: "Catering", Icon: ForkKnife },
    { name: "Tehnika", Icon: SpeakerHifi },
    { name: "Dekorācijas", Icon: Palette },
    { name: "Drošība", Icon: Shield }
];

export default function PartnersSection() {
    return (
        <section id="partners" className="w-full border-b border-grid bg-[var(--color-brand-bg)]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">

                {/* Intro column */}
                <div className="relative p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-grid flex flex-col justify-center bg-black/5">
                    <GridMarker className="top-0 right-[-1px] hidden lg:block" />
                    <GridMarker className="bottom-0 right-[-1px] hidden lg:block" />
                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Sadarbība</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                        className="tracking-tight uppercase leading-[0.9] mb-8"
                    >
                        Partneri<br />Kam<br />Uzticēties.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg md:text-xl max-w-md opacity-80 leading-relaxed font-heading"
                    >
                        No pasākuma koncepta izstrādes līdz pēdējai uzkodai.
                    </motion.p>
                </div>

                {/* Partners grid */}
                <div className="grid grid-cols-2 bg-[var(--color-brand-border)] gap-[1px]">
                    {PARTNERS.map((partner, i) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[var(--color-brand-bg)] relative aspect-square lg:aspect-auto flex flex-col items-center justify-center p-8 transition-colors duration-400 group"
                        >
                            {i > 0 && <GridMarker className="top-[0.5px] left-[0.5px]" />}
                            <partner.Icon size={48} weight="thin" className="mb-6 opacity-40 transition-opacity" />
                            <span className="font-heading tracking-widest uppercase text-sm md:text-base opacity-80 text-center">{partner.name}</span>
                        </motion.div>
                    ))}
                    {PARTNERS.length % 2 !== 0 && (
                        <div className="bg-[var(--color-brand-bg)] flex items-center justify-center p-8 relative overflow-hidden flex-1 group transition-colors duration-400 min-h-[16rem]">
                            <GridMarker className="top-[0.5px] left-[0.5px]" />
                            <span className="font-sans text-[10px] uppercase tracking-widest opacity-30 transition-colors duration-400 relative z-10">[ Vairāk Drīzumā ]</span>
                            <div className="absolute w-full h-[1px] bg-black/10 top-1/2 -mt-[0.5px] border-b border-dashed border-black/10 transition-colors duration-400" />
                            <div className="absolute w-[1px] h-full bg-black/10 left-1/2 -ml-[0.5px] border-r border-dashed border-black/10 transition-colors duration-400" />
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
