import type { Metadata } from 'next';
import { ParentDashboard } from '@/features/dashboard/parent';

export const metadata: Metadata = {
    title: 'Parent Dashboard — EduManager',
    description: 'Monitor your children\'s academic progress',
};

export default function Page() {
    return (
        <ParentDashboard
            children={[
                { name: 'Aisha Rahman', class: 'Class 8-A', attendancePercent: 94, grade: 'A' },
                { name: 'Bilal Rahman', class: 'Class 5-B', attendancePercent: 88, grade: 'B+' },
            ]}
            attendance={[
                { childName: 'Aisha Rahman', percent: 94 },
                { childName: 'Bilal Rahman', percent: 88 },
            ]}
            fees={[
                { description: 'Tuition Fee — Aisha (Term 2)', amount: '৳ 8,500', dueDate: 'Due: Jun 15', status: 'paid' },
                { description: 'Tuition Fee — Bilal (Term 2)', amount: '৳ 7,200', dueDate: 'Due: Jun 15', status: 'pending' },
                { description: 'Transport Fee — Aisha', amount: '৳ 1,500', dueDate: 'Overdue: May 31', status: 'overdue' },
            ]}
            notices={[
                { title: 'Annual Sports Day — June 20', date: 'Jun 10, 2024' },
                { title: 'Term 2 Exam Schedule Released', date: 'Jun 8, 2024' },
                { title: 'Parent-Teacher Meeting — June 25', date: 'Jun 5, 2024' },
            ]}
            events={[
                { title: 'Annual Sports Day', date: 'Jun 20' },
                { title: 'Parent-Teacher Meeting', date: 'Jun 25' },
                { title: 'Term 2 Exams Begin', date: 'Jul 1' },
            ]}
        />
    );
}
