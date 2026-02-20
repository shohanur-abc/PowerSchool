import type { Metadata } from 'next';
import { ReportCards } from '@/features/dashboard/results';

export const metadata: Metadata = {
    title: 'Report Cards — EduManager',
    description: 'Generate and distribute student report cards',
};

export default function Page() {
    return (
        <ReportCards
            classes={[
                { value: 'class-10a', label: 'Class 10-A' },
                { value: 'class-10b', label: 'Class 10-B' },
                { value: 'class-9a', label: 'Class 9-A' },
                { value: 'class-9b', label: 'Class 9-B' },
                { value: 'class-8a', label: 'Class 8-A' },
            ]}
            terms={[
                { value: 'mid-term-2025', label: 'Mid-Term 2025' },
                { value: 'final-2024', label: 'Final Exam 2024' },
                { value: 'term1-2024', label: 'Term 1 — 2024' },
                { value: 'term2-2024', label: 'Term 2 — 2024' },
            ]}
            selectedClass="class-10a"
            selectedTerm="mid-term-2025"
            generatedCards={[
                { studentName: 'Nadia Islam', rollNo: '1002', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'A+', generatedOn: '20 Jan 2025', status: 'ready' },
                { studentName: 'Mithila Roy', rollNo: '1007', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'A', generatedOn: '20 Jan 2025', status: 'distributed' },
                { studentName: 'Raihan Kabir', rollNo: '1005', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'A', generatedOn: '20 Jan 2025', status: 'ready' },
                { studentName: 'Arif Hossain', rollNo: '1001', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'A-', generatedOn: '20 Jan 2025', status: 'ready' },
                { studentName: 'Sabbir Rahman', rollNo: '1008', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'B', generatedOn: '20 Jan 2025', status: 'distributed' },
                { studentName: 'Tanvir Ahmed', rollNo: '1003', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'B', generatedOn: '20 Jan 2025', status: 'generating' },
                { studentName: 'Sumaiya Khanam', rollNo: '1004', class: 'Class 10-A', term: 'Mid-Term 2025', overallGrade: 'C', generatedOn: '20 Jan 2025', status: 'ready' },
            ]}
        />
    );
}
