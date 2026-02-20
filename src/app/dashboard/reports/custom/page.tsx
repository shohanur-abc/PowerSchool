import type { Metadata } from 'next';
import { CustomReports } from '@/features/dashboard/reports';

export const metadata: Metadata = {
    title: 'Custom Reports — EduManager',
    description: 'Build tailored reports with custom fields, filters, and date ranges',
};

export default function Page() {
    return (
        <CustomReports
            dataSourceOptions={[
                { value: 'attendance', label: 'Attendance Data' },
                { value: 'fees', label: 'Fee Records' },
                { value: 'results', label: 'Exam Results' },
                { value: 'students', label: 'Student Information' },
                { value: 'staff', label: 'Staff Records' },
            ]}
            formatOptions={[
                { value: 'pdf', label: 'PDF Document' },
                { value: 'excel', label: 'Excel Spreadsheet' },
                { value: 'csv', label: 'CSV File' },
            ]}
            fieldOptions={[
                { label: 'Student Name', type: 'Text', selected: true },
                { label: 'Roll Number', type: 'Text', selected: true },
                { label: 'Class', type: 'Text', selected: true },
                { label: 'Date', type: 'Date', selected: true },
                { label: 'Status / Grade', type: 'Enum', selected: true },
                { label: 'Marks Obtained', type: 'Number', selected: false },
                { label: 'Parent Contact', type: 'Text', selected: false },
                { label: 'Remarks', type: 'Text', selected: false },
            ]}
            savedReports={[
                { name: 'Class 10 Monthly Attendance', source: 'Attendance Data', lastRun: '20 Jan 2025' },
                { name: 'Defaulters Fee List', source: 'Fee Records', lastRun: '15 Jan 2025' },
                { name: 'Science Subject Analysis', source: 'Exam Results', lastRun: '10 Jan 2025' },
                { name: 'New Student Enrollment Q1', source: 'Student Information', lastRun: '05 Jan 2025' },
            ]}
        />
    );
}
