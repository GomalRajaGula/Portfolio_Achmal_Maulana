'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import SectionWrapper from '../layout/SectionWrapper';
import GlassCard from '../ui/GlassCard';

export default function Skills() {
  const { skills: config } = siteConfig;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 18,
      },
    },
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      scale: 1.08,
      borderColor: 'rgba(99, 102, 241, 0.4)',
      color: '#FFFFFF',
      boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)',
      transition: { duration: 0.2 },
    },
  } as const;

  return (
    <SectionWrapper id="skills">
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="lg:max-w-xl">
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

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={categoryVariants}>
              <GlassCard 
                className="h-full border-white/[0.04] bg-white/[0.01] hover:border-indigo-500/10 transition-all duration-300 p-8"
                glowColor="rgba(99, 102, 241, 0.05)"
              >
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-4">
                  <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
                    {group.category}
                  </h3>
                  <span className="text-[9px] font-bold text-zinc-600 tracking-wider">
                    [{group.items.length} TOOLS]
                  </span>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill}
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.4}
                      variants={badgeVariants}
                      whileHover="hover"
                      className="rounded-lg border border-white/[0.05] bg-white/[0.02] px-4 py-2.5 text-xs font-bold text-zinc-300 transition-colors uppercase tracking-widest cursor-grab active:cursor-grabbing select-none"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
    </SectionWrapper>
  );
}
