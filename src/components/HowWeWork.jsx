import { Search, Compass, Hammer, Eye } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    label: 'Assess',
    description: 'Field visits, stakeholder conversations, and data verification before we design anything.',
    icon: Search,
  },
  {
    label: 'Design',
    description: 'A plan built for the specific site, institution, or community — not a template.',
    icon: Compass,
  },
  {
    label: 'Implement',
    description: 'Working directly alongside government, NGOs, corporates, and communities to execute the plan.',
    icon: Hammer,
  },
  {
    label: 'Monitor',
    description: 'Tracking outcomes after handover, and documenting learnings for the next phase.',
    icon: Eye,
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">How We Work</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Whether we're designing a livelihood program or a Net Zero roadmap, our process stays the same — grounded in field reality, built with the people and institutions we're working with, not around them.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary-100 via-accent-400/40 to-primary-100"></div>

          {steps.map((step, index) => (
            <Reveal key={step.label} delay={index * 120} className="relative flex flex-col items-center text-center">
              <div className="relative w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-5 text-primary-600 border-4 border-white shadow-md hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-300 z-10">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-500 mb-1">Step {index + 1}</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.label}</h4>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
