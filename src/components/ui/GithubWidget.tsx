'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export default function GithubWidget() {
  // Generate random data for a 7x24 grid (columns for space-saving design)
  const columns = 24;
  const rows = 7;

  const contributionLevels = [
    'bg-zinc-900 border-zinc-800',
    'bg-indigo-950/40 border-indigo-900/30',
    'bg-indigo-900/60 border-indigo-800/40',
    'bg-indigo-700/80 border-indigo-600/50',
    'bg-indigo-500 border-indigo-400',
  ];

  // Deterministic random contribution level
  const getLevel = (index: number) => {
    const hash = (index * 9301 + 49297) % 233280;
    const rand = hash / 233280;
    if (rand < 0.5) return 0;
    if (rand < 0.75) return 1;
    if (rand < 0.88) return 2;
    if (rand < 0.95) return 3;
    return 4;
  };

  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.01] p-4 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4 text-zinc-400" />
          <span className="text-xs font-bold text-zinc-300">GITHUB CONTRIBUTION ACTIVE</span>
        </div>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 hover:text-white transition-colors"
        >
          <span>VIEW PROFILE</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="grid grid-flow-col gap-1 overflow-x-auto pb-2 scrollbar-none">
          {Array.from({ length: columns }).map((_, colIdx) => (
            <div key={colIdx} className="grid grid-rows-7 gap-1">
              {Array.from({ length: rows }).map((_, rowIdx) => {
                const index = colIdx * rows + rowIdx;
                const level = getLevel(index);
                return (
                  <motion.div
                    key={rowIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: (index % 10) * 0.02,
                      duration: 0.3,
                    }}
                    className={`h-2 w-2 rounded-xs border ${contributionLevels[level]}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-wider text-zinc-500">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-xs border border-zinc-800 bg-zinc-900" />
            <div className="h-2 w-2 rounded-xs border border-indigo-900/30 bg-indigo-950/40" />
            <div className="h-2 w-2 rounded-xs border border-indigo-800/40 bg-indigo-900/60" />
            <div className="h-2 w-2 rounded-xs border border-indigo-600/50 bg-indigo-700/80" />
            <div className="h-2 w-2 rounded-xs border border-indigo-400 bg-indigo-500" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
