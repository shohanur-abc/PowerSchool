import type { Metadata } from 'next';
import { AttendanceCorrections } from '@/features/dashboard/attendance';

export const metadata: Metadata = {
    title: 'Attendance Corrections — EduManager',
    description: 'Review and approve attendance correction requests',
};

export default function Page() {
    return (
        <AttendanceCorrections
            stats={[
                { label: 'Pending Requests', value: '12' },
                { label: 'Approved This Month', value: '34' },
                { label: 'Rejected This Month', value: '5' },
            ]}
            requests={[
                {
                    studentName: 'Tanvir Ahmed',
                    class: 'Class 10-B',
                    date: '16 Jun 2025',
                    originalStatus: 'absent',
                    requestedStatus: 'present',
                    reason: 'System error — was present but marked absent by mistake',
                    status: 'pending',
                },
                {
                    studentName: 'Nadia Islam',
                    class: 'Class 9-B',
                    date: '15 Jun 2025',
                    originalStatus: 'absent',
                    requestedStatus: 'late',
                    reason: 'Bus breakdown, arrived 40 minutes late',
                    status: 'pending',
                },
                {
                    studentName: 'Farhan Akter',
                    class: 'Class 9-B',
                    date: '14 Jun 2025',
                    originalStatus: 'absent',
                    requestedStatus: 'present',
                    reason: 'Medical emergency, forgot to notify on time',
                    status: 'approved',
                },
                {
                    studentName: 'Mitu Begum',
                    class: 'Class 10-B',
                    date: '13 Jun 2025',
                    originalStatus: 'late',
                    requestedStatus: 'present',
                    reason: 'Was on time but teacher marked late',
                    status: 'rejected',
                },
            ]}
        />
    );
}
