// src/components/layout/MobileMenu/SocialLinks.tsx
import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Button from '../../ui/Button';

interface SocialLinksProps {
  onItemClick: (href: string) => void;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ onItemClick }) => {
  const socialIcons = [
    { icon: Twitter, href: 'https://twitter.com/ashborne', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/ashborne', label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ashborne', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/ashborne', label: 'Instagram', color: 'hover:text-pink-500'},
  ] as const;

  const containerVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    open: {
      y: 0, opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    closed: { y: 10, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="space-y-6"
    >
      {/* CTA Button */}
      <motion.div variants={itemVariants}>
        <Button
          onClick={() => onItemClick('#consultation')}
          className="w-full relative overflow-hidden bg-gradient-to-r from-amber-400 to-teal-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[160px] py-4 text-lg font-bold rounded-xl"
          type="button"
        >
          <span className="relative z-10">Get Consultation</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-500 hover:translate-x-full" />
        </Button>
      </motion.div>

      {/* Social icons */}
      <motion.div
        className="flex justify-center space-x-3"
        variants={itemVariants}
      >
        {socialIcons.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full bg-gray-100/80 backdrop-blur-sm transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-md`}
              aria-label={`Visit our ${social.label}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
              custom={index}
            >
              <IconComponent size={20} className="text-gray-600 transition-colors duration-300" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center text-gray-500 text-sm pt-1"
        variants={itemVariants}
      >
        © 2025 Ashborne. All rights reserved.
      </motion.div>
    </motion.div>
  );
};