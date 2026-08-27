import React from 'react';
import { 
  BarChart3, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  FileSpreadsheet, 
  Camera, 
  MessageSquareQuote, 
  Share2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ReportInteractivePreview } from './ReportInteractivePreview';

interface FreeReportBannerProps {
  onRequestReportClick: () => void;
}

export const FreeReportBanner: React.FC<FreeReportBannerProps> = ({
  onRequestReportClick,
}) => {
  return (
    <section id="free-report" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Special Invitation • 48-Hour Turnaround</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
            Complimentary 4-Page Business Insight Report
          </h2>

          <p className="text-base text-[#1A1A1A]/75 leading-relaxed font-normal">
            I am offering comprehensive, bespoke diagnostic data reports to business owners and founders — <strong className="text-[#1A1A1A] font-semibold">100% free of charge</strong>. All I ask in return is an honest testimonial if you find tangible clarity in your numbers.
          </p>
        </div>

        {/* 4 Pillars of the Free Deliverable - Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PERSONAL_INFO.freeOffer.deliverables.map((item) => (
            <div 
              key={item.page}
              className="p-6 bg-white border border-[#1A1A1A]/15 flex flex-col justify-between shadow-[2px_2px_0px_rgba(0,0,0,0.03)] hover:border-[#1A1A1A]/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2.5">
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-[#1A1A1A] text-[#FAF9F6]">
                    PAGE {item.page}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">Standard PDF</span>
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-semibold text-[#1A1A1A]">
                <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Included in Audit</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-stone-900" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Preview Container */}
        <div className="mb-14">
          <ReportInteractivePreview onRequestReportClick={onRequestReportClick} />
        </div>

        {/* How It Works & Requirements Strip - Editorial Dossier style */}
        <div className="p-7 sm:p-9 bg-white border border-[#1A1A1A]/20 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-[#1A1A1A]" />
                What You Provide:
              </span>
              <p className="text-base font-bold text-[#1A1A1A]">
                Any raw sales, finance, or operational data
              </p>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Excel (.xlsx), CSV, ERP database export, or even clear photos/scans of paper ledger records.
              </p>
            </div>

            <div className="space-y-2 border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10 pt-5 lg:pt-0 lg:pl-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#1A1A1A]" />
                Delivery Timeframe:
              </span>
              <p className="text-base font-bold text-[#1A1A1A]">
                Completed within 48 Hours
              </p>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Strict 48-hour delivery from data receipt to finished Executive PDF and diagnosis summary.
              </p>
            </div>

            <div className="space-y-3 border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10 pt-5 lg:pt-0 lg:pl-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-[#1A1A1A]/80 italic">
                <MessageSquareQuote className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Single ask: An honest testimonial if valuable</span>
              </div>
              <button
                onClick={onRequestReportClick}
                id="free-report-banner-cta"
                className="w-full py-3 px-5 font-bold text-xs uppercase tracking-wider text-[#FAF9F6] bg-[#1A1A1A] hover:bg-black active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Request Free Report for Your Data</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
