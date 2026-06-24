import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { projects } from '@/data/portfolio';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 md:px-8 border-t border-white/[0.04] bg-[#09090B]">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-32 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 overflow-visible px-2">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-indigo-500" />
              Work & Builds
            </span>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[1]">
              SELECTED <br className="hidden md:block" /> PROJECTS
            </h2>
          </div>
          <p className="max-w-md text-base md:text-lg text-zinc-400 leading-relaxed font-sans pb-4 lg:text-right">
            A curated showcase of software engineering systems I built, blending aesthetics with complex administrative coordination dashboards.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="relative flex flex-col pb-32">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="sticky top-[10vh] w-full"
              style={{
                paddingTop: `${i * 3}vh`,
              }}
            >
              <GlassCard 
                className="group relative w-full h-[75vh] min-h-[600px] lg:h-[85vh] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                glowColor="transparent"
              >
                {/* Full Bleed Background Image */}
                <div className="absolute inset-0 bg-zinc-950">
                  <Image
                    src={project.image || '/projects/placeholder.png'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1400px"
                    className="object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                    priority={i === 0}
                  />
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 mt-8 lg:mt-10 px-2 md:px-4 mb-2">
                  <div className="flex flex-col gap-5 flex-1 w-full min-w-0">
                    <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base text-zinc-400 leading-[1.8] font-sans max-w-[400px] text-pretty">
                      {project.description}
                    </p>
                    
                    {/* Tech stack tags */}
                    <div className="mt-2 flex flex-wrap gap-2.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-semibold text-zinc-300 uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Index & Action Links */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start gap-6 shrink-0">
                    <span className="font-display text-6xl lg:text-7xl font-black text-white/5 select-none tracking-tighter leading-none order-2 lg:order-1">
                      0{i + 1}
                    </span>
                    <div className="flex gap-3 order-1 lg:order-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors p-3 rounded-full bg-white/[0.03] hover:bg-white/10 ring-1 ring-white/[0.05] hover:ring-white/20"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white transition-colors p-3 rounded-full bg-white/[0.03] hover:bg-white/10 ring-1 ring-white/[0.05] hover:ring-white/20"
                          aria-label="Live Project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
