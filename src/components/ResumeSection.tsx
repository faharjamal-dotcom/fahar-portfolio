import React, { useState } from 'react';
import { 
  FileDown, 
  Linkedin, 
  Mail, 
  Printer, 
  Check, 
  Copy, 
  Sparkles, 
  Award, 
  Briefcase, 
  GraduationCap, 
  FileSpreadsheet, 
  Database, 
  Code2, 
  BarChart3,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { generateResumePDF } from '../utils/pdfGenerator';

interface ResumeSectionProps {
  onDownloadResume?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    try {
      generateResumePDF();
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="resume" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Download Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b border-[#1A1A1A]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70 mb-3">
              <FileDown className="w-3.5 h-3.5" />
              <span>Official Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
              Executive Resume & Credentials
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 mt-2 max-w-2xl">
              11 years of multi-industry commercial operations & high-impact data analytics experience formatted for executive review.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              id="resume-download-pdf-btn"
              disabled={isGenerating}
              className="px-6 py-3 font-bold text-xs uppercase tracking-[0.2em] text-white bg-[#1A1A1A] hover:bg-[#333333] border border-[#1A1A1A] shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-[#D4AF37]" />
              <span>{isGenerating ? 'Generating...' : 'Download Resume (PDF)'}</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="resume-linkedin-btn"
              className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-[#1A1A1A] bg-white hover:bg-stone-50 border border-[#1A1A1A]/20 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-[#1A1A1A]" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#1A1A1A]/50" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-[#1A1A1A] bg-white hover:bg-stone-50 border border-[#1A1A1A]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
              <span>{copiedEmail ? 'Copied' : 'Email'}</span>
            </button>
          </div>
        </div>

        {/* ATS-Style Printable Resume Document Card */}
        <div className="max-w-4xl mx-auto bg-white border border-[#1A1A1A]/20 shadow-xl p-6 sm:p-10 space-y-8">
          
          {/* Header */}
          <div className="border-b border-[#1A1A1A]/15 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {RESUME_DATA.name}
              </h3>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mt-1">
                {RESUME_DATA.title}
              </p>
              <p className="text-xs text-[#1A1A1A]/60 mt-0.5">
                11 Years Multi-Industry Experience • Textile, Import/Export, Tax, Software
              </p>
            </div>

            <div className="text-xs font-mono text-[#1A1A1A]/70 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:underline text-[#1A1A1A]">
                  {RESUME_DATA.contact.email}
                </a>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-[#1A1A1A]" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#1A1A1A]">
                  {RESUME_DATA.contact.linkedin}
                </a>
              </p>
              <p className="text-[#1A1A1A]/60">{RESUME_DATA.contact.location}</p>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] pb-1 border-b border-[#1A1A1A]/10">
              Executive Summary
            </h4>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed pt-1 font-normal">
              {RESUME_DATA.executiveSummary}
            </p>
          </div>

          {/* Section 2: Technical Competencies */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] pb-1 border-b border-[#1A1A1A]/10">
              Core Technical Competencies
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="p-3.5 bg-[#FAF9F6] border border-[#1A1A1A]/10">
                <p className="font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  Business Intelligence & DAX:
                </p>
                <p className="text-xs text-[#1A1A1A]/70 font-mono">{RESUME_DATA.technicalSkills.businessIntelligence.join(', ')}</p>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#1A1A1A]/10">
                <p className="font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  Databases & SQL Engineering:
                </p>
                <p className="text-xs text-[#1A1A1A]/70 font-mono">{RESUME_DATA.technicalSkills.databasesAndQuerying.join(', ')}</p>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#1A1A1A]/10">
                <p className="font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  Python & Statistical Pipelines:
                </p>
                <p className="text-xs text-[#1A1A1A]/70 font-mono">{RESUME_DATA.technicalSkills.programmingAndScripting.join(', ')}</p>
              </div>

              <div className="p-3.5 bg-[#FAF9F6] border border-[#1A1A1A]/10">
                <p className="font-bold text-[#1A1A1A] mb-1 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-[#1A1A1A]" />
                  Advanced Excel & Financial Models:
                </p>
                <p className="text-xs text-[#1A1A1A]/70 font-mono">{RESUME_DATA.technicalSkills.spreadsheetMastery.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* Section 3: Professional Experience */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] pb-1 border-b border-[#1A1A1A]/10">
              Professional Experience
            </h4>

            <div className="space-y-6 pt-1">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h5 className="text-sm font-bold text-[#1A1A1A]">
                      {exp.role} — <span className="text-[#1A1A1A]/70 font-serif italic">{exp.company}</span>
                    </h5>
                    <span className="text-xs font-mono text-[#1A1A1A]/60">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#1A1A1A]/80 leading-relaxed marker:text-[#1A1A1A]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#1A1A1A]/10">
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Education
              </h4>
              <div className="text-xs text-[#1A1A1A]/80">
                <p className="font-bold text-[#1A1A1A]">{RESUME_DATA.education[0].degree}</p>
                <p className="text-[#1A1A1A]/60 font-mono">{RESUME_DATA.education[0].field} • {RESUME_DATA.education[0].year}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Certifications & Specializations
              </h4>
              <ul className="space-y-1 text-xs text-[#1A1A1A]/80">
                {RESUME_DATA.certifications.map((cert, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1A1A1A]" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Document Bottom Download Reminder */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center justify-between">
            <span className="text-xs text-[#1A1A1A]/60 font-serif italic">
              Official verification & career profile documentation
            </span>
            <button
              onClick={handleDownloadPDF}
              className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Download PDF Copy</span>
              <FileDown className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
