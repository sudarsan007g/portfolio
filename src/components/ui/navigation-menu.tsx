'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const menuLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#experience' }, 
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: any = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
        className="fixed top-6 right-6 z-[60] p-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all shadow-sm"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[50] bg-neutral-50/98 dark:bg-neutral-950/98 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center sm:items-start gap-6"
            >
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={itemVariants}
                  className="group relative text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center"
                >
                  <span className="text-emerald-600 dark:text-emerald-500 mr-4 text-lg sm:text-xl font-mono opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all absolute -left-10 sm:-left-12 top-1/2 -translate-y-1/2 hidden sm:block">
                    0{i + 1}.
                  </span>
                  <span className="relative z-10 overflow-hidden">
                     {link.name}
                     <span className="absolute bottom-0 left-0 w-full h-[0.1em] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
