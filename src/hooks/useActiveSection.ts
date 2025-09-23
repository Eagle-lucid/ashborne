import { useEffect, useState, useRef, useCallback } from 'react';

interface UseActiveSectionProps {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number | number[];
  onActiveChange?: (id: string) => void;
}

export const useActiveSection = ({
  sectionIds,
  rootMargin = '-10% 0px -80% 0px', // triggers when section is in top 20% of viewport
  threshold = [0, 0.1, 0.25, 0.5, 0.75, 1],
  onActiveChange,
}: UseActiveSectionProps): string => {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || '');
  const activeRef = useRef(activeSection);

  // keep ref synced with state
  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  // stable callback for updating section
  const handleActiveChange = useCallback(
    (section: string) => {
      if (section && section !== activeRef.current) {
        activeRef.current = section;
        setActiveSection(section);
        onActiveChange?.(section);
      }
    },
    [onActiveChange] //
  );

  useEffect(() => {
    if (sectionIds.length === 0) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const elements: Map<string, Element> = new Map();
    const visibility: Map<string, number> = new Map();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        elements.set(id, element);
        visibility.set(id, 0);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          visibility.set(id, entry.intersectionRatio);
        });

        // Find the most visible section
        let maxRatio = 0;
        let mostVisibleSection = activeRef.current;

        visibility.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        if (mostVisibleSection !== activeRef.current) {
          handleActiveChange(mostVisibleSection);
        }
      },
      { rootMargin, threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold, handleActiveChange]); 

  return activeSection;
};
