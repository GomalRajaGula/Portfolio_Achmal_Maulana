'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import MagneticButton from '../animations/MagneticButton';
import GlassCard from '../ui/GlassCard';

export default function Contact() {
  const { contact: config } = siteConfig;

  return (
    <section id="contact" className="py-24 px-6 md:px-8 border-t border-white/[0.03]">
      <div className="mx-auto max-w-4xl">
        <GlassCard className="relative overflow-hidden p-10 md:p-16 text-center hover:border-indigo-500/20 transition-all duration-500">
          {/* Subtle gradient blob behind content */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-indigo-500/10 blur-[80px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
              {config.title}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {config.subtitle.split(' ').slice(0, -1).join(' ')}
              <br />
              <span className="text-gradient">{config.subtitle.split(' ').slice(-1)}</span>
            </h2>
            <p className="max-w-md text-xs md:text-sm text-zinc-400 leading-relaxed">
              {config.description}
            </p>

            {/* Magnetic Email CTA Button */}
            <div className="mt-4">
              <MagneticButton strength={20}>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send an Email</span>
                </a>
              </MagneticButton>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-white/15 hover:text-white"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-white/15 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-5 py-2.5 text-xs font-semibold text-zinc-400 transition-all hover:border-white/15 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
