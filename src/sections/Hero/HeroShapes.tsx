// src/sections/Hero/HeroShapes.tsx
import { motion } from 'framer-motion';
import type { ReactElement } from 'react';

interface HeroShapesProps {
    reducedMotion: boolean;
}

export const HeroShapes = ({ reducedMotion }: HeroShapesProps): ReactElement  => {
    const blobVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: (custom: { delay: number; reducedMotion: boolean })  => ({
            opacity: custom.reducedMotion ? 0.4 : 0.6,
            scale: 1,
            y: custom.reducedMotion ? 0 : [custom.delay * -5, custom.delay * 5, custom.delay * -5],
            x: custom.reducedMotion ? 0 : [custom.delay * -3, custom.delay * 3, custom.delay * -3],
            transition: {
                duration: custom.reducedMotion ? 0 : 6 + custom.delay * 2,
                repeat: custom.reducedMotion ? 0 : Infinity,
                ease: 'easeInOut' as const,
                delay: custom.delay
            }
        })
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Animated Blobs */}
            <motion.div
                custom={{ delay: 0, reducedMotion }}
                variants={blobVariants}
                initial='initial'
                animate='animate'
                className='absolute right-10 top-20 w-80 h-80 rounded-full bg-gradient-to-r from-amber-400/40 to-teal-400/30 filter blur-[60px]'
                aria-hidden='true' 
            />

            <motion.div
                custom={{ delay: 1, reducedMotion }}
                variants={blobVariants}
                initial='initial'
                animate='animate'
                className='absolute left-10 bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-teal-400/30 to-amber-400/20 filter blur-[50px]'
                aria-hidden='true' 
                />

            <motion.div
                custom={{ delay: 2, reducedMotion }}
                variants={blobVariants}
                initial="initial"
                animate="animate"
                className="absolute left-1/4 top-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-amber-400/25 to-teal-400/20 filter blur-[40px]"
                aria-hidden="true"
            />

            <motion.div
                custom={{ delay: 0.5, reducedMotion }}
                variants={blobVariants}
                initial="initial"
                animate="animate"
                className="absolute right-1/3 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-teal-400/25 to-amber-400/15 filter blur-[30px]"
                aria-hidden="true"
            />

            {/* Grid Pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.02 }}
                transition={{ duration: 1.5 }}
                className='absolute inset-0 bg-[length:80px_80px] bg-repeat'
                style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    color: reducedMotion ? '#ddd' : '#fff'
                }}
                aria-hidden='true'
            />
        </div>
    );
};