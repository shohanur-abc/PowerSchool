import type { Metadata } from 'next';
import { FeeCollection } from '@/features/dashboard/fees';

export const metadata: Metadata = {
    title: 'Fee Collection — EduManager',
    description: 'Collect fee payments from students',
};

export default function Page() {
    return (
        <FeeCollection
            student={{
                name: 'Arif Hossain',
                rollNo: '2025-10B-01',
                class: 'Class 10-B',
                outstanding: '৳ 4,700',
            }}
            feeItems={[
                { name: 'Tuition Fee — June 2025', amount: '৳ 3,500', dueDate: '5 Jun 2025', selected: true, overdue: true },
                { name: 'Exam Fee — Mid-Term', amount: '৳ 800', dueDate: '20 Jun 2025', selected: true },
                { name: 'Transport Fee — June 2025', amount: '৳ 400', dueDate: '10 Jun 2025', selected: false },
                { name: 'Library Fee — Annual', amount: '৳ 200', dueDate: '1 Apr 2025', selected: false, overdue: true },
            ]}
            paymentMethods={[
                { id: 'cash', label: 'Cash' },
                { id: 'online', label: 'Online / bKash / Nagad' },
                { id: 'cheque', label: 'Cheque / Bank Transfer' },
            ]}
        />
    );
}
