'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import { socialLinks } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import MagneticButton from '../animations/MagneticButton';
import HeroProfileCard from '../cards/HeroProfileCard';

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
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Transforms for right-side Glass Card 3D tilt
  const cardRotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const cardRotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  } as const;

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  } as const;

  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24 md:px-12 overflow-hidden bg-[#050505]"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-[0.03]" />
        
        {/* Smooth ambient gradients */}
        <motion.div
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-[20%] -top-[10%] h-[800px] w-[800px] rounded-full bg-indigo-500/10 blur-[150px]"
        />
        <motion.div
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute left-[10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[120px]"
        />
      </div>

      <div className="mx-auto w-full max-w-[1300px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Clean Typography & Details */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-8 pr-4"
          >
            {/* Status Badge */}
            <motion.div variants={textItemVariants} className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-300">
                {hero.badge}
              </span>
            </motion.div>

            {/* Balanced Name Heading */}
            <motion.div variants={textItemVariants}>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                {hero.headingText1}<span className="text-indigo-500">{hero.headingText2}</span>
              </h1>
            </motion.div>

            {/* Description & Tagline */}
            <motion.div variants={textItemVariants} className="space-y-6 max-w-xl">
              <p className="font-display text-2xl md:text-3xl font-medium leading-tight text-indigo-200">
                {hero.description.split(' combining')[0]} {/* Example split for tagline styling */}
              </p>
              <p className="font-sans text-base md:text-lg text-zinc-400 leading-relaxed text-pretty">
                {hero.description}
              </p>
            </motion.div>

            {/* Action Buttons & Socials */}
            <motion.div variants={textItemVariants} className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex gap-4">
                <MagneticButton strength={10}>
                  <button
                    onClick={() => handleScroll('#projects')}
                    className="rounded-full bg-white hover:bg-zinc-200 px-8 py-4 text-sm font-bold tracking-wide text-black transition-all shadow-xl shadow-white/5 cursor-pointer"
                  >
                    {hero.primaryButton}
                  </button>
                </MagneticButton>
                <MagneticButton strength={10}>
                  <button
                    onClick={() => handleScroll('#contact')}
                    className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:bg-white/10 cursor-pointer"
                  >
                    {hero.secondaryButton}
                  </button>
                </MagneticButton>
              </div>

              {/* Minimal social links */}
              <div className="flex gap-4 sm:border-l border-white/10 sm:pl-6">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Floating Profile Card Component */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.4 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            style={{ perspective: 1200 }}
          >
            <HeroProfileCard cardRotateX={cardRotateX} cardRotateY={cardRotateY} localTime={localTime} />
          </motion.div>
          
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.button
          onClick={() => handleScroll('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="rounded-full bg-white/5 p-4 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}
