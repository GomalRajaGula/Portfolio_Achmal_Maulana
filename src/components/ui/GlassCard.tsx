'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(99, 102, 241, 0.15)', // Indigo glow
  onClick,
}: GlassCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/50',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Internal Content (positioned relatively to sit above background glow) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
