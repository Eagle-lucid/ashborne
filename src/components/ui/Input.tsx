// src/components/ui/Input.tsx
import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { motion } from 'framer-motion';

// Input component props
interface InputProps {
    label?: string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
    icon?: React.ElementType;
    // React Hook Form integration
    registration?: UseFormRegisterReturn;
    // Motion
    animateError?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    type = 'text',
    placeholder = '',
    className = '',
    disabled = false,
    error,
    required = false,
    icon: Icon,
    registration,
    animateError = true
}) => {
    const InputElement = type === 'textarea' ? 'textarea' : 'input';

    return (
        <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {label && (
                <motion.label 
                    className="block text-sm font-medium text-dark mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    {label}
                    {required && <span className="text-accent ml-1">*</span>}
                </motion.label>
            )}

            <div className='relative'>
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-accent" />

                    </div>
                )}
                <motion.div 
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                >
                    <InputElement
                    type='{type}'
                    placeholder='{placeholder}'
                    disabled={disabled}
                    required={required}
                    className={`
                        w-full glass border rounded-lg px-3 py-2 pl-${Icon ? '10' : '4'} transition-all duration-300
                        ${error ? 'border-red-500' : 'border-transparent'}
                        ${Icon ? 'pl-10' : ''}
                        ${type === 'textarea' ? 'h-32 resize-y' : 'h-10'}
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'focus:border-accent focus:ring-2 focus:ring-accent'}
                        ${className}
                    `}
                    {...registration}
                    />
                    </motion.div>
            </div>
            {error && (
                <motion.p
                className='mt-2 text-sm text-red-600'
                initial={animateError ? { opacity: 0, y: -5 } : {}}
                animate={animateError ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3 }}
                >
                    {error}
                </motion.p>
            )}
        </motion.div>
    );
}

export { Input }