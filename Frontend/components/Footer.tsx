'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();
    const isHome = ['/', '/landing', '/dashboard', '/tracking', '/login', '/register', '/chatbot', '/contact', '/privacy', '/terms', '/help', '/metro-details'].includes(pathname);

    return (
        <footer className={`${isHome ? 'bg-transparent border-t border-white/10' : 'bg-metro-dark'} text-white py-12 relative z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-3xl">🚇</span>
                            <span className="text-xl font-display font-bold text-gradient">
                                Roadचल
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Last-mile connectivity from your doorstep to Pune Metro stations
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-metro-teal transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/landing" className="hover:text-metro-teal transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/metro-details" className="hover:text-metro-teal transition-colors">
                                    Metro Details
                                </Link>
                            </li>
                            <li>
                                <Link href="/tracking" className="hover:text-metro-teal transition-colors">
                                    Track Ride
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-metro-teal transition-colors">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/help" className="hover:text-metro-teal transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-metro-teal transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-metro-teal transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-metro-teal transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-2xl hover:text-metro-teal transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-2xl hover:text-metro-teal transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-2xl hover:text-metro-teal transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-2xl hover:text-metro-teal transition-colors">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {currentYear} Roadचल. All rights reserved. | Powered by Pune Metro</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
