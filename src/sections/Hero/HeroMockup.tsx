// src/sections/Hero/HeroMockup.tsx
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import type { ReactElement } from 'react';

interface HeroMockupProps {
    reducedMotion: boolean;
}

export const HeroMockup = ({ reducedMotion }: HeroMockupProps): ReactElement => {
    return (
        <>
            {/* DESKTOP: Equal Partner - Showcase Mode */}
            <motion.div
                className='hidden lg:block absolute right-8 xl:right-12 top-1/2 transform -translate-y-1/2'
                initial={{ x: 80, opacity: 0, rotateY: 10 }}
                animate={{ 
                    x: 0, 
                    opacity: 1, 
                    rotateY: 0,
                    y: reducedMotion ? 0 : [-12, 8, -12]
                }}
                transition={{
                    duration: 1,
                    delay: 0.4,
                    y: {
                        duration: reducedMotion ? 0 : 6,
                        repeat: reducedMotion ? 0 : Infinity,
                        ease: "easeInOut"
                    }
                }}
            >
                <div className="relative">
                    {/* Premium Glow Effect */}
                    <div className="absolute -inset-6 bg-gradient-to-r from-amber-400/15 to-teal-400/10 blur-2xl rounded-3xl" />
                    
                    {/* Main Mockup Container */}
                    <motion.div
                        className='relative w-[320px] xl:w-[360px] rounded-2xl shadow-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg'
                        whileHover={{ 
                            scale: reducedMotion ? 1 : 1.05,
                            y: -8,
                            transition: { type: 'spring', stiffness: 300, damping: 20 }
                        }}
                    >
                        {/* Optimized Desktop Mockup Image */}
                        <picture>
                            <source 
                                srcSet='/assets/images/hero/mockup-laptop-desktop.avif' 
                                type='image/avif' 
                            />
                            <source 
                                srcSet='/assets/images/hero/mockup-laptop-desktop.webp' 
                                type='image/webp' 
                            />
                            <img 
                                src="/assets/images/hero/mockup-laptop-desktop.jpg" 
                                alt="Ashborne digital product dashboard showing analytics and insights"
                                className='w-full h-auto' 
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>

                        {/* Interactive Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                            <motion.button 
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-4 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm shadow-2xl border border-white/30"
                            >
                                <Play className='w-4 h-4 mr-2' fill='currentColor' />
                                Watch Product Demo
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Animated Live Badge */}
                    <motion.div
                        className="absolute -top-3 -left-3 bg-gradient-to-r from-amber-500 to-teal-400 text-white px-3 py-2 rounded-lg shadow-2xl flex items-center space-x-2 text-sm font-medium border border-amber-300/30"
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span>Live Demo</span>
                        <ExternalLink className='w-3 h-3' />
                    </motion.div>
                </div>
            </motion.div>

            {/* MOBILE: Supporting Role - Decorative Mode */}
            <motion.div
                className='lg:hidden w-full max-w-[200px] mx-auto mt-8 mb-4'
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ 
                    y: 0, 
                    opacity: 0.7, // Reduced opacity for background role
                    scale: 1
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.8,
                }}
            >
                <div className="relative">
                    {/* Simplified Mockup */}
                    <motion.div
                        className='relative w-full rounded-lg shadow-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm'
                    >
                        {/* Optimized Mobile Mockup Image */}
                        <picture>
                            <source 
                                srcSet='/assets/images/hero/mockup-laptop-mobile.avif' 
                                type='image/avif' 
                            />
                            <source 
                                srcSet='/assets/images/hero/mockup-laptop-mobile.webp' 
                                type='image/webp' 
                            />
                            <img 
                                src="/assets/images/hero/mockup-laptop-mobile.jpg" 
                                alt="Ashborne mobile app interface"
                                className='w-full h-auto' 
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>

                        {/* Static Badge - No Hover */}
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-teal-400 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 shadow-lg">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span>Live</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};