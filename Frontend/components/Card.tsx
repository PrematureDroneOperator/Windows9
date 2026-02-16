'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true,
    glass = false
}) => {
    const baseClasses = 'rounded-2xl p-6';
    const glassClasses = glass ? 'glass' : 'bg-white shadow-lg';
    const hoverClass = hover ? 'card-hover' : '';

    return (
        <motion.div
            className={`${baseClasses} ${glassClasses} ${hoverClass} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={hover ? {
                scale: 1.05,
                backgroundColor: glass ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(6, 214, 160, 0.5)',
                boxShadow: glass ? '0 0 25px rgba(6, 214, 160, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3, ease: "easeOut" }
            } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
