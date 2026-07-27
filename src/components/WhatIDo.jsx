import { Users, TrendingUp, Briefcase, Link as LinkIcon, BarChart } from 'lucide-react';
import Reveal from './Reveal';

const services = [
  {
    title: 'SHG & FPO Strengthening',
    description: 'Building capacity and institutional resilience for Self-Help Groups and Farmer Producer Organizations.',
    icon: Users,
  },
  {
    title: 'Enterprise Development',
    description: 'Incubating micro-enterprises and fostering local economic growth through structured support and mentorship.',
    icon: Briefcase,
  },
  {
    title: 'Livelihood Programs',
    description: 'Designing and implementing comprehensive livelihood intervention scalable models for rural communities.',
    icon: TrendingUp,
  },
  {
    title: 'Market & Credit Linkages',
    description: 'Connecting local producers with viable markets and vital financial services to ensure sustainability.',
    icon: LinkIcon,
  },
  {
    title: 'M&E and SROI',
    description: 'Rigorous monitoring, evaluation, and Social Return on Investment analysis to measure true impact.',
    icon: BarChart,
  },
];

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Core Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">What I Do</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Dedicated to amplifying the effectiveness of social initiatives through specialized consulting and hands-on operational support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <div
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-primary-200 group cursor-pointer h-full
                  ${index === 3 ? 'lg:col-start-1 lg:ml-auto w-full max-w-md' : ''}
                  ${index === 4 ? 'lg:col-start-2 lg:mr-auto w-full max-w-md' : ''}
                `}
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
