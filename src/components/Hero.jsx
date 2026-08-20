import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingBadges = [
    {
      icon: Leaf,
      label: 'Livelihood Models',
      sub: 'SHG & FPO Capacity',
      className: 'top-24 -right-4 md:right-8 lg:right-16',
      duration: 7,
      delay: 0,
    },
    {
      icon: TrendingUp,
      label: 'Net Zero Roadmaps',
      sub: 'GHG & ESG Advisory',
      className: 'bottom-28 -right-2 md:right-4 lg:right-24',
      duration: 8.5,
      delay: 1.5,
    },
    {
      icon: ShieldCheck,
      label: 'Field-Verified',
      sub: 'TISS & IIT Rigor',
      className: 'top-1/2 right-0 md:right-12 lg:right-4 hidden lg:flex',
      duration: 6.5,
      delay: 0.8,
    },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[92vh] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src="/hero-bg.png"
          alt="Rural enterprise background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/80 to-primary-900/60 blend-multiply"></div>
      </div>

      {/* Floating animated decorative glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-80 h-80 rounded-full bg-accent-400/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-10 right-[25%] w-72 h-72 rounded-full bg-primary-500/25 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <motion.div 
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-white/10 backdrop-blur-md text-accent-400 text-xs sm:text-sm font-semibold tracking-wider mb-5 border border-accent-500/30 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              ARHIZO IMPACT CONSULTING
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-white leading-tight font-heading"
            >
              Sustainable Solutions for <span className="text-accent-400 inline-block">People and Planet</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-beige-50/90 mb-8 leading-relaxed font-light max-w-2xl"
            >
              We help NGOs, CSR programs, and government initiatives design and implement sustainable livelihood and enterprise development solutions — while also driving ESG and net zero strategy for organizations committed to climate action.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5">
              <motion.a
                href="#livelihoods"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-semibold rounded-full shadow-lg text-primary-950 bg-accent-400 hover:bg-accent-500 transition-colors duration-300 shadow-accent-500/25"
              >
                Explore Livelihoods
                <ArrowRight className="ml-2 -mr-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#net-zero"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center px-6 py-3 border border-white/30 backdrop-blur-sm text-sm sm:text-base font-medium rounded-full text-white hover:bg-white/15 hover:border-white transition-all duration-300"
              >
                Explore ESG & Net Zero
                <ArrowRight className="ml-2 -mr-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Floating interactive highlights showcase */}
          <div className="relative h-72 sm:h-80 lg:h-96 hidden md:block">
            {floatingBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: [0, -12, 0],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 + idx * 0.2 },
                  y: {
                    duration: badge.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: badge.delay,
                  },
                }}
                whileHover={{ scale: 1.08, y: -8 }}
                className={`absolute ${badge.className} flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:bg-white/15 transition-colors cursor-pointer group`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent-400/20 text-accent-400 flex items-center justify-center group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                  <badge.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-base leading-snug">{badge.label}</p>
                  <p className="text-xs text-beige-100/80">{badge.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with bounce animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-white text-[11px] tracking-widest uppercase mb-2 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 rounded-full border-2 border-white/40 flex justify-center pt-1.5"
        >
          <motion.div 
            animate={{ opacity: [1, 0.2, 1], y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-accent-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
