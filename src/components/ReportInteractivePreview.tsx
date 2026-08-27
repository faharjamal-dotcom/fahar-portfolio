import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Lightbulb, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  DollarSign, 
  Percent, 
  Package, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  Legend,
  Cell
} from 'recharts';
import { SAMPLE_COMPLIMENTARY_REPORT } from '../data/portfolioData';

interface ReportInteractivePreviewProps {
  onRequestReportClick: () => void;
}

export const ReportInteractivePreview: React.FC<ReportInteractivePreviewProps> = ({
  onRequestReportClick,
}) => {
  const [activePage, setActivePage] = useState<number>(1);
  const report = SAMPLE_COMPLIMENTARY_REPORT;

  const pageTabs = [
    { num: 1, label: 'Page 1: KPI Summary', icon: BarChart3, badge: 'Executive Health' },
    { num: 2, label: 'Page 2: Trend Charts', icon: TrendingUp, badge: 'Time-Series Matrix' },
    { num: 3, label: 'Page 3: Cost Matrix', icon: PieChart, badge: 'SKU & Leakages' },
    { num: 4, label: 'Page 4: 3 Actions', icon: Lightbulb, badge: 'Actionable Wins' },
  ];

  return (
    <div id="report-interactive-container" className="bg-white border border-[#1A1A1A]/20 shadow-xl overflow-hidden text-[#1A1A1A]">
      
      {/* Top Banner / Sample Meta */}
      <div className="px-6 py-4 bg-[#FAF9F6] border-b border-[#1A1A1A]/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A]">
            <BarChart3 className="w-5 h-5 text-[#1A1A1A]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/60">
                Interactive Sample Report Preview
              </span>
              <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#1A1A1A] text-[#FAF9F6]">
                48h Delivery
              </span>
            </div>
            <p className="text-sm font-serif italic text-[#1A1A1A]">
              Prepared for: <span className="font-semibold not-italic">{report.clientName}</span> ({report.industry})
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#1A1A1A]/60">
          <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-mono border border-[#1A1A1A]/15 bg-white text-[#1A1A1A]">
            {report.datasetSize}
          </span>
          <button
            onClick={onRequestReportClick}
            className="px-4 py-2 font-bold text-xs uppercase tracking-wider text-white bg-[#1A1A1A] hover:bg-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Request for Your Business</span>
          </button>
        </div>
      </div>

      {/* Page Navigation Tabs */}
      <div className="px-4 sm:px-6 py-2.5 bg-[#FAF9F6] border-b border-[#1A1A1A]/10 grid grid-cols-2 md:grid-cols-4 gap-2">
        {pageTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activePage === tab.num;
          return (
            <button
              key={tab.num}
              onClick={() => setActivePage(tab.num)}
              id={`report-tab-page-${tab.num}`}
              className={`flex items-center gap-2.5 px-3 py-2 text-left transition-all cursor-pointer border ${
                isActive
                  ? 'bg-[#1A1A1A] text-[#FAF9F6] border-[#1A1A1A] shadow-sm'
                  : 'bg-white text-[#1A1A1A]/80 hover:bg-stone-100 border-[#1A1A1A]/10'
              }`}
            >
              <div className={`p-1.5 ${isActive ? 'bg-white/10 text-white' : 'bg-stone-100 text-[#1A1A1A]'}`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <p className="text-[11px] font-bold uppercase tracking-wider truncate">{tab.label}</p>
                <p className={`text-[10px] ${isActive ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/50'} truncate`}>
                  {tab.badge}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Page Content Body */}
      <div className="p-6 sm:p-8 min-h-[460px] bg-white">
        
        {/* PAGE 1: KPI SUMMARY */}
        {activePage === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/50 block">Page 1 of 4</span>
                <h3 className="text-2xl font-serif italic text-[#1A1A1A]">Executive KPI Summary & Health Pulse</h3>
              </div>
              <span className="text-xs text-[#1A1A1A]/60 italic">Turnaround: 48 hours guaranteed</span>
            </div>

            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
              {report.pages[0].summary}
            </p>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {report.pages[0].kpis?.map((kpi, idx) => (
                <div 
                  key={idx} 
                  className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 mb-1">{kpi.title}</p>
                  <div className="flex items-baseline gap-2 mb-1.5">
                    <span className="text-3xl font-bold font-sans text-[#1A1A1A]">{kpi.value}</span>
                    <span className="text-xs font-bold text-stone-900 flex items-center font-mono">
                      <TrendingUp className="w-3 h-3 mr-0.5 inline text-stone-900" />
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/60 leading-tight">{kpi.note}</p>
                </div>
              ))}
            </div>

            {/* Executive Synthesis Box */}
            <div className="p-5 bg-[#1A1A1A] text-white flex items-start gap-4 border border-[#1A1A1A]">
              <div className="p-2 border border-white/20 bg-white/5 text-[#D4AF37] shrink-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-1">
                  Executive Analyst Diagnosis:
                </h4>
                <p className="text-xs text-white/80 leading-relaxed font-normal">
                  {report.pages[0].quickSummary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 2: TRENDS & CHARTS */}
        {activePage === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/50 block">Page 2 of 4</span>
                <h3 className="text-2xl font-serif italic text-[#1A1A1A]">Visual Trends, Cyclical Patterns & Channel Trajectory</h3>
              </div>
              <span className="text-xs text-[#1A1A1A]/60">12-Month Time-Series Analysis</span>
            </div>

            <p className="text-sm text-[#1A1A1A]/75">
              {report.pages[1].summary}
            </p>

            {/* Interactive Area Chart */}
            <div className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                  {report.pages[1].chartTitle}
                </span>
                <span className="text-[11px] font-mono text-[#1A1A1A]/50">Figures in USD ($)</span>
              </div>
              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={report.pages[1].chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevEditorial" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1A1A1A" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#1A1A1A" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorMarginEditorial" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C5A059" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#C5A059" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="2 2" stroke="#E5E4E0" />
                    <XAxis dataKey="month" stroke="#666666" fontSize={11} tickLine={false} />
                    <YAxis stroke="#666666" fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FAF9F6', borderColor: '#1A1A1A', borderRadius: '0px', fontSize: '12px', color: '#1A1A1A', boxShadow: '2px 2px 0px rgba(0,0,0,0.1)' }}
                      formatter={(val: any) => [`$${Number(val).toLocaleString()}`, '']}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }} />
                    <Area type="monotone" dataKey="revenue" name="Total Revenue" stroke="#1A1A1A" strokeWidth={2} fillOpacity={1} fill="url(#colorRevEditorial)" />
                    <Area type="monotone" dataKey="margin" name="Gross Margin" stroke="#C5A059" strokeWidth={2} fillOpacity={1} fill="url(#colorMarginEditorial)" />
                    <Area type="monotone" dataKey="target" name="Budget Benchmark" stroke="#8C827A" strokeDasharray="4 4" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Key Trend Observation */}
            <div className="p-4 bg-stone-100 border-l-4 border-[#1A1A1A] text-xs text-[#1A1A1A]/80">
              <strong className="text-[#1A1A1A] uppercase tracking-wider text-[11px] font-bold">Analyst Pattern Insight: </strong>
              {report.pages[1].trendObservation}
            </div>
          </div>
        )}

        {/* PAGE 3: SKU & COST LEAKAGES */}
        {activePage === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/50 block">Page 3 of 4</span>
                <h3 className="text-2xl font-serif italic text-[#1A1A1A]">Category Profit Matrix & Leakage Diagnostics</h3>
              </div>
              <span className="text-xs text-[#1A1A1A]/60">Margin Breakdown by SKU Line</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Category Table */}
              <div className="lg:col-span-7 space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50">Product Line Margins</h4>
                <div className="overflow-x-auto border border-[#1A1A1A]/15 bg-white">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#FAF9F6] text-[#1A1A1A] font-bold border-b border-[#1A1A1A]/10 uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3">Category</th>
                        <th className="p-3 text-right">Revenue</th>
                        <th className="p-3 text-right">Margin %</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1A1A1A]/10 text-[#1A1A1A]">
                      {report.pages[2].categoryData?.map((cat, idx) => (
                        <tr key={idx} className="hover:bg-stone-50">
                          <td className="p-3 font-semibold text-[#1A1A1A]">{cat.category}</td>
                          <td className="p-3 text-right font-mono">${(cat.revenue / 1000).toFixed(0)}k</td>
                          <td className="p-3 text-right font-bold text-[#1A1A1A] font-mono">{cat.marginPct}%</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 text-[10px] font-medium border border-[#1A1A1A]/20 bg-stone-50">
                              {cat.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Identified Cost Leakages */}
              <div className="lg:col-span-5 space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-700 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Cost Leakages Uncovered ($56.4K Total)
                </h4>
                <div className="space-y-2.5">
                  {report.pages[2].costLeakagesFound?.map((leak, idx) => (
                    <div key={idx} className="p-3.5 bg-stone-50 border border-stone-300 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#1A1A1A]">{leak.area}</span>
                        <span className="font-bold text-red-700 font-mono text-[11px] border border-red-200 bg-red-50 px-2 py-0.5">
                          {leak.impact}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#1A1A1A]/70">{leak.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PAGE 4: 3 ACTIONABLE RECOMMENDATIONS */}
        {activePage === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#1A1A1A]/50 block">Page 4 of 4</span>
                <h3 className="text-2xl font-serif italic text-[#1A1A1A]">3 Actionable Data-Backed Business Recommendations</h3>
              </div>
              <span className="text-xs font-bold text-[#1A1A1A] border border-[#1A1A1A]/20 bg-stone-100 px-2.5 py-1">
                +$105,400 Projected Annual Upside
              </span>
            </div>

            <p className="text-sm text-[#1A1A1A]/75">
              {report.pages[3].summary}
            </p>

            {/* Recommendations 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {report.pages[3].recommendations?.map((rec) => (
                <div 
                  key={rec.number} 
                  className="p-5 bg-[#FAF9F6] border border-[#1A1A1A]/15 flex flex-col justify-between hover:border-[#1A1A1A]/40 transition-all space-y-4 shadow-[1px_1px_0px_rgba(0,0,0,0.03)]"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 bg-[#1A1A1A] text-[#FAF9F6] flex items-center justify-center font-bold text-xs">
                        #{rec.number}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/60 border border-[#1A1A1A]/10 bg-white px-2 py-0.5">
                        {rec.pillar}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#1A1A1A] leading-snug">
                      {rec.action}
                    </h4>

                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-normal">
                      {rec.rationale}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-2">
                    <div className="p-2 bg-white border border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A] flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60">Upside:</span>
                      <span className="text-[#1A1A1A] font-mono">{rec.financialImpact}</span>
                    </div>
                    <p className="text-[10px] text-[#1A1A1A]/50 text-right">
                      Complexity: <strong className="text-[#1A1A1A]">{rec.difficulty}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-4 p-5 bg-[#1A1A1A] text-white flex flex-wrap items-center justify-between gap-4 border border-[#1A1A1A]">
              <div>
                <h4 className="text-sm font-bold font-serif italic text-white">Want this exact level of clarity for your business?</h4>
                <p className="text-xs text-white/70">
                  Send your Excel, CSV, or records photo. Delivered within 48 hours for free in exchange for an honest testimonial.
                </p>
              </div>
              <button
                onClick={onRequestReportClick}
                className="px-5 py-2.5 font-bold text-xs uppercase tracking-wider text-black bg-[#FAF9F6] hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Claim Your Free Report Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Footer Navigation Bar */}
      <div className="px-6 py-3.5 bg-[#FAF9F6] border-t border-[#1A1A1A]/10 flex items-center justify-between">
        <button
          onClick={() => setActivePage(prev => Math.max(1, prev - 1))}
          disabled={activePage === 1}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border ${
            activePage === 1 
              ? 'text-[#1A1A1A]/20 border-transparent cursor-not-allowed' 
              : 'text-[#1A1A1A] bg-white border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-white cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        <span className="text-xs font-serif italic text-[#1A1A1A]/70">
          Showing <strong className="text-[#1A1A1A] not-italic font-bold">Page {activePage}</strong> of 4
        </span>

        <button
          onClick={() => setActivePage(prev => Math.min(4, prev + 1))}
          disabled={activePage === 4}
          className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border ${
            activePage === 4 
              ? 'text-[#1A1A1A]/20 border-transparent cursor-not-allowed' 
              : 'text-[#1A1A1A] bg-white border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-white cursor-pointer'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
