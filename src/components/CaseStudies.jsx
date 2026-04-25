import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const cases = [
    {
      title: 'Strengthening Tribal Women Cooperatives',
      problem: 'Tribal women in rural Maharashtra lacked formal marketing channels for their non-timber forest produce, leading to exploitation by middlemen.',
      intervention: 'Incubated a multi-village FPO, trained BODs on governance, and established direct procurement agreements with sustainable brands.',
      outcome: 'Formed an FPO with 450+ members. Increased average realization price by 40%.',
      impact: 'Enhanced financial independence for 400+ households. Surplus profits reinvested into a community processing unit.',
    },
    {
      title: 'Youth Enterprise Incubation in Peri-urban Areas',
      problem: 'High youth unemployment in peri-urban clusters despite growing local demand for micro-services and retail.',
      intervention: 'Identified 30 aspiring entrepreneurs, provided a 3-month structured incubation including micro-MBA training and facilitated credit access.',
      outcome: 'Launched 28 operational enterprises within 6 months. Maintained a 90% survival rate past the 1-year mark.',
      impact: 'Generated local employment for 60 individuals. Shifted youth from unorganized labor to formal business ownership.',
    },
    {
      title: 'Revitalizing Dormant SHGs',
      problem: 'A cluster of 35 SHGs had become dormant due to poor bookkeeping, lack of credit linkage, and internal conflicts.',
      intervention: 'Conducted a diagnostic study, retrained community resource persons (CRPs), and facilitated conflict resolution and banking mediation.',
      outcome: 'Successfully revived 32 SHGs. Facilitated cumulative credit linkages worth ₹50 Lakhs.',
      impact: 'Restored community trust in institutional credit. Empowered women to start joint livelihood activities like organic farming.',
    },
    {
      title: 'Digital Dashboards for CSR Ecosystem',
      problem: 'A major CSR foundation struggled with disparate reporting formats from multiple NGO partners, causing delays in impact assessment.',
      intervention: 'Designed and deployed a unified MERN-stack based tracking system for real-time data collection from the field.',
      outcome: 'Reduced reporting lag from 45 days to real-time. Standardized data across 15+ partner NGOs.',
      impact: 'Enabled data-driven agility for the CSR team, ensuring ₹5 Cr+ funds were effectively monitored and deployed.',
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Impact In Action</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Case Studies</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Real stories of transformation, resilience, and scalable impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {cases.map((study, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-primary-500 shadow-md' : 'border-slate-200 hover:border-primary-300'
              }`}
            >
              <button
                className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none transition-colors ${
                  openIndex === index ? 'bg-primary-50' : 'bg-white hover:bg-slate-50'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className={`font-heading font-bold text-xl ${openIndex === index ? 'text-primary-700' : 'text-slate-800'}`}>
                  {study.title}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary-600 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out px-6 overflow-hidden ${
                  openIndex === index ? 'max-h-[1000px] py-6 opacity-100 bg-white' : 'max-h-0 py-0 opacity-0 bg-slate-50'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                      The Problem
                    </h5>
                    <p className="text-slate-600 mb-6">{study.problem}</p>
                    
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mr-2"></span>
                      The Intervention
                    </h5>
                    <p className="text-slate-600">{study.intervention}</p>
                  </div>
                  <div className="bg-beige-50 rounded-xl p-6 border border-beige-100">
                    <h5 className="font-bold text-primary-700 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                      Outcome
                    </h5>
                    <p className="text-slate-700 mb-6 font-medium">{study.outcome}</p>
                    
                    <h5 className="font-bold text-primary-700 mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 text-xl"></span>
                      Long-term Impact
                    </h5>
                    <p className="text-slate-700 font-medium">{study.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
