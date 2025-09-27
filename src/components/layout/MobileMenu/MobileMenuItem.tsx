// src/components/MobileMenu/MobileMenuItem.tsx
import React from "react";
import { motion, type Variants } from 'framer-motion';

interface MobileMenuItemProps {
    item: { label: string; href: string };
    index: number;
    isActive: boolean;
    onClick: (href: string) => void;
}
export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
    item, 
    index, 
    isActive,
    onClick,
}) => {
    const itemVariants: Variants = {
        closed: { x: 60, opacity: 0, scale: 0.9 },
        open: { 
            x: 0, opacity: 1,
            scale: 1, transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24,
                delay: index * 0.08
            }
        }
    };
    return (
        <motion.li
        variants={itemVariants}
          className="list-none"
        >
            <motion.button
              onClick={() => onClick(item.href)}
              className={`w-full text-left  px-4 py-3 rounded-xl transition-all duration-300 font-semibold group relative overflow-hidden 
                        ${isActive ? 'bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 border-l-4 border-amber-400' : 'text-gray-700 hover:bg-gray-50/100'
                        }`}
                        whileHover={{
                            x: 8, scale: 1.02,
                            transition: { type: 'spring', stiffness: 400, damping: 25 }
                        }}
                        whileTap={{ scale: 0.98 }}
              >
                {/* Animated underline matching header */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-teal-400 transform transition-all duration-500 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
                }`}/>
                {/* Item label with subtle glow when active */}
                <span className={`relative z-10 transition-all duration-300 ${
                    isActive ? 'drop-shadow-sm' : ''
                }`}>
                    {item.label}
                </span>

                {/* Active indicator dot */}
                {isActive && (
                    <motion.span 
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                    />
                )}
            </motion.button>
        </motion.li>
    );
};