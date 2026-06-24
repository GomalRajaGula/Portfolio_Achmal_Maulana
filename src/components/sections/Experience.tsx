"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import SectionWrapper from '../layout/SectionWrapper';
import Image from 'next/image';
import { Experience as ExperienceType } from '@/types';
import { CheckCircle2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

function ExperienceItem({ exp, setActiveId }: { exp: ExperienceType; setActiveId: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveId(exp.id);
    }
  }, [isInView, exp.id, setActiveId]);

  return (
    <div ref={ref} id={exp.id} className="min-h-[90vh] flex flex-col justify-center py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full"
      >
        <GlassCard 
          className="p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-[#111112]/90 border-white/[0.05] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden" 
          glowColor="transparent"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          
          <div className="flex flex-col gap-10 relative z-10">
            {/* Header */}
            <div className="space-y-5">
              <h3 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.9]">
                {exp.company}
              </h3>
              <p className="text-xl md:text-3xl text-indigo-400 font-bold tracking-tight">
                {exp.role}
              </p>
              <div className="inline-block px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold text-zinc-300 uppercase tracking-[0.2em] mt-2 w-fit">
                {exp.period}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6 mt-4">
              {exp.description.map((desc, i) => (
                <p key={i} className="text-zinc-400 text-base md:text-lg leading-relaxed text-pretty max-w-2xl font-sans">
                  {desc}
                </p>
              ))}
            </div>

            {/* Achievements */}
            {exp.achievements && exp.achievements.length > 0 && (
              <div className="mt-8 space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">Key Achievements</h4>
                <ul className="flex flex-col gap-5">
                  {exp.achievements.map((ach, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5 shadow-[0_0_15px_rgba(99,102,241,0.5)] rounded-full" />
                      <span className="text-zinc-300 font-medium leading-relaxed">{ach}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Gallery Images (Parallax effect) */}
      {exp.gallery && exp.gallery.length > 0 && (
        <div className="absolute -right-8 lg:-right-32 top-1/2 -translate-y-1/2 w-64 md:w-80 h-[120%] pointer-events-none hidden 2xl:block z-0">
          {exp.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900"
              style={{
                top: `${(i + 1) * 25}%`,
                left: i % 2 === 0 ? '0' : '60px',
                width: '280px',
                height: '180px',
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [i % 2 === 0 ? -3 : 3, i % 2 === 0 ? 3 : -3, i % 2 === 0 ? -3 : 3]
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image src={img} alt="Gallery item" fill sizes="280px" className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(experiences[0]?.id || '');
  const { experience: config } = siteConfig;

  return (
    <SectionWrapper id="experience" containerClassName="max-w-[1400px]">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-indigo-500" />
            {config.title}
          </span>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[1]">
            {config.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          
          {/* Left Navigation (Sticky Scroll Spy) */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-[20vh] pr-8">
              <nav className="flex flex-col gap-10 relative py-8">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-white/0 via-white/10 to-white/0" />
                
                {experiences.map((exp) => {
                  const isActive = activeId === exp.id;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => {
                        document.getElementById(exp.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                      className="group flex items-center gap-8 text-left relative z-10 w-full"
                    >
                      {/* Timeline Dot */}
                      <div className={`w-6 h-6 rounded-full border-[3px] flex items-center justify-center shrink-0 transition-all duration-500 ${isActive ? 'bg-indigo-500 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.6)] scale-125' : 'bg-[#09090B] border-white/20 group-hover:border-white/50'}`}>
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? 'bg-white' : 'bg-transparent'}`} />
                      </div>

                      <div className="flex flex-col gap-1">
                        <span className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                          {exp.period}
                        </span>
                        <span className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-white translate-x-2' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                          {exp.company}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Content Stream */}
          <div className="col-span-1 lg:col-span-8 flex flex-col relative z-10 lg:pl-12">
            {experiences.map((exp) => (
              <ExperienceItem 
                key={exp.id} 
                exp={exp} 
                setActiveId={setActiveId} 
              />
            ))}
          </div>
        </div>
    </SectionWrapper>
  );
}
