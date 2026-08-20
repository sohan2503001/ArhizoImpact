import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="zoom">
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 sm:gap-8 items-center border-2 border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-beige-50 via-white to-beige-50 shadow-md hover:shadow-xl hover:border-primary-300 transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <GraduationCap size={26} strokeWidth={1.8} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-200">
                  Internship Opportunity
                </span>
                <h2 className="mt-1 text-xl sm:text-2xl font-extrabold text-slate-900 font-heading">
                  Learn on Ground
                </h2>
              </div>
            </div>
            <div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-5">
                Work with <strong className="text-slate-900 font-semibold">Arhizo Impact Consulting</strong> on livelihood, enterprise, ESG, and net zero projects rooted in field realities.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center text-primary-600 font-bold hover:text-accent-600 transition-colors gap-1.5 text-sm sm:text-base"
              >
                <span>Apply through contact form</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Internship;

