import type { Metadata } from 'next';

import { CollectFeeForm, FeeReceipt } from '@/features/dashboard/fees';

// TODO: Replace static data with API calls to fetch fee types and class lists
// TODO: Integrate with payment gateway for online fee collection

const feeTypes = [
  { label: 'Tuition Fee', value: 'tuition-fee' },
  { label: 'Transport Fee', value: 'transport-fee' },
  { label: 'Lab Fee', value: 'lab-fee' },
  { label: 'Library Fee', value: 'library-fee' },
  { label: 'Exam Fee', value: 'exam-fee' },
  { label: 'Sports & Activities Fee', value: 'sports-activities-fee' },
  { label: 'Computer Lab Fee', value: 'computer-lab-fee' },
  { label: 'Annual Function Fee', value: 'annual-function-fee' },
  { label: 'Development Fee', value: 'development-fee' },
  { label: 'Smart Class Fee', value: 'smart-class-fee' },
];

const paymentMethods = [
  { label: 'Cash', value: 'cash' },
  { label: 'Online', value: 'online' },
  { label: 'Bank Transfer', value: 'bank-transfer' },
  { label: 'Cheque', value: 'cheque' },
];

const sampleReceipt = {
  receiptNo: 'REC-2026-4501',
  date: '2026-02-19',
  schoolName: 'Sunrise International School',
  schoolAddress: '123 Education Lane, Knowledge City, IN 400001',
  student: {
    id: 'STU-001',
    name: 'Aarav Sharma',
    className: 'X',
    section: 'A',
    rollNo: '12',
    parentName: 'Rajesh Sharma',
    contactNo: '+91 98765 43210',
  },
  items: [
    { description: 'Tuition Fee (Q3)', amount: 35000 },
    { description: 'Lab Fee', amount: 4500 },
    { description: 'Library Fee', amount: 2000 },
  ],
  total: 41500,
  paymentMethod: 'Online',
  transactionRef: 'TXN-20260219-7823',
  status: 'paid' as const,
};

export const metadata: Metadata = {
  title: 'Fee Collection',
  description:
    'Collect student fees, select fee types and amounts, process payments, and generate fee receipts for parents and school records.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <CollectFeeForm
        title="Collect Fee"
        feeTypes={feeTypes}
        paymentMethods={paymentMethods}
      />

      <FeeReceipt receipt={sampleReceipt} />
    </div>
  );
}
