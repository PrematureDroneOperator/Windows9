'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className = '',
    type = 'button'
}) => {
    const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-metro-red text-white hover:bg-opacity-90 hover:shadow-xl',
        secondary: 'bg-metro-teal text-white hover:bg-opacity-90 hover:shadow-xl',
        outline: 'border-2 border-metro-red text-metro-red hover:bg-metro-red hover:text-white'
    };

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
