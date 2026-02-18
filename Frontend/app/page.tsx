'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FloatingMetro from '@/components/FloatingMetro';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { features, testimonials } from '@/lib/mockData';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { FaStar } from 'react-icons/fa';
import ParticlesBackground from '@/components/ParticlesBackground';
import CTA from '@/components/CTA';

export default function Home() {
    return (
        <main className="min-h-screen relative">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark">
                <ParticlesBackground id="particles-global" />
                {/* Global Gradient Overlays */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-metro-red opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-metro-teal opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container - z-10 to sit above background */}
            <div className="relative z-10">

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Floating Metro Elements */}
                    <FloatingMetro type="train" size="lg" className="top-20 left-10" delay={0} />
                    <FloatingMetro type="station" size="md" className="top-40 right-20" delay={1} />
                    <FloatingMetro type="train" size="md" className="bottom-32 left-1/4" delay={2} />
                    <FloatingMetro type="icon" size="sm" className="top-1/3 right-1/3" delay={1.5} />
                    <FloatingMetro type="station" size="sm" className="bottom-20 right-10" delay={0.5} />

                    {/* Gradient Overlays (Specific to Hero for extra pop) */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-metro-red opacity-20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-metro-teal opacity-20 rounded-full blur-3xl"></div>

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1
                                variants={fadeIn}
                                className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
                            >
                                Roadचल
                            </motion.h1>
                            <motion.h2
                                variants={slideUp}
                                className="text-3xl md:text-5xl font-display font-bold text-gradient mb-6"
                            >
                                Your Last Mile to Public Transit
                            </motion.h2>
                            <motion.p
                                variants={fadeIn}
                                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
                            >
                                Effortless rides from your doorstep to nearest Pune Metro station
                            </motion.p>
                            <motion.div
                                variants={slideUp}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link href="/register">
                                    <Button variant="primary" size="lg">
                                        Get Started
                                    </Button>
                                </Link>
                                <Link href="/login">
                                    <Button variant="secondary" size="lg">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/landing">
                                    <Button variant="outline" size="lg">
                                        Learn More
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-20 relative overflow-hidden">
                    <FloatingMetro type="train" size="md" className="top-10 right-5" delay={0} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                How It Works
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Three simple steps to seamless metro connectivity
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: 1, icon: '📱', title: 'Book Your Ride', desc: 'Enter your location and nearest metro station' },
                                { step: 2, icon: '🚗', title: 'Get Picked Up', desc: 'Our driver arrives at your doorstep' },
                                { step: 3, icon: '🚇', title: 'Reach Metro', desc: 'Dropped off right at the metro entrance' }
                            ].map((item) => (
                                <Card key={item.step} glass className="text-center">
                                    <div className="text-6xl mb-4">{item.icon}</div>
                                    <div className="text-metro-red font-bold text-lg mb-2">Step {item.step}</div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Benefits Section */}
                <section className="py-20 relative overflow-hidden">
                    <FloatingMetro type="station" size="lg" className="bottom-10 left-5" delay={1} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                Why Choose Roadचल?
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Built for modern commuters who value time and convenience
                            </p>
                        </motion.div>

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

                {/* App Screenshots Section */}
                <section className="py-20 text-white relative overflow-hidden">
                    <FloatingMetro type="train" size="lg" className="top-20 right-10" delay={0.5} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                Experience the App
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Sleek, intuitive, and designed for speed
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {['📱 Tracking', '🗺️ Map View', '📊 Dashboard'].map((screen, index) => (
                                <Card key={index} glass className="text-center h-80 flex items-center justify-center">
                                    <div>
                                        <div className="text-6xl mb-4">{screen.split(' ')[0]}</div>
                                        <p className="text-2xl font-display font-bold">{screen.split(' ').slice(1).join(' ')}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 relative overflow-hidden">
                    <FloatingMetro type="icon" size="md" className="top-20 left-10" delay={1} />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                What Our Users Say
                            </h2>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                                Join thousands of happy commuters
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial) => (
                                <Card key={testimonial.id} glass className="text-center">
                                    <div className="text-6xl mb-4">{testimonial.image}</div>
                                    <div className="flex justify-center mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA />
            </div>
        </main>
    );
}
