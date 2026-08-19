import { EXPERTISE_SERVICES as services } from '../data/constants';
import Reveal from './Reveal';

const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Core Expertise</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Dedicated to amplifying the effectiveness of social initiatives through specialized consulting and hands-on operational support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 100}
              className={`h-full
                ${index === 3 ? 'lg:col-start-1 lg:ml-auto w-full max-w-md' : ''}
                ${index === 4 ? 'lg:col-start-2 lg:mr-auto w-full max-w-md' : ''}
              `}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-primary-200 group cursor-pointer h-full">
                <div className="relative h-40 bg-gradient-to-br from-primary-50 to-beige-100 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
