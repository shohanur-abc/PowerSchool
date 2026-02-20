import type { Metadata } from 'next';

import {
  AnalyticsOverview,
  ComparativeCharts,
  DataInsights,
  ExportCenter,
} from '@/features/dashboard/reports';

// TODO: Replace static data with API calls to fetch analytics metrics
// TODO: Integrate with analytics engine for real-time comparative data

const metrics = [
  {
    title: 'Average Attendance Rate',
    value: '91.6',
    suffix: '%',
    change: '+1.3%',
    changeType: 'up' as const,
    icon: 'CalendarCheck',
  },
  {
    title: 'Fee Collection Rate',
    value: '84.2',
    suffix: '%',
    change: '+5.7%',
    changeType: 'up' as const,
    icon: 'IndianRupee',
  },
  {
    title: 'Academic Pass Rate',
    value: '96.8',
    suffix: '%',
    change: '+0.9%',
    changeType: 'up' as const,
    icon: 'GraduationCap',
  },
  {
    title: 'Student Retention',
    value: '98.1',
    suffix: '%',
    change: '+0.4%',
    changeType: 'up' as const,
    icon: 'UserCheck',
  },
];

const comparisons = [
  {
    id: 'attendance',
    label: 'Attendance',
    chartType: 'line' as const,
    xAxisKey: 'month',
    data: [
      { month: 'Apr', current: 94.2, previous: 93.1 },
      { month: 'May', current: 91.5, previous: 90.8 },
      { month: 'Jun', current: 88.3, previous: 87.2 },
      { month: 'Jul', current: 92.7, previous: 91.0 },
      { month: 'Aug', current: 93.1, previous: 92.4 },
      { month: 'Sep', current: 90.8, previous: 89.5 },
      { month: 'Oct', current: 92.4, previous: 91.7 },
      { month: 'Nov', current: 91.0, previous: 90.2 },
      { month: 'Dec', current: 89.5, previous: 88.1 },
      { month: 'Jan', current: 93.8, previous: 92.0 },
      { month: 'Feb', current: 91.6, previous: 90.3 },
    ],
    series: [
      { dataKey: 'current', label: '2025-26' },
      { dataKey: 'previous', label: '2024-25' },
    ],
  },
  {
    id: 'feeCollection',
    label: 'Fee Collection',
    chartType: 'bar' as const,
    xAxisKey: 'term',
    data: [
      { term: 'Term I', collected: 4850000, target: 5200000 },
      { term: 'Term II', collected: 4375000, target: 5200000 },
      { term: 'Term III', collected: 0, target: 5200000 },
    ],
    series: [
      { dataKey: 'collected', label: 'Collected' },
      { dataKey: 'target', label: 'Target' },
    ],
  },
  {
    id: 'academicPerformance',
    label: 'Academic Performance',
    chartType: 'bar' as const,
    xAxisKey: 'exam',
    data: [
      { exam: 'Unit Test I', avgPercent: 72.4, passRate: 95.1 },
      { exam: 'Half Yearly', avgPercent: 68.9, passRate: 93.8 },
      { exam: 'Unit Test II', avgPercent: 74.1, passRate: 96.2 },
      { exam: 'Unit Test III', avgPercent: 75.6, passRate: 96.8 },
    ],
    series: [
      { dataKey: 'avgPercent', label: 'Avg %' },
      { dataKey: 'passRate', label: 'Pass Rate %' },
    ],
  },
];

