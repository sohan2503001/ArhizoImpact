import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="zoom">
          <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center border-2 border-slate-200/80 rounded-3xl p-8 lg:p-12 bg-gradient-to-r from-beige-50 via-white to-beige-50 shadow-lg hover:shadow-2xl hover:border-primary-300 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-primary-900/20">
                <GraduationCap size={32} strokeWidth={1.8} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
                  Internship Opportunity
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900 font-heading">
                  Learn on Ground
                </h2>
              </div>
            </div>
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Work with <strong className="text-slate-900 font-semibold">Arhizo Impact Consulting</strong> on livelihood, enterprise, ESG, and net zero projects rooted in field realities.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center text-primary-600 font-bold hover:text-accent-600 transition-colors gap-2"
              >
                <span>Apply through contact form</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Internship;

