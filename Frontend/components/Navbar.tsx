'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/landing', label: 'About' },
        { href: '/tracking', label: 'Track' },
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/login', label: 'Login' }
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            className="flex items-center space-x-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="text-3xl">🚇</span>
                            <span className="text-2xl font-display font-bold text-gradient">
                                Windows 9
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <motion.span
                                    className="text-white font-medium hover:text-metro-teal transition-colors cursor-pointer"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                </motion.span>
                            </Link>
                        ))}
                        <Link href="/register">
                            <motion.button
                                className="btn-secondary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white text-2xl"
                        >
                            {mobileMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden mt-4 glass-dark rounded-lg p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}>
                                <div
                                    className="block py-3 text-white font-medium hover:text-metro-teal transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </div>
                            </Link>
                        ))}
                        <Link href="/register">
                            <button
                                className="btn-secondary w-full mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
