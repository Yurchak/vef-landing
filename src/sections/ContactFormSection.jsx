import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { CheckCircle, ArrowRight, Clock } from '@phosphor-icons/react';
import { GridMarker } from '../components/GridMarker';

export default function ContactFormSection() {
    const [submitted, setSubmitted] = useState(false);
    const [dateValue, setDateValue] = useState('');
    const [guestsValue, setGuestsValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="contact-form" className="w-full border-b border-grid bg-[var(--color-brand-bg)]">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side: Copy */}
                <div className="flex flex-col lg:border-r border-grid">
                    <div className="relative px-8 py-16 md:px-12 lg:p-20 border-b border-grid flex-1 flex flex-col justify-center">
                        <GridMarker className="bottom-0 right-[-1px] hidden lg:block" />
                        <motion.div
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            className="flex items-center gap-4 mb-8 lg:mb-12"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Saziņa</span>
                            <div className="h-[1px] w-12 bg-current opacity-20" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Rezervācija</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                            className="text-[clamp(2.5rem,7vw,7rem)] tracking-tight uppercase leading-[0.9]"
                        >
                            Sāc Plānot<br />
                            Laicīgi.
                        </motion.h2>
                    </div>

                    <div className="relative p-8 md:p-12 lg:p-20 bg-[var(--color-brand-bg)] flex flex-col justify-center min-h-[16rem]">
                        <GridMarker className="top-0 right-[-1px] hidden lg:block" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
                            className="flex items-start md:items-center gap-6"
                        >
                            <Clock size={64} weight="light" className="opacity-40 flex-shrink-0" />
                            <p className="text-lg md:text-xl max-w-md opacity-80 leading-relaxed font-heading m-0">
                                Padalies ar savu vīziju, un mēs sazināsimies ar Tevi 24 stundu laikā.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex flex-col w-full h-full bg-[var(--color-brand-border)] gap-[var(--stroke-width)]">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center p-12 lg:p-24 bg-[var(--color-brand-bg)] text-center h-full min-h-[500px]"
                        >
                            <CheckCircle size={64} weight="light" className="mb-8" />
                            <h3 className="text-3xl font-heading uppercase mb-4 tracking-tight">Paldies!</h3>
                            <p className="opacity-80 leading-relaxed font-sans max-w-sm mx-auto">Mēs esam saņēmuši Tavu ziņu. Sazināsimies 24 stundu laikā.</p>
                            <button className="mt-8 uppercase font-medium tracking-widest text-xs underline font-heading underline-offset-8 hover:text-[var(--color-brand-cta)] transition-colors cursor-pointer" onClick={() => setSubmitted(false)}>Sūtīt vēlreiz</button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="font-sans flex flex-col w-full h-full bg-[var(--color-brand-border)] gap-[var(--stroke-width)] text-sm"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--stroke-width)]">
                                <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col justify-center">
                                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">E-PASTS *</label>
                                    <input id="email" required type="email" placeholder="email@company.com" className="w-full bg-transparent outline-none py-2 transition-colors rounded-none placeholder:text-inherit placeholder:opacity-40" />
                                </div>
                                <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col justify-center">
                                    <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">TEL. NR. *</label>
                                    <input id="phone" required type="tel" placeholder="+371" className="w-full bg-transparent outline-none py-2 transition-colors rounded-none placeholder:text-inherit placeholder:opacity-40" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--stroke-width)]">
                                <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col justify-center">
                                    <label htmlFor="date" className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">PASĀKUMA DATUMS</label>
                                    <input id="date" type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} className={`w-full bg-transparent outline-none py-2 transition-colors rounded-none uppercase ${dateValue ? 'opacity-100' : 'opacity-40'}`} />
                                </div>
                                <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col justify-center">
                                    <label htmlFor="guests" className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">VIESU SKAITS</label>
                                    <select id="guests" value={guestsValue} onChange={(e) => setGuestsValue(e.target.value)} className={`w-full bg-transparent outline-none py-2 transition-colors rounded-none cursor-pointer appearance-none ${guestsValue ? 'opacity-100' : 'opacity-40'}`}>
                                        <option value="" disabled className="opacity-40 uppercase">Izvēlies...</option>
                                        <option value="<50">&lt;50</option>
                                        <option value="50-150">50-150</option>
                                        <option value="150-500">150-500</option>
                                        <option value="500+">500+</option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col">
                                <label className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-5">INTERESĒJOŠĀS TELPAS</label>
                                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                                    {["VEF Mansards", "VEF Spīdola", "VEF Vasarnīca", "VEF Promenāde", "Vēl nezinu"].map(venue => (
                                        <label key={venue} className="flex flex-col items-center justify-center gap-3 cursor-pointer group p-2 hover:bg-black/5 transition-colors text-center relative">
                                            <input type="checkbox" value={venue} className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                                            <div className="w-4 h-4 rounded-sm flex flex-shrink-0 items-center justify-center transition-all bg-[var(--color-brand-border)] peer-checked:bg-[var(--color-brand-accent)] opacity-60 peer-checked:opacity-100">
                                                <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[9px] uppercase tracking-widest font-bold opacity-80 leading-tight">{venue}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[var(--color-brand-bg)] p-6 lg:p-8 flex flex-col flex-grow">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-3">ZIŅA</label>
                                <textarea id="message" rows={4} placeholder="Raksti ziņu šeit..." className="w-full h-full bg-transparent outline-none py-2 transition-colors rounded-none resize-none placeholder:text-inherit placeholder:opacity-40 min-h-[100px]"></textarea>
                            </div>

                            <div className="bg-[var(--color-brand-bg)] flex justify-end">
                                <button type="submit" className="flex items-center justify-center gap-4 w-full py-8 px-12 bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-cta-hover)] uppercase font-heading font-medium tracking-widest text-[1rem] transition-colors duration-400 cursor-pointer group">
                                    <span>Sūtīt Ziņu</span>
                                    <ArrowRight size={20} weight="light" className="mb-[2px] transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.form>
                    )}
                </div>

            </div>
        </section>
    );
}
