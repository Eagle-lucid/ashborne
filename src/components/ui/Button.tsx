// src/components/ui/Button.tsx
import React from 'react';
import type { MotionProps } from 'framer-motion';
import { motion } from 'framer-motion';

// Combine our custom props with motion props
interface ButtonProps extends MotionProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'link';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ElementType; 
    iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    type = 'button',
    className = '',
    disabled = false,
    loading = false,
    icon: Icon,
    iconPosition = 'left',
    // Framer Motion props
    whileHover,
    whileTap,
    initial,
    animate,
    exit,
    transition,
    ...motionProps
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-accent text-primary hover:bg-accent/90 focus:ring-accent',
        secondary: 'bg-secondary text-dark hover:bg-secondary/80 focus:ring-secondary',
        ghost: 'bg-transparent text-dark hover:bg-primary/50 focus:ring-accent',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600',
        link: 'bg-transparent text-blue-600 underline hover:text-blue-800 focus:ring-blue-600'
    };
    const sizes = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    // Default motion animations if none provided
    const defaultWhileHover = whileHover || { scale: 1.05 };
    const defaultWhileTap = whileTap || { scale: 0.95 };

    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            whileHover={defaultWhileHover}
            whileTap={defaultWhileTap}
            initial={initial || { opacity: 0, y: 20 }}
            animate={animate || { opacity: 1, y: 0 }}
            exit={exit} 
            transition={transition || { duration: 0.2 }}
            {...motionProps}
        >
            {loading && (
                <motion.svg
                     animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mr-2 h-4 w-4"
          fill="none" 
          viewBox="0 0 24 24"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </motion.svg>
            )}
            {Icon && iconPosition === 'left' && !loading && <Icon className="mr-2 h-5 w-5" />}
            {children}
            {Icon && iconPosition === 'right' && !loading && <Icon className="ml-2 h-5 w-5" />}
        </motion.button>
    );
}
export default Button;