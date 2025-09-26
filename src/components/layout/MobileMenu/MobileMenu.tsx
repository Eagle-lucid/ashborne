// src/components/layout/MobileMenu/MobileMenu.tsx
import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {MobileMenuItem} from './MobileMenuItem';
import {SocialLinks} from './SocialLinks';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: Array<{ label: string; href: string }>;
    activeSection: string;
    onItemClick: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps>= ({
    isOpen,
    onClose,
    navItems,
    activeSection,
    onItemClick,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                 {/* Overlay */}
                 <motion.div
                 className="fixed"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={onClose}
                 />
                 {/* Menu Panel */}
                 <motion.div
                  className="fixed"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  >
                    <div className="flex">
                        <span className="text-xl">Menu</span>
                        <button 
                           onClick={onClose}
                           className="p-2"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="p-6">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <MobileMenuItem
                                  key={item.href}
                                  item={item}
                                  index={index}
                                  isActive={activeSection === item.href.replace('#', '')}
                                  onClick={onItemClick}
                                />
                            ))}
                        </ul>
                    </nav>

                    <div className="absolute">
                        <SocialLinks onItemClick={onItemClick} />
                    </div>
                  </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};