import { Building2, Leaf, CheckCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const caseStudyPanels = [
  {
    label: 'Livelihoods & Micro-Enterprise',
    partners: 'Tata Power CSR • YUVA • HDFC CSR',
    description:
      'Field-driven engagements with organizations including Tata Power CSR, YUVA, and HDFC CSR — building enterprise and SHG-based livelihood models for underserved communities.',
    icon: Leaf,
    badge: 'Enterprise Models',
    accent: 'border-primary-500/30 group-hover:border-primary-500',
    iconBg: 'bg-primary-600',
  },
  {
    label: 'ESG & Institutional Net Zero',
    partners: 'State Government • Welfare Institutions',
    description:
      'On-ground coordination of a large-scale Net Zero Healthy Campus initiative across welfare institutions in partnership with a state government — covering afforestation, rainwater harvesting, solar energy, and waste management.',
    icon: Building2,
    badge: 'Healthy Campus Initiative',
    accent: 'border-teal-500/30 group-hover:border-teal-500',
    iconBg: 'bg-teal-700',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-primary-50 rounded-full mb-3 inline-block border border-primary-100">
            Proof of Impact
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">Case Studies</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Real outcomes, grounded in field verification across both practice areas.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudyPanels.map((panel, index) => (
            <Reveal key={panel.label} delay={index * 140} direction={index === 0 ? 'right' : 'left'}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
                className={`group h-full rounded-2xl border-2 bg-gradient-to-b from-beige-50/80 to-white p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-primary-900/10 transition-all duration-300 flex flex-col justify-between ${panel.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${panel.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      <panel.icon size={28} strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
                      {panel.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
                    {panel.partners}
                  </p>
                  
                  <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 font-heading group-hover:text-primary-600 transition-colors">
                    {panel.label}
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {panel.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-primary-600 group-hover:text-accent-600 transition-colors">
                  <span>Verified Field Engagement</span>
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

