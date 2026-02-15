'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import FloatingMetro from '@/components/FloatingMetro';
import ParticlesBackground from '@/components/ParticlesBackground';

import { metroStations } from '@/lib/mockData';
import { staggerContainer, slideUp } from '@/lib/animations';

export default function TrackingPage() {
    const [currentLocation, setCurrentLocation] = useState({ lat: 18.5204, lng: 73.8567 });
    const [destination, setDestination] = useState(metroStations[0]);
    const [eta, setEta] = useState('12 min');
    const [distance, setDistance] = useState('3.2 km');
    const [driverLocation, setDriverLocation] = useState({ lat: 18.5104, lng: 73.8467 });

    // Simulate driver movement
    useEffect(() => {
        const interval = setInterval(() => {
            setDriverLocation(prev => ({
                lat: prev.lat + 0.001,
                lng: prev.lng + 0.001
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen relative">
            {/* Global Fixed Background */}
            <div className="fixed inset-0 z-0 bg-gradient-to-br from-metro-dark via-gray-800 to-metro-dark">
                <ParticlesBackground id="particles-tracking" />
                {/* Global Gradient Overlays */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-metro-teal opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-metro-red opacity-10 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 py-20 overflow-hidden">
                <FloatingMetro type="train" size="sm" className="top-20 right-10" delay={0} />

                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={slideUp}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                            Track Your Ride
                        </h1>
                        <p className="text-xl text-gray-300">
                            Real-time tracking from pickup to metro station
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                        variants={slideUp}
                    >
                        {/* Map Area */}
                        <div className="lg:col-span-2">
                            <Card className="h-[600px] relative overflow-hidden border-none">
                                {/* Mock Map */}
                                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                                    <div className="text-center opacity-50">
                                        <div className="text-8xl mb-4 animate-pulse-glow text-metro-teal">🗺️</div>
                                        <p className="text-2xl font-bold text-white mb-2">Interactive Map</p>
                                        <p className="text-gray-400">Live tracking visualization</p>
                                    </div>
                                </div>

                                {/* Animated Route Indicator */}
                                <motion.div
                                    className="absolute top-20 left-20 text-4xl"
                                    animate={{
                                        y: [0, -10, 0],
                                        transition: { duration: 2, repeat: Infinity }
                                    }}
                                >
                                    📍
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-32 right-32 text-4xl"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        transition: { duration: 1.5, repeat: Infinity }
                                    }}
                                >
                                    🚇
                                </motion.div>

                                {/* Driver Icon */}
                                <motion.div
                                    className="absolute text-4xl"
                                    style={{
                                        top: `${(driverLocation.lat - 18.50) * 1000}px`,
                                        left: `${(driverLocation.lng - 73.84) * 1000}px`
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        transition: { duration: 1, repeat: Infinity }
                                    }}
                                >
                                    🚗
                                </motion.div>
                            </Card>
                        </div>

                        {/* Info Panel */}
                        <div className="space-y-6">
                            {/* Trip Status */}
                            <Card glass className="bg-metro-dark/80 backdrop-blur-md text-white border-metro-teal/30 shadow-lg shadow-metro-teal/10">
                                <h3 className="text-xl font-bold mb-4 text-metro-teal">Trip Status</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">Status:</span>
                                        <span className="font-bold text-metro-teal">En Route</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">ETA:</span>
                                        <span className="font-bold">{eta}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300">Distance:</span>
                                        <span className="font-bold">{distance}</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Route Details */}
                            <Card glass className="text-white">
                                <h3 className="text-xl font-bold text-white mb-4">Route Details</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="text-2xl mr-3">🏠</div>
                                        <div>
                                            <p className="font-semibold text-white">Pickup</p>
                                            <p className="text-sm text-gray-300">Kothrud, Pune</p>
                                        </div>
                                    </div>

                                    <div className="border-l-2 border-metro-teal h-8 ml-4"></div>

                                    <div className="flex items-start">
                                        <div className="text-2xl mr-3">🚇</div>
                                        <div>
                                            <p className="font-semibold text-white">Destination</p>
                                            <p className="text-sm text-gray-300">{destination.name} Metro Station</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Driver Info */}
                            <Card glass className="text-white">
                                <h3 className="text-xl font-bold mb-4">Driver Details</h3>
                                <div className="flex items-center mb-4">
                                    <div className="text-5xl mr-4">👨‍✈️</div>
                                    <div>
                                        <p className="font-bold text-lg">Rajesh Kumar</p>
                                        <p className="text-sm">⭐ 4.9 Rating</p>
                                    </div>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p>Vehicle: Honda City (MH 12 AB 1234)</p>
                                    <p>Experience: 5 years</p>
                                </div>
                            </Card>

                            {/* Nearby Stations */}
                            <Card glass className="text-white">
                                <h3 className="text-xl font-bold text-white mb-4">Nearby Stations</h3>
                                <div className="space-y-2">
                                    {metroStations.slice(0, 5).map((station) => (
                                        <div
                                            key={station.id}
                                            className="flex items-center justify-between p-2 rounded hover:bg-white/10 transition-colors cursor-pointer"
                                        >
                                            <div className="flex items-center">
                                                <span className="text-xl mr-2">🚇</span>
                                                <span className="text-sm font-medium">{station.name}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">{station.line} Line</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
