//   useScrollEffect.ts - PSEUDO-CODE OUTLINE
import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useScrollEffect
 * Returns a boolean `isScrolled` indicating whether the page has been
 * scrolled past the provided theshold.
 * 
 * @param threshold Number of pixels to scroll before `isScrolled` becomes true.
 * @returns { isScrolled: boolean }
 */

export const useScrollEffect = (threshold = 10): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Ref to store the throttle timeout ID
    const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

    // throttled scroll handler
    const handleScroll = useCallback(() => {
        if (throttleTimeout.current === null) {
            throttleTimeout.current = setTimeout(() => {
                const scrolled = window.scrollY > threshold;
                setIsScrolled(scrolled);
                throttleTimeout.current = null;
            }, 100); // Throttle interval in ms
        }
    }, [threshold]);

    useEffect(() => {
        setIsScrolled(window.scrollY > threshold); // Initial check
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (throttleTimeout.current) {
                clearTimeout(throttleTimeout.current);
                throttleTimeout.current = null;
            }
        };
    }, [handleScroll, threshold]);

    return isScrolled;
}