import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  FileDown, 
  Linkedin, 
  Mail, 
  Sparkles, 
  Menu, 
  X, 
  Clock, 
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onRequestReportClick: () => void;
  onDownloadResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestReportClick,
  onDownloadResumeClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Free 4-Page Report', href: '#free-report', highlight: true },
    { label: 'Project Experience', href: '#projects' },
    { label: 'Technical Stack', href: '#skills' },
    { label: '11-Yr Trajectory', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Refer a Contact', href: '#referral' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/15 shadow-sm py-3'
          : 'bg-[#FAF9F6] border-b border-[#1A1A1A]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 bg-[#1A1A1A] flex items-center justify-center text-[#FAF9F6] font-serif italic text-base font-light transition-transform group-hover:scale-105">
              FJ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-serif italic font-normal text-[#1A1A1A] tracking-tight group-hover:opacity-75 transition-opacity">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 border border-[#1A1A1A]/20 bg-stone-100 text-[#1A1A1A]/80 hidden sm:inline-block">
                  48h Report Offer
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#1A1A1A]/50">
                Data Strategist • SQL | Python | Power BI | Excel
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-widest font-semibold text-[#1A1A1A]/70" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-all py-1 ${
                  link.highlight
                    ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A] font-bold flex items-center gap-1.5'
                    : 'hover:text-[#1A1A1A] hover:border-b hover:border-[#1A1A1A]/40'
                }`}
              >
                {link.highlight && <Sparkles className="w-3 h-3 text-[#D4AF37]" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-link"
              className="p-2 text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-stone-200/60 border border-[#1A1A1A]/15 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onDownloadResumeClick}
              id="nav-download-resume-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A] bg-transparent hover:bg-[#1A1A1A] hover:text-[#FAF9F6] border border-[#1A1A1A]/30 transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </button>

            <button
              onClick={onRequestReportClick}
              id="nav-request-free-report-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-[11px] uppercase tracking-wider font-bold text-[#FAF9F6] bg-[#1A1A1A] hover:bg-black active:scale-[0.98] border border-[#1A1A1A] transition-all cursor-pointer shadow-sm"
            >
              <BarChart3 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Get Free Report (48h)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onRequestReportClick}
              id="nav-mobile-quick-btn"
              className="px-3 py-1.5 text-[10px] uppercase tracking-wider font-bold text-white bg-[#1A1A1A]"
            >
              Free Report
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 text-[#1A1A1A] hover:bg-stone-200/60"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#1A1A1A]/10 pb-3 space-y-2 bg-[#FAF9F6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs uppercase tracking-widest font-semibold text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-stone-200/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1A1A1A]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onDownloadResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A] border border-[#1A1A1A]/30"
              >
                <FileDown className="w-4 h-4" />
                Download Resume (PDF)
              </button>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A] border border-[#1A1A1A]/20"
              >
                <Linkedin className="w-4 h-4" />
                View LinkedIn Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
