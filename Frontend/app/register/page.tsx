'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import FloatingMetro from '@/components/FloatingMetro';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ParticlesBackground from '@/components/ParticlesBackground';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });
    const [errors, setErrors] = useState<string[]>([]);

    const validateForm = () => {
        const newErrors: string[] = [];

        if (!formData.fullName) newErrors.push('Full name is required');
        if (!formData.email) newErrors.push('Email is required');
        if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
            newErrors.push('Valid 10-digit mobile number required');
        }
        if (!formData.password || formData.password.length < 6) {
            newErrors.push('Password must be at least 6 characters');
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.push('Passwords do not match');
        }
        if (!formData.acceptTerms) {
            newErrors.push('Please accept terms and conditions');
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Mock registration - show success and redirect
        router.push('/dashboard');
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 10);
        setFormData({ ...formData, mobile: value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark relative overflow-hidden py-20">
            <ParticlesBackground />
            {/* Floating Elements */}
            <FloatingMetro type="train" size="lg" className="top-10 right-10" delay={0} />
            <FloatingMetro type="station" size="md" className="bottom-20 left-10" delay={1} />
            <FloatingMetro type="icon" size="sm" className="top-1/2 left-1/4" delay={1.5} />

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-metro-red opacity-20 rounded-full blur-3xl"></div>

            <div className="max-w-md w-full mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Join Roadचल</h1>
                        <p className="text-gray-300">Create your account and start your journey</p>
                    </div>

                    {/* Registration Card */}
                    <Card glass className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label className="block text-white font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metro-teal transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-white font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metro-teal transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-white font-medium mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleMobileChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metro-teal transition-all"
                                    placeholder="9876543210"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-white font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metro-teal transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-white font-medium mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-metro-teal transition-all"
                                    placeholder="••••••••"
                                />
                            </div>

                            {/* Terms */}
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/10"
                                />
                                <label className="ml-2 text-sm text-gray-300">
                                    I accept the{' '}
                                    <a href="#" className="text-metro-teal hover:underline">
                                        Terms and Conditions
                                    </a>
                                </label>
                            </div>

                            {/* Errors */}
                            {errors.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-red-500/20 border border-red-500/50 text-white px-4 py-3 rounded-lg"
                                >
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}

                            {/* Submit */}
                            <Button type="submit" variant="primary" className="w-full">
                                Create Account
                            </Button>
                        </form>

                        {/* Login Link */}
                        <div className="mt-6 text-center text-gray-300">
                            Already have an account?{' '}
                            <Link href="/login" className="text-metro-teal hover:underline font-semibold">
                                Sign In
                            </Link>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
