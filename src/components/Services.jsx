import { TRACKS as tracks } from '../data/constants';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Services = () => {
  return (
    <section id="livelihoods" className="py-24 bg-beige-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary-600 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-primary-50 rounded-full inline-block mb-3 border border-primary-100">Detailed Approach</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 font-heading">Comprehensive Services</h3>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-4"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Two connected practice areas, one on-ground, outcomes-first approach.
          </p>
        </Reveal>

        <div className="space-y-12">
          {tracks.map((track, trackIndex) => (
            <div
              key={track.key}
              className={
                track.key === 'net-zero'
                  ? 'relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-10 overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-teal-600 rounded-3xl'
                  : ''
              }
            >
              {track.key === 'net-zero' && (
                <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.18)_50%,rgba(255,255,255,0.18)_75%,transparent_75%,transparent)] bg-[length:30px_30px]"></div>
              )}
              <div className="relative">
                <Reveal className="mb-6">
                  <div
                    className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b pb-4 ${
                      track.key === 'net-zero' ? 'border-white/20' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          track.key === 'net-zero' ? 'text-teal-100' : 'text-accent-600'
                        }`}
                      >
                        Panel {trackIndex + 1}
                      </span>
                      <h4
                        className={`mt-1 text-xl sm:text-2xl font-extrabold font-heading ${
                          track.key === 'net-zero' ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {track.label}
                      </h4>
                    </div>
                    <a
                      href={track.key === 'net-zero' ? '#net-zero' : '#overview'}
                      className={`inline-flex items-center text-xs sm:text-sm font-semibold transition-colors ${
                        track.key === 'net-zero'
                          ? 'text-teal-50 hover:text-white'
                          : 'text-primary-600 hover:text-primary-500'
                      }`}
                    >
                      View sector overview
                    </a>
                  </div>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  {track.services.map((item, index) => (
                    <Reveal key={item.title} delay={index * 80} direction="up">
                      <motion.div
                        whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary-900/10 transition-all duration-300 border border-slate-100 hover:border-primary-300 h-full flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-40 bg-gradient-to-b from-beige-100/70 to-beige-50 flex items-center justify-center overflow-hidden p-5">
                            <img
                              src={item.image}
                              alt=""
                              loading="lazy"
                              className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className={`absolute top-3.5 left-3.5 w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                              <item.icon size={20} />
                            </div>
                          </div>
                          <div className="p-6 sm:p-8">
                            <h5 className="font-heading text-lg sm:text-xl font-bold text-slate-900 mb-2.5 group-hover:text-primary-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
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
