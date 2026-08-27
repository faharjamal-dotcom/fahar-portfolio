import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Menu, 
  X, 
  ArrowUpRight
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
    { label: 'Report', href: '#free-report' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Resume', href: '#resume' },
    { label: 'Referral', href: '#referral' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 shadow-xs py-3.5'
          : 'bg-[#FAF9F6] border-b border-[#1A1A1A]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand - Simple & Elegant */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center font-serif italic text-sm">
              FJ
            </div>
            <div>
              <span className="text-lg font-serif italic font-normal text-[#1A1A1A] tracking-tight block leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/60 block leading-tight">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation - Simple, clean text links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.15em] font-medium text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Simple Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onDownloadResumeClick}
              id="nav-resume-btn"
              className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] hover:bg-stone-200/60 transition-colors flex items-center gap-1.5 cursor-pointer border border-transparent hover:border-[#1A1A1A]/20"
            >
              <FileDown className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>Resume</span>
            </button>

            <button
              onClick={onRequestReportClick}
              id="nav-report-btn"
              className="px-4 py-2 text-xs uppercase tracking-[0.15em] font-semibold text-white bg-[#1A1A1A] hover:bg-[#333333] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Free Report</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onRequestReportClick}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1A1A]"
            >
              Free Report
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="nav-mobile-toggle"
              className="p-2 text-[#1A1A1A] hover:bg-stone-200/60 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Simple & Clean */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-[#1A1A1A]/10 space-y-1 bg-[#FAF9F6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-xs uppercase tracking-widest font-medium text-[#1A1A1A]/80 hover:text-[#1A1A1A] hover:bg-stone-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-[#1A1A1A]/10 space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onDownloadResumeClick();
                }}
                className="w-full text-left px-3 py-2 text-xs uppercase tracking-wider font-semibold text-[#1A1A1A] flex items-center gap-2 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

