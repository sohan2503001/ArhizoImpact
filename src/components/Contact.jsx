import { Mail, Phone, MapPin, CheckCircle, Loader2, Sparkles, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=arhizoimpact@gmail.com';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      
      // Reset back to idle after 4 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-beige-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-white rounded-3xl shadow-2xl overflow-hidden shadow-primary-900/10 border border-slate-100">
          <div className="flex flex-col lg:flex-row">

            {/* Contact Info Side */}
            <div className="w-full lg:w-5/12 bg-primary-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              {/* Floating ambient glow */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 rounded-full bg-primary-600/40 blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-accent-400/20 blur-3xl"
              />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-accent-400 font-bold uppercase tracking-wider text-xs px-3 py-1 bg-white/10 rounded-full mb-4 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" /> Start a Conversation
                </span>
                <h3 className="text-3xl font-extrabold mb-4 font-heading text-white">Get in touch</h3>
                <p className="text-primary-100 mb-12 font-light text-lg leading-relaxed">
                  Looking to transform livelihoods or scale your CSR impact? Let's discuss how we can work together.
                </p>
                
                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-400 mt-0.5 shrink-0 group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-primary-100">Mumbai, Maharashtra, India</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-400 mt-0.5 shrink-0 group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                      <Phone className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:+917447662127" className="text-primary-100 hover:text-accent-400 transition-colors" aria-label="Call +91 74476 62127">
                        +91 74476 62127
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-400 mt-0.5 shrink-0 group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                      <Mail className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white">Email</p>
                      <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="text-primary-100 hover:text-accent-400 transition-colors" aria-label="Email arhizoimpact@gmail.com">
                        arhizoimpact@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="relative z-10 mt-16 font-heading text-2xl font-bold tracking-tight text-white/30">
                Arhizo <span className="text-accent-400/40">Impact</span>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 p-10 md:p-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                    <input 
                      type="text" 
                      id="organization" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="Your NGO / Company"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="+91 ...."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">I'm interested in</label>
                  <select
                    id="interest"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                  >
                    <option value="" disabled>Select a focus area</option>
                    <option value="livelihoods">Livelihoods & Enterprise Development</option>
                    <option value="esg-net-zero">ESG & Net Zero Consulting</option>
                    <option value="both">Both Practice Areas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white resize-none"
                    placeholder="Tell us about your project needs..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center outline-none focus:ring-2 focus:ring-offset-2 font-heading text-lg ${
                    status === 'success' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30 focus:ring-emerald-600'
                      : 'bg-primary-600 hover:bg-accent-500 hover:text-primary-950 text-white shadow-primary-600/30 focus:ring-primary-600 hover:shadow-xl'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Let's Collaborate
                    </>
                  )}
                </motion.button>
              </form>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
