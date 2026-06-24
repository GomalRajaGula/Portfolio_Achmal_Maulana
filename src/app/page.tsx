'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Animations
import SmoothScroll from '@/components/animations/SmoothScroll';
import MouseGlow from '@/components/animations/MouseGlow';
import ScrollProgress from '@/components/animations/ScrollProgress';

// UI Components
import LoadingScreen from '@/components/ui/LoadingScreen';
import GridBackground from '@/components/ui/GridBackground';

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CommandMenu from '@/components/layout/CommandMenu';

// Sections
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import BeyondCoding from '@/components/sections/BeyondCoding';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium Loading Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <div className="relative min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
            {/* Global background and glow */}
            <GridBackground />
            <MouseGlow />
            <ScrollProgress />
            
            {/* Navigations */}
            <Navbar />
            <CommandMenu />

            {/* Sections */}
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Skills />
              <BeyondCoding />
              <Contact />
            </motion.main>

            {/* Footer */}
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
