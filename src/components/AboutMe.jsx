import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const points = [
  { text: 'TISS & IIT-trained multidisciplinary team', icon: Award },
  { text: 'Livelihoods & enterprise development', icon: Compass },
  { text: 'Environmental sustainability & Net Zero consulting', icon: ShieldCheck },
  { text: 'Field verification & direct community engagement', icon: HeartHandshake },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-beige-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-primary-600 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-primary-100/60 rounded-full mb-3 inline-block border border-primary-200">
            About Us
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 text-balance font-heading">
            A team building solutions that hold up in the field, not just on paper.
          </h3>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-primary-900/5 border border-slate-100 mb-4">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-heading">Our Core Approach</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              We operate across two core verticals — livelihoods and enterprise development, and environmental sustainability / Net Zero consulting — bringing the same on-ground, outcomes-first approach to both.
            </p>
            
            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-600">
                <span className="font-bold text-slate-900">Who we work with:</span> NGOs, CSR teams, government departments, and industries/offices.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-beige-50/70 border border-slate-100 hover:border-primary-300 hover:bg-primary-50/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-400/20 text-accent-600 flex items-center justify-center shrink-0">
                    <point.icon className="w-4 h-4" />
                  </div>
                  <span className="text-slate-800 font-semibold text-sm">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;