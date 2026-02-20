import type { Metadata } from 'next';

import {
  PaymentTracker,
  ClassCollectionSummary,
} from '@/features/dashboard/fees';

// TODO: Replace static data with API calls to fetch payment tracking data
// TODO: Integrate with student management service for real-time fee status

const records = [
  { receiptNo: 'REC-2026-4501', studentName: 'Aarav Sharma', className: 'X', section: 'A', feeType: 'Tuition Fee', amount: 67500, method: 'Online', date: '2026-02-19', status: 'paid' as const },
  { receiptNo: 'REC-2026-4502', studentName: 'Priya Patel', className: 'IX', section: 'B', feeType: 'Tuition Fee', amount: 34000, method: 'Bank Transfer', date: '2026-02-19', status: 'partial' as const },
  { receiptNo: 'REC-2026-4486', studentName: 'Rohan Gupta', className: 'IV', section: 'A', feeType: 'Tuition Fee', amount: 45000, method: 'Online', date: '2026-02-16', status: 'paid' as const },
  { receiptNo: 'REC-2026-4498', studentName: 'Ananya Singh', className: 'VIII', section: 'A', feeType: 'Lab Fee', amount: 22500, method: 'Cash', date: '2026-02-18', status: 'partial' as const },
  { receiptNo: 'REC-2026-4497', studentName: 'Vikram Reddy', className: 'VII', section: 'A', feeType: 'Transport Fee', amount: 18000, method: 'Cheque', date: '2026-02-18', status: 'partial' as const },
  { receiptNo: 'REC-2026-4496', studentName: 'Kavya Iyer', className: 'XI', section: 'Sci', feeType: 'Tuition Fee', amount: 78000, method: 'Online', date: '2026-02-18', status: 'paid' as const },
  { receiptNo: 'REC-2026-4480', studentName: 'Rahul Tiwari', className: 'IX', section: 'A', feeType: 'Tuition Fee', amount: 62000, method: 'Cash', date: '2026-02-10', status: 'pending' as const },
  { receiptNo: 'REC-2026-4478', studentName: 'Sneha Pillai', className: 'VII', section: 'A', feeType: 'Tuition Fee', amount: 52000, method: 'Bank Transfer', date: '2026-02-08', status: 'pending' as const },
  { receiptNo: 'REC-2026-4493', studentName: 'Siddharth Nair', className: 'VI', section: 'B', feeType: 'Exam Fee', amount: 15500, method: 'Bank Transfer', date: '2026-02-17', status: 'partial' as const },
  { receiptNo: 'REC-2026-4492', studentName: 'Ishita Banerjee', className: 'XII', section: 'Com', feeType: 'Tuition Fee', amount: 72000, method: 'Online', date: '2026-02-17', status: 'paid' as const },
  { receiptNo: 'REC-2026-4475', studentName: 'Kunal Saxena', className: 'X', section: 'A', feeType: 'Tuition Fee', amount: 67500, method: 'Cash', date: '2026-01-25', status: 'pending' as const },
  { receiptNo: 'REC-2026-4470', studentName: 'Pooja Bhatt', className: 'XI', section: 'Sci', feeType: 'Tuition Fee', amount: 26000, method: 'Online', date: '2025-11-10', status: 'partial' as const },
];

const classCollectionData = [
  { className: 'Nursery', collected: 486000, pending: 54000 },
  { className: 'LKG', collected: 476000, pending: 84000 },
  { className: 'UKG', collected: 504000, pending: 56000 },
  { className: 'I', collected: 508400, pending: 111600 },
  { className: 'II', collected: 539400, pending: 80600 },
  { className: 'III', collected: 524800, pending: 115200 },
  { className: 'IV', collected: 550400, pending: 89600 },
  { className: 'V', collected: 554400, pending: 105600 },
  { className: 'VI', collected: 583200, pending: 136800 },
  { className: 'VII', collected: 612000, pending: 108000 },
  { className: 'VIII', collected: 592000, pending: 148000 },
  { className: 'IX', collected: 608400, pending: 171600 },
  { className: 'X', collected: 655200, pending: 124800 },
  { className: 'XI', collected: 663000, pending: 187000 },
  { className: 'XII', collected: 714000, pending: 136000 },
];

export const metadata: Metadata = {
  title: 'Fee Tracking',
  description:
    'Track student-wise payment status, monitor paid, partial, unpaid, and overdue fees, and view class-wise fee collection summaries.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <PaymentTracker
        title="Payment Tracker"
        records={records}
      />

      <ClassCollectionSummary
        title="Class-wise Collection Summary"
        description="Fee collection progress for each class in the current academic year"
        data={classCollectionData}
      />
    </div>
  );
}
