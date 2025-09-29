// src/sections/Hero/HeroContext.tsx
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import type { ReactElement } from "react";

// Animation variants  
const heroContent = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94] as const
        }
    }
};

const staggerContainer = {
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

interface HeroContentProps {
    reducedMotion: boolean;
}

export const HeroContent = ({ reducedMotion }: HeroContentProps): ReactElement => {
     const handleCTAClick = (target: string) => {
        if (target === 'consultation') {
            console.log('Open consultation modal');
        } else if (target === 'services') {
            const servicesSection = document.getElementById('services');
            servicesSection?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
        className="w-full max-w-7xl px-4 sm:px-6 relative z-10"
        variants={staggerContainer}
        initial='hidden'
        animate='show'
        >
         {/* Two-Column Layout */}
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left lg:max-w-[50%]">
                {/* Eyebrow */}
            <motion.div
               variants={heroContent}
               className="mb-4 lg:mb-6"
            >
                <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm font-medium text-amber-300 bg-amber-400/10 rounded-full backdrop-blur-sm border border-amber-400/20">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Ashborne — Empowering innovation
                </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
                variants={heroContent}
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-teal-300 to-amber-400"
            >
                Build digital products that scale with insight & precision
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={heroContent}
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-100 leading-relaxed"
            >
                 We transform companies through strategy, digital engineering, and AI — from idea to enterprise-level impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
            variants={heroContent}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
                <motion.button
                   className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-amber-500 to-teal-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group min-h-[44px] text-sm sm:text-base max-w-[220px] sm:max-w-none"
                   onClick={() => handleCTAClick('consultation')}
                   whileHover={{ scale: reducedMotion ? 1 : 1.03 }}
                   whileTap={{ scale: 0.98 }}
                   transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                    <span className="relative z-10 flex items-center">
                        Get Consultation
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>     
                    </span>
                </motion.button>

                <motion.button
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 text-white font-semibold bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-h-[44px] text-sm sm:text-base max-w-[220px] sm:max-w-none"
                    onClick={() => handleCTAClick('services')}
                    whileHover={{ scale: reducedMotion ? 1 : 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
            </motion.div>
            </div>
            {/* Right Column: Mockup Space (50% width on desktop) */}
            <div className="hidden lg:block flex-1 max-w-[50%]" />
         </div>

         {/* Scroll Indicator - Mobile Only */}
         <motion.div
            className="lg:hidden mt-8 flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
         >
            <span className="sr-only text-xs text-slate-300">Scroll to explore</span>
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
            >
                <ArrowDown className="w-2.5 h-2.5 text-white/50 mt-1.5" />
            </motion.div>
         </motion.div>
        </motion.div>
    );
};