import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import SectionWrapper from '../layout/SectionWrapper';
import { projects } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import Image from 'next/image';
import { Project } from '@/types';

function ProjectCard({ project, i, total }: { project: Project; i: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll position of this specific card's placeholder
  const { scrollYProgress } = useScroll({
    target: cardRef,
    // Start tracking when the top of the card hits the sticky point (10vh)
    // Stop tracking when it has scrolled out of view by about 1 viewport height
    offset: ["start 10vh", "start -100vh"]
  });

  // Calculate dynamic target scale. Last card doesn't scale.
  // The cards further back scale down more.
  const targetScale = 1 - ((total - i) * 0.04);
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  // Fade out slightly as cards get pushed to the back
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div
      ref={cardRef}
      className="sticky top-[10vh] w-full"
      style={{
        // Add padding to create the stacked visual offset
        paddingTop: `${i * 2}vh`,
      }}
    >
      <motion.div 
        style={{ scale, opacity, transformOrigin: "top" }} 
        className="w-full"
      >
        <GlassCard 
          className="group relative w-full h-auto lg:h-[80vh] min-h-[600px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col lg:flex-row bg-[#0D0D0E]"
          glowColor="transparent"
        >
          {/* Content Section - 30% */}
          <div className="w-full lg:w-[30%] flex flex-col justify-between p-8 md:p-10 lg:p-12 z-20 bg-black/40 backdrop-blur-3xl border-r border-white/[0.04] shrink-0">
            <div className="flex flex-col gap-8">
              <span className="font-display text-[5rem] lg:text-[7rem] font-black text-white/5 select-none tracking-tighter leading-none -ml-1">
                0{i + 1}
              </span>
              
              <div className="space-y-5">
                <h3 className="font-display text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1]">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-[1.8] text-pretty">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(tech => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-300">
                    {tech}
                  </span>
                ))}
              </div>

              {project.metrics && (
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/[0.06] mt-2">
                  {project.metrics.map(metric => (
                    <div key={metric.label} className="flex flex-col gap-1.5">
                      <span className="text-white text-3xl font-display font-bold tracking-tight">{metric.value}</span>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 pt-12 mt-auto">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 h-14 rounded-full bg-white text-black flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all shadow-xl">
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="h-14 w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:scale-[1.02] active:scale-95 transition-all shrink-0 shadow-xl">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Image Section - 70% */}
          <div className="w-full lg:w-[70%] relative min-h-[400px] lg:min-h-full bg-zinc-950 overflow-hidden">
            <Image
              src={project.image || '/projects/placeholder.png'}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-left-top transition-transform duration-[2s] ease-out group-hover:scale-105"
              priority={i === 0}
            />
            {/* Subtle blend and glare effects */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none hidden lg:block" />
            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] pointer-events-none" />
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { projects: config } = siteConfig;

  return (
    <SectionWrapper id="projects" containerClassName="max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 overflow-visible px-2">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-indigo-500" />
              {config.title}
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[1]">
              {config.subtitle.split(' ')[0]} <br className="hidden md:block" /> {config.subtitle.split(' ')[1] || ''}
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-zinc-400 leading-relaxed font-sans pb-4 lg:text-right">
            {config.description}
          </p>
        </div>

        {/* Projects Stack */}
        <div className="relative flex flex-col pb-32 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} total={projects.length} />
          ))}
        </div>
    </SectionWrapper>
  );
}
