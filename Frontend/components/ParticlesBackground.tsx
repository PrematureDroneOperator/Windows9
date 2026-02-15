'use client';

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0"
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse", // Particles move away on hover
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#bf00ff", // Neon Purple
                        },
                        links: {
                            color: "#bf00ff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                            shadow: {
                                enable: true,
                                color: "#bf00ff",
                                blur: 5
                            }
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2, // Slightly faster for better interaction
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80, // More particles for better effect
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
