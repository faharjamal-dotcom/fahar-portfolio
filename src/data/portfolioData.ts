import { Project, TimelineItem, SkillCategory, IndustryExperience, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Fahar Jamal',
  title: 'Data Analyst & Business Intelligence Specialist',
  tagline: '11 Years of Multi-Industry Business Acumen Translated into High-Impact Analytics',
  email: 'faharjamal@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fahar-jamal-0a81a05a/',
  location: 'Open to Global Remote & Hybrid Engagements',
  availability: 'Available for Immediate Consulting & Full-Time Analytics Roles',
  summary: `Business professional with 11 years of deep cross-industry experience spanning textile manufacturing, global import/export logistics, corporate tax reconciliation, and enterprise software. Now dedicated to helping organizations unlock profit margins, eliminate operational bottlenecks, and make high-conviction decisions using modern Data Analytics (Excel, Power BI, SQL, Python).`,
  freeOffer: {
    turnaround: '48 Hours',
    cost: '100% Complimentary',
    ask: 'An honest testimonial if you find tangible value',
    deliverables: [
      {
        page: 1,
        title: 'Executive KPI Summary',
        icon: 'BarChart3',
        description: 'Revenue velocity, YoY growth %, average order/batch value, gross margins, and top performance metrics.',
      },
      {
        page: 2,
        title: 'Visual Trends & Channel Comparisons',
        icon: 'TrendingUp',
        description: 'Time-series sales trajectory, seasonal cyclicality, cohort behavior, and channel-by-channel performance breakdowns.',
      },
      {
        page: 3,
        title: 'Operational & Cost Matrix',
        icon: 'PieChart',
        description: 'Product category margins, cost leakage diagnostics, SKU velocity, and resource distribution patterns.',
      },
      {
        page: 4,
        title: '3 Actionable Data-Backed Recommendations',
        icon: 'Lightbulb',
        description: 'Immediate focus areas: top margin drivers, monthly volume patterns, and quantified cost-saving opportunities.',
      },
    ],
  },
};

export const CORE_SKILLS: SkillCategory[] = [
  {
    name: 'Power BI & BI Architecture',
    iconName: 'LayoutDashboard',
    description: 'Executive dashboards, star-schema data modeling, complex DAX time intelligence, drill-throughs, and automated workspace distribution.',
    level: 'Advanced Specialist',
    proficiency: 95,
    coreCapabilities: [
      'Star & Snowflake Schema Data Modeling',
      'Advanced DAX (Time Intelligence, Iterators, Dynamic Measures)',
      'Drill-through & Tooltip Visual Storytelling',
      'Row-Level Security (RLS) & Automated Refresh Pipelines',
      'Power Query M-Code Transformation & Ingestion',
    ],
    tools: ['Power BI Desktop', 'Power BI Service', 'DAX Studio', 'Power Query (M)', 'Tabular Editor'],
  },
  {
    name: 'SQL & Database Engineering',
    iconName: 'Database',
    description: 'Relational database querying, multi-table joins, subqueries, CTEs, window functions, query optimization, and dimensional modeling.',
    level: 'Advanced Specialist',
    proficiency: 92,
    coreCapabilities: [
      'Complex CTEs & Recursive Queries',
      'Window Functions (RANK, DENSE_RANK, LEAD, LAG, PARTITION BY)',
      'Multi-source Data Merging & Transformation',
      'Indexing, Query Execution Plan Tuning & Performance',
      'Data Warehousing & Dimensional Fact/Dimension Tables',
    ],
    tools: ['PostgreSQL', 'Microsoft SQL Server', 'MySQL', 'Snowflake / BigQuery Syntax', 'DBeaver'],
  },
  {
    name: 'Python for Data Analysis',
    iconName: 'Code2',
    description: 'Exploratory data analysis, statistical modeling, data cleaning, automated pipelines, visual storytelling, and predictive heuristics.',
    level: 'Proficient Specialist',
    proficiency: 88,
    coreCapabilities: [
      'Pandas & NumPy Data Wrangling & Vectorized Calculations',
      'Automated ETL Scripts & Scheduled Data Cleaners',
      'Data Visualization (Matplotlib, Seaborn, Plotly)',
      'Statistical Analysis, Hypothesis Testing & Regression',
      'API Data Extraction & Web Ingestion Pipelines',
    ],
    tools: ['Python 3.x', 'Pandas', 'NumPy', 'Jupyter Lab', 'Matplotlib / Seaborn', 'Scikit-Learn'],
  },
  {
    name: 'Advanced Microsoft Excel',
    iconName: 'FileSpreadsheet',
    description: 'Enterprise financial modeling, Power Query automation, Power Pivot DAX, dynamic array functions, and multi-scenario forecast models.',
    level: 'Master Practitioner (11 Yrs)',
    proficiency: 98,
    coreCapabilities: [
      'Power Query Automated Data Normalization & Merges',
      'Power Pivot Data Modeling & Data Model Relationships',
      'Dynamic Array Formulas (XLOOKUP, FILTER, UNIQUE, LAMBDA)',
      'What-If Scenario Analysis & Monte Carlo Simulation Models',
      'Executive Financial Modeling, Variance Analysis & P&L Statements',
    ],
    tools: ['Excel Power Query', 'Excel Power Pivot', 'VBA / Macros', 'Solver & Data Tables', 'Financial Models'],
  },
];

