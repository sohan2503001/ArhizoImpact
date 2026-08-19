import { ArrowRight, Globe2, Leaf } from 'lucide-react';
import Reveal from './Reveal';

const sectors = [
  {
    id: 'livelihoods',
    title: 'Livelihoods & Enterprise Development',
    description:
      'SHG, FPO, and enterprise models that build lasting economic resilience for marginalized communities.',
    icon: Leaf,
  },
  {
    id: 'net-zero',
    title: 'ESG & Net Zero Consulting',
    description:
      'Carbon auditing, GHG assessment, and net zero roadmaps for organizations serious about climate action.',
    icon: Globe2,
  },
];

const SectorOverview = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">What We Do</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <Reveal key={sector.id} delay={index * 120}>
              <a
                id={sector.id}
                href={sector.id === 'livelihoods' ? '#services' : '#esg-intro'}
                className="group scroll-mt-28 block h-full rounded-lg border border-slate-200 bg-beige-50 p-8 lg:p-10 hover:border-primary-300 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-600 text-white flex items-center justify-center mb-6 group-hover:bg-accent-500 group-hover:text-primary-900 transition-colors">
                  <sector.icon size={30} strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                  {sector.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {sector.description}
                </p>
                <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-500 transition-colors">
                  Explore
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorOverview;
