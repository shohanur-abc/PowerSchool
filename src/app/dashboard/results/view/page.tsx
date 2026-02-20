import type { Metadata } from 'next';
import { ViewResults } from '@/features/dashboard/results';

export const metadata: Metadata = {
    title: 'View Results — EduManager',
    description: 'Browse and filter student exam results',
};

export default function Page() {
    return (
        <ViewResults
            classes={[
                { value: 'all', label: 'All Classes' },
                { value: 'class-10a', label: 'Class 10-A' },
                { value: 'class-10b', label: 'Class 10-B' },
                { value: 'class-9a', label: 'Class 9-A' },
                { value: 'class-9b', label: 'Class 9-B' },
            ]}
            exams={[
                { value: 'all', label: 'All Exams' },
                { value: 'mid-term-2025', label: 'Mid-Term 2025' },
                { value: 'unit-test-3', label: 'Unit Test 3' },
                { value: 'final-2024', label: 'Final Exam 2024' },
            ]}
            selectedClass="all"
            selectedExam="mid-term-2025"
            results={[
                { rank: 1, studentName: 'Nadia Islam', rollNo: '1002', class: 'Class 10-A', subject: 'Mathematics', marks: 91, totalMarks: 100, percentage: 91, grade: 'A+', passed: true },
                { rank: 2, studentName: 'Mithila Roy', rollNo: '1007', class: 'Class 10-A', subject: 'Mathematics', marks: 88, totalMarks: 100, percentage: 88, grade: 'A', passed: true },
                { rank: 3, studentName: 'Raihan Kabir', rollNo: '1005', class: 'Class 10-A', subject: 'Mathematics', marks: 88, totalMarks: 100, percentage: 88, grade: 'A', passed: true },
                { rank: 4, studentName: 'Arif Hossain', rollNo: '1001', class: 'Class 10-A', subject: 'Mathematics', marks: 82, totalMarks: 100, percentage: 82, grade: 'A-', passed: true },
                { rank: 5, studentName: 'Sabbir Rahman', rollNo: '1008', class: 'Class 10-A', subject: 'Mathematics', marks: 70, totalMarks: 100, percentage: 70, grade: 'B', passed: true },
                { rank: 6, studentName: 'Tanvir Ahmed', rollNo: '1003', class: 'Class 10-A', subject: 'Mathematics', marks: 74, totalMarks: 100, percentage: 74, grade: 'B', passed: true },
                { rank: 7, studentName: 'Sumaiya Khanam', rollNo: '1004', class: 'Class 10-A', subject: 'Mathematics', marks: 67, totalMarks: 100, percentage: 67, grade: 'C', passed: true },
                { rank: 8, studentName: 'Farhan Akter', rollNo: '1006', class: 'Class 10-A', subject: 'Mathematics', marks: 55, totalMarks: 100, percentage: 55, grade: 'D', passed: false },
            ]}
        />
    );
}