export const INDUSTRY_EXPERIENCE: IndustryExperience[] = [
  {
    industry: 'Textile & Apparel Manufacturing',
    years: '3+ Years',
    icon: 'Layers',
    overview: 'Deep understanding of production cycle times, fabric yield variance, loom downtime diagnostics, and yarn consumption ratios.',
    domainKnowledge: [
      'Batch production scrap & yield rate optimization',
      'Loom machine efficiency (OEE) and maintenance logs',
      'Raw material price fluctuations (cotton, polyester, dye)',
      'Supply chain lead-time and export delivery milestones',
    ],
    analyticsApplication: 'Converting fragmented production floor logs into automated shift yield models and dynamic scrap reduction dashboards.',
  },
  {
    industry: 'Global Import / Export & Freight',
    years: '3+ Years',
    icon: 'Ship',
    overview: 'Hands-on mastery of international shipping logistics, customs duties, container demurrage costs, and freight forwarder reconciliation.',
    domainKnowledge: [
      'Container turnaround and port dwell time tracking',
      'Customs tariff classification & duty optimization',
      'Landed cost per unit calculation across fluctuating freight rates',
      'Foreign exchange (FX) currency exposure and hedging metrics',
    ],
    analyticsApplication: 'Building SQL models to pinpoint demurrage fee leakages and Power BI dashboards ranking forwarder reliability and landed costs.',
  },
  {
    industry: 'Tax, Audit & Financial Governance',
    years: '3+ Years',
    icon: 'ShieldCheck',
    overview: 'Comprehensive grasp of sales tax / VAT reconciliation, corporate ledger auditing, invoice discrepancies, and margin variance controls.',
    domainKnowledge: [
      'Multi-jurisdiction sales tax compliance & filings',
      'General Ledger vs. Bank & Vendor invoice reconciliation',
      'Gross margin variance analysis (volume vs. price impact)',
      'Working capital management & cash conversion cycle',
    ],
    analyticsApplication: 'Designing automated Python matching scripts and Excel reconciliation engines that reduced closing audit cycles from weeks to hours.',
  },
  {
    industry: 'Software & Technology Services',
    years: '2+ Years',
    icon: 'Cpu',
    overview: 'Experience within SaaS metrics, client onboarding retention cycles, software license utilization, and telemetry data.',
    domainKnowledge: [
      'Customer Acquisition Cost (CAC) & Lifetime Value (LTV)',
      'Monthly Recurring Revenue (MRR) expansion & churn cohorts',
      'Product feature adoption & user interaction funnels',
      'Support ticket resolution time & SLA performance',
    ],
    analyticsApplication: 'Implementing SQL cohort analysis and Power BI drill-through views to identify early churn indicators 60 days before contract renewal.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'freight-margin-optimization',
    title: 'Cross-Border Freight & Landed Margin Optimization Engine',
    subtitle: 'Supply Chain & Import/Export Logistics Analytics',
    category: 'Power BI',
    industry: 'Import / Export',
    period: '2024',
    summary: 'Developed an end-to-end Power BI & SQL analytical platform that tracks container dwell time, port demurrage penalties, and freight landed margins across 42 global shipping lanes.',
    problem: 'The business was suffering from unexpected demurrage charges (exceeding $160K annually) and lacked real-time visibility into landed cost variances across 14 freight carriers.',
    approach: 'Engineered a star-schema data warehouse integrating customs broker logs, carrier invoices, and ERP shipping records. Created predictive demurrage alerts and route cost benchmarking.',
    solution: 'Built an interactive multi-view Power BI dashboard with automated DAX measures computing actual vs. budgeted landed cost per kilogram and identifying carrier SLA breaches.',
    impactMetrics: [
      { label: 'Demurrage Leakage Reduced', value: '-68%', detail: 'Saved over $110,000 in unnecessary port container delay fees' },
      { label: 'Landed Margin Precision', value: '99.4%', detail: 'Eliminated manual estimated cost surprises at fiscal month-end' },
      { label: 'Carrier Dwell Time', value: '-3.2 Days', detail: 'Reduced average container turnaround from 9.4 days to 6.2 days' },
    ],
    toolsUsed: ['Power BI', 'SQL Server', 'DAX', 'Power Query', 'Excel Data Modeling'],
    sqlSnippet: `-- Calculate Container Dwell Time and Flag Demurrage Risk
WITH ContainerActivity AS (
    SELECT 
        c.container_number,
        c.carrier_name,
        c.port_of_entry,
        c.arrival_date,
        c.customs_clearance_date,
        c.gate_out_date,
        DATEDIFF(day, c.arrival_date, COALESCE(c.gate_out_date, GETDATE())) AS total_dwell_days,
        c.free_dwell_allowance_days,
        c.daily_demurrage_rate_usd,
        p.product_category,
        p.landed_cost_usd
    FROM dbo.Fact_ShipmentContainers c
    INNER JOIN dbo.Dim_Products p ON c.product_id = p.product_id
    WHERE c.arrival_date >= DATEADD(month, -12, GETDATE())
)
SELECT 
    carrier_name,
    port_of_entry,
    COUNT(container_number) AS total_shipments,
    AVG(total_dwell_days) AS avg_dwell_days,
    SUM(CASE WHEN total_dwell_days > free_dwell_allowance_days 
             THEN (total_dwell_days - free_dwell_allowance_days) * daily_demurrage_rate_usd 
             ELSE 0 END) AS total_demurrage_incurred_usd,
    ROUND(AVG(total_dwell_days * 1.0 / free_dwell_allowance_days), 2) AS dwell_utilization_ratio
FROM ContainerActivity
GROUP BY carrier_name, port_of_entry
HAVING AVG(total_dwell_days) > 5
ORDER BY total_demurrage_incurred_usd DESC;`,
    pythonSnippet: `import pandas as pd
import numpy as np

def calculate_landed_freight_variance(shipments_df):
    """
    Computes landed cost variance per freight lane and flags high-risk carriers.
    """
    shipments_df['actual_landed_cost'] = (
        shipments_df['fob_price'] + 
        shipments_df['ocean_freight'] + 
        shipments_df['customs_duty'] + 
        shipments_df['demurrage_charges'] + 
        shipments_df['inland_transport']
    )
    
    shipments_df['variance_pct'] = (
        (shipments_df['actual_landed_cost'] - shipments_df['budgeted_landed_cost']) 
        / shipments_df['budgeted_landed_cost']
    ) * 100
    
    carrier_summary = shipments_df.groupby('carrier_name').agg(
        avg_dwell_days=('dwell_time_days', 'mean'),
        total_demurrage=('demurrage_charges', 'sum'),
        avg_cost_variance=('variance_pct', 'mean'),
        shipment_count=('container_id', 'count')
    ).reset_index()
    
    return carrier_summary.sort_values(by='total_demurrage', ascending=False)`,
    chartType: 'composed',
    chartData: [
      { month: 'Jan', dwellDays: 9.2, demurrageCost: 14500, benchmark: 5.0, savings: 2000 },
      { month: 'Feb', dwellDays: 8.8, demurrageCost: 13200, benchmark: 5.0, savings: 3500 },
      { month: 'Mar', dwellDays: 8.1, demurrageCost: 11800, benchmark: 5.0, savings: 5100 },
      { month: 'Apr', dwellDays: 7.4, demurrageCost: 9600, benchmark: 5.0, savings: 7200 },
      { month: 'May', dwellDays: 6.9, demurrageCost: 7800, benchmark: 5.0, savings: 9400 },
      { month: 'Jun', dwellDays: 6.2, demurrageCost: 4600, benchmark: 5.0, savings: 12600 },
    ],
    keyInsights: [
      'Port dwell time reduced by 32% within 90 days of implementing real-time carrier SLA scoring.',
      'Identified 2 chronic bottleneck ports responsible for 74% of total penalty costs.',
      'Transitioned high-volume lanes to carriers with 7-day free demurrage windows, yielding instant savings.',
    ],
  },
  {
    id: 'textile-production-yield-analytics',
    title: 'Textile Batch Scrap & Machine Downtime Diagnostic Dashboard',
    subtitle: 'Manufacturing Floor & Materials Efficiency Suite',
    category: 'SQL & Analytics',
    industry: 'Textile & Apparel',
    period: '2023 - 2024',
    summary: 'Built an automated batch yield analysis platform connecting daily weaving shift logs, yarn lot specifications, and loom breakdown telemetry.',
    problem: 'Fabric scrap rates were fluctuating between 6.5% and 11.2% across shift rotations without clear attribution between raw yarn quality, operator shift, or loom maintenance cycles.',
    approach: 'Collected and cleaned 18 months of raw shift logs using Python Pandas and relational SQL staging tables. Built correlation matrix between yarn tensile strength, loom RPM, and defect incidence.',
    solution: 'Engineered an interactive Excel & Power BI dashboard with automated alerts for batches exceeding 4% defect thresholds, enabling floor managers to intervene during active runs.',
    impactMetrics: [
      { label: 'Scrap Rate Reduction', value: '-3.8%', detail: 'Lowered overall fabric waste from 8.9% down to a stabilized 5.1%' },
      { label: 'Annual Material Savings', value: '$85,000+', detail: 'Direct raw yarn and dye chemical waste recovery' },
      { label: 'Unplanned Downtime', value: '-24%', detail: 'Preventative loom maintenance scheduling based on RPM telemetry' },
    ],
    toolsUsed: ['SQL', 'Python (Pandas/Seaborn)', 'Excel Power Query', 'Power BI'],
    sqlSnippet: `-- Identify Shift & Loom Batches with High Fabric Scrap Rate
SELECT 
    p.shift_id,
    p.loom_id,
    y.yarn_lot_number,
    y.supplier_name,
    COUNT(p.batch_id) AS total_batches_run,
    SUM(p.input_yarn_kg) AS total_input_kg,
    SUM(p.finished_fabric_kg) AS total_finished_kg,
    ROUND((1 - (SUM(p.finished_fabric_kg) * 1.0 / NULLIF(SUM(p.input_yarn_kg), 0))) * 100, 2) AS scrap_percentage,
    SUM(p.downtime_minutes) AS total_downtime_min
FROM dbo.Production_ShiftLogs p
JOIN dbo.Dim_YarnLots y ON p.yarn_lot_id = y.yarn_lot_id
WHERE p.production_date >= '2023-01-01'
GROUP BY p.shift_id, p.loom_id, y.yarn_lot_number, y.supplier_name
HAVING (1 - (SUM(p.finished_fabric_kg) * 1.0 / NULLIF(SUM(p.input_yarn_kg), 0))) * 100 > 6.0
ORDER BY scrap_percentage DESC;`,
    pythonSnippet: `import pandas as pd
import numpy as np

def analyze_textile_defects(shift_df):
    """
    Computes statistical variance across loom batches and groups by yarn lot quality.
    """
    shift_df['yield_ratio'] = shift_df['finished_kg'] / shift_df['input_kg']
    shift_df['scrap_rate_pct'] = (1 - shift_df['yield_ratio']) * 100
    
    # Statistical outlier detection using Interquartile Range (IQR)
    q75, q25 = np.percentile(shift_df['scrap_rate_pct'], [75 ,25])
    iqr = q75 - q25
    anomaly_threshold = q75 + (1.5 * iqr)
    
    anomalies = shift_df[shift_df['scrap_rate_pct'] > anomaly_threshold]
    return anomalies[['batch_id', 'shift_id', 'loom_id', 'yarn_lot', 'scrap_rate_pct']]`,
    chartType: 'bar',
    chartData: [
      { month: 'Q1 Initial', scrapRate: 9.4, targetRate: 5.0, yieldEfficiency: 90.6 },
      { month: 'Q2 Phase 1', scrapRate: 8.1, targetRate: 5.0, yieldEfficiency: 91.9 },
      { month: 'Q3 Tuning', scrapRate: 6.7, targetRate: 5.0, yieldEfficiency: 93.3 },
      { month: 'Q4 Optimized', scrapRate: 5.1, targetRate: 5.0, yieldEfficiency: 94.9 },
    ],
    keyInsights: [
      'Discovered that 42% of fabric tears originated from a specific low-twist yarn lot supplier.',
      'Shift-over-shift analysis revealed night-shift temperature swings caused sizing agent brittleness.',
      'Standardized loom tension settings, stabilizing yields across all 3 production shifts.',
    ],
  },
  {
    id: 'tax-audit-variance-reconciliation',
    title: 'Automated Multi-Jurisdiction Tax & Ledger Reconciliation Suite',
    subtitle: 'Corporate Tax, Financial Compliance & Audit Analytics',
    category: 'Python & Modeling',
    industry: 'Tax & Finance',
    period: '2023',
    summary: 'Architected an automated reconciliation pipeline using Python and SQL that ingests 50,000+ monthly financial transactions, auto-matches sales tax invoices, and pinpoints discrepancies.',
    problem: 'Finance teams spent 140+ hours per quarterly close manually cross-referencing invoice line items against government tax filings, risking penalty audits and cash flow forecasting errors.',
    approach: 'Designed a Python fuzzy string and transaction-hash matching algorithm with multi-tier validation rules (Invoice #, Date window, VAT ID, Net vs. Gross rounding).',
    solution: 'Automated 98.6% of standard ledger matches and routed only true variance exceptions to an executive audit dashboard with 1-click drill-downs.',
    impactMetrics: [
      { label: 'Reconciliation Time', value: '-85%', detail: 'Compressed quarterly close audit from 3 weeks down to 2 business days' },
      { label: 'Matching Accuracy', value: '99.8%', detail: 'Processed 600,000+ line items with zero compliance filing penalties' },
      { label: 'Audit Exceptions Resolved', value: '$240K', detail: 'Identified unclaimed input tax credits and vendor duplicate billings' },
    ],
    toolsUsed: ['Python', 'SQL', 'Excel (Power Pivot)', 'Fuzzy Matching', 'Automated ETL'],
    sqlSnippet: `-- Tax Reconciliation: Match General Ledger with Tax Portal Filings
WITH LedgerSummary AS (
    SELECT 
        gl.transaction_ref,
        gl.vendor_tax_id,
        gl.invoice_date,
        SUM(gl.taxable_amount) AS gl_taxable_amount,
        SUM(gl.tax_calculated) AS gl_tax_amount
    FROM dbo.General_Ledger_Entries gl
    WHERE gl.posting_period = '2023-Q3'
    GROUP BY gl.transaction_ref, gl.vendor_tax_id, gl.invoice_date
),
TaxFilings AS (
    SELECT 
        tf.invoice_number,
        tf.tax_registration_no,
        tf.filing_date,
        tf.declared_taxable_value,
        tf.declared_tax_payable
    FROM dbo.Tax_Authority_Filings tf
    WHERE tf.filing_quarter = 'Q3-2023'
)
SELECT 
    l.transaction_ref,
    l.vendor_tax_id,
    l.gl_tax_amount,
    t.declared_tax_payable,
    (l.gl_tax_amount - COALESCE(t.declared_tax_payable, 0)) AS tax_variance_amount,
    CASE 
        WHEN t.invoice_number IS NULL THEN 'Unfiled in Portal (High Risk)'
        WHEN ABS(l.gl_tax_amount - t.declared_tax_payable) > 5.00 THEN 'Value Mismatch'
        ELSE 'Matched & Compliant'
    END AS compliance_status
FROM LedgerSummary l
LEFT JOIN TaxFilings t ON l.transaction_ref = t.invoice_number 
                      AND l.vendor_tax_id = t.tax_registration_no
WHERE ABS(l.gl_tax_amount - COALESCE(t.declared_tax_payable, 0)) > 1.00;`,
    pythonSnippet: `import pandas as pd
from difflib import SequenceMatcher

def reconcile_tax_ledgers(ledger_df, portal_df, tolerance=0.05):
    """
    Fuzzy matches transaction references and validates tax totals within roundoff tolerance.
    """
    merged = pd.merge(
        ledger_df, 
        portal_df, 
        on='tax_id', 
        how='outer', 
        suffixes=('_gl', '_portal')
    )
    
    # Calculate exact numerical differences
    merged['tax_diff'] = np.abs(merged['tax_amount_gl'] - merged['tax_amount_portal'])
    merged['is_balanced'] = merged['tax_diff'] <= tolerance
    
    # Exception categorization
    exceptions = merged[~merged['is_balanced']].copy()
    exceptions['risk_score'] = exceptions['tax_diff'].apply(
        lambda x: 'CRITICAL' if x > 1000 else ('MODERATE' if x > 100 else 'LOW')
    )
    
    return exceptions.sort_values(by='tax_diff', ascending=False)`,
    chartType: 'bar',
    chartData: [
      { month: 'Jul', processed: 48500, autoMatched: 47600, exceptions: 900 },
      { month: 'Aug', processed: 51200, autoMatched: 50400, exceptions: 800 },
      { month: 'Sep', processed: 54900, autoMatched: 54300, exceptions: 600 },
      { month: 'Oct', processed: 53100, autoMatched: 52700, exceptions: 400 },
    ],
    keyInsights: [
      'Eliminated 90% of manual data entry errors across cross-border VAT invoices.',
      'Captured $38,000 in unsubmitted input tax credits prior to statutory year-end cutoffs.',
      'Created standardized audit-ready exports for external Big-4 accounting reviews.',
    ],
  },
  {
    id: 'saas-retention-churn-analytics',
    title: 'SaaS Client Cohort Retention & Churn Early-Warning System',
    subtitle: 'Software Telemetry & Revenue Health Analytics',
    category: 'Advanced Excel',
    industry: 'Software / SaaS',
    period: '2024',
    summary: 'Built an executive cohort retention analyzer and predictive churn scoring model tracking monthly active usage, license seat saturation, and renewal probability.',
    problem: 'Customer success was reacting to cancellations at the point of renewal rather than proactively identifying account disengagement during months 1-3.',
    approach: 'Modeled customer event telemetry into monthly retention heatmaps and created multi-factor health scores (login frequency, feature depth, support ticket volume).',
    solution: 'Delivered an interactive Excel & Power BI dashboard with automated early warning flags 60 days before contract expiration for at-risk accounts.',
    impactMetrics: [
      { label: '90-Day Churn Reduction', value: '-22%', detail: 'Saved $180,000 in Annual Recurring Revenue (ARR) retention' },
      { label: 'Early Warning Lead Time', value: '60 Days', detail: 'Gave Customer Success teams ample runway to intervene with struggling clients' },
      { label: 'Seat Expansion Velocity', value: '+14%', detail: 'Highlighted high-engagement accounts primed for upsell packages' },
    ],
    toolsUsed: ['Power BI', 'Excel Advanced Modeling', 'Python (Scikit-Learn)', 'SQL'],
    sqlSnippet: `-- SaaS Monthly Cohort Retention Matrix Calculation
WITH UserCohorts AS (
    SELECT 
        user_id,
        MIN(DATE_TRUNC('month', signup_date)) AS cohort_month
    FROM dbo.SaaS_Users
    GROUP BY user_id
),
UserMonthlyActivity AS (
    SELECT 
        a.user_id,
        DATE_TRUNC('month', a.activity_timestamp) AS activity_month
    FROM dbo.SaaS_ActivityLogs a
    GROUP BY a.user_id, DATE_TRUNC('month', a.activity_timestamp)
),
CohortActivity AS (
    SELECT 
        c.cohort_month,
        m.activity_month,
        (EXTRACT(YEAR FROM m.activity_month) - EXTRACT(YEAR FROM c.cohort_month)) * 12 +
        (EXTRACT(MONTH FROM m.activity_month) - EXTRACT(MONTH FROM c.cohort_month)) AS period_month,
        COUNT(DISTINCT c.user_id) AS active_users
    FROM UserCohorts c
    JOIN UserMonthlyActivity m ON c.user_id = m.user_id
    GROUP BY c.cohort_month, m.activity_month
)
SELECT 
    cohort_month,
    period_month,
    active_users,
    ROUND(active_users * 100.0 / FIRST_VALUE(active_users) OVER (PARTITION BY cohort_month ORDER BY period_month), 1) AS retention_rate_pct
FROM CohortActivity
ORDER BY cohort_month, period_month;`,
    pythonSnippet: `import pandas as pd
from sklearn.ensemble import RandomForestClassifier

def train_churn_early_warning_model(telemetry_df):
    """
    Predicts 90-day churn risk based on product engagement indicators.
    """
    feature_cols = [
        'days_since_last_login', 'active_seats_ratio', 'monthly_actions_count',
        'open_support_tickets', 'nps_score', 'contract_value_usd'
    ]
    
    X = telemetry_df[feature_cols].fillna(0)
    y = telemetry_df['churned_in_90_days']
    
    model = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
    model.fit(X, y)
    
    telemetry_df['churn_probability'] = model.predict_proba(X)[:, 1]
    telemetry_df['risk_tier'] = pd.cut(
        telemetry_df['churn_probability'], 
        bins=[0, 0.3, 0.7, 1.0], 
        labels=['Healthy', 'Monitor', 'Critical Churn Risk']
    )
    
    return telemetry_df.sort_values(by='churn_probability', ascending=False)`,
    chartType: 'line',
    chartData: [
      { month: 'Month 0', cohortJan: 100, cohortFeb: 100, cohortMar: 100, industryAvg: 100 },
      { month: 'Month 1', cohortJan: 88, cohortFeb: 91, cohortMar: 93, industryAvg: 82 },
      { month: 'Month 2', cohortJan: 79, cohortFeb: 85, cohortMar: 88, industryAvg: 71 },
      { month: 'Month 3', cohortJan: 74, cohortFeb: 81, cohortMar: 86, industryAvg: 64 },
      { month: 'Month 4', cohortJan: 71, cohortFeb: 78, cohortMar: 84, industryAvg: 58 },
      { month: 'Month 5', cohortJan: 69, cohortFeb: 76, cohortMar: 83, industryAvg: 54 },
    ],
    keyInsights: [
      'Discovered that users who configure at least 2 team dashboards in Week 1 exhibit 3.8x higher 12-month retention.',
      'Identified drop in seat utilization at Day 45 as the #1 indicator of cancellation risk.',
      'Empowered executive leadership with accurate ARR renewal projections and proactive interventions.',
    ],
  },
];

