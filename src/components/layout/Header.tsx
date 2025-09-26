// src/components/layout/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

// Hooks 
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { useActiveSection } from '@/hooks/useActiveSection';

// Components
import Button from '../ui/Button';
import {MobileMenu} from './MobileMenu';

// Navigation Configuration 
const NAV_ITEMS = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
] as const;

const CTA = { label: 'Get Consultation', href: '#consultation'};

export const  Header = () => {
    const isScrolled = useScrollEffect();
    const activeSection = useActiveSection({
        sectionIds: NAV_ITEMS.map(item => item.href.replace('#', '')).filter(Boolean),
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScrollTo = (href: string) => {
          const element = document.getElementById(href.replace('#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
    }

    return (
        <>
            <motion.header
               className={`fixed top-0 w-full z-50 transition-all duration-300 
                 ${isScrolled 
                     ? 'backdrop-blur-md bg-white/70 shadow-md dark:bg-gray-900/70'
                     : 'bg-transparent'
                 }`}
               initial={{ y: -100 }}
               animate={{ y: 0 }}
               transition={{ type: 'spring', stiffness: 300, damping: 30}}
            >
              <div className="container">
                  <div className="flex">
                      {/* logo */}
                      <motion.a
                        href='#hero'
                        onClick={(e) => { e.preventDefault(); handleScrollTo('#top'); }}
                        className='text-2xl'
                        whileHover={{ scale: 1.05 }}
                        whileTap={ {scale: 0.95} }
                      >
                         <span>Ash</span>
                         <span>brone</span>
                      </motion.a>

                      {/* Desktop Navigation */}
                      <nav className='hidden'>
                          <ul className="flex">
                              {NAV_ITEMS.map((item) => (
                                  <li key={item.href}>
                                      <motion.button
                                      onClick={() => handleScrollTo(item.href)}
                                      className={`relative ${
                                          activeSection === item.href.replace('#', '')
                                          ? 'text-blue-400'
                                          : 'text-white/80 hover:text-white'
                                      }`}
                                      whileHover={{ y: -2 }}
                                      whileTap={{ y: 0 }}
                                      >
                                            {item.label}
                                            <span className={`absolute ${
                                              activeSection === item.href.replace('#', '')
                                              ? 'w-full' : ''
                                            }`}/>
                                      </motion.button>
                                  </li>
                              ))}
                          </ul>

                          <Button onClick={() => handleScrollTo(CTA.href)}
                              variant='primary'
                              >
                                 {CTA.label}
                          </Button>
                      </nav>

                      {/* Mobile Menu BTN */}
                      <motion.button
                      className='md:hidden'
                      onClick={() => setIsMobileMenuOpen(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label='Open navigation menu'
                      >
                         <Menu size={24} />
                      </motion.button>
                  </div>
              </div>
            </motion.header>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navItems={NAV_ITEMS}
            activeSection={activeSection}
            onItemClick={handleScrollTo}
        />
        </>
    );
};