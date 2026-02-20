import type { Metadata } from 'next';
import { FeeTracking } from '@/features/dashboard/fees';

export const metadata: Metadata = {
    title: 'Fee Tracking — EduManager',
    description: 'Monitor payment statuses and follow up on pending fees',
};

export default function Page() {
    return (
        <FeeTracking
            stats={[
                { label: 'Total Due', value: '৳ 3,92,500', count: 150 },
                { label: 'Paid', value: '৳ 3,24,000', count: 127 },
                { label: 'Pending', value: '৳ 68,500', count: 23 },
                { label: 'Overdue', value: '৳ 24,200', count: 8 },
            ]}
            filters={{ active: ['June 2025', 'All Classes'] }}
            records={[
                { studentName: 'Tanvir Ahmed', class: 'Class 10-B', feeType: 'Tuition Fee', amount: '৳ 3,500', dueDate: '5 Jun 2025', status: 'overdue' },
                { studentName: 'Nadia Islam', class: 'Class 9-B', feeType: 'Exam Fee', amount: '৳ 800', dueDate: '20 Jun 2025', status: 'pending' },
                { studentName: 'Arif Hossain', class: 'Class 10-B', feeType: 'Tuition Fee', amount: '৳ 3,500', dueDate: '5 Jun 2025', status: 'paid' },
                { studentName: 'Sumaiya Khanam', class: 'Class 10-A', feeType: 'Transport Fee', amount: '৳ 1,200', dueDate: '10 Jun 2025', status: 'paid' },
                { studentName: 'Raihan Kabir', class: 'Class 7-A', feeType: 'Tuition Fee', amount: '৳ 2,800', dueDate: '5 Jun 2025', status: 'partial' },
                { studentName: 'Farhan Akter', class: 'Class 9-B', feeType: 'Tuition Fee', amount: '৳ 3,200', dueDate: '5 Jun 2025', status: 'overdue' },
                { studentName: 'Mitu Begum', class: 'Class 10-B', feeType: 'Exam Fee', amount: '৳ 800', dueDate: '20 Jun 2025', status: 'paid' },
                { studentName: 'Shakil Rahman', class: 'Class 8-A', feeType: 'Tuition Fee', amount: '৳ 3,000', dueDate: '5 Jun 2025', status: 'pending' },
            ]}
        />
    );
}
