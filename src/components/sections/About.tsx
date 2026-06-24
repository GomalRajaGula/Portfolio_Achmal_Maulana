'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Trophy, Users, Terminal as TerminalIcon } from 'lucide-react';
import { siteConfig } from '@/data/site';
import SectionWrapper from '../layout/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GithubWidget from '../ui/GithubWidget';

export default function About() {
  const { about: config } = siteConfig;

  const highlights = [
    {
      icon: <BookOpen className="h-4 w-4 text-indigo-400" />,
      title: 'SE Student',
      description: 'Studying Software Engineering at Politeknik Negeri Cilacap.',
    },
    {
      icon: <Code className="h-4 w-4 text-indigo-400" />,
      title: 'Full Stack',
      description: 'Engineering Next.js, React, Node.js, and Laravel.',
    },
    {
      icon: <Users className="h-4 w-4 text-indigo-400" />,
      title: 'Leadership',
      description: 'HMTRPL coordinator planning technical growth.',
    },
    {
      icon: <Trophy className="h-4 w-4 text-indigo-400" />,
      title: 'Events',
      description: 'Organizing tenant flows and stages at JKB Fest.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  } as const;

  return (
    <SectionWrapper 
      id="about"
      title={config.title}
      subtitle={config.subtitle}
    >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Left Column: Editorial Heading and Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6">
            <div>
              <motion.span variants={itemVariants} className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
                Background
              </motion.span>
              <motion.h2 variants={itemVariants} className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl uppercase">
                ENGINEERING
                <br />
                WITH <span className="text-gradient">COMMUNITY</span>
              </motion.h2>
            </div>
            
            <motion.p variants={itemVariants} className="text-sm md:text-base leading-relaxed text-zinc-400 font-sans">
              I am a Software Engineering student at Politeknik Negeri Cilacap who merges full-stack engineering with student community leadership and logistics management. My development work centers on building performance-optimized digital applications that simplify administration and event coordination.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-sm md:text-base leading-relaxed text-zinc-400 font-sans">
              I believe software is most effective when it solves real-world operational problems. By active coordination inside student guilds and organizing regional events like JKB Fest, I leverage engineering to support and build active local tech ecosystems.
            </motion.p>
          </div>

          {/* Right Column: Terminal frame & widget */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Highlights Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <GlassCard className="h-full border-white/[0.04] bg-white/[0.01] hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex flex-col gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10">
                        {h.icon}
                      </div>
                      <h3 className="text-xs font-bold text-white uppercase tracking-widest">{h.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{h.description}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* GitHub Widget wrapped in a Premium Mock Terminal */}
            <motion.div variants={itemVariants} className="overflow-hidden rounded-xl border border-white/[0.05] bg-black/40">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/[0.05] bg-white/[0.02] px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                  <span className="h-2 w-2 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-1">
                  <TerminalIcon className="h-3 w-3 text-indigo-400" />
                  <span>bash - github_tracker</span>
                </div>
                <span className="text-[9px]">v2.1</span>
              </div>
              
              <div className="p-4">
                <GithubWidget />
              </div>
            </motion.div>
          </div>
        </motion.div>
    </SectionWrapper>
  );
}
