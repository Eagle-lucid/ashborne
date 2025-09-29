// src/sections/Hero/Hero.tsx
import { useRef, useEffect, useState } from 'react';
import { HeroContent, HeroShapes, HeroMockup } from './';

export interface HeroProps {
    className?: string;
}

export const Hero = ({ className = '' }: HeroProps) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section
      id='hero'
      ref={sectionRef}
      className={`relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 md:pt-24 lg:pt-0 overflow-hidden ${className}`}
      role='region'
      aria-labelledby='hero-heading'
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <picture>
          <source srcSet='/assets/images/hero/hero-bg.avif' type='image/avif' />
          <source srcSet='/assets/images/hero/hero-bg.webp' type='image/webp' />
          <img 
            src="/assets/images/hero/hero-bg.jpg" 
            alt="" 
            className='w-full h-full object-cover object-center' 
            loading='eager' 
            decoding='async'
          />
        </picture>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent -z-5" />
      
      {/* Abstract Shapes */}
      <HeroShapes reducedMotion={reducedMotion} />
      
      {/* Mockup - Now properly positioned for two-column layout */}
      <HeroMockup reducedMotion={reducedMotion} />
      
      {/* Content */}
      <HeroContent reducedMotion={reducedMotion} />
    </section>
  );
};