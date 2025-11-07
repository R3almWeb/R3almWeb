// src/hooks/useMenuToggle.ts
import { useState, useRef, useEffect } from 'react';

export function useMenuToggle(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Keyboard focus trap for mobile (basic; extend with focus-trap-react if needed)
  useEffect(() => {
    if (isOpen && ref.current) {
      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      firstFocusable?.focus();

      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  return { isOpen, setIsOpen, ref };
}