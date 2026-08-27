import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  TrendingUp, 
  Layers, 
  Ship, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import { TIMELINE_HISTORY } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const getTimelineIcon = (industry: string) => {
    if (industry.includes('Textile')) return <Layers className="w-3.5 h-3.5 text-[#1A1A1A]" />;
    if (industry.includes('Import')) return <Ship className="w-3.5 h-3.5 text-[#1A1A1A]" />;
    if (industry.includes('Tax')) return <ShieldCheck className="w-3.5 h-3.5 text-[#1A1A1A]" />;
    if (industry.includes('Software')) return <Cpu className="w-3.5 h-3.5 text-[#1A1A1A]" />;
    return <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A]" />;
  };

  return (
    <section id="experience" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
            <Briefcase className="w-3.5 h-3.5" />
            <span>11-Year Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
            How Multi-Industry Experience Fuels Better Analytics
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70">
            Chronological progression demonstrating the operational foundations that make analytical insights pragmatic, grounded, and financially viable.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative border-l border-[#1A1A1A]/20 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-10">
          {TIMELINE_HISTORY.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 bg-[#1A1A1A] border-2 border-white flex items-center justify-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#FAF9F6]" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 bg-white border border-[#1A1A1A]/15 shadow-sm hover:border-[#1A1A1A]/40 transition-all space-y-3">
                
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A]/15 flex items-center gap-1.5">
                        {getTimelineIcon(item.industry)}
                        {item.industry}
                      </span>
                      <span className="text-xs font-mono text-[#1A1A1A]/60">{item.companyOrDomain}</span>
                    </div>
                    <h3 className="text-xl font-serif italic text-[#1A1A1A]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1A1A1A] bg-[#FAF9F6] px-3 py-1 border border-[#1A1A1A]/15">
                    <Calendar className="w-3.5 h-3.5 text-[#1A1A1A]" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Key Accomplishments */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
                    Key Outcomes & Responsibilities:
                  </p>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#1A1A1A]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skills used */}
                <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 mr-1">Skills Leveraged:</span>
                  {item.skillsLeveraged.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono px-2 py-0.5 bg-stone-100 text-[#1A1A1A]/70 border border-[#1A1A1A]/10">
                      {skill}
                    </span>
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
