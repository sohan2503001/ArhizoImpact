import { Briefcase, Users, Leaf } from 'lucide-react';
import Reveal from './Reveal';

const cases = [
  {
    title: 'HDFC',
    tag: 'Youth Entrepreneurship Program',
    description: '21 youth started their own businesses with structured guidance and support.',
    icon: Briefcase,
  },
  {
    title: 'Manuvikasa',
    tag: 'SHG & FPC Strengthening',
    description: 'SHG strengthening and Farmer Producer Company (FPC) formation and capacity building.',
    icon: Users,
  },
  {
    title: 'Net Zero Healthy Campus',
    tag: 'Environmental Interventions',
    description: 'Plantation, solar, rainwater harvesting, composting, and waste management across government institutions.',
    icon: Leaf,
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Impact In Action</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Real stories of transformation, resilience, and scalable impact.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <Reveal key={study.title} delay={index * 120}>
              <div className="group bg-beige-50 rounded-2xl p-8 border border-beige-100 hover:border-primary-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <study.icon size={28} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-500 mb-2 block">{study.tag}</span>
                <h4 className="font-heading text-2xl font-bold text-slate-900 mb-4">{study.title}</h4>
                <p className="text-slate-600 leading-relaxed">{study.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
