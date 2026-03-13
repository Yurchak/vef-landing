import React from 'react';
import { motion } from 'framer-motion';

export function Button({
    children,
    variant = 'primary',
    size = 'default',
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[var(--color-brand-cta)] text-white hover:bg-[var(--color-brand-accent)]",
        secondary: "bg-[var(--color-brand-text)] text-[var(--color-brand-bg)] hover:bg-[var(--color-brand-accent)]",
        outline: "border border-grid text-[var(--color-brand-text)] hover:bg-[var(--color-brand-accent)]",
        ghost: "text-[var(--color-brand-text)] hover:bg-[var(--color-brand-accent)]"
    };

    const sizes = {
        default: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base"
    };

    const combinedClassName = [baseStyles, variants[variant], sizes[size], className].filter(Boolean).join(" ");

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className={combinedClassName}
            {...props}
        >
            {children}
        </motion.button>
    );
}
