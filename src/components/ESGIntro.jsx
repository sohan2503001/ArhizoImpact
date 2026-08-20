import { ArrowRight, BarChart3, Leaf, Route, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const highlights = [
  { label: 'Measure carbon footprint', icon: BarChart3, desc: 'Scope 1, 2 & 3 Emissions' },
  { label: 'Design actionable strategy', icon: Route, desc: 'Phased Roadmaps & Targets' },
  { label: 'Build ESG reporting systems', icon: Leaf, desc: 'Compliance & Disclosures' },
];

const ESGIntro = () => {
  return (
    <section id="net-zero" className="relative py-28 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-teal-600 scroll-mt-20">
      {/* Background Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-300/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-accent-400/20 blur-3xl pointer-events-none"
      />

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_28%),linear-gradient(135deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)] bg-[length:auto,28px_28px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <Reveal direction="right">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-teal-200 text-xs font-bold tracking-wider uppercase mb-4 border border-white/20">
                Climate & Sustainability Practice
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-balance font-heading leading-tight">
                Driving Net Zero, One Roadmap at a Time
              </h2>
              <p className="text-lg text-teal-50 leading-relaxed mb-8 font-light">
                We work with organizations to measure their carbon footprint, design actionable net zero strategies, and build the reporting frameworks needed to meet ESG commitments — grounded in the same on-ground rigor we bring to community development.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -4, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-4 text-white hover:bg-white/15 hover:border-accent-400/50 transition-all duration-300 shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-400/20 text-teal-200 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-bold leading-snug font-heading mb-1">{item.label}</p>
                    <p className="text-xs text-teal-100/70">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center font-bold text-primary-950 bg-accent-400 hover:bg-accent-500 rounded-full px-8 py-3.5 shadow-xl shadow-primary-950/30 transition-colors"
              >
                Discuss ESG Work
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={180} direction="left">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative min-h-[360px] md:min-h-[420px] overflow-hidden rounded-3xl border-2 border-white/25 shadow-2xl group"
            >
              <img
                src="/esg-net-zero.png"
                alt="Solar panels at a rural energy project with a monitoring dashboard"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent"></div>
              
              {/* Floating verified badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 text-white flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent-400 text-primary-950 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm">Actionable Climate Roadmaps</p>
                  <p className="text-xs text-beige-100/80">From institutional carbon auditing to on-ground execution</p>
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ESGIntro;