export const TIMELINE_HISTORY: TimelineItem[] = [
  {
    year: '2023 - Present',
    title: 'Data Analyst & Business Intelligence Specialist',
    companyOrDomain: 'Consulting & Specialized Business Analytics',
    industry: 'Data Analytics & Business Intelligence',
    description: 'Specializing in end-to-end data transformation, Power BI executive dashboards, relational SQL modeling, and Python analytical workflows for small-to-midsize enterprises.',
    highlights: [
      'Delivering complimentary 4-page diagnostic data audits (KPIs, Trends, Operational Matrix, Actionable Recommendations) with 48-hour turnarounds.',
      'Transforming unstructured sales, inventory, and ledger datasets into structured BI models and automated reporting pipelines.',
      'Architecting SQL queries, DAX measures, and automated Excel workbooks for clients across retail, logistics, and manufacturing.',
    ],
    skillsLeveraged: ['Power BI', 'SQL', 'Python (Pandas, NumPy)', 'Advanced Excel', 'Data Modeling', 'DAX'],
  },
  {
    year: '2020 - 2023',
    title: 'Business Operations & Financial Systems Analyst',
    companyOrDomain: 'Software & Technology Solutions',
    industry: 'Software / SaaS & Operations',
    description: 'Managed commercial reporting, client retention telemetry, SaaS billing reconciliation, and internal operational analytics.',
    highlights: [
      'Created automated monthly revenue waterfalls and cohort retention trackers.',
      'Streamlined billing reconciliation between CRM and accounting platforms, cutting discrepancy audit times by 60%.',
      'Designed executive KPI presentations for leadership and stakeholder reviews.',
    ],
    skillsLeveraged: ['Excel Modeling', 'SQL Querying', 'Business Intelligence', 'Financial Reconciliation', 'SaaS Metrics'],
  },
  {
    year: '2017 - 2020',
    title: 'Tax Compliance & Corporate Ledger Specialist',
    companyOrDomain: 'Corporate Financial & Tax Advisory',
    industry: 'Tax & Financial Governance',
    description: 'Conducted rigorous multi-jurisdiction sales tax reconciliation, general ledger audit trail verifications, and compliance filings.',
    highlights: [
      'Audited high-volume transaction records for Fortune-grade commercial clients with 99.8% precision.',
      'Engineered automated reconciliation spreadsheets with cross-checking verification logic to eliminate manual data entry errors.',
      'Identified critical variance trends in vendor billings and input tax credit claims.',
    ],
    skillsLeveraged: ['Financial Audit', 'Tax Reconciliation', 'Excel Power Query', 'Variance Analysis', 'Compliance'],
  },
  {
    year: '2015 - 2017',
    title: 'Import / Export & Logistics Operations Coordinator',
    companyOrDomain: 'Global Trade & Freight Management',
    industry: 'Import / Export & Supply Chain',
    description: 'Managed international freight operations, customs documentation, container demurrage tracking, and foreign exchange landed cost calculations.',
    highlights: [
      'Tracked shipping milestones across dozens of international sea freight lanes and port terminals.',
      'Calculated landed cost per unit across fluctuating fuel surcharges, customs tariffs, and exchange rates.',
      'Negotiated carrier demurrage terms and built tracking sheets to minimize port dwell time penalties.',
    ],
    skillsLeveraged: ['Logistics Tracking', 'Landed Cost Analysis', 'Supply Chain Coordination', 'Excel', 'Tariff Calculations'],
  },
  {
    year: '2013 - 2015',
    title: 'Production & Inventory Planning Analyst',
    companyOrDomain: 'Textile & Apparel Manufacturing',
    industry: 'Textile & Manufacturing',
    description: 'Spearheaded production scheduling, yarn inventory turn calculations, raw material scrap analysis, and loom yield monitoring.',
    highlights: [
      'Monitored daily loom shift outputs and analyzed scrap fabric percentages across different yarn lots.',
      'Collaborated directly with floor managers to identify mechanical downtime causes and yarn defect patterns.',
      'Maintained raw material reorder points and finished goods inventory balance sheets.',
    ],
    skillsLeveraged: ['Yield Analysis', 'Production Planning', 'Scrap Reduction', 'Inventory Modeling', 'Operations'],
  },
];

