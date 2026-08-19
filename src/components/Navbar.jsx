import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS as navLinks } from '../data/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-primary-900/70 backdrop-blur-sm py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" aria-label="Go to Home" className={`font-heading font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-primary-600' : 'text-white'}`}>
              Arhizo <span className="text-accent-500">Impact</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 lg:gap-7 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans font-medium text-xs lg:text-sm transition-colors hover:text-accent-500 pb-1 whitespace-nowrap ${
                    isActive ? 'text-accent-500' : scrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-accent-500 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg absolute w-full left-0 top-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[28rem] pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-3 rounded-md text-base font-medium hover:text-primary-600 hover:bg-beige-50 transition-colors ${
                activeSection === link.href ? 'text-primary-600 bg-beige-50' : 'text-slate-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
