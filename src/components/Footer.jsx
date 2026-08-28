import { Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import LegalModal from './LegalModal';

const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=arhizoimpact@gmail.com';
const linkedInUrl = 'https://www.linkedin.com/in/arhizo-impact-1a46a8431/';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState('privacy');

  const openLegalModal = (tab) => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.7fr] mb-12 border-b border-slate-800 pb-12">
          <div>
            <a href="#home" className="font-heading font-bold text-2xl tracking-tight text-primary-500 block mb-4">
              Arhizo <span className="text-accent-500">Impact</span> Consulting
            </a>
            <p className="text-slate-300 font-light max-w-xl leading-relaxed">
              Transforming livelihoods and driving net zero action — for people, and for the planet.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#livelihoods" className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors">
                Livelihoods & Enterprise Development
              </a>
              <a href="#net-zero" className="px-4 py-2 rounded-full bg-slate-800 text-slate-200 text-sm font-medium hover:bg-primary-600 hover:text-white transition-colors">
                ESG & Net Zero Consulting
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Contact</h2>
            <div className="space-y-4 text-sm">
              <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                arhizoimpact@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0" aria-hidden="true" />
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-white text-sm font-bold uppercase tracking-wider mb-5">Links</h2>
            <div className="flex space-x-4">
              <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={gmailComposeUrl} target="_blank" rel="noreferrer" aria-label="Email" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arhizo Impact Consulting. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-primary-400 transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-primary-400 transition-colors focus:outline-none underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab={modalTab}
      />
    </footer>
  );
};

export default Footer;
