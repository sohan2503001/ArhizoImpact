import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Rural enterprise background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/60 blend-multiply"></div>
      </div>

      {/* Floating decorative accents */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent-400/20 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-10 right-[25%] w-56 h-56 rounded-full bg-primary-500/20 blur-3xl animate-float-delay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 text-sm font-semibold tracking-wider mb-6 border border-accent-500/30 animate-fade-in-up opacity-0 [animation-delay:0ms] [animation-fill-mode:forwards]">
            ARHIZO IMPACT CONSULTING
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight animate-fade-in-up opacity-0 [animation-delay:150ms] [animation-fill-mode:forwards]">
            Transforming Livelihoods Through Enterprise, SHG & FPO Development
          </h1>
          <p className="text-lg md:text-xl text-beige-50 mb-10 leading-relaxed font-light max-w-2xl animate-fade-in-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
            We support NGOs, CSR programs, and government initiatives in designing and implementing sustainable livelihood and enterprise development solutions for marginalized communities across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 [animation-delay:450ms] [animation-fill-mode:forwards]">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-lg text-primary-900 bg-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-accent-500/40"
            >
              Work With Us
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-base font-medium rounded-full text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <BookOpen className="mr-2 -ml-1 h-5 w-5 opacity-70" aria-hidden="true" />
              View Case Studies
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce opacity-70">
        <span className="text-white text-xs tracking-widest uppercase mb-2">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