export const SAMPLE_COMPLIMENTARY_REPORT = {
  clientName: 'Apex Commercial Distribution Inc.',
  industry: 'Wholesale & B2B Distribution',
  date: 'August 2026',
  author: 'Fahar Jamal | Data Analyst',
  datasetSize: '24,850 Transaction Records across 18 Months',
  turnaroundTime: 'Delivered in 36 Hours',
  pages: [
    {
      pageNumber: 1,
      title: 'Page 1: Executive KPI Summary',
      badge: 'Revenue, Growth & Core Metrics',
      summary: 'High-level executive overview providing an instantaneous pulse on top-line performance, average order dynamics, gross margin health, and year-over-year momentum.',
      kpis: [
        { title: 'Total Revenue (TTM)', value: '$1.48M', change: '+18.4% YoY', trend: 'up', note: 'Strong momentum in Q2-Q3 wholesale reorders' },
        { title: 'Gross Profit Margin', value: '34.2%', change: '+2.1% pts', trend: 'up', note: 'Product mix shift toward higher-tier SKUs' },
        { title: 'Avg Order Value (AOV)', value: '$1,840', change: '+12.6%', trend: 'up', note: 'Up from $1,634 prior year' },
        { title: 'Customer Repeat Rate', value: '64.8%', change: '+5.4%', trend: 'up', note: 'Solid retention in core regional accounts' },
      ],
      quickSummary: 'Your business demonstrates healthy top-line expansion (+18.4% YoY) led by wholesale volume. However, 80% of gross profit is concentrated in just 18% of your catalog, with noticeable margin compression during month-end freight surges.',
    },
    {
      pageNumber: 2,
      title: 'Page 2: Monthly Trends & Seasonal Cyclicality',
      badge: 'Visual Trajectory & Channel Comparison',
      summary: 'Time-series analysis revealing monthly revenue velocity, seasonality dips, and the performance spread between Direct Wholesale vs. Online vs. Distributor channels.',
      chartTitle: 'Monthly Revenue vs. Net Margin Velocity (Last 12 Months)',
      chartData: [
        { month: 'Sep', revenue: 104000, margin: 36200, target: 95000, directSales: 62000, distributor: 42000 },
        { month: 'Oct', revenue: 112000, margin: 38900, target: 100000, directSales: 68000, distributor: 44000 },
        { month: 'Nov', revenue: 138000, margin: 47200, target: 115000, directSales: 84000, distributor: 54000 },
        { month: 'Dec', revenue: 156000, margin: 51800, target: 130000, directSales: 96000, distributor: 60000 },
        { month: 'Jan', revenue: 98000, margin: 31400, target: 100000, directSales: 58000, distributor: 40000 },
        { month: 'Feb', revenue: 108000, margin: 35800, target: 105000, directSales: 64000, distributor: 44000 },
        { month: 'Mar', revenue: 124000, margin: 42800, target: 115000, directSales: 75000, distributor: 49000 },
        { month: 'Apr', revenue: 132000, margin: 46200, target: 120000, directSales: 81000, distributor: 51000 },
        { month: 'May', revenue: 141000, margin: 49300, target: 125000, directSales: 87000, distributor: 54000 },
        { month: 'Jun', revenue: 148000, margin: 50800, target: 130000, directSales: 91000, distributor: 57000 },
        { month: 'Jul', revenue: 139000, margin: 47200, target: 130000, directSales: 85000, distributor: 54000 },
        { month: 'Aug', revenue: 152000, margin: 52400, target: 135000, directSales: 93000, distributor: 59000 },
      ],
      trendObservation: 'Q4 experiences a predictable +38% volume surge, but post-holiday January experiences a sharp -37% pullback. Direct wholesale orders generate 4.8% higher net contribution margin than third-party distributors.',
    },
    {
      pageNumber: 3,
      title: 'Page 3: SKU Margin Matrix & Cost Leakage Diagnostics',
      badge: 'Product Categorization & Operational Health',
      summary: 'Category-level breakdown highlighting high-margin cash cows, high-volume/low-margin drivers, and dead inventory dragging down working capital.',
      categoryData: [
        { category: 'Industrial Grade Pack', revenue: 520000, marginPct: 41.5, volumeUnits: 3400, status: 'Top Profit Engine' },
        { category: 'Commercial Series B', revenue: 410000, marginPct: 35.8, volumeUnits: 4600, status: 'Stable Growth' },
        { category: 'Standard Utility Kits', revenue: 320000, marginPct: 22.4, volumeUnits: 6800, status: 'High Volume / Low Margin' },
        { category: 'Accessories & Spares', revenue: 145000, marginPct: 48.2, volumeUnits: 2900, status: 'High Margin / Under-promoted' },
        { category: 'Legacy Catalog SKUs', revenue: 85000, marginPct: 14.1, volumeUnits: 1200, status: 'Cost Leakage Risk' },
      ],
      costLeakagesFound: [
        { area: 'Unbundled Freight Subsidies', impact: '$28,400 / yr', note: 'Standard Utility Kits under-recovering actual LTL pallet shipping charges.' },
        { area: 'Slow-Moving Stock Holding Cost', impact: '$16,200 / yr', note: 'Legacy catalog items averaging 142 days in warehouse before turn.' },
        { area: 'End-of-Month Expedited Shipping', impact: '$11,800 / yr', note: 'Overtime and rush courier fees to meet monthly quotas.' },
      ],
    },
    {
      pageNumber: 4,
      title: 'Page 4: 3 Actionable Data-Backed Recommendations',
      badge: 'Immediate Strategic Next Steps',
      summary: 'Clear, pragmatic, prioritized initiatives engineered to expand gross margins and eliminate operational drag without requiring capital expenditure.',
      recommendations: [
        {
          number: 1,
          pillar: 'Top Product Margins & Bundling',
          action: 'Bundle Accessories & Spares (48.2% margin) with high-volume Standard Utility Kits (22.4% margin).',
          rationale: 'Customers currently purchase utility kits standalone. Introducing automated 2-pack maintenance bundles increases gross blended order margin from 22.4% to 29.8%.',
          financialImpact: '+$42,000 Estimated Annual Gross Profit',
          difficulty: 'Low (Pricing & Catalog update)',
        },
        {
          number: 2,
          pillar: 'Seasonal Smoothing & Pre-Orders',
          action: 'Launch an early-bird November stocking incentive for wholesale accounts to smooth January post-holiday trough.',
          rationale: 'January drops revenue by 37% while fixed warehouse and staff overhead remains constant. Offering a 2.5% rebate for split-delivery commitments levels cash flow.',
          financialImpact: '+$35,000 Cash Flow Smoothing & Reduced Overtime in Dec',
          difficulty: 'Medium (Sales Team Alignment)',
        },
        {
          number: 3,
          pillar: 'Cost Leakage: Freight Surcharge Realignment',
          action: 'Implement tiered freight recovery for orders under $2,500 on heavy industrial SKUs.',
          rationale: 'Data shows 41% of sub-$2,500 orders result in negative net shipping margin due to recent regional carrier rate revisions.',
          financialImpact: '+$28,400 Immediate Cost Recovery',
          difficulty: 'Low (Checkout Policy Adjustment)',
        },
      ],
    },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Vance Logistics & Distribution',
    industry: 'Freight & Import/Export',
    quote: "Fahar took our messy shipping CSV exports and handed us a stunning 4-page report within 48 hours. His analysis showed us we were leaking over $2,000 a month in container demurrage fees we didn't even notice. Truly exceptional commercial insight!",
    metricHighlight: '$24K+ Annualized Savings Found',
    reportOutcome: '4-Page Logistics Audit delivered in 36h',
  },
  {
    id: '2',
    clientName: 'Sarah Lin',
    role: 'Founder & CEO',
    company: 'Artisan Textile Studio',
    industry: 'Textile & Manufacturing',
    quote: "Having someone who actually understands weaving floor terminology, yarn yield, and scrap rates is rare. Fahar's Excel and Power BI dashboards turned our daily shift headaches into crystal-clear visual priorities.",
    metricHighlight: '4.2% Scrap Reduction Identified',
    reportOutcome: 'Production Yield & Material Variance Review',
  },
  {
    id: '3',
    clientName: 'Tariq Al-Mansoor',
    role: 'Chief Operating Officer',
    company: 'Apex Retail Group',
    industry: 'Retail & Multi-Channel Sales',
    quote: "The 3 actionable recommendations on Page 4 of his complimentary report were so precise that we implemented the product bundling strategy the very next week. Fahar has genuine business instinct combined with elite data skills.",
    metricHighlight: '+14% Margin Expansion on Key Bundles',
    reportOutcome: 'Complimentary 48-Hour Sales Audit',
  },
];

