import type { Metadata } from 'next';

import { FeeStructureTable, AddFeeType } from '@/features/dashboard/fees';

// TODO: Replace static data with API calls to fetch fee structure configuration
// TODO: Integrate with admin service for managing fee types and amounts

const feeTypes = [
  { id: 'FS-001', name: 'Tuition Fee', amount: 35000, frequency: 'quarterly' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-10', status: 'active' as const },
  { id: 'FS-002', name: 'Admission Fee', amount: 15000, frequency: 'one-time' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-01', status: 'active' as const },
  { id: 'FS-003', name: 'Transport Fee', amount: 8500, frequency: 'monthly' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-05', status: 'active' as const },
  { id: 'FS-004', name: 'Lab Fee', amount: 4500, frequency: 'annual' as const, applicableClasses: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-005', name: 'Library Fee', amount: 2000, frequency: 'annual' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-006', name: 'Exam Fee', amount: 3500, frequency: 'quarterly' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-03-01', status: 'active' as const },
  { id: 'FS-007', name: 'Sports & Activities Fee', amount: 3000, frequency: 'annual' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-008', name: 'Computer Lab Fee', amount: 2500, frequency: 'annual' as const, applicableClasses: ['III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-009', name: 'Smart Class Fee', amount: 2000, frequency: 'annual' as const, applicableClasses: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-010', name: 'Annual Function Fee', amount: 1500, frequency: 'annual' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-11-01', status: 'active' as const },
  { id: 'FS-011', name: 'Development Fee', amount: 5000, frequency: 'annual' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-15', status: 'active' as const },
  { id: 'FS-012', name: 'Hostel Fee', amount: 12000, frequency: 'monthly' as const, applicableClasses: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-05', status: 'active' as const },
  { id: 'FS-013', name: 'Uniform & Books', description: 'Annual uniform and textbook charges', amount: 6500, frequency: 'annual' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-20', status: 'disabled' as const },
  { id: 'FS-014', name: 'Late Fee Penalty', description: 'Penalty charged per instance of late payment', amount: 500, frequency: 'one-time' as const, applicableClasses: ['Nursery', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'], dueDate: '2026-04-30', status: 'disabled' as const },
];

const availableClasses = [
  { label: 'Nursery', value: 'Nursery' },
  { label: 'LKG', value: 'LKG' },
  { label: 'UKG', value: 'UKG' },
  { label: 'I', value: 'I' },
  { label: 'II', value: 'II' },
  { label: 'III', value: 'III' },
  { label: 'IV', value: 'IV' },
  { label: 'V', value: 'V' },
  { label: 'VI', value: 'VI' },
  { label: 'VII', value: 'VII' },
  { label: 'VIII', value: 'VIII' },
  { label: 'IX', value: 'IX' },
  { label: 'X', value: 'X' },
  { label: 'XI', value: 'XI' },
  { label: 'XII', value: 'XII' },
];

export const metadata: Metadata = {
  title: 'Fee Structure',
  description:
    'View and manage the school fee structure, including fee types, amounts, frequency, applicability, and mandatory status. Add new fee types as needed.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <FeeStructureTable
        title="Fee Structure"
        feeTypes={feeTypes}
      />

      <AddFeeType
        title="Add New Fee Type"
        availableClasses={availableClasses}
      />
    </div>
  );
}
