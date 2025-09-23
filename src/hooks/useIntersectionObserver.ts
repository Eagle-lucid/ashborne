// useIntersectionObserver.ts
import {useEffect, useState, useRef, useMemo} from 'react';
import type { RefObject } from 'react';

interface UseIntersectionObserverProps {
    threshold?: number | number[];
    rootMargin?: string;
    root?: Element | null;
    freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    { 
        threshold = 0,
        rootMargin = '0px',
        root = null,
        freezeOnceVisible = false,
    }: UseIntersectionObserverProps = {}
): { isIntersecting: boolean; entry: IntersectionObserverEntry | null } => {
    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const isIntersecting = entry?.isIntersecting ?? false;
    const shouldFreeze = freezeOnceVisible && isIntersecting;

    const options = useMemo(
        () => ({ threshold, rootMargin, root }),
        [threshold, rootMargin, root]
    );

    useEffect(() => {
        const element = elementRef.current;
        if (!element || shouldFreeze) return;
        if (typeof IntersectionObserver === 'undefined') return;

        // Disconnect old observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(([newEntry]) => {
            setEntry(newEntry);

            if (freezeOnceVisible && newEntry.isIntersecting && observerRef.current) {
                observerRef.current.disconnect();
            }
        }, options);

        observerRef.current.observe(element);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [elementRef, options, freezeOnceVisible, shouldFreeze]);

    return { isIntersecting, entry };
}