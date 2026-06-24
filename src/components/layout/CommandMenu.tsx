'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { 
  Home, 
  Folder, 
  Calendar, 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Search, 
  Cpu 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const navigateTo = (selector: string) => {
    setOpen(false);
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openLink = (url: string) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating command helper trigger on screen */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Press</span>
        <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 text-[10px] font-bold">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[500px] overflow-hidden rounded-xl border border-white/10 bg-[#0F0F10] shadow-2xl"
            >
              <Command className="w-full">
                <div className="flex items-center border-b border-white/10 px-4">
                  <Search className="h-4 w-4 mr-3 text-zinc-400" />
                  <Command.Input
                    placeholder="Type a command or search..."
                    className="h-12 w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                  />
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="px-2 py-1.5 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    <Command.Item
                      onSelect={() => navigateTo('#hero')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Home className="h-4 w-4 text-zinc-400" />
                      <span>Go to Home</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateTo('#about')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Cpu className="h-4 w-4 text-zinc-400" />
                      <span>About Achmal</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateTo('#projects')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Folder className="h-4 w-4 text-zinc-400" />
                      <span>Featured Projects</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateTo('#experience')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Calendar className="h-4 w-4 text-zinc-400" />
                      <span>Work & Org Experience</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateTo('#skills')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Code className="h-4 w-4 text-zinc-400" />
                      <span>Technical Skills</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => navigateTo('#contact')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Mail className="h-4 w-4 text-zinc-400" />
                      <span>Get in Touch</span>
                    </Command.Item>
                  </Command.Group>

                  <div className="h-px bg-white/5 my-1.5" />

                  <Command.Group heading="Social Links" className="px-2 py-1.5 text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    <Command.Item
                      onSelect={() => openLink('https://github.com/GomalRajaGula')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Github className="h-4 w-4 text-zinc-400" />
                      <span>GitHub profile</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => openLink('https://www.linkedin.com/in/achmal-maulana-3a024235b/')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Linkedin className="h-4 w-4 text-zinc-400" />
                      <span>LinkedIn profile</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => openLink('https://instagram.com/mal.dubeonjjae')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.04] cursor-pointer"
                    >
                      <Instagram className="h-4 w-4 text-zinc-400" />
                      <span>Instagram profile</span>
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
