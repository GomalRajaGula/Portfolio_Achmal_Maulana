'use client';

import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.04] bg-[#09090B] pt-20 pb-12 text-zinc-500">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Massive Brand Watermark */}
        <div className="pointer-events-none select-none mb-12 text-center">
          <h2 className="font-display text-[9vw] font-black leading-none tracking-tighter text-white/[0.02] uppercase border-b border-white/[0.02] pb-6">
            ACHMAL MAULANA
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <p className="font-display text-base font-bold tracking-wider text-white">ACHMAL.DEV</p>
            <p className="mt-2 text-xs text-zinc-400">Software Engineering Student & Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-white transition-all hover:translate-y-[-2px] duration-300"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-white transition-all hover:translate-y-[-2px] duration-300"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-white transition-all hover:translate-y-[-2px] duration-300"
            >
              <Instagram className="h-4 w-4" />
              <span className="hidden sm:inline">Instagram</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Back to top
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">↑</span>
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/[0.04]" />

        {/* Subfooter */}
        <div className="flex flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-widest sm:flex-row">
          <span>© {currentYear} Achmal Maulana. All rights reserved.</span>
          <span>Designed & Built with Next.js 15 & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
