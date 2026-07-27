import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'What I Do', href: '#what-i-do' },
  { name: 'About', href: '#about' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#case-studies' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className={`font-heading font-bold text-2xl tracking-tight transition-colors ${scrolled ? 'text-primary-600' : 'text-primary-900'}`}>
              Arhizo <span className="text-accent-500">Impact</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans font-medium text-sm transition-colors hover:text-accent-500 pb-1 ${
                    isActive ? 'text-accent-500' : scrolled ? 'text-slate-700' : 'text-slate-800'
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
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Let's Collaborate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-700' : 'text-slate-800'} hover:text-primary-600 focus:outline-none transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
          <a
            href="#contact"
            className="block w-full text-center mt-4 bg-primary-600 hover:bg-primary-500 text-white px-5 py-3 rounded-md font-medium text-base transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Let's Collaborate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
