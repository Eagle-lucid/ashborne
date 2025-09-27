// src/components/layout/MobileMenu/MobileMenu.tsx
import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X } from 'lucide-react';
import { MobileMenuItem } from './MobileMenuItem';
import { SocialLinks } from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: readonly { label: string; href: string }[];
  activeSection: string;
  onItemClick: (href: string) => void;
}

// Overlay animation
const overlayVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

// Panel animation
const panelVariants: Variants = {
  closed: { x: "100%", scale: 0.95, opacity: 0 },
  open: { x: 0, scale: 1, opacity: 1 },
  exit: {
    x: "100%",
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

// Children stagger animation
const listVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {},
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
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
          {/* Glass Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />

          {/* Menu Panel with Glass Morphism */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 md:hidden flex flex-col"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="exit"
            transition={{ type: "tween", duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header with close btn */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200/50">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Navigation
              </span>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100/80 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-600" />
              </motion.button>
            </div>

            {/* Navigation Items */}
            <motion.nav className="p-6 pt-8 flex-1" variants={listVariants}>
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                className="space-y-3"
              >
                {navItems.map((item, index) => (
                  <MobileMenuItem
                    key={item.href}
                    item={item}
                    index={index}
                    isActive={activeSection === item.href.replace("#", "")}
                    onClick={onItemClick}
                  />
                ))}
              </motion.ul>
            </motion.nav>

            {/* Social links & CTA - Fixed Bottom */}
            <div className="p-5 bg-gradient-to-r from-white/60 to-transparent backdrop-blur-sm">
              <SocialLinks onItemClick={onItemClick} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
