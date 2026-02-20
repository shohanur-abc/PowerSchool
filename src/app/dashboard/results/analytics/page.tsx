import type { Metadata } from 'next';
import { ResultsAnalytics } from '@/features/dashboard/results';

export const metadata: Metadata = {
    title: 'Results Analytics — EduManager',
    description: 'Analyse academic performance trends and insights',
};

export default function Page() {
    return (
        <ResultsAnalytics
            terms={[
                { value: 'mid-term-2025', label: 'Mid-Term 2025' },
                { value: 'final-2024', label: 'Final Exam 2024' },
                { value: 'term1-2024', label: 'Term 1 — 2024' },
            ]}
            selectedTerm="mid-term-2025"
            performanceStats={[
                { label: 'Overall Avg Score', value: '76.4%', icon: 'avg', trend: '+2.1%', trendUp: true },
                { label: 'Pass Rate', value: '91.4%', icon: 'pass', trend: '+1.2%', trendUp: true },
                { label: 'Top Performers', value: '142', icon: 'top', trend: '+18', trendUp: true },
                { label: 'Students Assessed', value: '1,240', icon: 'students' },
            ]}
            subjectAnalysis={[
                { name: 'Mathematics', avgScore: 74, passRate: 88, highest: 98, lowest: 42 },
                { name: 'Science', avgScore: 78, passRate: 92, highest: 97, lowest: 48 },
                { name: 'English', avgScore: 81, passRate: 95, highest: 99, lowest: 55 },
                { name: 'History', avgScore: 69, passRate: 84, highest: 94, lowest: 38 },
                { name: 'Geography', avgScore: 72, passRate: 87, highest: 96, lowest: 44 },
                { name: 'Physics', avgScore: 71, passRate: 85, highest: 95, lowest: 40 },
            ]}
            gradeDistribution={[
                { grade: 'A+', count: 98, percentage: 8 },
                { grade: 'A', count: 186, percentage: 15 },
                { grade: 'A-', count: 212, percentage: 17 },
                { grade: 'B', count: 298, percentage: 24 },
                { grade: 'C', count: 248, percentage: 20 },
                { grade: 'D', count: 124, percentage: 10 },
                { grade: 'F', count: 74, percentage: 6 },
            ]}
        />
    );
}
