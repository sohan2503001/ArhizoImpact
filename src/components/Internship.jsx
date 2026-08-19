import { ArrowRight, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center border border-slate-200 rounded-lg p-8 lg:p-10 bg-beige-50">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-primary-600 text-white flex items-center justify-center shrink-0">
                <GraduationCap size={30} strokeWidth={1.8} />
              </div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-accent-600">
                  Internship
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                  Learn on Ground
                </h2>
              </div>
            </div>
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Work with Arhizo Impact Consulting on livelihood, enterprise, ESG, and net zero projects rooted in field realities.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-500 transition-colors"
              >
                Apply through contact
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Internship;
