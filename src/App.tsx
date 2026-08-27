import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FreeReportBanner } from './components/FreeReportBanner';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResumeSection } from './components/ResumeSection';
import { ReferralSection } from './components/ReferralSection';
import { Footer } from './components/Footer';
import { RequestReportModal } from './components/RequestReportModal';
import { generateResumePDF } from './utils/pdfGenerator';
import confetti from 'canvas-confetti';

export default function App() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleOpenReportModal = () => {
    setIsReportModalOpen(true);
  };

  const handleCloseReportModal = () => {
    setIsReportModalOpen(false);
  };

  const handleDownloadResume = () => {
    try {
      generateResumePDF();
      confetti({
        particleCount: 65,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (err) {
      console.error('Failed to generate resume:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FAF9F6] font-sans antialiased">
      {/* Navigation */}
      <Navbar 
        onRequestReportClick={handleOpenReportModal}
        onDownloadResumeClick={handleDownloadResume}
      />

      {/* Main Content */}
      <main>
        {/* Executive Hero */}
        <Hero 
          onRequestReportClick={handleOpenReportModal}
          onDownloadResumeClick={handleDownloadResume}
        />

        {/* Free 4-Page Business Report Spotlight & Interactive Preview */}
        <FreeReportBanner 
          onRequestReportClick={handleOpenReportModal}
        />

        {/* Commercial Case Studies & Project Experience */}
        <ProjectsSection />

        {/* Analytical Stack & 4 Industry Domains */}
        <SkillsMatrix />

        {/* 11-Year Career Trajectory */}
        <ExperienceTimeline />

        {/* Client Testimonials */}
        <TestimonialsSection 
          onRequestReportClick={handleOpenReportModal}
        />

        {/* ATS Resume Viewer & PDF Download */}
        <ResumeSection 
          onDownloadResume={handleDownloadResume}
        />

        {/* Community & Founder Referral Engine */}
        <ReferralSection />
      </main>

      {/* Footer */}
      <Footer 
        onRequestReportClick={handleOpenReportModal}
        onDownloadResumeClick={handleDownloadResume}
      />

      {/* Interactive 48-Hour Free Report Request Modal */}
      <RequestReportModal 
        isOpen={isReportModalOpen}
        onClose={handleCloseReportModal}
      />
    </div>
  );
}
