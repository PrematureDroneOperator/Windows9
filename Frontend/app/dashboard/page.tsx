'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';
import FloatingMetro from '@/components/FloatingMetro';
import ParticlesBackground from '@/components/ParticlesBackground';
import { rideHistory, stats } from '@/lib/mockData';
import { FaClock, FaMapMarkerAlt, FaRupeeSign, FaChartLine } from 'react-icons/fa';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark py-20 relative overflow-hidden">
            <ParticlesBackground />

            <FloatingMetro type="train" size="md" className="top-20 right-10" delay={0} />
            <FloatingMetro type="station" size="sm" className="bottom-40 left-10" delay={1.5} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                        Welcome back, Priya! 👋
                    </h1>
                    <p className="text-xl text-gray-300">
                        Here's your commute overview
                    </p>
                </motion.div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <Link href="/tracking">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Card className="gradient-metro text-white cursor-pointer border-none">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Start New Ride</h3>
                                        <p className="text-gray-200">Book your ride to nearest metro</p>
                                    </div>
                                    <div className="text-5xl">🚀</div>
                                </div>
                            </Card>
                        </motion.div>
                    </Link>

                    <Link href="/tracking">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Card className="!bg-metro-teal text-white cursor-pointer border-none">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Track Active Ride</h3>
                                        <p className="text-gray-100">View live ride status</p>
                                    </div>
                                    <div className="text-5xl">📍</div>
                                </div>
                            </Card>
                        </motion.div>
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <Card className="text-center bg-white/10 backdrop-blur-md border-white/20 text-white">
                        <div className="text-3xl mb-2 text-metro-red">
                            <FaChartLine className="mx-auto" />
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.totalRides}</p>
                        <p className="text-gray-300">Total Rides</p>
                    </Card>

                    <Card className="text-center bg-white/10 backdrop-blur-md border-white/20 text-white">
                        <div className="text-3xl mb-2 text-metro-teal">
                            <FaMapMarkerAlt className="mx-auto" />
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.totalDistance}</p>
                        <p className="text-gray-300">Distance</p>
                    </Card>

                    <Card className="text-center bg-white/10 backdrop-blur-md border-white/20 text-white">
                        <div className="text-3xl mb-2 text-metro-red">
                            <FaClock className="mx-auto" />
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.totalTime}</p>
                        <p className="text-gray-300">Time Saved</p>
                    </Card>

                    <Card className="text-center bg-white/10 backdrop-blur-md border-white/20 text-white">
                        <div className="text-3xl mb-2 text-metro-teal">
                            <FaRupeeSign className="mx-auto" />
                        </div>
                        <p className="text-3xl font-bold text-white">{stats.moneySaved}</p>
                        <p className="text-gray-300">Money Saved</p>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Ride History */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                            <h3 className="text-2xl font-bold text-white mb-6">Recent Rides</h3>
                            <div className="space-y-4">
                                {rideHistory.map((ride) => (
                                    <div
                                        key={ride.id}
                                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                                    >
                                        <div className="flex items-start flex-1">
                                            <div className="text-3xl mr-4">🚗</div>
                                            <div>
                                                <p className="font-semibold text-white">
                                                    {ride.from} → {ride.to}
                                                </p>
                                                <div className="flex gap-4 mt-1 text-sm text-gray-400">
                                                    <span>📅 {ride.date}</span>
                                                    <span>📏 {ride.distance}</span>
                                                    <span>⏱️ {ride.duration}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-metro-red text-lg">{ride.fare}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                                    View All Rides
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Upcoming Rides */}
                        <Card className="bg-metro-dark/80 backdrop-blur-md border-metro-teal/30 text-white shadow-lg shadow-metro-teal/10">
                            <h3 className="text-xl font-bold mb-4 text-metro-teal">Upcoming Rides</h3>
                            <div className="space-y-3">
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <p className="font-semibold mb-1">Tomorrow, 9:00 AM</p>
                                    <p className="text-sm text-gray-300">Kothrud → Vanaz Metro</p>
                                </div>
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    <p className="font-semibold mb-1">Mon, 18:30</p>
                                    <p className="text-sm text-gray-300">Office → Civil Court Metro</p>
                                </div>
                            </div>
                        </Card>

                        {/* Pass Subscription */}
                        <Card className="bg-gradient-metro text-white border-none">
                            <h3 className="text-xl font-bold mb-4">Monthly Pass</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Rides Left:</span>
                                    <span className="font-bold">23/30</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Expires:</span>
                                    <span className="font-bold">28 Feb 2026</span>
                                </div>
                                <Button variant="secondary" className="w-full mt-4 bg-white text-metro-red hover:bg-gray-100 border-none">
                                    Renew Pass
                                </Button>
                            </div>
                        </Card>

                        {/* Analytics */}
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                            <h3 className="text-xl font-bold text-white mb-4">Your Analytics</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-300">Eco Score</span>
                                        <span className="text-sm font-bold text-metro-teal">92%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-metro-teal h-2 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-300">On-Time Rate</span>
                                        <span className="text-sm font-bold text-metro-red">88%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div className="bg-metro-red h-2 rounded-full" style={{ width: '88%' }}></div>
                                    </div>
                                </div>

                                <div className="text-center pt-4 border-t border-white/10">
                                    <p className="text-2xl font-bold text-white">🌱</p>
                                    <p className="text-sm text-gray-300 mt-1">
                                        You've saved 42 kg CO₂ this month!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
