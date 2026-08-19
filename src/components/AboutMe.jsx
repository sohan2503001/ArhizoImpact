import { CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const AboutMe = () => {
  const points = [
    'TISS & IIT-trained multidisciplinary team',
    'Livelihoods & enterprise development',
    'Environmental sustainability & Net Zero consulting',
    'Field verification & direct community engagement',
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 text-balance">
            A team building solutions that hold up in the field, not just on paper.
          </h3>
        </Reveal>

        <Reveal delay={150} className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are a professional team from TISS and IIT, working with experienced practitioners across the social impact and sustainability sectors. Our backgrounds span engineering, enterprise development, and environmental sustainability — brought together around a shared focus: building solutions that hold up in the field, not just on paper.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Over the years, we have worked directly with corporates, NGOs, farmer collectives, and government departments — designing livelihood and enterprise programs, running CSR-funded initiatives, and now leading environmental and Net Zero interventions at institutional scale. We work close to the ground: our approach is built on field verification, direct community engagement, and continuous coordination with the institutions and departments we partner with.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Today, Arhizo Impact Consulting works across two connected practice areas — livelihoods and enterprise development, and environmental sustainability / Net Zero consulting — bringing the same on-ground, outcomes-first approach to both.
          </p>
          <p className="text-base text-slate-500 mb-10">
            <span className="font-semibold text-slate-700">Who we work with:</span> NGOs, CSR teams, government departments, and industries/offices.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {points.map((point, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-accent-500 shrink-0 mt-0.5" size={20} />
                <span className="ml-3 text-slate-700 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center text-primary-600 font-bold hover:text-primary-500 transition-colors"
            >
              Learn more about our services
              <span className="ml-2 w-8 h-[2px] bg-primary-600 rounded-full inline-block group-hover:w-12 transition-all"></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;