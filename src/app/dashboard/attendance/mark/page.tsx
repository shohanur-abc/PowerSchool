import type { Metadata } from 'next';
import { MarkAttendance } from '@/features/dashboard/attendance';

export const metadata: Metadata = {
    title: 'Mark Attendance — EduManager',
    description: 'Record daily attendance for students',
};

export default function Page() {
    return (
        <MarkAttendance
            classOptions={['Class 6-A', 'Class 7-A', 'Class 8-B', 'Class 9-A', 'Class 10-B']}
            selectedClass="Class 10-B"
            date="Tuesday, 17 June 2025"
            studentCount={10}
            students={[
                { rollNo: '01', name: 'Arif Hossain', status: 'present' },
                { rollNo: '02', name: 'Nadia Islam', status: 'late', remarks: 'Traffic delay' },
                { rollNo: '03', name: 'Tanvir Ahmed', status: 'absent', remarks: 'Medical leave' },
                { rollNo: '04', name: 'Sumaiya Khanam', status: 'present' },
                { rollNo: '05', name: 'Raihan Kabir', status: 'present' },
                { rollNo: '06', name: 'Farhan Akter', status: 'absent' },
                { rollNo: '07', name: 'Mitu Begum', status: 'present' },
                { rollNo: '08', name: 'Shakil Rahman', status: 'present' },
                { rollNo: '09', name: 'Roksana Parvin', status: 'late', remarks: 'Bus late' },
                { rollNo: '10', name: 'Imtiaz Hasan', status: 'present' },
            ]}
        />
    );
}
