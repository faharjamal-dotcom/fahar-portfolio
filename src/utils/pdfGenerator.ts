import { jsPDF } from 'jspdf';
import { RESUME_DATA, PERSONAL_INFO } from '../data/portfolioData';

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let currentY = 18;

  // Header Background bar
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, pageWidth, 32, 'F');

  // Name & Title
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text(RESUME_DATA.name.toUpperCase(), margin, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184); // slate-400
  doc.text(`${RESUME_DATA.title} | 11 Years Cross-Industry Experience`, margin, 21);

  // Contact Info bar
  doc.setFontSize(8.5);
  doc.setTextColor(226, 232, 240);
  const contactText = `Email: ${RESUME_DATA.contact.email}   |   LinkedIn: ${RESUME_DATA.contact.linkedin}   |   ${RESUME_DATA.contact.location}`;
  doc.text(contactText, margin, 27);

  currentY = 38;

  // Helper for Section Titles
  const addSectionTitle = (title: string) => {
    if (currentY > pageHeight - 30) {
      doc.addPage();
      currentY = 18;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title.toUpperCase(), margin, currentY);
    
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.4);
    doc.line(margin, currentY + 1.5, pageWidth - margin, currentY + 1.5);
    
    currentY += 6;
  };

  // 1. Executive Summary
  addSectionTitle('Executive Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // slate-700
  
  const splitSummary = doc.splitTextToSize(RESUME_DATA.executiveSummary, pageWidth - (margin * 2));
  doc.text(splitSummary, margin, currentY);
  currentY += splitSummary.length * 4.2 + 4;

  // 2. Core Technical Skills
  addSectionTitle('Core Technical & Analytical Competencies');
  doc.setFontSize(8.5);
  
  const skillCategories = [
    { label: 'Business Intelligence & DAX:', items: RESUME_DATA.technicalSkills.businessIntelligence.join(', ') },
    { label: 'Databases & SQL Engineering:', items: RESUME_DATA.technicalSkills.databasesAndQuerying.join(', ') },
    { label: 'Python & Statistical Modeling:', items: RESUME_DATA.technicalSkills.programmingAndScripting.join(', ') },
    { label: 'Advanced Excel & Financial Models:', items: RESUME_DATA.technicalSkills.spreadsheetMastery.join(', ') },
    { label: 'Domain Expertise (11 Yrs):', items: RESUME_DATA.technicalSkills.domainExpertise.join(' | ') },
  ];

  skillCategories.forEach((skill) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(skill.label, margin, currentY);
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const splitItems = doc.splitTextToSize(skill.items, pageWidth - margin - 65);
    doc.text(splitItems, margin + 55, currentY);
    currentY += Math.max(splitItems.length * 4, 4.5);
  });

  currentY += 3;

  // 3. Professional Experience
  addSectionTitle('Professional Experience & Career Trajectory');

  RESUME_DATA.experience.forEach((job) => {
    if (currentY > pageHeight - 35) {
      doc.addPage();
      currentY = 18;
    }

    // Role & Company Line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(job.role, margin, currentY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(job.period, pageWidth - margin, currentY, { align: 'right' });
    currentY += 4;

    doc.setFont('helvetica', 'italic');
    doc.setTextColor(37, 99, 235); // blue-600
    doc.text(job.company, margin, currentY);
    currentY += 4.5;

    // Bullet points
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.setFontSize(8);

    job.bullets.forEach((bullet) => {
      if (currentY > pageHeight - 20) {
        doc.addPage();
        currentY = 18;
      }
      doc.text('•', margin + 2, currentY);
      const splitBullet = doc.splitTextToSize(bullet, pageWidth - (margin * 2) - 6);
      doc.text(splitBullet, margin + 6, currentY);
      currentY += splitBullet.length * 3.8 + 1;
    });

    currentY += 2.5;
  });

  // 4. Education & Certifications
  if (currentY > pageHeight - 40) {
    doc.addPage();
    currentY = 18;
  }

  addSectionTitle('Education & Professional Certifications');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Education:', margin, currentY);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  doc.text(`${RESUME_DATA.education[0].degree} — ${RESUME_DATA.education[0].field} (${RESUME_DATA.education[0].year})`, margin + 22, currentY);
  currentY += 5;

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text('Certifications:', margin, currentY);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  const certText = RESUME_DATA.certifications.join('  •  ');
  const splitCerts = doc.splitTextToSize(certText, pageWidth - margin - 26);
  doc.text(splitCerts, margin + 24, currentY);

  // Footer on each page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Fahar Jamal — Resume | LinkedIn: ${PERSONAL_INFO.linkedin} | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  // Save the PDF
  doc.save('Fahar_Jamal_Data_Analyst_Resume.pdf');
}
