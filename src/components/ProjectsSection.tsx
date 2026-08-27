import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Code2, 
  FileSpreadsheet, 
  TrendingUp, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight,
  Layers,
  Ship,
  ShieldCheck,
  Cpu,
  Sparkles
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend 
} from 'recharts';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [activeTab, setActiveTab] = useState<'visualizer' | 'overview' | 'code' | 'insights'>('visualizer');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getIndustryIcon = (industry: string) => {
    switch (industry) {
      case 'Import / Export':
        return <Ship className="w-4 h-4 text-[#1A1A1A]" />;
      case 'Textile & Apparel':
        return <Layers className="w-4 h-4 text-[#1A1A1A]" />;
      case 'Tax & Finance':
        return <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" />;
      case 'Software / SaaS':
        return <Cpu className="w-4 h-4 text-[#1A1A1A]" />;
      default:
        return <BarChart3 className="w-4 h-4 text-[#1A1A1A]" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-[#1A1A1A]/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-stone-100 text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/70 mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Commercial Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic font-light tracking-tight text-[#1A1A1A]">
              Featured Project Experience
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 mt-2 max-w-2xl">
              Real-world analytics solutions addressing high-stakes operational and financial challenges across an 11-year career.
            </p>
          </div>
          <div className="text-[11px] font-mono text-[#1A1A1A]/60 bg-white px-3.5 py-2 border border-[#1A1A1A]/15 shadow-sm">
            <span>Focus Areas: </span>
            <strong className="text-[#1A1A1A] font-bold">Textile • Import/Export • Tax • SaaS</strong>
          </div>
        </div>

        {/* Project Selector Cards (Horizontal Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROJECTS.map((project) => {
            const isSelected = project.id === currentProject.id;
            return (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProjectId(project.id);
                  setActiveTab('visualizer');
                }}
                id={`project-card-${project.id}`}
                className={`p-5 text-left transition-all cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-md'
                    : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40 hover:bg-stone-50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border ${
                      isSelected 
                        ? 'border-white/20 bg-white/10 text-white' 
                        : 'border-[#1A1A1A]/15 bg-stone-100 text-[#1A1A1A]/70'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug line-clamp-2 ${isSelected ? 'text-white' : 'text-[#1A1A1A]'}`}>
                    {project.title}
                  </h3>
                </div>

                <div className={`pt-3 mt-3 border-t flex items-center justify-between text-xs ${
                  isSelected ? 'border-white/15' : 'border-[#1A1A1A]/10'
                }`}>
                  <span className={`text-[11px] font-mono ${isSelected ? 'text-white/60' : 'text-[#1A1A1A]/50'}`}>
                    {project.period}
                  </span>
                  <span className={`font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 ${
                    isSelected ? 'text-[#D4AF37]' : 'text-[#1A1A1A]'
                  }`}>
                    View Case <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Panel */}
        <div className="bg-white border border-[#1A1A1A]/20 shadow-xl overflow-hidden">
          
          {/* Project Header Bar */}
          <div className="p-6 sm:p-8 border-b border-[#1A1A1A]/10 bg-[#FAF9F6] flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#1A1A1A] text-white">
                  {currentProject.category}
                </span>
                <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white text-[#1A1A1A] border border-[#1A1A1A]/20 flex items-center gap-1.5">
                  {getIndustryIcon(currentProject.industry)}
                  {currentProject.industry}
                </span>
                <span className="text-xs font-mono text-[#1A1A1A]/60">Timeline: {currentProject.period}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A]">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70">
                {currentProject.subtitle}
              </p>
            </div>

            {/* View Tabs */}
            <div className="flex items-center bg-white p-1 border border-[#1A1A1A]/15 shadow-sm">
              <button
                onClick={() => setActiveTab('visualizer')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'visualizer'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                Interactive Chart
              </button>
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                Problem & Solution
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'code'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                SQL / Python Code
              </button>
              <button
                onClick={() => setActiveTab('insights')}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'insights'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                Impact Metrics
              </button>
            </div>
          </div>

          {/* Project Body */}
          <div className="p-6 sm:p-8 bg-white">

            {/* TAB 1: INTERACTIVE CHART / VISUALIZER */}
            {activeTab === 'visualizer' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-[#1A1A1A]">Metric Trajectory & Diagnostic Model</h4>
                    <p className="text-xs text-[#1A1A1A]/60">Data model outputs & operational efficiency markers</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.toolsUsed.map((tool, idx) => (
                      <span key={idx} className="text-[11px] font-mono font-medium px-2 py-0.5 bg-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A]/15">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15">
                  <div className="h-72 sm:h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      {currentProject.chartType === 'composed' ? (
                        <ComposedChart data={currentProject.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="2 2" stroke="#E5E4E0" />
                          <XAxis dataKey="month" stroke="#666666" fontSize={11} />
                          <YAxis stroke="#666666" fontSize={11} />
                          <Tooltip contentStyle={{ backgroundColor: '#FAF9F6', borderColor: '#1A1A1A', borderRadius: '0px', fontSize: '12px', color: '#1A1A1A', boxShadow: '2px 2px 0px rgba(0,0,0,0.1)' }} />
                          <Legend wrapperStyle={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                          <Bar dataKey="demurrageCost" name="Demurrage Penalty ($)" fill="#A93226" />
                          <Line type="monotone" dataKey="dwellDays" name="Avg Dwell Days" stroke="#1A1A1A" strokeWidth={2.5} />
                          <Line type="monotone" dataKey="savings" name="Cost Savings Realized ($)" stroke="#C5A059" strokeWidth={2} />
                        </ComposedChart>
                      ) : currentProject.chartType === 'bar' ? (
                        <BarChart data={currentProject.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="2 2" stroke="#E5E4E0" />
                          <XAxis dataKey="month" stroke="#666666" fontSize={11} />
                          <YAxis stroke="#666666" fontSize={11} />
                          <Tooltip contentStyle={{ backgroundColor: '#FAF9F6', borderColor: '#1A1A1A', borderRadius: '0px', fontSize: '12px', color: '#1A1A1A', boxShadow: '2px 2px 0px rgba(0,0,0,0.1)' }} />
                          <Legend wrapperStyle={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                          <Bar dataKey="scrapRate" name="Scrap Rate %" fill="#A93226" />
                          <Bar dataKey="targetRate" name="Target Benchmark %" fill="#8C827A" />
                          <Bar dataKey="processed" name="Total Invoices" fill="#1A1A1A" />
                          <Bar dataKey="autoMatched" name="Auto-Matched" fill="#C5A059" />
                        </BarChart>
                      ) : (
                        <LineChart data={currentProject.chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="2 2" stroke="#E5E4E0" />
                          <XAxis dataKey="month" stroke="#666666" fontSize={11} />
                          <YAxis stroke="#666666" fontSize={11} />
                          <Tooltip contentStyle={{ backgroundColor: '#FAF9F6', borderColor: '#1A1A1A', borderRadius: '0px', fontSize: '12px', color: '#1A1A1A', boxShadow: '2px 2px 0px rgba(0,0,0,0.1)' }} />
                          <Legend wrapperStyle={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                          <Line type="monotone" dataKey="cohortJan" name="Jan Cohort Retention %" stroke="#1A1A1A" strokeWidth={2.5} />
                          <Line type="monotone" dataKey="cohortMar" name="Mar Cohort Retention %" stroke="#C5A059" strokeWidth={2} />
                          <Line type="monotone" dataKey="industryAvg" name="Industry Benchmark %" stroke="#8C827A" strokeDasharray="4 4" strokeWidth={1.5} />
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Key Insights Callouts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  {currentProject.keyInsights.map((insight, idx) => (
                    <div key={idx} className="p-4 bg-stone-50 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: PROBLEM & SOLUTION OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15 text-sm text-[#1A1A1A]/80 leading-relaxed">
                  <strong className="text-[#1A1A1A] uppercase tracking-wider text-xs font-bold block mb-1">Executive Summary: </strong>
                  {currentProject.summary}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Problem Statement */}
                  <div className="p-6 bg-stone-50 border border-stone-300 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-700 block">
                      The Operational Challenge / Problem
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {currentProject.problem}
                    </p>
                  </div>

                  {/* Approach & Solution */}
                  <div className="p-6 bg-[#FAF9F6] border border-[#1A1A1A]/20 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] block">
                      Analytical Approach & Solution
                    </span>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-normal">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Applied Methodology */}
                <div className="p-5 bg-stone-50 border border-[#1A1A1A]/10 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/60 block">
                    Execution Methodology:
                  </span>
                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed">
                    {currentProject.approach}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: CODE SNIPPET (SQL / PYTHON) */}
            {activeTab === 'code' && (
              <div className="space-y-6 animate-fadeIn">
                {currentProject.sqlSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        Production SQL Query & Data Transformation
                      </span>
                      <button
                        onClick={() => handleCopyCode(currentProject.sqlSnippet!)}
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-[#1A1A1A]/20 bg-white hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied' : 'Copy SQL'}</span>
                      </button>
                    </div>
                    <pre className="p-4 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-mono border border-[#1A1A1A] overflow-x-auto leading-relaxed">
                      <code>{currentProject.sqlSnippet}</code>
                    </pre>
                  </div>
                )}

                {currentProject.pythonSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A] flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        Python Data Pipeline / Statistical Modeling Snippet
                      </span>
                      <button
                        onClick={() => handleCopyCode(currentProject.pythonSnippet!)}
                        className="px-3 py-1 text-xs font-bold uppercase tracking-wider border border-[#1A1A1A]/20 bg-white hover:bg-[#1A1A1A] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied' : 'Copy Python'}</span>
                      </button>
                    </div>
                    <pre className="p-4 bg-[#1A1A1A] text-[#FAF9F6] text-xs font-mono border border-[#1A1A1A] overflow-x-auto leading-relaxed">
                      <code>{currentProject.pythonSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: IMPACT METRICS */}
            {activeTab === 'insights' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentProject.impactMetrics.map((metric, idx) => (
                    <div key={idx} className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15 space-y-2 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50">{metric.label}</p>
                      <p className="text-3xl font-bold font-sans text-[#1A1A1A]">{metric.value}</p>
                      <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-normal">{metric.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-[#1A1A1A] text-white border border-[#1A1A1A] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    Why 11 Years of Domain Acumen Mattered Here:
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Generic data analysis only summarizes what happened in the past. Because of direct exposure to {currentProject.industry} supply chains, tax codes, and operational schedules, the metrics were engineered to capture underlying root causes, yielding direct bottom-line financial recoveries.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
