import type { Metadata } from 'next';
import { FeeStatements } from '@/features/dashboard/fees';

export const metadata: Metadata = {
    title: 'Fee Statements — EduManager',
    description: 'Generate and download fee statements for students',
};

export default function Page() {
    return (
        <FeeStatements
            recentStatements={[
                { studentName: 'Arif Hossain', class: 'Class 10-B', period: 'Jan – Jun 2025', type: 'Full Statement', generatedAt: '17 Jun 2025' },
                { studentName: 'Sumaiya Khanam', class: 'Class 10-A', period: 'Jun 2025', type: 'Paid Only', generatedAt: '16 Jun 2025' },
                { studentName: 'Raihan Kabir', class: 'Class 7-A', period: 'Apr – Jun 2025', type: 'Pending Only', generatedAt: '15 Jun 2025' },
                { studentName: 'Nadia Islam', class: 'Class 9-B', period: 'Jun 2025', type: 'Overdue Only', generatedAt: '14 Jun 2025' },
                { studentName: 'Imtiaz Hasan', class: 'Class 9-A', period: 'Jan – Jun 2025', type: 'Full Statement', generatedAt: '13 Jun 2025' },
            ]}
        />
    );
}
