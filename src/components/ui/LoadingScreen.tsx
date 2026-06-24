'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isOut, setIsOut] = useState(false);
  const words = ['ACHMAL MAULANA', 'DEVELOPER', 'STUDENT LEADER', 'PROBLEM SOLVER'];

  useEffect(() => {
    // Phase loop (cycling branding words)
    const wordInterval = setInterval(() => {
      setPhase((prev) => (prev + 1) % words.length);
    }, 450);

    // Counter progress
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(wordInterval);
          setIsOut(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 2; // Random increment
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
    };
  }, [words.length]);

  const blinds = 5;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Background Staggered Blinds */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: blinds }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '0%' }}
            animate={isOut ? { y: '-100%' } : { y: '0%' }}
            transition={{
              ease: [0.85, 0, 0.15, 1],
              duration: 1.1,
              delay: i * 0.08,
            }}
            onAnimationComplete={() => {
              if (i === blinds - 1 && isOut) {
                onComplete();
              }
            }}
            className="h-full w-full bg-[#09090B] border-r border-white/[0.01]"
          />
        ))}
      </div>

      {/* Main Loading Content Overlay */}
      <AnimatePresence>
        {!isOut && (
          <motion.div
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className="relative z-10 flex h-full w-full flex-col justify-between p-10 select-none pointer-events-auto"
          >
            <div className="flex w-full justify-between text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
              <span>PORTFOLIO v2.0</span>
              <span>ACHMAL.DEV</span>
            </div>

            <div className="flex flex-col items-center">
              {/* Cycling text */}
              <div className="h-8 overflow-hidden text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={phase}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-xs font-black tracking-[0.25em] text-indigo-400 font-display"
                  >
                    {words[phase]}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Huge Percentage */}
              <h1 className="mt-4 text-8xl font-black tracking-tighter md:text-9xl font-display text-white">
                {count}%
              </h1>
            </div>

            <div className="flex w-full flex-col justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 md:flex-row">
              <span>ACHMAL MAULANA © 2026</span>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500" />
                <span>LOAD STATE IN PROGRESS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
