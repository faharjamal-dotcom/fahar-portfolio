import React from 'react';
import { 
  MessageSquareQuote, 
  Star, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

interface TestimonialsSectionProps {
  onRequestReportClick: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onRequestReportClick,
}) => {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Honest Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
            What Business Owners Say About the 4-Page Report
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70">
            Real outcomes from business leaders who provided raw records and received clear, actionable analytical roadmaps within 48 hours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="p-6 sm:p-7 bg-white border border-[#1A1A1A]/15 flex flex-col justify-between hover:border-[#1A1A1A]/40 shadow-sm transition-all space-y-4"
            >
              <div className="space-y-3">
                {/* 5 Stars & Metric Highlight Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/70 bg-[#FAF9F6] px-2 py-0.5 border border-[#1A1A1A]/15 uppercase tracking-wider">
                    {test.industry}
                  </span>
                </div>

                {/* Metric pill */}
                <div className="p-2.5 bg-stone-50 border border-stone-200 text-xs font-bold text-[#1A1A1A] flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                  <span>{test.metricHighlight}</span>
                </div>

                {/* Quote */}
                <p className="text-sm font-serif italic text-[#1A1A1A]/85 leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <p className="text-sm font-bold text-[#1A1A1A]">{test.clientName}</p>
                <p className="text-xs font-mono text-[#1A1A1A]/60">{test.role} • {test.company}</p>
                <p className="text-[10px] font-sans text-[#1A1A1A]/50 mt-1 uppercase tracking-wider">{test.reportOutcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="text-center">
          <button
            onClick={onRequestReportClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 font-bold text-xs uppercase tracking-[0.2em] text-white bg-[#1A1A1A] hover:bg-[#333333] transition-all border border-[#1A1A1A] cursor-pointer shadow-md"
          >
            <span>Claim Your 4-Page Report (48h Turnaround)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
