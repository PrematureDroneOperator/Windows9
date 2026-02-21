'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
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
        { href: '/', label: t('nav.home') },
        { href: '/landing', label: t('nav.about') },
        { href: '/metro-details', label: t('nav.metro') },
        { href: '/tracking', label: t('nav.track') },
        { href: '/chatbot', label: t('nav.chat') },
        { href: '/contact', label: t('nav.contact') },
        { href: '/dashboard', label: t('nav.dashboard') },
        { href: '/login', label: t('nav.login') }
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
                                Roadचल
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
                        <div className="flex items-center space-x-4">
                            <LanguageSwitcher />
                            <Link href="/register">
                                <motion.button
                                    className="btn-secondary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t('nav.getStarted')}
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <LanguageSwitcher />
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
                                {t('nav.getStarted')}
                            </button>
                        </Link>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
