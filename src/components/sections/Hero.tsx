'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown, MapPin, Clock, Briefcase, Code2, Award, Zap } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import MagneticButton from '../animations/MagneticButton';
import GlassCard from '../ui/GlassCard';

export default function Hero() {
  const [localTime, setLocalTime] = useState('');

  // Clock Update (Cilacap WIB - GMT+7)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wib = new Date(utc + (3600000 * 7));
      
      const hh = wib.getHours().toString().padStart(2, '0');
      const mm = wib.getMinutes().toString().padStart(2, '0');
      const ss = wib.getSeconds().toString().padStart(2, '0');
      setLocalTime(`${hh}:${mm}:${ss}`);
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse coordinates for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for parallax and 3D tilting
  const springX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  // Transforms for right-side Glass Card 3D tilt
  const cardRotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  // Transforms for floating elements (creates depth)
  const floatX1 = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const floatY1 = useTransform(springY, [-0.5, 0.5], [-25, 25]);

  const floatX2 = useTransform(springX, [-0.5, 0.5], [35, -35]);
  const floatY2 = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    // Normalize coordinates between -0.5 and 0.5
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleScroll = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 85, damping: 16 },
    },
  } as const;

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24 md:px-8 overflow-hidden bg-[#09090B]"
    >
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[130px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full bg-[#818CF8]/5 blur-[120px]"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Brand Details & Typography */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status / Availability Badge */}
            <motion.div variants={textItemVariants} className="flex items-center gap-2 self-start rounded-full border border-white/[0.04] bg-white/[0.02] px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Available for Work</span>
            </motion.div>

            {/* Name Heading (Reduced by 30% for premium editorial hierarchy) */}
            <motion.div variants={textItemVariants}>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.9] tracking-tighter text-white uppercase">
                ACHMAL
                <br />
                <span className="text-gradient">MAULANA</span>
              </h1>
            </motion.div>

            {/* Role details / Short introduction */}
            <motion.div variants={textItemVariants} className="space-y-4 max-w-2xl">
              <p className="font-sans text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl">
                {personalInfo.tagline}
              </p>
              <p className="font-sans text-xs md:text-sm text-zinc-400 leading-relaxed max-w-lg">
                Software Engineering student combining full-stack development expertise with student leadership and event operations to design meaningful, scalable web systems.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={textItemVariants} className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex gap-4">
                <MagneticButton strength={12}>
                  <button
                    onClick={() => handleScroll('#projects')}
                    className="rounded-full bg-white hover:bg-zinc-200 px-8 py-4.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer"
                  >
                    View Projects
                  </button>
                </MagneticButton>
                <MagneticButton strength={12}>
                  <button
                    onClick={() => handleScroll('#contact')}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-4.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:border-white/[0.15] hover:bg-white/[0.05] hover:scale-105 cursor-pointer"
                  >
                    Get in Touch
                  </button>
                </MagneticButton>
              </div>

              {/* Minimal social links */}
              <div className="flex gap-3 border-l border-white/10 pl-6 py-1">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.06] bg-white/[0.01] p-3 text-zinc-400 transition-colors hover:border-white/[0.12] hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.06] bg-white/[0.01] p-3 text-zinc-400 transition-colors hover:border-white/[0.12] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/[0.06] bg-white/[0.01] p-3 text-zinc-400 transition-colors hover:border-white/[0.12] hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Premium 3D tilt Card & Storytelling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.2 }}
            className="lg:col-span-5 relative"
            style={{ perspective: 1000 }}
          >
            {/* Parallax Floating Accents */}
            <motion.div
              style={{ x: floatX1, y: floatY1 }}
              className="absolute -left-10 -top-8 text-indigo-500/20 font-mono text-[10px] select-none uppercase tracking-widest hidden md:block"
            >
              &lt;developer&gt;
            </motion.div>

            <motion.div
              style={{ x: floatX2, y: floatY2 }}
              className="absolute -right-8 -bottom-8 text-zinc-700 font-mono text-[10px] select-none hidden md:block"
            >
              + Cilacap, Indonesia
            </motion.div>

            {/* Main Interactive Glassmorphism Card */}
            <motion.div
              style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
              className="w-full"
            >
              <GlassCard className="p-8 border-white/[0.05] bg-[#111111]/85 backdrop-blur-xl rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-indigo-500/20 shadow-2xl shadow-black/60">
                {/* Header Profile Row */}
                <div className="flex items-center gap-5 border-b border-white/[0.05] pb-6">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border border-indigo-500/20 overflow-hidden bg-black/40">
                      <Image
                        src="/avatar.png"
                        alt="Achmal Maulana Avatar"
                        width={64}
                        height={64}
                        priority
                        className="object-cover h-full w-full"
                      />
                    </div>
                    {/* Glowing active node indicator */}
                    <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#111111] bg-emerald-500 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
                      Achmal Maulana
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">
                      Software Engineering Student
                    </p>
                  </div>
                </div>

                {/* Role Details */}
                <div className="py-6 border-b border-white/[0.05] space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block">
                      [ Current Role ]
                    </span>
                    <span className="text-xs font-semibold text-zinc-300 block">
                      Full Stack Web Developer & HMTRPL Staff Coordinator
                    </span>
                  </div>

                  {/* Tech stack chips */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block">
                      [ Core Toolkit ]
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Next.js 15', 'TypeScript', 'Tailwind', 'Laravel', 'MySQL'].map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Experience Mini-Timeline Summary */}
                <div className="pt-6 pb-4 border-b border-white/[0.05] space-y-3">
                  <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest block">
                    [ Active Projects & Focus ]
                  </span>
                  
                  <div className="space-y-2.5 text-xs text-zinc-400">
                    <div className="flex items-start gap-2.5">
                      <Zap className="h-3.5 w-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-zinc-200">SIPERUKA system</span>
                        <p className="text-[10px] text-zinc-500">Academic letter approval flows</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <Award className="h-3.5 w-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-zinc-200">JKB Fest Organizer</span>
                        <p className="text-[10px] text-zinc-500">Tenant map & booth coordination</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Briefcase className="h-3.5 w-3.5 text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-zinc-200">ShopeeFood Logistics</span>
                        <p className="text-[10px] text-zinc-500">Time coordination & service dispatch</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location & Local time clock */}
                <div className="pt-5 flex items-center justify-between text-[10px] text-zinc-500 font-mono tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 text-zinc-600" />
                    <span>CILACAP, ID</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-zinc-600" />
                    <span>{localTime || '00:00:00'} WIB</span>
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.button
          onClick={() => handleScroll('#about')}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="rounded-full border border-white/5 bg-white/[0.01] p-3 text-zinc-500 hover:text-white cursor-pointer transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
