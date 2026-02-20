import type { Metadata } from 'next';
import { FeeStructure } from '@/features/dashboard/fees';

export const metadata: Metadata = {
    title: 'Fee Structure — EduManager',
    description: 'Define and manage fee types, amounts and due dates',
};

export default function Page() {
    return (
        <FeeStructure
            stats={[
                { label: 'Total Fee Types', value: '8', subtitle: 'Across all classes' },
                { label: 'Active Structures', value: '6', subtitle: 'Currently in use' },
                { label: 'Total Annual Fee', value: '৳ 42,000', subtitle: 'Average per student' },
            ]}
            structures={[
                {
                    name: 'Tuition Fee',
                    description: 'Monthly academic fee',
                    classes: ['All Classes'],
                    amount: '৳ 3,500',
                    dueDate: '5th of month',
                    frequency: 'Monthly',
                    active: true,
                },
                {
                    name: 'Admission Fee',
                    description: 'One-time on enrollment',
                    classes: ['All Classes'],
                    amount: '৳ 5,000',
                    dueDate: 'On admission',
                    frequency: 'One-time',
                    active: true,
                },
                {
                    name: 'Exam Fee',
                    description: 'Per exam cycle',
                    classes: ['Class 9', 'Class 10'],
                    amount: '৳ 800',
                    dueDate: '20th of month',
                    frequency: 'Per Exam',
                    active: true,
                },
                {
                    name: 'Transport Fee',
                    description: 'School bus service',
                    classes: ['Class 6', 'Class 7', 'Class 8'],
                    amount: '৳ 1,200',
                    dueDate: '10th of month',
                    frequency: 'Monthly',
                    active: true,
                },
                {
                    name: 'Library Fee',
                    description: 'Annual library access',
                    classes: ['All Classes'],
                    amount: '৳ 200',
                    dueDate: '1 April',
                    frequency: 'Annual',
                    active: true,
                },
                {
                    name: 'Science Lab Fee',
                    description: 'Lab equipment & consumables',
                    classes: ['Class 9', 'Class 10'],
                    amount: '৳ 500',
                    dueDate: '1 July',
                    frequency: 'Annual',
                    active: true,
                },
                {
                    name: 'Sports Fee',
                    description: 'Sports equipment & activities',
                    classes: ['All Classes'],
                    amount: '৳ 300',
                    dueDate: '1 July',
                    frequency: 'Annual',
                    active: false,
                },
            ]}
        />
    );
}