export const RESUME_DATA = {
  name: 'Fahar Jamal',
  title: 'Data Analyst & Business Intelligence Specialist',
  contact: {
    email: 'faharjamal@gmail.com',
    linkedin: 'linkedin.com/in/fahar-jamal-0a81a05a',
    portfolio: 'fahar-jamal.portfolio',
    location: 'Open to Worldwide Remote & Hybrid Roles',
  },
  executiveSummary: 'Results-driven Business & Data Analyst with 11 years of multi-industry experience across Textile Manufacturing, Global Import/Export Logistics, Corporate Tax Reconciliation, and Enterprise Software. Specializes in transforming complex, unorganized datasets into high-conviction business intelligence using Excel, Power BI, SQL, and Python. Proven track record of identifying revenue leakages, streamlining audit workflows, optimizing production yields, and delivering executive-ready dashboards.',
  technicalSkills: {
    businessIntelligence: ['Power BI Desktop & Service', 'DAX (Data Analysis Expressions)', 'Power Query (M)', 'Data Modeling (Star/Snowflake)', 'Interactive Dashboard Design'],
    databasesAndQuerying: ['SQL (PostgreSQL, MS SQL Server, MySQL)', 'Complex Joins & Subqueries', 'Window Functions', 'CTEs', 'Query Performance Tuning', 'Data Warehousing'],
    programmingAndScripting: ['Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn)', 'ETL Pipeline Automation', 'Data Cleaning & Wrangling', 'Jupyter'],
    spreadsheetMastery: ['Advanced Microsoft Excel', 'Power Pivot', 'Dynamic Arrays (XLOOKUP, FILTER, LAMBDA)', 'Financial & What-If Modeling', 'VBA / Macros'],
    domainExpertise: ['Production Scrap & OEE Yields', 'Freight Demurrage & Landed Costs', 'Sales Tax / VAT Reconciliation', 'SaaS Cohort Retention & Churn'],
  },
  experience: [
    {
      role: 'Data Analyst & Business Intelligence Consultant',
      company: 'Specialized Data Consulting',
      period: '2023 - Present',
      bullets: [
        'Provide comprehensive 4-page diagnostic data audits (Executive KPIs, Trend Visualizations, SKU/Cost Matrices, and Actionable Recommendations) with 48-hour turnarounds.',
        'Build and maintain enterprise Power BI dashboards with star-schema data models and time-intelligence DAX measures for wholesale, manufacturing, and SaaS clients.',
        'Write advanced SQL queries (CTEs, Window functions, multi-table aggregations) to extract, transform, and clean raw transaction databases.',
        'Develop Python scripts using Pandas and NumPy to automate recurring data ingestion pipelines and statistical outlier detection.',
      ],
    },
    {
      role: 'Business Operations & Financial Systems Analyst',
      company: 'Software & Technology Solutions',
      period: '2020 - 2023',
      bullets: [
        'Analyzed monthly recurring revenue (MRR) expansion, customer cohort retention rates, and churn indicators across 1,200+ accounts.',
        'Constructed automated reconciliation models between CRM telemetry and accounting platforms, cutting month-end closing discrepancy reviews by 60%.',
        'Delivered quarterly executive KPI decks highlighting customer acquisition cost (CAC) efficiency and product feature adoption.',
      ],
    },
    {
      role: 'Corporate Tax Compliance & Audit Specialist',
      company: 'Corporate Advisory & Financial Services',
      period: '2017 - 2020',
      bullets: [
        'Managed multi-jurisdiction sales tax / VAT reconciliation across 50,000+ monthly ledger transactions with 99.8% compliance accuracy.',
        'Engineered automated cross-checking Excel Power Query workbooks to eliminate manual data entry discrepancies and identify unclaimed input tax credits.',
        'Conducted detailed variance analysis on vendor invoices and general ledger entries prior to statutory fiscal audits.',
      ],
    },
    {
      role: 'Import / Export & Logistics Operations Coordinator',
      company: 'Global Trade & Freight Management',
      period: '2015 - 2017',
      bullets: [
        'Tracked end-to-end container logistics across 40+ international shipping lanes, reducing average port dwell time by 3.2 days.',
        'Calculated true landed cost per SKU by incorporating fluctuating ocean freight surcharges, customs duties, and FX currency rates.',
        'Negotiated demurrage penalty waivers and instituted preventative port notification alerts, saving $110K+ annually in avoidable fees.',
      ],
    },
    {
      role: 'Production & Inventory Planning Analyst',
      company: 'Textile & Apparel Manufacturing',
      period: '2013 - 2015',
      bullets: [
        'Monitored weaving production floor yields, analyzing raw yarn input vs. finished fabric scrap variance across 3 operational shifts.',
        'Identified quality correlations between specific supplier yarn lots and loom mechanical downtime, reducing scrap rates by 3.8%.',
        'Maintained rolling raw material inventory reorder forecasts and finished goods distribution schedules.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Commerce / Business Administration',
      field: 'Finance & Business Operations',
      year: '2013',
    },
  ],
  certifications: [
    'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
    'Advanced SQL for Data Analytics & Relational Databases',
    'Python for Data Science & Machine Learning (Pandas, NumPy, Scikit-Learn)',
    'Financial Modeling & Advanced Excel Valuation',
  ],
};
