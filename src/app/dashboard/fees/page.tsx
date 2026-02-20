import type { Metadata } from 'next';
import { FeesOverview } from '@/features/dashboard/fees';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Fees — EduManager',
    description: 'Manage fee collection, tracking and financial records',
};

export default function Page() {
    return (
        <FeesOverview
            stats={[
                { label: 'Total Collected', value: '৳ 14,82,500', icon: 'collected', subtitle: 'This academic year' },
                { label: 'Pending', value: '৳ 3,24,000', icon: 'pending', subtitle: '127 students' },
                { label: 'This Month', value: '৳ 1,12,000', icon: 'month', subtitle: 'June 2025' },
                { label: 'Overdue', value: '৳ 68,500', icon: 'overdue', subtitle: '23 students' },
            ]}
            recentTransactions={[
                { studentName: 'Arif Hossain', class: 'Class 10-B', feeType: 'Tuition Fee', amount: '৳ 3,500', method: 'Online', date: '17 Jun 2025' },
                { studentName: 'Sumaiya Khanam', class: 'Class 10-A', feeType: 'Exam Fee', amount: '৳ 800', method: 'Cash', date: '16 Jun 2025' },
                { studentName: 'Raihan Kabir', class: 'Class 7-A', feeType: 'Tuition Fee', amount: '৳ 2,800', method: 'Cheque', date: '15 Jun 2025' },
                { studentName: 'Mitu Begum', class: 'Class 10-B', feeType: 'Transport Fee', amount: '৳ 1,200', method: 'Online', date: '15 Jun 2025' },
                { studentName: 'Imtiaz Hasan', class: 'Class 9-A', feeType: 'Tuition Fee', amount: '৳ 3,200', method: 'Cash', date: '14 Jun 2025' },
            ]}
            quickLinks={[
                { label: 'Collect Fees', href: ROUTES.dashboard.fees.collection },
                { label: 'Track Payments', href: ROUTES.dashboard.fees.tracking },
                { label: 'Generate Statements', href: ROUTES.dashboard.fees.statements },
                { label: 'Fee Structure', href: ROUTES.dashboard.fees.structure },
            ]}
        />
    );
}
