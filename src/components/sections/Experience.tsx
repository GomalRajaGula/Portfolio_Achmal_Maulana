import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { experiences } from '@/data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section id="experience" className="relative py-24 px-6 md:px-8 border-t border-white/[0.04] bg-[#09090B]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
            History
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white md:text-6xl uppercase">
            CAREER & LEADERSHIP
          </h2>
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {experiences.map((exp, index) => {
            const startYear = exp.period.split(' - ')[0];
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative grid gap-8 md:grid-cols-12 items-start"
              >
                {/* Huge Watermark Year Background */}
                <div className="absolute -top-12 left-0 pointer-events-none select-none z-0 hidden md:block">
                  <span className="font-display text-[9rem] font-black leading-none text-white/[0.015] tracking-tighter uppercase">
                    {startYear}
                  </span>
                </div>

                {/* Left side Metadata - 4 columns */}
                <div className="md:col-span-4 relative z-10 pt-2 flex flex-col gap-1 md:pr-8 md:text-right">
                  <span className="flex items-center gap-1.5 md:justify-end text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                  <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest mt-1">
                    {exp.company}
                  </span>
                </div>

                {/* Right side Card - 8 columns */}
                <div className="md:col-span-8 relative z-10">
                  <GlassCard 
                    className="border-white/[0.04] bg-white/[0.01] hover:border-indigo-500/20 transition-all duration-300"
                    glowColor="rgba(99, 102, 241, 0.08)"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                          <Briefcase className="h-4 w-4" />
                        </span>
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">{exp.role}</h3>
                      </div>

                      <ul className="mt-4 list-disc pl-4 space-y-2 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                        {exp.description.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
