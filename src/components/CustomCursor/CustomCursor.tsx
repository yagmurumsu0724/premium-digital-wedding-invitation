import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery, usePrefersReducedMotion } from '../../hooks/useMediaQuery';

export const CustomCursor: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const prefersReducedMotion = usePrefersReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isDesktop, prefersReducedMotion]);

  if (!isDesktop || prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[var(--olive)]/35"
      animate={{
        x: mousePosition.x - (isHovered ? 20 : 12),
        y: mousePosition.y - (isHovered ? 20 : 12),
        width: isHovered ? 40 : 24,
        height: isHovered ? 40 : 24,
        backgroundColor: isHovered ? 'rgba(125, 135, 109, 0.15)' : 'rgba(105, 112, 82, 0.05)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.2 }}
    />
  );
};
