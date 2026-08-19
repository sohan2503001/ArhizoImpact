import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Rural enterprise background"
          loading="lazy"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/60 blend-multiply"></div>
      </div>

      {/* Floating decorative accents */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent-400/20 blur-3xl animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-10 right-[25%] w-56 h-56 rounded-full bg-primary-500/20 blur-3xl animate-float-delay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-400 text-sm font-semibold tracking-wider mb-6 border border-accent-500/30"
          >
            ARHIZO IMPACT CONSULTING
          </motion.span>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight"
          >
            Sustainable Solutions for People and Planet
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-beige-50 mb-10 leading-relaxed font-light max-w-2xl"
          >
            We help NGOs, CSR programs, and government initiatives design and implement sustainable livelihood and enterprise development solutions — while also driving ESG and net zero strategy for organizations committed to climate action.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#livelihoods"
              className="group inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full shadow-lg text-primary-900 bg-accent-400 hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-accent-500/40"
            >
              Explore Livelihoods
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#net-zero"
              className="group inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-base font-medium rounded-full text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Explore ESG & Net Zero
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
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
