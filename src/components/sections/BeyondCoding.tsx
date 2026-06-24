'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import SectionWrapper from '../layout/SectionWrapper';
import LeadershipCard from '../cards/LeadershipCard';
import EventManagementCard from '../cards/EventManagementCard';
import CollaborationCard from '../cards/CollaborationCard';
import ProblemSolvingCard from '../cards/ProblemSolvingCard';
import { PublicSpeakingCard, EntrepreneurshipCard } from '../cards/MiniBentoCards';

export default function BeyondCoding() {
  const [terminalText, setTerminalText] = useState('npm run dev');

  // Static deterministic constellation points for Team Collaboration
  const dots = Array.from({ length: 8 }).map((_, i) => ({
    x: ((i * 37) % 80) + 10,
    y: ((i * 53) % 80) + 10,
  }));

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

  const { beyondCoding: config } = siteConfig;

  return (
    <SectionWrapper id="beyond-coding">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
              {config.title}
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl uppercase">
              {config.subtitle}
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
            {config.description}
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
          <LeadershipCard itemVariants={itemVariants} />
          <EventManagementCard itemVariants={itemVariants} />
          <PublicSpeakingCard itemVariants={itemVariants} />
          <EntrepreneurshipCard itemVariants={itemVariants} />
          <CollaborationCard itemVariants={itemVariants} dots={dots} />
          <ProblemSolvingCard itemVariants={itemVariants} terminalText={terminalText} />
        </motion.div>
    </SectionWrapper>
  );
}
