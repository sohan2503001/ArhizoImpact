import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS as navLinks } from '../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/5 py-3.5 border-b border-slate-100' 
          : 'bg-primary-950/75 backdrop-blur-sm py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <motion.a 
              href="#home" 
              aria-label="Go to Home" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 group"
            >
              <img 
                src="/arhizo-mark.svg" 
                alt="Arhizo Impact Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:rotate-6" 
              />
              <span className={`font-heading font-bold text-xl sm:text-2xl tracking-tight transition-colors inline-block ${
                scrolled ? 'text-primary-600' : 'text-white'
              }`}>
                Arhizo <span className="text-accent-500">Impact</span>
              </span>
            </motion.a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 lg:gap-7 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  whileHover={{ y: -1 }}
                  className={`relative font-sans font-medium text-xs lg:text-sm transition-colors hover:text-accent-500 pb-1 whitespace-nowrap ${
                    isActive ? 'text-accent-500 font-semibold' : scrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute left-0 -bottom-0.5 w-full h-0.5 rounded-full bg-accent-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 rounded-full bg-accent-400 text-primary-950 text-xs font-bold uppercase tracking-wider hover:bg-accent-500 transition-colors shadow-md shadow-accent-500/20"
            >
              Let's Talk
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-accent-500 focus:outline-none p-1`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    activeSection === link.href 
                      ? 'text-primary-600 bg-primary-50/80 font-bold' 
                      : 'text-slate-800 hover:text-primary-600 hover:bg-beige-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center w-full py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-accent-500 hover:text-primary-950 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
