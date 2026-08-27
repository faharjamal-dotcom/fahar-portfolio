import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  Code2, 
  Layers, 
  Ship, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { CORE_SKILLS, INDUSTRY_EXPERIENCE } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeDomainIndex, setActiveDomainIndex] = useState<number>(0);

  const getToolIcon = (name: string) => {
    if (name.includes('Excel')) return <FileSpreadsheet className="w-5 h-5 text-[#1A1A1A]" />;
    if (name.includes('Power BI')) return <BarChart3 className="w-5 h-5 text-[#1A1A1A]" />;
    if (name.includes('SQL')) return <Database className="w-5 h-5 text-[#1A1A1A]" />;
    return <Code2 className="w-5 h-5 text-[#1A1A1A]" />;
  };

  const getDomainIcon = (industry: string) => {
    if (industry.includes('Textile')) return <Layers className="w-4 h-4" />;
    if (industry.includes('Import')) return <Ship className="w-4 h-4" />;
    if (industry.includes('Tax')) return <ShieldCheck className="w-4 h-4" />;
    return <Cpu className="w-4 h-4" />;
  };

  return (
    <section id="skills" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Mastery & Industry Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
            The Analytical Stack & Domain Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70">
            A rare fusion of deep technical fluency (Excel, Power BI, SQL, Python) paired with 11 years of hands-on operations, tax, and supply chain experience.
          </p>
        </div>

        {/* 4 Core Tools Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {CORE_SKILLS.map((skill, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-7 bg-white border border-[#1A1A1A]/15 shadow-sm hover:border-[#1A1A1A]/40 transition-all space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#FAF9F6] border border-[#1A1A1A]/15">
                    {getToolIcon(skill.name)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{skill.name}</h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A]/60">{skill.level}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A]/15">
                  {skill.proficiency}% Proficiency
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                {skill.description}
              </p>

              {/* Capabilities Checklist */}
              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60">Core Capabilities:</p>
                {skill.coreCapabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-xs text-[#1A1A1A]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Tools tags */}
              <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-wrap gap-1.5">
                {skill.tools.map((t, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 bg-stone-100 text-[#1A1A1A]/70 border border-[#1A1A1A]/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 11 Years Cross-Industry Acumen Showcase */}
        <div className="bg-white border border-[#1A1A1A]/20 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1A1A1A]/10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/70">
                  11 Years Commercial Acumen
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A]">
                Industry Domains Where I Bring Immediate Insight
              </h3>
            </div>
            <span className="text-xs text-[#1A1A1A]/60 italic font-serif">
              "You can't analyze what you don't commercially understand."
            </span>
          </div>

          {/* Industry Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {INDUSTRY_EXPERIENCE.map((ind, idx) => {
              const isSelected = activeDomainIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveDomainIndex(idx)}
                  className={`p-3.5 text-left transition-all cursor-pointer flex items-center gap-3 border ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                      : 'bg-[#FAF9F6] text-[#1A1A1A] hover:bg-stone-100 border-[#1A1A1A]/15'
                  }`}
                >
                  <div className={`p-2 border ${isSelected ? 'border-white/20 bg-white/10' : 'border-[#1A1A1A]/10 bg-white'}`}>
                    {getDomainIcon(ind.industry)}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold truncate">{ind.industry}</p>
                    <p className={`text-[10px] font-mono ${isSelected ? 'text-white/60' : 'text-[#1A1A1A]/50'}`}>
                      {ind.years} Practice
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Domain Detail Box */}
          {INDUSTRY_EXPERIENCE[activeDomainIndex] && (
            <div className="p-6 bg-[#FAF9F6] border border-[#1A1A1A]/15 space-y-4 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-base font-bold text-[#1A1A1A] flex items-center gap-2">
                  {getDomainIcon(INDUSTRY_EXPERIENCE[activeDomainIndex].industry)}
                  {INDUSTRY_EXPERIENCE[activeDomainIndex].industry}
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#1A1A1A] text-white">
                  {INDUSTRY_EXPERIENCE[activeDomainIndex].years} Active Practice
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                {INDUSTRY_EXPERIENCE[activeDomainIndex].overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60">
                    Domain Mechanics & P&L Drivers:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#1A1A1A]/80">
                    {INDUSTRY_EXPERIENCE[activeDomainIndex].domainKnowledge.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#1A1A1A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white border border-[#1A1A1A]/15 space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] font-sans">
                    Analytics Application:
                  </p>
                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                    {INDUSTRY_EXPERIENCE[activeDomainIndex].analyticsApplication}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
