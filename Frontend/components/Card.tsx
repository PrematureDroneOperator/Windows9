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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
