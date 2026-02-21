'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingMetroProps {
    className?: string;
    delay?: number;
    size?: 'sm' | 'md' | 'lg';
    type?: 'train' | 'station' | 'icon';
}

const FloatingMetro: React.FC<FloatingMetroProps> = ({
    className = '',
    delay = 0,
    size = 'md',
    type = 'train'
}) => {
    const sizeClasses = {
        sm: 'text-4xl',
        md: 'text-6xl',
        lg: 'text-8xl'
    };

    const icons = {
        train: '🚇',
        station: '🏢',
        icon: '📍'
    };

    const floatVariants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                duration: 6 + delay,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay * 0.5
            }
        }
    };

    return (
        <motion.div
            className={`absolute ${sizeClasses[size]} ${className} opacity-30 select-none pointer-events-none will-change-transform`}
            variants={floatVariants}
            animate="animate"
        >
            {icons[type]}
        </motion.div>
    );
};

export default FloatingMetro;
