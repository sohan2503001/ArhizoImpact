import { Mail, MapPin, CheckCircle, Loader2, Sparkles, Send, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=arhizoimpact@gmail.com';

const interestOptions = [
  { value: 'livelihoods', label: 'Livelihoods & Enterprise' },
  { value: 'esg-net-zero', label: 'ESG & Net Zero Advisory' },
  { value: 'both', label: 'Both Practice Areas' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedInterest, setSelectedInterest] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [statusMessage, setStatusMessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const selectedInterestLabel = interestOptions.find((o) => o.value === selectedInterest)?.label || 'General Inquiry';
      
      const payload = {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        interest: selectedInterestLabel,
        message: formData.message,
        _subject: `New Collaboration Request from ${formData.name} (${formData.organization || 'Website Inquiry'})`,
        _template: 'table',
        _captcha: 'false',
      };

      const response = await fetch('https://formsubmit.co/ajax/arhizoimpact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          message: '',
        });
        setSelectedInterest('');

        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus('error');
      setStatusMessage('Unable to send message directly. Please click our email link or try again.');
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 6000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-beige-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="bg-white rounded-3xl shadow-2xl overflow-hidden shadow-primary-900/10 border border-slate-100">
          <div className="flex flex-col lg:flex-row">

            {/* Contact Info Side */}
            <div className="w-full lg:w-5/12 bg-primary-900 text-white p-6 sm:p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
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
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-heading text-white">Get in touch</h3>
                <p className="text-primary-100 mb-8 sm:mb-12 font-light text-base sm:text-lg leading-relaxed">
                  Looking to transform livelihoods or scale your CSR impact? Let's discuss how we can work together.
                </p>
                
                <div className="space-y-6 sm:space-y-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent-400 mt-0.5 shrink-0 group-hover:bg-accent-400 group-hover:text-primary-950 transition-colors">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-white text-sm sm:text-base">Location</p>
                      <p className="text-primary-100 text-sm sm:text-base">Mumbai, Maharashtra, India</p>
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
                      <p className="font-semibold text-white text-sm sm:text-base">Email</p>
                      <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="text-primary-100 hover:text-accent-400 transition-colors text-sm sm:text-base" aria-label="Send email to arhizoimpact@gmail.com">
                        arhizoimpact@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-white/10 relative z-10">
                <p className="text-xs text-primary-200">
                  Submissions are sent directly to our advisory desk at <span className="text-accent-400 font-medium">arhizoimpact@gmail.com</span>. We typically respond within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-7/12 p-6 sm:p-10 md:p-16">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 font-heading">Send a Message</h3>
              
              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Organization</label>
                    <input 
                      type="text" 
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="Your NGO / Company"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-slate-400 font-normal">(optional)</span></label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white"
                      placeholder="+91 ...."
                    />
                  </div>
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label id="interest-label" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">
                    I'm interested in
                  </label>
                  <input type="hidden" name="interest" value={selectedInterest} />
                  
                  <button
                    type="button"
                    aria-labelledby="interest-label"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border transition-all bg-slate-50/50 focus:bg-white text-left ${
                      isDropdownOpen 
                        ? 'border-primary-500 ring-2 ring-primary-500/20 bg-white' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={selectedInterest ? 'text-slate-900 font-medium' : 'text-slate-400'}>
                      {interestOptions.find((o) => o.value === selectedInterest)?.label || 'Select focus area'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${isDropdownOpen ? 'rotate-180 text-primary-600' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 overflow-hidden"
                      >
                        {interestOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                              setSelectedInterest(opt.value);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors ${
                              selectedInterest === opt.value
                                ? 'bg-primary-50 text-primary-700 font-semibold'
                                : 'text-slate-700 hover:bg-beige-50 hover:text-primary-600'
                            }`}
                          >
                            <span>{opt.label}</span>
                            {selectedInterest === opt.value && (
                              <Check className="w-4 h-4 text-primary-600 shrink-0 ml-2" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-slate-50/50 focus:bg-white resize-none"
                    placeholder="Tell us about your project needs..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{statusMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md flex items-center justify-center outline-none focus:ring-2 focus:ring-offset-2 font-heading text-lg ${
                    status === 'success' 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30 focus:ring-emerald-600'
                      : status === 'error'
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-600/30 focus:ring-red-600'
                      : 'bg-primary-600 hover:bg-accent-500 hover:text-primary-950 text-white shadow-primary-600/30 focus:ring-primary-600 hover:shadow-xl'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending to Inbox...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                      Message Sent to arhizoimpact@gmail.com!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Retry Sending
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
