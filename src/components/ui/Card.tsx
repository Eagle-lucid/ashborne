// src/components/ui/Card.tsx
import React from 'react';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

interface CardProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps>= ({
    children, className = '',
    hover = false,
    // Framer Motion props  
    whileHover,
    whileTap,
    initial,
    animate,
    exit,
    transition,
    ...motionProps
}) => { 
    // Default motion animations if none provided
    const defaultWhileHover = whileHover || (hover ? { y: -8, transition: {duration: 0.2}, scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" } : undefined);
    const defaultWhileTap = whileTap || (hover ? { y: 0, scale: 0.98, boxShadow: "0 5px 10px rgba(0,0,0,0.1)" } : undefined);

    return (
        <motion.div
            className={`
                glass rounded-xl p-6 shadow-soft
                ${className}
                ${hover ? 'cursor-pointer' : ''}
            `}
            whileHover={defaultWhileHover}
            whileTap={defaultWhileTap}
            initial={initial || { opacity: 0, y: 20 }}
            animate={animate || { opacity: 1, y: 0 }}
            exit={exit || { opacity: 0, y: 20 }}
            transition={transition || { duration: 0.3, ease: "easeInOut" }}
            {...motionProps}
        >
            {children}
        </motion.div>
    );
};

// Card Subcomponents for structured layouts
interface CardHeaderProps {
    children: React.ReactNode; 
    className?: string;  
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
    return (
        <div className={`mb-4 ${className}`}>
            {children}
        </div>
    );
};

interface CardContentProps {
    children: React.ReactNode; 
    className?: string;  
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

interface CardFooterProps {
    children: React.ReactNode; 
    className?: string;  
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
    return (
        <div className={`mt-6 pt-4 border-t border-white/10 ${className}`}>
            {children}
        </div>
    );
};

export { Card, CardHeader, CardContent, CardFooter };
export default Card;