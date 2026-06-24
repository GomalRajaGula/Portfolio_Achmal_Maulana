'use client';

import { useSpring, motion } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseGlow() {
  const mouseX = useSpring(0, { stiffness: 60, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // Offset by half the width of the glow
      mouseY.set(e.clientY - 250); // Offset by half the height of the glow
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-20 mix-blend-screen transition-opacity duration-300 md:opacity-30"
      style={{
        x: mouseX,
        y: mouseY,
        width: 500,
        height: 500,
      }}
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,_rgba(168,85,247,0.05)_50%,_transparent_70%)] blur-3xl" />
    </motion.div>
  );
}
