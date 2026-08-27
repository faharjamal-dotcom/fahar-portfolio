import React from 'react';
import { 
  Linkedin, 
  Mail, 
  FileDown, 
  Sparkles, 
  ArrowUp, 
  BarChart3,
  Heart
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onRequestReportClick: () => void;
  onDownloadResumeClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRequestReportClick,
  onDownloadResumeClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#FAF9F6] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Overview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-white/20 bg-white/10 flex items-center justify-center text-[#FAF9F6] font-serif font-bold text-base">
                FJ
              </div>
              <div>
                <span className="text-base font-serif italic tracking-wide text-white">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-normal">
              11 years of multi-industry business domain experience across Textile, Import/Export, Tax, and Software, specializing in high-impact Data Analytics with Excel, Power BI, SQL, and Python.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-white/5 hover:bg-white/15 text-white/80 hover:text-white border border-white/10 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onDownloadResumeClick}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">Portfolio Index</p>
            <ul className="space-y-2 text-xs font-mono text-white/70">
              <li>
                <a href="#free-report" className="hover:text-white transition-colors">
                  01. Complimentary Report
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  02. Commercial Case Studies
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  03. Technical Stack & Domains
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  04. 11-Year Career Trajectory
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-white transition-colors">
                  05. Executive Resume
                </a>
              </li>
              <li>
                <a href="#referral" className="hover:text-white transition-colors">
                  06. Referral Network
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Free Offer Callout */}
          <div className="md:col-span-4 p-6 bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#D4AF37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Open for Data Audits & Roles
              </span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed font-normal">
              Have sales, financial, or operational data you'd like analyzed for free? Receive your custom 4-page report within 48 hours.
            </p>
            <button
              onClick={onRequestReportClick}
              className="w-full py-2.5 font-bold text-xs uppercase tracking-[0.2em] text-[#1A1A1A] bg-white hover:bg-[#FAF9F6] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5 border border-white"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Claim Free 4-Page Report</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Data Analyst | Excel • Power BI • SQL • Python
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-white uppercase tracking-wider text-[11px] font-bold transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
