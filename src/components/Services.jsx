import React from 'react';
import { Network, LineChart, Leaf, ShieldCheck } from 'lucide-react';

const Services = () => {
  const serviceDetails = [
    {
      title: 'Livelihood & Enterprise Development',
      description: 'Guiding communities from subsistence to surplus through the incubation of micro-enterprises and sustainable livelihood generation. Identifying local resource bases, training entrepreneurs, and facilitating sustainable market links.',
      icon: Leaf,
      color: 'bg-primary-50 text-primary-600',
    },
    {
      title: 'SHG & FPO Strengthening',
      description: 'Structurally reinforcing Self-Help Groups and Farmer Producer Organizations. We establish strong governance frameworks, operational standards, and legal compliances that ensure long-term viability and creditworthiness.',
      icon: Network,
      color: 'bg-accent-50 text-accent-600',
    },
    {
      title: 'CSR Project Implementation',
      description: 'Acting as the executing arm for corporate social responsibility mandates. Ensuring funds are deployed efficiently in grassroots projects with transparent milestones, community ownership, and measurable outcomes.',
      icon: ShieldCheck,
      color: 'bg-slate-100 text-slate-700',
    },
    {
      title: 'Monitoring, Evaluation & SROI',
      description: 'Utilizing robust M&E frameworks to quantify impact. We calculate the Social Return on Investment (SROI) to present clear, data-driven narratives of change to stakeholders and funding partners.',
      icon: LineChart,
      color: 'bg-primary-100 text-primary-800',
    },
  ];

  return (
    <section id="services" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Detailed Approach</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Services</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 border-b border-transparent">
            Delivering structural, operational, and impact-driven outcomes for communities and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceDetails.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={32} />
              </div>
              <h4 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                {item.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
