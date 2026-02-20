import type { Metadata } from 'next';

import {
  StatementGenerator,
  StudentStatement,
} from '@/features/dashboard/fees';

// TODO: Replace static data with API calls to fetch class lists
// TODO: Integrate with fees service for generating real student fee statements

const feeTypes = [
  { label: 'Tuition Fee', value: 'tuition-fee' },
  { label: 'Transport Fee', value: 'transport-fee' },
  { label: 'Lab Fee', value: 'lab-fee' },
  { label: 'Library Fee', value: 'library-fee' },
  { label: 'Exam Fee', value: 'exam-fee' },
  { label: 'Sports & Activities Fee', value: 'sports-activities-fee' },
  { label: 'Computer Lab Fee', value: 'computer-lab-fee' },
  { label: 'Development Fee', value: 'development-fee' },
];

const sampleStudent = {
  id: 'STU-001',
  name: 'Aarav Sharma',
  avatar: '',
  className: 'X',
  section: 'A',
  rollNo: '12',
  parentName: 'Rajesh Sharma',
};

const sampleTransactions = [
  { id: 'TXN-001', date: '2025-04-10', description: 'Tuition Fee (Q1)', debit: 35000, credit: 0, balance: 35000, receiptNo: 'REC-2025-1001' },
  { id: 'TXN-002', date: '2025-04-15', description: 'Payment Received — Online', debit: 0, credit: 35000, balance: 0, receiptNo: 'REC-2025-1002' },
  { id: 'TXN-003', date: '2025-07-05', description: 'Tuition Fee (Q2)', debit: 35000, credit: 0, balance: 35000 },
  { id: 'TXN-004', date: '2025-07-12', description: 'Payment Received — Bank Transfer', debit: 0, credit: 35000, balance: 0, receiptNo: 'REC-2025-2450' },
  { id: 'TXN-005', date: '2025-07-05', description: 'Lab Fee (Annual)', debit: 4500, credit: 0, balance: 4500 },
  { id: 'TXN-006', date: '2025-07-12', description: 'Payment Received — Bank Transfer', debit: 0, credit: 4500, balance: 0, receiptNo: 'REC-2025-2451' },
  { id: 'TXN-007', date: '2025-10-01', description: 'Tuition Fee (Q3)', debit: 35000, credit: 0, balance: 35000 },
  { id: 'TXN-008', date: '2025-10-08', description: 'Payment Received — Cash', debit: 0, credit: 35000, balance: 0, receiptNo: 'REC-2025-3500' },
  { id: 'TXN-009', date: '2026-01-05', description: 'Tuition Fee (Q4)', debit: 35000, credit: 0, balance: 35000 },
  { id: 'TXN-010', date: '2026-02-19', description: 'Payment Received — Online', debit: 0, credit: 35000, balance: 0, receiptNo: 'REC-2026-4501' },
];

const sampleSummary = {
  totalFees: 144500,
  totalPaid: 144500,
  totalDiscount: 0,
  outstanding: 0,
};

const sampleDateRange = {
  from: '2025-04-01',
  to: '2026-03-31',
};

export const metadata: Metadata = {
  title: 'Fee Statements',
  description:
    'Generate and view detailed fee statements for individual students, filter by class and date range, and download or print statements for school records.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <StatementGenerator
        title="Generate Fee Statement"
        feeTypes={feeTypes}
      />

      <StudentStatement
        student={sampleStudent}
        transactions={sampleTransactions}
        summary={sampleSummary}
        dateRange={sampleDateRange}
      />
    </div>
  );
}
