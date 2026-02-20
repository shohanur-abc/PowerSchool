import type { Metadata } from 'next';
import { EnterResults } from '@/features/dashboard/results';

export const metadata: Metadata = {
    title: 'Enter Results — EduManager',
    description: 'Input exam marks and grades for students',
};

export default function Page() {
    return (
        <EnterResults
            classes={[
                { value: 'class-10a', label: 'Class 10-A' },
                { value: 'class-10b', label: 'Class 10-B' },
                { value: 'class-9a', label: 'Class 9-A' },
                { value: 'class-9b', label: 'Class 9-B' },
                { value: 'class-8a', label: 'Class 8-A' },
            ]}
            exams={[
                { value: 'mid-term-2025', label: 'Mid-Term 2025' },
                { value: 'unit-test-3', label: 'Unit Test 3' },
                { value: 'unit-test-4', label: 'Unit Test 4' },
                { value: 'final-2024', label: 'Final Exam 2024' },
            ]}
            selectedClass="class-10a"
            selectedExam="mid-term-2025"
            students={[
                { id: '1', name: 'Arif Hossain', rollNo: '1001', marksObtained: 82, totalMarks: 100, grade: 'A-', remarks: '' },
                { id: '2', name: 'Nadia Islam', rollNo: '1002', marksObtained: 91, totalMarks: 100, grade: 'A+', remarks: '' },
                { id: '3', name: 'Tanvir Ahmed', rollNo: '1003', marksObtained: 74, totalMarks: 100, grade: 'B', remarks: '' },
                { id: '4', name: 'Sumaiya Khanam', rollNo: '1004', marksObtained: 67, totalMarks: 100, grade: 'C', remarks: 'Needs improvement' },
                { id: '5', name: 'Raihan Kabir', rollNo: '1005', marksObtained: 88, totalMarks: 100, grade: 'A', remarks: '' },
                { id: '6', name: 'Farhan Akter', rollNo: '1006', marksObtained: 55, totalMarks: 100, grade: 'D', remarks: 'Extra support needed' },
                { id: '7', name: 'Mithila Roy', rollNo: '1007', marksObtained: 95, totalMarks: 100, grade: 'A+', remarks: 'Excellent' },
                { id: '8', name: 'Sabbir Rahman', rollNo: '1008', marksObtained: 70, totalMarks: 100, grade: 'B', remarks: '' },
            ]}
        />
    );
}
