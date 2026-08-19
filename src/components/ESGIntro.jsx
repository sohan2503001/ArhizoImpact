import { ArrowRight, BarChart3, Leaf, Route } from 'lucide-react';
import Reveal from './Reveal';

const highlights = [
  { label: 'Measure carbon footprint', icon: BarChart3 },
  { label: 'Design actionable strategy', icon: Route },
  { label: 'Build ESG reporting systems', icon: Leaf },
];

const ESGIntro = () => {
  return (
    <section id="esg-intro" className="relative py-24 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-teal-500">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_28%),linear-gradient(135deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)] bg-[length:auto,28px_28px]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-balance">
                Driving Net Zero, One Roadmap at a Time
              </h2>
              <p className="text-lg text-teal-50 leading-relaxed mb-8">
                We work with organizations to measure their carbon footprint, design actionable net zero strategies, and build the reporting frameworks needed to meet ESG commitments — grounded in the same on-ground rigor we bring to community development.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/15 bg-white/10 p-4 text-white">
                    <item.icon className="w-6 h-6 mb-3 text-teal-100" aria-hidden="true" />
                    <p className="text-sm font-semibold leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center font-semibold text-primary-900 bg-accent-400 hover:bg-accent-500 rounded-full px-6 py-3 transition-colors"
              >
                Discuss ESG work
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative min-h-80 overflow-hidden rounded-lg border border-white/20 shadow-2xl">
              <img
                src="/esg-net-zero.png"
                alt="Solar panels at a rural energy project with a monitoring dashboard"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ESGIntro;
