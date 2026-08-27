import React from 'react';
import { 
  BarChart3, 
  FileDown, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Layers, 
  Database, 
  FileSpreadsheet, 
  Code2, 
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onRequestReportClick: () => void;
  onDownloadResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestReportClick,
  onDownloadResumeClick,
}) => {
  return (
    <section 
      id="hero-section" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9F6] border-b border-[#1A1A1A]/10 text-[#1A1A1A]"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Eyebrow & Issue Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/50">
              Commercial Analytics Dossier • 11 Years Acumen
            </span>
            <span className="h-1 w-1 rounded-full bg-[#1A1A1A]/40" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
              Special Offer: 48h Turnaround
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]/40 hidden sm:block">
            Karachi, PK • Serving Global Markets
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Headline & Editorial Context */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#1A1A1A]/50 block">
                Executive Profile
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-[#1A1A1A] leading-[0.92]">
                DATA<br />
                <span className="font-serif italic font-light tracking-normal text-[#1A1A1A]">STRATEGIST.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A]/80 pt-1 leading-snug">
                "Finding the operational P&L truth hidden behind enterprise numbers."
              </p>
            </div>

            {/* Context Paragraph */}
            <p className="text-base sm:text-lg text-[#1A1A1A]/75 leading-relaxed font-normal max-w-2xl">
              Leveraging <strong className="text-[#1A1A1A] font-semibold">11 years of hands-on business operations</strong> across Textile Manufacturing, Global Import/Export, Corporate Tax, and Enterprise Software to deliver precision business intelligence through SQL, Python, Power BI, and Advanced Excel.
            </p>

            {/* Core Tools - Editorial badges */}
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/40 mb-3">
                Technical Arsenal
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 border border-[#1A1A1A]/20 bg-white text-[11px] font-medium text-[#1A1A1A] flex items-center gap-1.5 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
                  Advanced Excel (11 Yrs)
                </span>
                <span className="px-3 py-1.5 border border-[#1A1A1A]/20 bg-white text-[11px] font-medium text-[#1A1A1A] flex items-center gap-1.5 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
                  <BarChart3 className="w-3.5 h-3.5 text-amber-700" />
                  Power BI & DAX
                </span>
                <span className="px-3 py-1.5 border border-[#1A1A1A]/20 bg-white text-[11px] font-medium text-[#1A1A1A] flex items-center gap-1.5 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
                  <Database className="w-3.5 h-3.5 text-sky-800" />
                  SQL (PostgreSQL / MySQL)
                </span>
                <span className="px-3 py-1.5 border border-[#1A1A1A]/20 bg-white text-[11px] font-medium text-[#1A1A1A] flex items-center gap-1.5 shadow-[1px_1px_0px_rgba(0,0,0,0.05)]">
                  <Code2 className="w-3.5 h-3.5 text-slate-800" />
                  Python (Pandas / NumPy)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onRequestReportClick}
                id="hero-cta-free-report"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 font-bold text-xs uppercase tracking-wider text-[#FAF9F6] bg-[#1A1A1A] hover:bg-black active:scale-[0.98] border border-[#1A1A1A] shadow-md transition-all cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Claim Free 4-Page Report</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onDownloadResumeClick}
                id="hero-cta-download-resume"
                className="inline-flex items-center gap-2 px-5 py-3.5 font-bold text-xs uppercase tracking-wider text-[#1A1A1A] bg-transparent hover:bg-white border border-[#1A1A1A]/30 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-linkedin"
                className="inline-flex items-center gap-2 px-4 py-3.5 font-bold text-xs uppercase tracking-wider text-[#1A1A1A]/80 hover:text-[#1A1A1A] border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/50 bg-white/60 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Trust Reassurance note */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-[#1A1A1A]/60 pt-2 border-t border-[#1A1A1A]/10">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-900" />
                100% Free & No Hidden Fees
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-stone-900" />
                Strict 48-Hour Turnaround
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-900" />
                Confidential & NDA Safe
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Dark Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1A1A1A] text-white p-7 sm:p-8 border border-[#1A1A1A] shadow-2xl">
              
              {/* Gold Corner Badge */}
              <div className="absolute -top-3.5 -right-2 sm:-right-3 bg-[#D4AF37] text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                Limited Offer
              </div>

              {/* Header */}
              <div className="pb-5 border-b border-white/15 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/50 block">
                  Complimentary Offer
                </span>
                <h3 className="text-2xl font-serif italic font-light tracking-tight text-white">
                  4-Page Business Insight Report
                </h3>
                <p className="text-xs text-white/70">
                  Custom analysis delivered within <span className="text-[#D4AF37] font-bold">48 hours</span>
                </p>
              </div>

              {/* 4-Page Deliverable Grid */}
              <div className="my-6 space-y-3">
                <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#D4AF37] pt-0.5">P.1</span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Executive KPI Summary</h4>
                    <p className="text-[11px] text-white/60">Revenue velocity, YoY growth %, and gross margin health</p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#D4AF37] pt-0.5">P.2-3</span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">Visual Trends & Matrix</h4>
                    <p className="text-[11px] text-white/60">Seasonal swings, channel margin breakdown, and cost leakages</p>
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#D4AF37] pt-0.5">P.4</span>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">3 Actionable Recommendations</h4>
                    <p className="text-[11px] text-white/60">Data-backed tactical moves to expand margin and cut dead stock</p>
                  </div>
                </div>
              </div>

              {/* Accepted Formats */}
              <div className="space-y-2 pt-2 pb-5 border-t border-white/15">
                <p className="text-[11px] text-white/60">
                  <strong className="text-white">Supported formats:</strong> Excel, CSV, Google Sheets, or photos/scans of ledgers.
                </p>
                <p className="text-[10px] text-white/40 italic">
                  In return, I only request an honest testimonial if the analysis delivers clear business clarity.
                </p>
              </div>

              {/* Action */}
              <button
                onClick={onRequestReportClick}
                id="hero-card-claim-btn"
                className="w-full py-3 font-bold text-xs uppercase tracking-wider text-black bg-[#FAF9F6] hover:bg-white active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <BarChart3 className="w-4 h-4 text-black" />
                <span>Request Your Free Report (48h)</span>
              </button>

            </div>
          </div>

        </div>

        {/* 4 Industry Domain Experience Strip */}
        <div className="mt-14 pt-8 border-t border-[#1A1A1A]/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]">
            <div className="p-2 border border-[#1A1A1A]/10 text-[#1A1A1A]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Textile & Apparel</p>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5">Batch Yields & Scrap Controls</p>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]">
            <div className="p-2 border border-[#1A1A1A]/10 text-[#1A1A1A]">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Import / Export</p>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5">Demurrage & Landed Margin</p>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]">
            <div className="p-2 border border-[#1A1A1A]/10 text-[#1A1A1A]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Tax & Finance</p>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5">VAT Audits & Ledger Matches</p>
            </div>
          </div>

          <div className="p-4 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]">
            <div className="p-2 border border-[#1A1A1A]/10 text-[#1A1A1A]">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">Software & SaaS</p>
              <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5">Retention & Churn Telemetry</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
