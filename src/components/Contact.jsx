import { Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Reveal from './Reveal';

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
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-white rounded-3xl shadow-xl overflow-hidden shadow-primary-900/5">
          <div className="flex flex-col lg:flex-row">

            {/* Contact Info Side */}
            <div className="w-full lg:w-5/12 bg-primary-900 text-white p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-primary-600/30 blur-3xl animate-float-slow"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 font-heading">Get in touch</h3>
                <p className="text-primary-100 mb-12 font-light text-lg">
                  Looking to transform livelihoods or scale your CSR impact? Let's discuss how we can work together.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-accent-400 mt-1 shrink-0" aria-hidden="true" />
                    <div className="ml-4">
                      <p className="font-semibold text-white">Location</p>
                      <p className="text-primary-100">Mumbai, Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-accent-400 mt-1 shrink-0" aria-hidden="true" />
                    <div className="ml-4">
                      <p className="font-semibold text-white">Phone</p>
                      <a href="tel:+917447662127" className="text-primary-100 hover:text-white transition-colors" aria-label="Call +91 74476 62127">
                        +91 74476 62127
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-accent-400 mt-1 shrink-0" aria-hidden="true" />
                    <div className="ml-4">
                      <p className="font-semibold text-white">Email</p>
                      <a href="mailto:arhizoimpact@gmail.com" className="text-primary-100 hover:text-white transition-colors" aria-label="Email arhizoimpact@gmail.com">
                        arhizoimpact@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16 font-heading text-2xl font-bold italic text-white/20">
                Arhizo Impact
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 p-10 md:p-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                    <input 
                      type="text" 
                      id="organization" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
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
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white"
                  >
                    <option value="" disabled>Select a focus area</option>
                    <option value="livelihoods">Livelihoods & Enterprise Development</option>
                    <option value="esg-net-zero">ESG & Net Zero Consulting</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Tell me about your project needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full font-medium py-3.5 px-6 rounded-lg transition-all duration-300 shadow-md flex items-center justify-center outline-none focus:ring-2 focus:ring-offset-2 ${
                    status === 'success' 
                      ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/30 focus:ring-green-600'
                      : 'bg-primary-600 hover:bg-primary-500 text-white shadow-primary-600/30 focus:ring-primary-600 hover:-translate-y-0.5 hover:shadow-lg'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    "Let's Collaborate"
                  )}
                </button>
              </form>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
