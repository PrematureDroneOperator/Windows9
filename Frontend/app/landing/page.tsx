'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingMetro from '@/components/FloatingMetro';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { features } from '@/lib/mockData';
import { fadeIn, slideUp } from '@/lib/animations';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function LandingPage() {
    return (
        <main className="min-h-screen relative">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark">
                <ParticlesBackground id="particles-global-about" />
                {/* Global Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-metro-teal opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-metro-red opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container - z-10 to sit above background */}
            <div className="relative z-10">

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    <FloatingMetro type="train" size="lg" className="top-20 left-10" delay={0} />
                    <FloatingMetro type="station" size="md" className="bottom-20 right-20" delay={1} />

                    <div className="absolute top-0 right-0 w-96 h-96 bg-metro-teal opacity-20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
                                Revolutionizing<br />
                                <span className="text-gradient">Last-Mile Connectivity</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                                Bridging the gap between your home and Pune Metro with smart, affordable, and reliable transportation
                            </p>
                            <Link href="/register">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="primary" size="lg">Download the App</Button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* Feature Highlights */}
                <section className="py-20 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                Comprehensive Features
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Everything you need for a seamless commuting experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <Card key={feature.id} glass className="text-center">
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-display font-bold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pune Metro Integration */}
                <section className="py-20 relative overflow-hidden">
                    <FloatingMetro type="train" size="lg" className="top-10 right-10" delay={0} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                    Seamless Pune Metro Integration
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    Roadचल connects you to all major Pune Metro stations including Vanaz, Anand Nagar,
                                    Deccan Gymkhana, Civil Court, and Swargate. We optimize routes to ensure you never miss your metro.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        'Real-time metro schedule integration',
                                        'Station-specific pickup and drop points',
                                        'Coordinated timing to match metro arrivals',
                                        'Coverage across all metro lines'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-metro-teal text-xl mr-2">✓</span>
                                            <span className="text-gray-300">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center justify-center"
                            >
                                <Card glass className="p-12 text-center">
                                    <div className="text-9xl mb-4">🗺️</div>
                                    <h3 className="text-2xl font-bold text-white">Metro Route Map</h3>
                                    <p className="text-gray-300 mt-2">Interactive station coverage</p>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* App Screenshots */}
                <section className="py-20 text-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                Built for Modern Commuters
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Intuitive design meets powerful functionality
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { emoji: '📱', title: 'Live Tracking', desc: 'Track your ride in real-time' },
                                { emoji: '💳', title: 'Easy Payments', desc: 'Multiple payment options' },
                                { emoji: '📊', title: 'Trip Analytics', desc: 'Insights on your journeys' }
                            ].map((item, index) => (
                                <Card key={index} glass className="text-center h-72 flex flex-col items-center justify-center">
                                    <div className="text-7xl mb-4">{item.emoji}</div>
                                    <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Download CTA */}
                <section className="py-20 bg-gradient-metro text-white relative overflow-hidden">
                    <ParticlesBackground id="particles-about-cta" />
                    <FloatingMetro type="train" size="lg" className="top-10 left-10" delay={0} />
                    <FloatingMetro type="station" size="md" className="bottom-10 right-20" delay={1} />

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Start Your Smarter Commute Today
                        </h2>
                        <p className="text-xl mb-8">
                            Available on iOS and Android. Download now and get your first ride free!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-metro-red px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
                            >
                                <span className="text-2xl">📱</span> Download for iOS
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-metro-red px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
                            >
                                <span className="text-2xl">🤖</span> Download for Android
                            </motion.button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
