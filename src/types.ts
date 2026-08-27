export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Power BI' | 'SQL & Analytics' | 'Python & Modeling' | 'Advanced Excel';
  industry: 'Import / Export' | 'Textile & Apparel' | 'Tax & Finance' | 'Software / SaaS';
  period: string;
  summary: string;
  problem: string;
  approach: string;
  solution: string;
  impactMetrics: { label: string; value: string; detail: string }[];
  toolsUsed: string[];
  sqlSnippet?: string;
  pythonSnippet?: string;
  chartData: any[];
  chartType: 'line' | 'bar' | 'composed' | 'pie';
  keyInsights: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  companyOrDomain: string;
  industry: string;
  description: string;
  highlights: string[];
  skillsLeveraged: string[];
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  level: string;
  proficiency: number;
  coreCapabilities: string[];
  tools: string[];
}

export interface IndustryExperience {
  industry: string;
  years: string;
  icon: string;
  overview: string;
  domainKnowledge: string[];
  analyticsApplication: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  metricHighlight: string;
  reportOutcome: string;
}

export interface ReportRequestForm {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  dataSourceType: string;
  keyChallenge: string;
  preferredTimeline: string;
  notes: string;
}
