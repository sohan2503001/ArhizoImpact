import { ArrowRight, Globe2, Leaf, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const sectors = [
  {
    id: 'livelihoods-card',
    title: 'Livelihoods & Enterprise Development',
    description:
      'SHG, FPO, and enterprise models that build lasting economic resilience for marginalized communities.',
    icon: Leaf,
    badge: 'Community Resilience',
    accentColor: 'group-hover:border-primary-500',
    iconBg: 'bg-primary-600',
    target: '#livelihoods',
  },
  {
    id: 'net-zero-card',
    title: 'ESG & Net Zero Consulting',
    description:
      'Carbon auditing, GHG assessment, and net zero roadmaps for organizations serious about climate action.',
    icon: Globe2,
    badge: 'Climate & Sustainability',
    accentColor: 'group-hover:border-teal-500',
    iconBg: 'bg-teal-700',
    target: '#net-zero',
  },
];

const SectorOverview = () => {
  return (
    <section id="overview" className="bg-white py-24 relative overflow-hidden scroll-mt-20">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-primary-600 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-primary-50 rounded-full mb-3 border border-primary-100">
            <Sparkles className="w-3.5 h-3.5" /> What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 font-heading">
            Dual Focus, Unified Impact
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <Reveal key={sector.id} delay={index * 150} direction={index === 0 ? 'right' : 'left'}>
              <motion.a
                href={sector.target}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                whileTap={{ scale: 0.98 }}
                className={`group flex flex-col justify-between h-full rounded-2xl border-2 border-slate-200/80 bg-beige-50/70 p-6 sm:p-8 lg:p-10 hover:bg-white hover:shadow-xl hover:shadow-primary-900/10 transition-all duration-300 relative overflow-hidden ${sector.accentColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${sector.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}>
                      <sector.icon size={28} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-200/60 text-slate-700 group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                      {sector.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors font-heading">
                    {sector.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-primary-600 text-sm font-bold group-hover:text-accent-600 transition-colors">
                  <span>Explore Practice Area</span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorOverview;

