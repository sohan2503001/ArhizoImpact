import { useState } from 'react';
import {
  Network,
  LineChart,
  Leaf,
  ShieldCheck,
  ClipboardCheck,
  Target,
  Building2,
  Sun,
  Droplets,
  Recycle,
  TreePine,
  FileText,
  Handshake,
  Landmark,
} from 'lucide-react';
import Reveal from './Reveal';

const tracks = [
  {
    key: 'livelihoods',
    label: 'Livelihoods & Enterprise Development',
    services: [
      {
        title: 'Livelihood & Enterprise Development',
        description: 'Guiding communities from subsistence to surplus through the incubation of micro-enterprises and sustainable livelihood generation. Identifying local resource bases, training entrepreneurs, and facilitating sustainable market links.',
        icon: Leaf,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'SHG & FPO Strengthening',
        description: 'Structurally reinforcing Self-Help Groups and Farmer Producer Organizations. We establish strong governance frameworks, operational standards, and legal compliances that ensure long-term viability and creditworthiness.',
        icon: Network,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'CSR Project Implementation',
        description: 'Acting as the executing arm for corporate social responsibility mandates. Ensuring funds are deployed efficiently in grassroots projects with transparent milestones, community ownership, and measurable outcomes.',
        icon: ShieldCheck,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'Monitoring, Evaluation & SROI',
        description: 'Utilizing robust M&E frameworks to quantify impact. We calculate the Social Return on Investment (SROI) to present clear, data-driven narratives of change to stakeholders and funding partners.',
        icon: LineChart,
        color: 'bg-primary-100 text-primary-800',
      },
    ],
  },
  {
    key: 'net-zero',
    label: 'ESG & Net Zero Consulting',
    services: [
      {
        title: 'Carbon Auditing & GHG Assessment',
        description: 'Greenhouse gas footprint assessment across facilities and operations.',
        icon: ClipboardCheck,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'Net Zero Strategy & Roadmap Design',
        description: 'Strategy and roadmap design for institutions, industries, and offices.',
        icon: Target,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'Net-Positive Facility Design',
        description: 'Self-sustainable facility design across energy, water, and waste systems.',
        icon: Building2,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'Renewable Energy Integration',
        description: 'Solar rooftop planning and energy-efficiency measures.',
        icon: Sun,
        color: 'bg-primary-100 text-primary-800',
      },
      {
        title: 'Water Stewardship',
        description: 'Rainwater harvesting and greywater/blackwater management systems.',
        icon: Droplets,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'Waste Management & Circular Economy',
        description: 'Composting, biochar, and waste segregation solutions.',
        icon: Recycle,
        color: 'bg-accent-50 text-accent-600',
      },
      {
        title: 'UHDP & Afforestation Planning',
        description: 'Ultra High Density Plantation and afforestation planning.',
        icon: TreePine,
        color: 'bg-slate-100 text-slate-700',
      },
      {
        title: 'ESG Reporting & Compliance',
        description: 'ESG reporting, disclosure support, and compliance advisory.',
        icon: FileText,
        color: 'bg-primary-100 text-primary-800',
      },
      {
        title: 'CSR Program Design & Monitoring',
        description: 'CSR program design and monitoring for sustainability and Net Zero initiatives.',
        icon: Handshake,
        color: 'bg-primary-50 text-primary-600',
      },
      {
        title: 'Government & Institutional Partnerships',
        description: 'Partnership support for Net Zero missions with government and institutions.',
        icon: Landmark,
        color: 'bg-accent-50 text-accent-600',
      },
    ],
  },
];

const Services = () => {
  const [activeTrack, setActiveTrack] = useState(tracks[0].key);
  const track = tracks.find((t) => t.key === activeTrack);

  return (
    <section id="services" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2">Detailed Approach</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Services</h3>
          <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600">
            Two connected practice areas, one on-ground, outcomes-first approach.
          </p>
        </Reveal>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          {tracks.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTrack(t.key)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTrack === t.key
                  ? 'bg-primary-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-primary-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div key={activeTrack} className="grid md:grid-cols-2 gap-8">
          {track.services.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-200 h-full">
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                  <item.icon size={32} />
                </div>
                <h4 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
