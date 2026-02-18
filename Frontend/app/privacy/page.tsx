'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ParticlesBackground';
import FloatingMetro from '@/components/FloatingMetro';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import { staggerContainer, fadeIn, slideUp } from '@/lib/animations';

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "Information We Collect",
            content: "We collect information you provide directly to us, such as when you create an account, book a ride, or contact our support team. This may include your name, email address, phone number, and location data."
        },
        {
            title: "How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, including to process your bookings, send you updates about your rides, and respond to your inquiries."
        },
        {
            title: "Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction."
        },
        {
            title: "Your Rights",
            content: "You have the right to access, update, or delete your personal information. If you have any questions or concerns about how we handle your data, please contact us."
        }
    ];

    return (
        <main className="min-h-screen relative pt-24 pb-12 overflow-hidden flex flex-col">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark">
                <ParticlesBackground id="particles-privacy" />
                {/* Global Gradient Overlays */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-metro-red opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-metro-teal opacity-10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
                <FloatingMetro type="train" size="md" className="top-20 right-10" delay={0.5} />
                <FloatingMetro type="station" size="sm" className="bottom-20 left-10" delay={1.5} />

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
                        Privacy <span className="text-gradient">Policy</span>
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
                                    <span className="w-8 h-8 rounded-lg bg-metro-teal flex items-center justify-center text-sm">
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
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:privacy@roadchal.com" className="text-metro-teal hover:underline font-bold">
                                privacy@roadchal.com
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
