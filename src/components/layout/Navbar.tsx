'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import MagneticButton from '../animations/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div
          className={`flex items-center justify-between rounded-full border border-white/[0.04] bg-[#09090B]/40 px-6 py-2.5 backdrop-blur-lg transition-all duration-500 ${
            scrolled ? 'shadow-lg shadow-black/40 border-white/[0.08] bg-[#09090B]/60' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 text-sm font-bold tracking-wider text-white font-display"
          >
            <Terminal className="h-4 w-4 text-indigo-500" />
            <span>ACHMAL.DEV</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              {navItems.map((item, idx) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative block px-4 py-2 transition-colors duration-300 ${
                      hoveredIdx === idx ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {hoveredIdx === idx && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 -z-10 rounded-full border border-white/[0.06] bg-white/[0.03]"
                        transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Action */}
          <div className="hidden items-center gap-4 md:flex">
            <MagneticButton strength={15}>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                Contact
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block text-zinc-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 z-30 mx-6 mt-2 rounded-2xl border border-white/[0.08] bg-[#09090B]/95 p-6 backdrop-blur-lg shadow-xl md:hidden"
          >
            <ul className="flex flex-col gap-4 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-2 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block rounded-full bg-white py-3 text-xs font-bold uppercase tracking-wider text-black"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
