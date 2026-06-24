import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { projects } from '@/data/portfolio';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-8 border-t border-white/[0.04] bg-[#09090B]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-500">
              Work & Builds
            </span>
            <h2 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white md:text-7xl uppercase">
              SELECTED PROJECTS
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-400 leading-relaxed font-sans">
            A curated showcase of software engineering systems I built, showing administrative systems and event coordination dashboards.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="relative flex flex-col gap-32">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="sticky top-[120px] w-full"
              style={{
                paddingTop: `${i * 40}px`,
              }}
            >
              <GlassCard 
                className="group grid gap-10 lg:gap-16 lg:grid-cols-12 overflow-hidden p-6 md:p-10 lg:p-12 border-white/[0.05] bg-[#111112]/95 hover:border-indigo-500/30 transition-all duration-700 shadow-2xl shadow-black/90 backdrop-blur-xl rounded-3xl"
                glowColor="rgba(99, 102, 241, 0.15)"
              >
                {/* Project Info - 4 columns (approx 33%) */}
                <div className="lg:col-span-4 flex flex-col justify-between py-2">
                  <div className="flex flex-col gap-8">
                    {/* Index & Links */}
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl lg:text-6xl font-black text-white/5 select-none tracking-tighter">
                        0{i + 1}
                      </span>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors p-2.5 rounded-full bg-white/[0.03] hover:bg-white/10 ring-1 ring-white/[0.05] hover:ring-white/20"
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
                            className="text-zinc-400 hover:text-white transition-colors p-2.5 rounded-full bg-white/[0.03] hover:bg-white/10 ring-1 ring-white/[0.05] hover:ring-white/20"
                            aria-label="Live Project"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-base text-zinc-400 leading-relaxed font-sans max-w-[400px]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-12 flex flex-wrap gap-2.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 text-xs font-semibold text-zinc-300 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image Mockup Preview - 8 columns (approx 67%) */}
                <div className="lg:col-span-8 relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40">
                  <Image
                    src={project.image || '/projects/placeholder.png'}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Premium overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-white/[0.02] pointer-events-none mix-blend-overlay" />
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-2xl pointer-events-none" />
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