const insights = [
  {
    title: 'Class IX-B Attendance Declining',
    description: 'Attendance in Class IX-B has dropped 6.2% over the last 4 weeks. 8 students are below the 75% CBSE threshold.',
    icon: 'TrendingDown',
    metric: '85.4% → 79.2%',
    metricLabel: 'Attendance rate',
    trend: '-6.2%',
    trendType: 'down' as const,
    recommendation: 'Schedule parent-teacher meetings for students below 75% attendance threshold.',
  },
  {
    title: 'Mathematics Pass Rate Improvement',
    description: 'Class X Mathematics pass rate improved from 88% in Unit Test II to 94% in Unit Test III after remedial classes were introduced.',
    icon: 'TrendingUp',
    metric: '88% → 94%',
    metricLabel: 'Pass rate',
    trend: '+6%',
    trendType: 'up' as const,
    recommendation: 'Continue remedial classes and extend to Science subject.',
  },
  {
    title: 'Term II Fee Collection Below Target',
    description: 'Fee collection stands at 84.2% against target. ₹8.25L remains outstanding. Classes VI–VIII have the highest default rates.',
    icon: 'AlertTriangle',
    metric: '₹43.75L / ₹52L',
    metricLabel: 'Collection vs target',
    trend: '84.2%',
    trendType: 'neutral' as const,
    recommendation: 'Send reminders to Classes VI–VIII parents with outstanding dues.',
  },
  {
    title: 'Science Stream Outperforming Commerce',
    description: 'Class XI Science section average is 76.3% versus Commerce at 68.9%. Commerce students show weakness in Accountancy and Business Studies.',
    icon: 'BarChart3',
    metric: '76.3% vs 68.9%',
    metricLabel: 'Stream averages',
    trend: '+7.4%',
    trendType: 'neutral' as const,
  },
  {
    title: 'Late Arrivals Spike on Mondays',
    description: 'Monday late arrivals average 78 students compared to 45 on other weekdays. Transport route 4 (Dwarka sector) contributes 32% of Monday delays.',
    icon: 'Clock',
    metric: '78 avg (Mon)',
    metricLabel: 'Late arrivals',
    trend: '+73%',
    trendType: 'down' as const,
  },
  {
    title: 'Library Utilisation Up 18%',
    description: 'Book issues increased from 340 to 401 per month after the reading hour initiative for Classes VI–VIII was introduced in January.',
    icon: 'BookOpen',
    metric: '340 → 401/month',
    metricLabel: 'Book issues',
    trend: '+18%',
    trendType: 'up' as const,
  },
  {
    title: 'Pre-Board Results Predict Board Readiness',
    description: 'Class XII Pre-Board I results show 97.5% pass rate. 12 students scored below 40% in one or more subjects and need targeted intervention.',
    icon: 'Target',
    metric: '97.5% pass rate',
    metricLabel: 'Pre-Board I',
    trend: '97.5%',
    trendType: 'up' as const,
    recommendation: 'Provide targeted intervention for 12 students scoring below 40%.',
  },
  {
    title: 'Staff Leave Pattern — February',
    description: 'Teaching staff leave requests peaked in the first week of February (14 requests). Substitute arrangements were needed for 9 classes.',
    icon: 'CalendarMinus',
    metric: '14 leave requests',
    metricLabel: 'First week Feb',
    trend: '-9 classes',
    trendType: 'down' as const,
  },
];

const exportOptions = [
  {
    title: 'PDF Report',
    description: 'Formatted report with charts, tables, and school letterhead suitable for printing and official records',
    icon: 'FileText',
    format: '.pdf',
  },
  {
    title: 'Excel Workbook',
    description: 'Multi-sheet workbook with raw data, pivot tables, and summary dashboards for further analysis',
    icon: 'FileSpreadsheet',
    format: '.xlsx',
  },
  {
    title: 'CSV Export',
    description: 'Plain comma-separated data file for bulk import into other systems like UDISE+ or ERP portals',
    icon: 'FileDown',
    format: '.csv',
  },
  {
    title: 'Google Sheets',
    description: 'Export directly to Google Sheets for collaborative editing and sharing with staff and management',
    icon: 'Sheet',
    format: 'Cloud',
  },
];

export const metadata: Metadata = {
  title: 'Reports Analytics',
  description:
    'View key performance metrics, comparative charts for attendance, fee collection and academics, AI-generated data insights, and export reports in multiple formats.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <AnalyticsOverview metrics={metrics} />

      <ComparativeCharts
        title="Comparative Analysis"
        description="Year-over-year and term-wise comparisons across key school metrics"
        comparisons={comparisons}
      />

      <DataInsights
        title="Data Insights & Recommendations"
        insights={insights}
      />

      <ExportCenter
        title="Export Centre"
        options={exportOptions}
      />
    </div>
  );
}
