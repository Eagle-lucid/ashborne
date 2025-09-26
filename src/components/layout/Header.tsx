// src/components/layout/Header.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    const isScrolled = useScrollEffect(50);
    const activeSection = useActiveSection({
        sectionIds: NAV_ITEMS.map(item => item.href.replace('#', '')).filter(Boolean),
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScrollTo = (href: string) => {
          const element = document.getElementById(href.replace('#', ''));
          element?.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false);
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <motion.header
               className={`header-main fixed top-0 w-full z-50 transition-all duration-500 
                 ${isScrolled 
                     ? 'scrolled h-16 backdrop-blur-md bg-[#FAF9F6]/90 shadow-lg border-b border-amber-200/60'
                     : 'h-20 bg-transparent'
                 }`}
               initial={{ y: -100 }}
               animate={{ y: 0 }}
               transition={{ type: 'spring', stiffness: 300, damping: 30}}
            >
              <div className={`container max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-5'}`}>
                  <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'max-w-4xl mx-auto' : ''}`}>
                      {/* logo */}
                      <motion.a
                        href='#hero'
                        onClick={(e) => { e.preventDefault(); handleScrollTo('#hero'); }}
                        className={`text-2xl font-bold transition-all duration-300 tracking-tight ${isScrolled ? 'opacity-0 scale-90 absolute' 
                                  : ' opacity-100 scale-100 relative'}
                                `}        
                        whileTap={ {scale: 0.95} }
                      >
                        <span className='text-gray-600'>Ash</span>
                        <span className='bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 bg-clip-text text-transparent'
                        >
                            brone
                        </span>
                      </motion.a>

                      {/* Desktop Navigation */}
                      <div className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? 'flex-1 justify-center space-x-12' : 'space-x-10'}`}>
                          <nav className="flex items-center gap-6">
                              {NAV_ITEMS.map((item) => (
                                  <div key={item.href} className='relative'>
                                      <motion.button
                                      onClick={() => handleScrollTo(item.href)}
                                      className={`relative px-3 py-2 font-semibold transition-colors duration-300 ease-out group ${
                                          activeSection === item.href.replace('#', '')
                                          ? 'text-amber-600'
                                          : isScrolled ? 'text-gray-700 hover:text-gray-900'
                                          : 'text-white/90 hover:text-white'
                                      }`}
                                      whileHover={{ y: -2 }}
                                      whileTap={{ y: 0 }}
                                      >
                                            {item.label}
                                            <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-400 to-teal-400 transform transition-all duration-500 ease-out ${
                                              activeSection === item.href.replace('#', '')
                                              ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
                                            }`}/>
                                      </motion.button>
                                  </div>
                              ))}
                          </nav>
                      </div>
                      <div className='hidden md:flex items-center'>
                        <AnimatePresence>
                        {!isScrolled && (
                            <motion.div
                                initial={{ opacity: 1, scale: 1 }}
                                animate={{ opacity: 1, scale: 1}} 
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                               <Button 
                                    onClick={() => handleScrollTo(CTA.href)}
                                    variant='primary'
                                    type='button'
                                    className='relative overflow-hidden bg-gradient-to-r from-amber-400 to-teal-500 text-white shadow-lg hover:shadow-xl
                                                transition-all duration-300 hover:scale-105 min-w[160px]'
                                >
                                    {/* Text transition */}
                                    <span className="relative z-10 transition-all duration-300">
                                        {CTA.label}
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-500 hover:translate-x-full"/>
                               </Button>
                            </motion.div>
                        )}
                      </AnimatePresence>
                      </div>

                      {/* Mobile Menu Button with smooth icon transition */}
                        <motion.button
                            className='md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors duration-300 relative'
                            onClick={toggleMobileMenu}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <AnimatePresence mode='wait'>
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close-icon"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} className={isScrolled ? 'text-gray-600' : 'text-white'} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu-icon"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} className={isScrolled ? 'text-gray-600' : 'text-white'} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
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