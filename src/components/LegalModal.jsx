import { X, ShieldCheck, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const LegalModal = ({ isOpen, onClose, initialTab = 'privacy' }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[88vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-beige-50/70">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary-100 text-primary-800 flex items-center justify-center font-bold">
                {initialTab === 'privacy' ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  {initialTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <p className="text-xs text-slate-500">
                  Arhizo Impact Consulting • Last updated: {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
            {initialTab === 'privacy' ? (
              <>
                <div className="p-4 rounded-xl bg-primary-50/60 border border-primary-100 text-primary-900 text-xs sm:text-sm">
                  <p className="font-semibold mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-primary-600" />
                    Commitment to Data Privacy (DPDP Act, 2023 Compliant)
                  </p>
                  <p className="text-primary-800/90 text-xs">
                    Arhizo Impact Consulting is committed to protecting your personal data and ensuring confidentiality across all consultation and advisory interactions.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">1. Information We Collect</h4>
                  <p className="mb-2">When you interact with our website, request a consultation, or submit an inquiry, we may collect:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li><strong className="text-slate-800">Contact Details:</strong> Full Name, Work Email, Phone Number, and Organization name.</li>
                    <li><strong className="text-slate-800">Project Information:</strong> Practice area of interest (Livelihoods, ESG & Net Zero, or both) and details provided in your message.</li>
                    <li><strong className="text-slate-800">Technical Logs:</strong> Anonymized browser metadata, device type, and visit metrics to improve website usability.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">2. Purpose of Data Processing</h4>
                  <p className="mb-2">Your information is used strictly for legitimate advisory purposes, including:</p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Responding to collaboration and consulting inquiries.</li>
                    <li>Structuring proposals for CSR programs, carbon audits, and net-zero roadmaps.</li>
                    <li>Evaluating candidate applications for our internship and fellowship tracks.</li>
                    <li>Delivering project deliverables and maintaining institutional communication.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">3. Zero Data Sale Policy</h4>
                  <p>
                    We <strong>never sell, rent, or trade</strong> your personal information to third-party advertisers or data brokers. Data is processed securely solely for providing advisory services.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">4. Data Security & Retention</h4>
                  <p>
                    We employ standard encryption and administrative controls to safeguard your data. Contact submissions are retained only as long as necessary to fulfill project requirements or comply with applicable legal obligations.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">5. Your Rights & Grievance Contact</h4>
                  <p className="mb-2">
                    Under applicable data protection frameworks, you have the right to request access to, correction of, or erasure of your personal records.
                  </p>
                  <p>
                    For privacy inquiries or grievance redressal, please write to our advisory desk at:{' '}
                    <a href="mailto:arhizoimpact@gmail.com" className="text-primary-600 font-semibold hover:underline">
                      arhizoimpact@gmail.com
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="p-4 rounded-xl bg-accent-50/60 border border-accent-200 text-accent-950 text-xs sm:text-sm">
                  <p className="font-semibold mb-1 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-accent-700" />
                    Terms of Website Use & Advisory Scope
                  </p>
                  <p className="text-accent-900/90 text-xs">
                    Please review these terms governing the use of the Arhizo Impact Consulting website and preliminary advisory resources.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">1. Acceptance of Terms</h4>
                  <p>
                    By accessing or browsing this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">2. Informational Scope & Advisory Disclaimer</h4>
                  <p className="mb-2">
                    The materials presented on this site (including case study summaries, framework overviews, and methodology descriptions) are provided for general informational and marketing purposes.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    <li>Website browsing does not constitute a formal consultant-client agreement.</li>
                    <li>Formal engagements, Scope 1–3 audits, SROI assessments, and field interventions are governed by a separate, signed bilateral Agreement or Memorandum of Understanding (MoU).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">3. Intellectual Property</h4>
                  <p>
                    All content, graphic assets, proprietary framework diagrams, text copy, and brand marks displayed on this website are the intellectual property of <strong>Arhizo Impact Consulting</strong>. Unauthorized reproduction or commercial redistribution without prior written consent is strictly prohibited.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">4. Permitted Use</h4>
                  <p>
                    Users agree not to submit fraudulent contact information, deploy automated scraping tools, or introduce code intended to disrupt site performance or compromise communication channels.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 text-base mb-2">5. Governing Law & Jurisdiction</h4>
                  <p>
                    These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with the website shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer actions */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Mail className="w-4 h-4 text-primary-600" />
              <span>Questions? Email arhizoimpact@gmail.com</span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-primary-700 text-white font-medium text-xs sm:text-sm hover:bg-primary-800 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModal;
