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
                </div>

                {/* Readability Gradients */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000" />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-[2.5rem] pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 flex items-center gap-5 z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center font-display text-xl md:text-2xl font-bold text-white shadow-2xl">
                    {i + 1}
                  </div>
                  <div className="hidden md:block h-[1px] w-12 bg-white/30" />
                  <span className="hidden md:block text-white/80 uppercase tracking-[0.3em] text-xs font-bold drop-shadow-md">
                    Featured Case
                  </span>
                </div>

                {/* Main Content Area */}
                <div className="absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end z-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end w-full">
                    
                    {/* Left side: Title & Description */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                      <h3 className="font-display text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-white tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
                        {project.title}
                      </h3>
                      <p className="text-base md:text-lg lg:text-xl text-zinc-300 max-w-2xl leading-relaxed text-pretty font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Right side: Tech Stack & Actions */}
                    <div className="lg:col-span-5 flex flex-col lg:items-end gap-8 pb-2">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap lg:justify-end gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 lg:flex-none h-14 px-8 rounded-full bg-white text-black flex items-center justify-center gap-3 font-bold uppercase tracking-[0.15em] text-xs hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl"
                          >
                            View Live <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 w-14 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 shrink-0 shadow-xl"
                            aria-label="GitHub Repository"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
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
