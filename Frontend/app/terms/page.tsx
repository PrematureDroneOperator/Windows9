'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import FloatingMetro from '@/components/FloatingMetro';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { staggerContainer, fadeIn, slideUp } from '@/lib/animations';

export default function TermsOfServicePage() {
    const sections = [
        {
            title: "Acceptance of Terms",
            content: "By accessing and using Roadचल, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
        },
        {
            title: "User Responsibilities",
            content: "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate and complete information when using our platform."
        },
        {
            title: "Service Availability",
            content: "While we strive to provide 24/7 service, we do not guarantee uninterrupted access to Roadचल. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice."
        },
        {
            title: "Prohibited Conduct",
            content: "Users agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the platform. Harassment of drivers or other users is strictly prohibited."
        },
        {
            title: "Limitation of Liability",
            content: "Roadचल shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services."
        }
    ];

    return (
        <main className="min-h-screen relative pt-24 pb-12 overflow-hidden flex flex-col">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark">
                <ParticlesBackground id="particles-terms" />
                {/* Global Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-metro-teal opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-metro-red opacity-10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <FloatingMetro type="train" size="md" className="top-20 left-10" delay={0.5} />
                <FloatingMetro type="station" size="sm" className="bottom-20 right-10" delay={1.5} />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-12"
                >
                    <motion.h1
                        variants={fadeIn}
                        className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        Terms of <span className="text-gradient">Service</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        className="text-xl text-gray-300"
                    >
                        Last updated: February 18, 2026
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {sections.map((section, index) => (
                        <motion.div key={index} variants={slideUp}>
                            <Card glass className="p-8 border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-metro-red flex items-center justify-center text-sm">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {section.content}
                                </p>
                            </Card>
                        </motion.div>
                    ))}

                    <motion.div variants={fadeIn} className="text-center pt-8">
                        <p className="text-gray-400">
                            Questions about our Terms? Reach out at{" "}
                            <a href="mailto:legal@roadchal.com" className="text-metro-teal hover:underline font-bold">
                                legal@roadchal.com
                            </a>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative z-10 mt-12">
                <CTA />
            </div>
        </main>
    );
}
