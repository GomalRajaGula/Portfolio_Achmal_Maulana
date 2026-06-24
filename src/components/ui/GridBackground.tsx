'use client';

import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* Floating Gradient Blobs */}
      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-[20%] left-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
