import { Building2, Leaf } from 'lucide-react';
import Reveal from './Reveal';

const caseStudyPanels = [
  {
    label: 'Livelihoods',
    description:
      'Field-driven engagements with organizations including Tata Power CSR, YUVA, and HDFC CSR — building enterprise and SHG-based livelihood models for underserved communities.',
    icon: Leaf,
  },
  {
    label: 'ESG & Net Zero',
    description:
      'On-ground coordination of a large-scale Net Zero Healthy Campus initiative across welfare institutions in partnership with a state government — covering afforestation, rainwater harvesting, solar energy, and waste management.',
    icon: Building2,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Proof of Impact</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Real outcomes, across both practice areas.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudyPanels.map((panel, index) => (
            <Reveal key={panel.label} delay={index * 120}>
              <div className="h-full rounded-lg border border-slate-200 bg-beige-50 p-8 lg:p-10 hover:border-primary-300 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-primary-600 text-white flex items-center justify-center mb-6">
                  <panel.icon size={30} strokeWidth={1.8} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-accent-600">
                  {index === 0 ? 'Tab 1' : 'Tab 2'}
                </span>
                <h4 className="mt-2 text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  {panel.label}
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
