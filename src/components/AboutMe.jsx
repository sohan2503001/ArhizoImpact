import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutMe = () => {
  const points = [
    'Community institution building',
    'Enterprise support & incubation',
    'Training and capacity building programs',
    'Rigorous impact measurement and M&E',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/profile.png" 
                alt="Rishikesh Pawar - Social Impact Consultant" 
                className="w-full object-cover aspect-[4/5] object-center transform group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-400 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 text-accent-500"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 text-balance">
              I am a livelihoods and social entrepreneurship professional.
            </h3>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              As a proud graduate of the Tata Institute of Social Sciences (TISS), my professional journey has been deeply rooted in grassroots empowerment. 
              With foundational experience at leading organizations including HDFC CSR, YUVA, Tata Power CSR, and various impactful NGOs, I have honed 
              my ability to bridge the gap between corporate social responsibility and tangible, sustainable systemic change.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              My mission is to operationalize empathy into strategy—building capable self-help structures that create jobs, foster independence, and return lasting value to society.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-accent-500 shrink-0 mt-0.5" size={20} />
                  <span className="ml-3 text-slate-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <a 
              href="#services" 
              className="inline-flex items-center text-primary-600 font-bold hover:text-primary-500 transition-colors"
            >
              Learn more about my services
              <span className="ml-2 w-8 h-[2px] bg-primary-600 rounded-full inline-block group-hover:w-12 transition-all"></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
