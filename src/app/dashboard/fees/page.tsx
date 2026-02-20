import type { Metadata } from 'next';

import {
  FeeStats,
  CollectionTrend,
  PaymentDistribution,
  OverdueList,
  RecentPayments,
} from '@/features/dashboard/fees';

// TODO: Replace static data with API calls to fetch real-time fees data
// TODO: Integrate with fees service for live collection statistics

const stats = [
  {
    title: 'Total Collected',
    amount: 4852000,
    change: '+8.3%',
    changeType: 'up' as const,
    icon: 'IndianRupee',
    description: 'Total fees collected this academic year',
  },
  {
    title: 'Pending Fees',
    amount: 1238000,
    change: '-3.1%',
    changeType: 'down' as const,
    icon: 'Clock',
    description: 'Outstanding fees yet to be collected',
  },
  {
    title: 'Overdue Amount',
    amount: 475000,
    change: '+1.5%',
    changeType: 'up' as const,
    icon: 'AlertTriangle',
    description: 'Fees past their due date',
  },
  {
    title: 'Collection Rate',
    amount: 79,
    change: '+4.2%',
    changeType: 'up' as const,
    icon: 'TrendingUp',
    description: 'Percentage of total fees collected so far',
  },
];

const collectionTrendData = [
  { month: 'Apr', collected: 820000, expected: 1200000 },
  { month: 'May', collected: 560000, expected: 900000 },
  { month: 'Jun', collected: 480000, expected: 770000 },
  { month: 'Jul', collected: 510000, expected: 820000 },
  { month: 'Aug', collected: 430000, expected: 690000 },
  { month: 'Sep', collected: 470000, expected: 750000 },
  { month: 'Oct', collected: 620000, expected: 970000 },
  { month: 'Nov', collected: 390000, expected: 630000 },
  { month: 'Dec', collected: 350000, expected: 560000 },
  { month: 'Jan', collected: 710000, expected: 1030000 },
  { month: 'Feb', collected: 512000, expected: 770000 },
];

const paymentDistributionData = [
  { method: 'Tuition Fee', amount: 2450000 },
  { method: 'Transport Fee', amount: 680000 },
  { method: 'Lab & Library', amount: 420000 },
  { method: 'Exam Fee', amount: 310000 },
  { method: 'Sports & Activities', amount: 275000 },
  { method: 'Miscellaneous', amount: 217000 },
];

const overduePayments = [
  { id: 'STU-001', studentName: 'Rahul Tiwari', studentAvatar: '', className: 'IX', section: 'A', amount: 32500, dueDate: '2026-01-15', daysOverdue: 35, contactNo: '+91 98765 43210' },
  { id: 'STU-002', studentName: 'Sneha Pillai', studentAvatar: '', className: 'VII', section: 'A', amount: 28000, dueDate: '2026-01-20', daysOverdue: 30, contactNo: '+91 87654 32109' },
  { id: 'STU-003', studentName: 'Kunal Saxena', studentAvatar: '', className: 'X', section: 'A', amount: 45000, dueDate: '2026-01-25', daysOverdue: 25, contactNo: '+91 76543 21098' },
  { id: 'STU-004', studentName: 'Pooja Bhatt', studentAvatar: '', className: 'XI', section: 'Sci', amount: 52000, dueDate: '2026-01-28', daysOverdue: 22, contactNo: '+91 65432 10987' },
  { id: 'STU-005', studentName: 'Vivek Malhotra', studentAvatar: '', className: 'VI', section: 'B', amount: 18500, dueDate: '2026-02-01', daysOverdue: 18, contactNo: '+91 54321 09876' },
  { id: 'STU-006', studentName: 'Nandini Rao', studentAvatar: '', className: 'V', section: 'A', amount: 15000, dueDate: '2026-02-03', daysOverdue: 16, contactNo: '+91 43210 98765' },
  { id: 'STU-007', studentName: 'Arjun Mehta', studentAvatar: '', className: 'VIII', section: 'B', amount: 27500, dueDate: '2026-02-05', daysOverdue: 14, contactNo: '+91 32109 87654' },
  { id: 'STU-008', studentName: 'Meera Joshi', studentAvatar: '', className: 'XII', section: 'Sci', amount: 61000, dueDate: '2026-02-07', daysOverdue: 12, contactNo: '+91 21098 76543' },
];

const recentPayments = [
  { receiptNo: 'REC-2026-4501', studentName: 'Aarav Sharma', studentAvatar: '', amount: 35000, method: 'Online', date: '2026-02-19', feeType: 'Tuition Fee' },
  { receiptNo: 'REC-2026-4502', studentName: 'Priya Patel', studentAvatar: '', amount: 28000, method: 'Bank Transfer', date: '2026-02-19', feeType: 'Tuition Fee' },
  { receiptNo: 'REC-2026-4498', studentName: 'Ananya Singh', studentAvatar: '', amount: 22500, method: 'Cash', date: '2026-02-18', feeType: 'Lab Fee' },
  { receiptNo: 'REC-2026-4497', studentName: 'Vikram Reddy', studentAvatar: '', amount: 18000, method: 'Cheque', date: '2026-02-18', feeType: 'Transport Fee' },
  { receiptNo: 'REC-2026-4496', studentName: 'Kavya Iyer', studentAvatar: '', amount: 48000, method: 'Online', date: '2026-02-18', feeType: 'Tuition Fee' },
  { receiptNo: 'REC-2026-4493', studentName: 'Siddharth Nair', studentAvatar: '', amount: 15500, method: 'Bank Transfer', date: '2026-02-17', feeType: 'Exam Fee' },
  { receiptNo: 'REC-2026-4492', studentName: 'Ishita Banerjee', studentAvatar: '', amount: 42000, method: 'Online', date: '2026-02-17', feeType: 'Tuition Fee' },
  { receiptNo: 'REC-2026-4490', studentName: 'Aditya Kulkarni', studentAvatar: '', amount: 12000, method: 'Cash', date: '2026-02-17', feeType: 'Sports & Activities Fee' },
  { receiptNo: 'REC-2026-4488', studentName: 'Divya Choudhury', studentAvatar: '', amount: 35000, method: 'Cheque', date: '2026-02-16', feeType: 'Tuition Fee' },
  { receiptNo: 'REC-2026-4486', studentName: 'Rohan Gupta', studentAvatar: '', amount: 10500, method: 'Online', date: '2026-02-16', feeType: 'Library Fee' },
];

export const metadata: Metadata = {
  title: 'Fees Overview',
  description:
    'View real-time fee collection statistics, monthly collection trends, payment distribution across categories, overdue students, and recent payment records.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <FeeStats stats={stats} />

      <CollectionTrend
        title="Monthly Collection Trend"
        description="Collected vs expected fees across the current academic year"
        data={collectionTrendData}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <PaymentDistribution
          title="Payment Distribution"
          description="Fee collection breakdown by category"
          data={paymentDistributionData}
        />

        <OverdueList
          title="Overdue Fee Payments"
          payments={overduePayments}
        />
      </div>

      <RecentPayments
        title="Recent Payments"
        payments={recentPayments}
      />
    </div>
  );
}
