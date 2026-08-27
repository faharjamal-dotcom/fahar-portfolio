import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Upload, 
  FileSpreadsheet, 
  Camera, 
  Sparkles, 
  ShieldCheck, 
  Send,
  MessageSquareQuote,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RequestReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestReportModal: React.FC<RequestReportModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    industry: 'Retail & E-commerce',
    dataSourceType: 'Excel / CSV File',
    keyChallenge: 'Identify profit leakages and top-margin products',
    notes: '',
  });

  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setUploadedFileName(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF9F6] border border-[#1A1A1A]/30 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-[#1A1A1A]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#1A1A1A]/15 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-stone-100 text-[#1A1A1A] border border-[#1A1A1A]/20">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-serif italic font-bold text-[#1A1A1A]">
                Request Free 4-Page Business Report
              </h3>
              <p className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/60">
                100% Complimentary • 48-Hour Delivery Guarantee
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-stone-100 border border-transparent hover:border-[#1A1A1A]/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-white text-[#1A1A1A] border border-[#1A1A1A]/20 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-emerald-700" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-serif italic text-[#1A1A1A]">
                  Report Request Received
                </h4>
                <p className="text-sm text-[#1A1A1A]/80 max-w-md mx-auto">
                  Thank you, <strong className="text-[#1A1A1A] font-semibold">{formData.name || 'there'}</strong>. I will review your business data for <strong className="text-[#1A1A1A] font-semibold">{formData.businessName || 'your business'}</strong> and have your custom 4-page analysis ready within <strong className="text-[#1A1A1A] font-semibold underline decoration-[#D4AF37]">48 hours</strong>.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#1A1A1A]/15 text-left text-xs text-[#1A1A1A]/80 space-y-2 max-w-md mx-auto">
                <p className="font-bold uppercase tracking-wider text-[#1A1A1A] flex items-center gap-1.5 text-[10px]">
                  <Clock className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  What happens next:
                </p>
                <ol className="list-decimal pl-4 space-y-1 font-mono text-[11px] text-[#1A1A1A]/70">
                  <li>Direct confirmation sent to <strong className="text-[#1A1A1A]">{formData.email || 'your email'}</strong></li>
                  <li>Data cleaning & star-schema modeling in SQL / Power BI / Excel</li>
                  <li>4-Page Executive PDF delivered with KPI summary, trends & 3 recommendations</li>
                </ol>
              </div>

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 font-bold text-xs uppercase tracking-[0.2em] text-white bg-[#1A1A1A] hover:bg-[#333333] border border-[#1A1A1A] transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            /* Request Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Deliverable Reminder Box */}
              <div className="p-3.5 bg-stone-100 border border-[#1A1A1A]/15 flex items-start gap-2.5 text-xs text-[#1A1A1A]/85">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  <strong>What you'll receive (Free):</strong> Page 1 (KPI summary), Pages 2-3 (Visual trend charts & category matrix), Page 4 (3 Actionable recommendations). In return, I only ask for an honest testimonial if valuable.
                </span>
              </div>

              {/* Grid 1: Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Company / Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vance Logistics LLC"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>

              {/* Grid 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Email Address (for report delivery) *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Phone / WhatsApp (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
                  />
                </div>
              </div>

              {/* Grid 3: Industry & Data Source */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Industry Domain</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option>Textile & Apparel</option>
                    <option>Import / Export & Logistics</option>
                    <option>Tax, Finance & Accounting</option>
                    <option>Software / SaaS</option>
                    <option>Retail & E-commerce</option>
                    <option>Manufacturing & Wholesale</option>
                    <option>Professional Services & Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">Data Format Available</label>
                  <select
                    value={formData.dataSourceType}
                    onChange={(e) => setFormData({ ...formData, dataSourceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option>Excel (.xlsx / .xls)</option>
                    <option>CSV Files</option>
                    <option>Photos / Scans of Paper Records</option>
                    <option>QuickBooks / Xero / ERP Export</option>
                    <option>Google Sheets Link</option>
                    <option>SQL Database Dump</option>
                  </select>
                </div>
              </div>

              {/* Primary Challenge */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">
                  What specific question or problem do you want answered?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Which products give highest margins? Why did revenue drop in Q1?"
                  value={formData.keyChallenge}
                  onChange={(e) => setFormData({ ...formData, keyChallenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#1A1A1A]/20 text-xs text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]"
                />
              </div>

              {/* File Upload Simulation / Dropzone */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/80">
                  Attach Sample Records or Data (Optional at this step)
                </label>
                <label className="flex flex-col items-center justify-center p-4 border border-dashed border-[#1A1A1A]/30 hover:border-[#1A1A1A] bg-white cursor-pointer transition-colors">
                  <div className="flex flex-col items-center justify-center space-y-1 text-center">
                    <Upload className="w-5 h-5 text-[#1A1A1A] mb-1" />
                    <p className="text-xs font-semibold text-[#1A1A1A]">
                      {uploadedFileName ? (
                        <span className="text-emerald-700 flex items-center gap-1 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {uploadedFileName} (Attached)
                        </span>
                      ) : (
                        'Click to browse or drag & drop (Excel, CSV, or Photo)'
                      )}
                    </p>
                    <p className="text-[10px] text-[#1A1A1A]/60">
                      Files are encrypted and handled with strict confidentiality.
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".csv,.xlsx,.xls,.png,.jpg,.jpeg,.pdf"
                    onChange={handleFileDrop}
                  />
                </label>
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 font-bold text-xs uppercase tracking-[0.2em] text-white bg-[#1A1A1A] hover:bg-[#333333] border border-[#1A1A1A] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Request & Lock 48h Turnaround'}</span>
                </button>
              </div>

              {/* Privacy pledge */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#1A1A1A]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <span>Zero spam. Data is strictly analyzed for your report and never shared.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
