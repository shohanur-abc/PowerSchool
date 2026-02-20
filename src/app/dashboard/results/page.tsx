import type { Metadata } from 'next';
import { ResultsOverview } from '@/features/dashboard/results';
import ROUTES from '@/lib/routes';

export const metadata: Metadata = {
    title: 'Results — EduManager',
    description: 'Manage exam results, grades, and academic performance',
};

export default function Page() {
    return (
        <ResultsOverview
            stats={[
                { label: 'Total Exams', value: '48', icon: 'exams', trend: '+4', trendUp: true },
                { label: 'Average Grade', value: 'B+', icon: 'grade', trend: '+0.2', trendUp: true },
                { label: 'Pass Rate', value: '91.4%', icon: 'pass', trend: '+1.2%', trendUp: true },
                { label: 'Students Assessed', value: '1,240', icon: 'students' },
            ]}
            recentExams={[
                { name: 'Mid-Term Exam', class: 'Class 10-A', subject: 'Mathematics', date: '15 Jan 2025', avgGrade: 'B', status: 'published' },
                { name: 'Unit Test 3', class: 'Class 9-B', subject: 'Science', date: '12 Jan 2025', avgGrade: 'A-', status: 'published' },
                { name: 'Final Exam', class: 'Class 8-C', subject: 'English', date: '10 Jan 2025', avgGrade: 'A', status: 'published' },
                { name: 'Unit Test 4', class: 'Class 7-A', subject: 'History', date: '08 Jan 2025', avgGrade: 'C', status: 'pending' },
                { name: 'Mid-Term Exam', class: 'Class 10-B', subject: 'Physics', date: '06 Jan 2025', avgGrade: 'B', status: 'draft' },
            ]}
            quickActions={[
                { label: 'Enter Results', href: ROUTES.dashboard.results.enter, icon: 'enter' },
                { label: 'View Results', href: ROUTES.dashboard.results.view, icon: 'view' },
                { label: 'Report Cards', href: ROUTES.dashboard.results.reportCards, icon: 'reports' },
                { label: 'Analytics', href: ROUTES.dashboard.results.analytics, icon: 'analytics' },
            ]}
        />
    );
}
