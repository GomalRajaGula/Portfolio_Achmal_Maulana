import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Calendar, MessageSquare, TrendingUp, Users, Brain, Code } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

export default function BeyondCoding() {
  const [terminalText, setTerminalText] = useState('npm run dev');
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);

  // Simulated code compiler typing loop
  useEffect(() => {
    const lines = [
      'npm run dev',
      'ready - started server on port 3000',
      'const resolve = (bug) => fix(bug);',
      'compiling...',
      'compiled successfully! [0ms errors]',
      'deploying to vercel production...',
      'production live 🚀',
    ];
    let currentLineIdx = 0;
    
    const interval = setInterval(() => {
      currentLineIdx = (currentLineIdx + 1) % lines.length;
      setTerminalText(lines[currentLineIdx]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Floating dots constellation background for Team Collaboration
  useEffect(() => {
    const coords = Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setDots(coords);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 16 },
    },
  } as const;

  return (
    <section id="beyond-coding" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#09090B]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
              My Core DNA
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl uppercase">
              BEYOND CODING
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
            A visual overview of my operational capabilities, leadership styles, and collaborative values in community organization.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Leadership - 2 cols, 2 rows */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 h-[424px]">
            <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Shield className="h-6 w-6 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
                  [ORGANIZATION FOCUS]
                </span>
              </div>
              
              {/* Central connecting hub graphic */}
              <div className="relative h-24 my-6 flex items-center justify-center overflow-hidden">
                <div className="absolute h-10 w-10 rounded-full border border-indigo-500 bg-indigo-950/20 flex items-center justify-center z-10 animate-pulse">
                  <span className="text-[8px] font-bold text-white">HUB</span>
                </div>
                {/* Branching floating nodes */}
                {Array.from({ length: 4 }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      y: [0, -10, 10, 0],
                      x: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4 + idx,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      left: `${25 + idx * 15}%`,
                      top: idx % 2 === 0 ? '10%' : '70%',
                    }}
                    className="h-6 w-6 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[7px] text-zinc-500 font-bold"
                  >
                    N{idx + 1}
                  </motion.div>
                ))}
                {/* Connecting SVG lines */}
                <svg className="absolute inset-0 h-full w-full stroke-white/5 stroke-1" fill="none">
                  <line x1="50%" y1="50%" x2="25%" y2="20%" />
                  <line x1="50%" y1="50%" x2="40%" y2="80%" />
                  <line x1="50%" y1="50%" x2="55%" y2="15%" />
                  <line x1="50%" y1="50%" x2="70%" y2="75%" />
                </svg>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                  Leadership
                </h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                  Guiding student developer squads, organizing community meetups, and hosting workshops to help colleagues grow technically.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: Event Management - 1 col, 2 rows */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 h-[424px]">
            <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
                  [LOGISTICS]
                </span>
              </div>

              {/* JKB Fest mini schedule widget */}
              <div className="my-6 space-y-2 border border-white/[0.04] rounded-lg bg-black/20 p-3 text-[10px] tracking-wider uppercase font-bold text-zinc-400">
                <div className="flex justify-between border-b border-white/[0.04] pb-1.5 text-zinc-600">
                  <span>Task Timeline</span>
                  <span>State</span>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Tenant Maps Setup</span>
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 text-[8px] text-emerald-400">Done</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Vendor Coordination</span>
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 text-[8px] text-emerald-400">Done</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Stage Flow Run</span>
                  <span className="rounded bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 text-[8px] text-indigo-400">Active</span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Event Management
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                  Coordinating stage scheduling, tenant locations, security protocols, and vendor registries for local events like JKB Fest.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Public Speaking - 1 col, 1 row */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-[200px]">
            <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                  <MessageSquare className="h-5 w-5 text-indigo-400" />
                </div>
                {/* Audio soundbar animation */}
                <div className="flex items-end gap-1 h-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [6, Math.random() * 24, 6],
                      }}
                      transition={{
                        duration: 0.8 + i * 0.1,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="w-1 rounded-full bg-indigo-500"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
                  Public Speaking
                </h3>
                <p className="mt-1 text-[11px] text-zinc-400 leading-normal font-sans">
                  Presenting technical solutions, pitches, and hosting university development workshops.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4: Entrepreneurship - 1 col, 1 row */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-[200px]">
            <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                  <TrendingUp className="h-5 w-5 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
                  +100% SUCCESS
                </span>
              </div>

              <div className="mt-4">
                <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
                  Entrepreneurship
                </h3>
                <p className="mt-1 text-[11px] text-zinc-400 leading-normal font-sans">
                  Adapting logistics under pressure and managing micro-ventures with performance metrics.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 5: Team Collaboration - 1 col, 2 rows */}
          <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 h-[424px]">
            <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
                  [VALUES]
                </span>
              </div>

              {/* Constellation graphic background */}
              <div className="relative h-28 my-6 rounded border border-white/[0.03] bg-black/10 overflow-hidden">
                {dots.map((dot, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, (i % 2 === 0 ? 5 : -5), 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      left: `${dot.x}%`,
                      top: `${dot.y}%`,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-indigo-400/50"
                  />
                ))}
              </div>

              <div>
                <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                  Collaboration
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
                  Working with cross-functional designer, developer, and tenant logistics squads to execute releases and meet organizational objectives.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 6: Problem Solving - 2 cols, 1 row */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 h-[200px]">
            <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
                  <Brain className="h-5 w-5 text-indigo-400" />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
                  <Code className="h-3.5 w-3.5" />
                  <span>Interactive Terminal</span>
                </div>
              </div>

              {/* Typings console widget */}
              <div className="my-3 font-mono text-[10px] text-emerald-400 bg-black/40 border border-white/[0.04] p-3 rounded-lg overflow-x-auto select-none">
                <span className="text-zinc-600 mr-2">$</span>
                <span>{terminalText}</span>
                <span className="inline-block w-1.5 h-3 bg-emerald-400 ml-1.5 animate-pulse" />
              </div>

              <div>
                <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
                  Problem Solving
                </h3>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
