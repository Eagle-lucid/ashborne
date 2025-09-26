// src/components/MobileMenu/MobileMenuItem.tsx
import React from "react";
import { motion } from 'framer-motion';

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
    return (
        <motion.li
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
            <button
              onClick={() => onClick(item.href)}
              className={`w-full ${isActive ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}
              >
                {item.label}
            </button>
        </motion.li>
    );
};