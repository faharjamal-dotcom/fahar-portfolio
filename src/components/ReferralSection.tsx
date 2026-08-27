import React, { useState } from 'react';
import { 
  Share2, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Sparkles, 
  Users, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ReferralSection: React.FC = () => {
  const [copiedPitch, setCopiedPitch] = useState(false);

  const referralPitchText = `Hey! I came across Fahar Jamal, a Data Analyst with 11 years of multi-industry experience (Textile, Import/Export, Tax, Software). He's currently offering a complimentary 4-page Business Data Analysis Report (KPIs, visual trend charts, and 3 actionable profit/cost recommendations) delivered in 48 hours for free in exchange for an honest testimonial. Check out his portfolio & offer here: ${window.location.href}`;

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(referralPitchText);
    setCopiedPitch(true);
    setTimeout(() => setCopiedPitch(false), 2500);
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent('Complimentary 4-Page Business Data Analysis Report by Fahar Jamal');
    const body = encodeURIComponent(referralPitchText);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(referralPitchText);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <section id="referral" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white border border-[#1A1A1A]/20 p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Community & Founder Network Referral</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
              Know a Business Owner Who Needs Clarity in Their Numbers?
            </h2>

            <p className="text-sm sm:text-base text-[#1A1A1A]/70 max-w-2xl mx-auto leading-relaxed">
              If this complimentary 4-page report isn't directly relevant for you right now, I would truly appreciate it if you could forward this to someone in your network who might benefit — <strong className="text-[#1A1A1A] font-semibold">a colleague, a business contact, or a fellow founder</strong>.
            </p>
          </div>

          {/* Quick Pitch Box */}
          <div className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                Ready-to-Send Forwarding Pitch:
              </span>
              <button
                onClick={handleCopyPitch}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] border border-[#1A1A1A]/20 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copiedPitch ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPitch ? 'Copied to Clipboard!' : 'Copy Pitch'}</span>
              </button>
            </div>

            <p className="text-xs text-[#1A1A1A]/80 font-serif italic bg-white p-4 border border-[#1A1A1A]/10 leading-relaxed">
              "{referralPitchText}"
            </p>
          </div>

          {/* 1-Click Sharing Buttons */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-center text-[#1A1A1A]/60">
              Share Directly via:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={handleShareWhatsApp}
                className="p-3 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleShareLinkedIn}
                className="p-3 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={handleShareEmail}
                className="p-3 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Forward Email</span>
              </button>

              <button
                onClick={handleCopyPitch}
                className="p-3 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-white border border-[#1A1A1A]/15 text-[#1A1A1A] font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </button>
            </div>
          </div>

          {/* Personal Note */}
          <div className="text-center pt-2 border-t border-[#1A1A1A]/10">
            <p className="text-xs text-[#1A1A1A]/60 font-serif italic">
              "Thank you for helping support independent, high-impact data analytics." — <strong className="text-[#1A1A1A] not-italic">{PERSONAL_INFO.name}</strong>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
