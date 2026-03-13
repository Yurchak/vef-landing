import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from '@phosphor-icons/react';

const STATES = { IDLE: 'idle', INPUT: 'input', SUCCESS: 'success' };

const slideIn = {
    initial: { x: -40, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 28 } },
    exit: { x: -40, opacity: 0, transition: { duration: 0.2 } }
};

export default function VenueEmailCTA({ venueName }) {
    const [state, setState] = useState(STATES.IDLE);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const inputRef = useRef(null);

    const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

    const handleActivate = () => {
        setState(STATES.INPUT);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (!isValidEmail(email)) {
            setError('Ievadi derīgu e-pastu');
            inputRef.current?.focus();
            return;
        }
        setError('');
        setState(STATES.SUCCESS);
        // Reset after 5 seconds
        setTimeout(() => {
            setState(STATES.IDLE);
            setEmail('');
        }, 5000);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setState(STATES.IDLE);
            setEmail('');
            setError('');
        }
    };

    return (
        <div className="w-full border-t border-grid shrink-0 overflow-hidden">
            <div className="relative h-[3.5rem] flex items-center">
                <AnimatePresence mode="wait">

                    {/* ── State 1: IDLE ── */}
                    {state === STATES.IDLE && (
                        <motion.button
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            onClick={handleActivate}
                            className="absolute inset-0 px-6 flex items-center gap-2 group/link hover:opacity-70 transition-opacity cursor-pointer w-full"
                            aria-label={`Apskati piedāvājumu par ${venueName}`}
                        >
                            <span className="uppercase font-heading font-medium text-xs tracking-widest">
                                Apskati Piedāvājumu
                            </span>
                            <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                        </motion.button>
                    )}

                    {/* ── State 2: EMAIL INPUT ── */}
                    {state === STATES.INPUT && (
                        <motion.form
                            key="input"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.15 } }}
                            onSubmit={handleSubmit}
                            className="absolute inset-0 flex items-center w-full"
                        >
                            {/* Email input slides in from left */}
                            <motion.div
                                {...slideIn}
                                className="flex-1 h-full flex items-center"
                            >
                                <input
                                    ref={inputRef}
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                                    onKeyDown={handleKeyDown}
                                    placeholder={error || "tavs@epasts.lv"}
                                    className={`w-full h-full px-6 bg-transparent text-xs uppercase tracking-widest font-heading font-medium outline-none placeholder:opacity-40 ${error ? 'placeholder:text-red-500 placeholder:opacity-70' : ''}`}
                                    aria-label="E-pasta adrese"
                                    autoComplete="email"
                                />
                            </motion.div>

                            {/* Submit button slides to the right */}
                            <motion.button
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 28, delay: 0.1 } }}
                                type="submit"
                                className="h-full px-6 flex items-center gap-2 border-l border-grid hover:bg-[var(--color-brand-accent)] transition-colors cursor-pointer shrink-0"
                                aria-label="Nosūtīt"
                            >
                                <span className="uppercase font-heading font-medium text-xs tracking-widest whitespace-nowrap">
                                    Saņemt
                                </span>
                                <ArrowRight size={14} />
                            </motion.button>
                        </motion.form>
                    )}

                    {/* ── State 3: SUCCESS ── */}
                    {state === STATES.SUCCESS && (
                        <motion.div
                            key="success"
                            {...slideIn}
                            className="absolute inset-0 px-6 flex items-center gap-2"
                        >
                            <Check size={16} weight="bold" className="text-green-600 shrink-0" />
                            <span className="uppercase font-heading font-medium text-xs tracking-widest">
                                Piedāvājums tika nosūtīts uz tavu e-pastu!
                            </span>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
