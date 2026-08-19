import {
  ArrowRight,
  Briefcase,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Handshake,
  Leaf,
  Network,
  Route,
  Search,
  Target,
  TrendingUp,
} from 'lucide-react';
import Reveal from './Reveal';

const livelihoodFlow = [
  { label: 'Community Assessment', icon: Search },
  { label: 'SHG & FPO Strengthening', icon: Network },
  { label: 'Enterprise Incubation', icon: Briefcase },
  { label: 'Market & Credit Linkages', icon: Handshake },
  { label: 'Livelihood Outcomes', icon: TrendingUp },
];

const netZeroRoadmap = [
  { label: 'Carbon Auditing', icon: ClipboardCheck },
  { label: 'GHG Assessment', icon: FileCheck2 },
  { label: 'Net Zero Strategy', icon: Target },
  { label: 'Roadmap Design', icon: Route },
];

const FlowLine = ({ items, accent = 'primary' }) => {
  const activeClasses =
    accent === 'teal'
      ? 'bg-teal-500 text-white border-teal-400'
      : 'bg-primary-600 text-white border-primary-600';
  const cardClasses =
    accent === 'teal'
      ? 'border-white/15 bg-white/10 text-white shadow-none'
      : 'border-slate-200 bg-white text-slate-800 shadow-sm';

  return (
    <div className={`grid grid-cols-1 gap-4 ${accent === 'teal' ? 'md:grid-cols-4' : 'md:grid-cols-5'}`}>
      {items.map((item, index) => (
        <div key={item.label} className="relative">
          {index < items.length - 1 && (
            <ArrowRight
              className={`hidden md:block absolute top-1/2 -right-5 h-5 w-5 -translate-y-1/2 z-10 ${
                accent === 'teal' ? 'text-teal-100/70' : 'text-slate-300'
              }`}
              aria-hidden="true"
            />
          )}
          <div className={`h-full min-h-28 rounded-lg border p-4 flex flex-col justify-between ${cardClasses}`}>
            <span
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-sm font-bold ${activeClasses}`}
            >
              {item.icon ? <item.icon size={18} strokeWidth={2} /> : index + 1}
            </span>
            <p className={`mt-4 text-sm font-semibold leading-snug ${accent === 'teal' ? 'text-white' : 'text-slate-800'}`}>
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const SectorOverview = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        <Reveal>
          <div id="livelihoods" className="scroll-mt-28">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <Leaf size={26} strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  Livelihoods & Enterprise Development
                </h2>
                <p className="text-lg text-slate-600">
                  SHG, FPO & enterprise models for marginalized communities
                </p>
              </div>
            </div>
            <FlowLine items={livelihoodFlow} />
          </div>
        </Reveal>

        <Reveal>
          <div
            id="net-zero"
            className="relative scroll-mt-28 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-14 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-teal-500"
          >
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_28%),linear-gradient(135deg,rgba(255,255,255,0.12)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.12)_75%,transparent_75%,transparent)] bg-[length:auto,28px_28px]"></div>
            <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20">
                    <Globe2 size={26} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                      ESG & Net Zero Consulting
                    </h2>
                    <p className="text-lg text-teal-50">
                      Carbon auditing, GHG assessment & net zero roadmaps
                    </p>
                  </div>
                </div>
                <FlowLine items={netZeroRoadmap} accent="teal" />
              </div>
              <div className="relative min-h-72 overflow-hidden rounded-lg border border-white/20 shadow-2xl">
                <img
                  src="/esg-net-zero.png"
                  alt="Solar panels at a rural energy project with a monitoring dashboard"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SectorOverview;
