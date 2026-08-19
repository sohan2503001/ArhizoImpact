import { TRACKS as tracks } from '../data/constants';
import Reveal from './Reveal';

const Services = () => {
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

        <div className="space-y-16">
          {tracks.map((track, trackIndex) => (
            <div
              key={track.key}
              className={
                track.key === 'net-zero'
                  ? 'relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-teal-500'
                  : ''
              }
            >
              {track.key === 'net-zero' && (
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.18)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"></div>
              )}
              <div className="relative">
                <Reveal className="mb-8">
                  <div
                    className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b pb-5 ${
                      track.key === 'net-zero' ? 'border-white/20' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-sm font-bold uppercase tracking-wider ${
                          track.key === 'net-zero' ? 'text-teal-100' : 'text-accent-600'
                        }`}
                      >
                        Practice Area {trackIndex + 1}
                      </span>
                      <h4
                        className={`mt-2 text-2xl md:text-3xl font-extrabold ${
                          track.key === 'net-zero' ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {track.label}
                      </h4>
                    </div>
                    <a
                      href={`#${track.key}`}
                      className={`inline-flex items-center text-sm font-semibold transition-colors ${
                        track.key === 'net-zero'
                          ? 'text-teal-50 hover:text-white'
                          : 'text-primary-600 hover:text-primary-500'
                      }`}
                    >
                      View sector overview
                    </a>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8">
                  {track.services.map((item, index) => (
                    <Reveal key={item.title} delay={index * 80}>
                      <div className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-200 h-full">
                        <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                          <item.icon size={32} />
                        </div>
                        <h5 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                          {item.title}
                        </h5>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
