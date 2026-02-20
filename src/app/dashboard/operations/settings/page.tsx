import type { Metadata } from 'next';
import { OperationsSettings } from '@/features/dashboard/operations';

export const metadata: Metadata = {
    title: 'Settings — EduManager',
    description: 'Configure school operations and system preferences',
};

export default function Page() {
    return (
        <OperationsSettings
            schoolInfo={{
                name: 'EduManager International School',
                address: '123 Education Road, Dhaka-1200, Bangladesh',
                phone: '+880 1700-000000',
                email: 'info@edumanager.school',
                website: 'https://edumanager.school',
            }}
            academicYear={{
                current: '2024–2025',
                startDate: '2024-01-01',
                endDate: '2024-12-31',
                workingDays: '5',
                autoRollover: true,
            }}
            gradingSystem={[
                { grade: 'A+', min: '80', max: '100', label: 'Excellent' },
                { grade: 'A', min: '70', max: '79', label: 'Very Good' },
                { grade: 'B', min: '60', max: '69', label: 'Good' },
                { grade: 'C', min: '50', max: '59', label: 'Average' },
                { grade: 'D', min: '40', max: '49', label: 'Pass' },
                { grade: 'F', min: '0', max: '39', label: 'Fail' },
            ]}
            notifications={[
                { label: 'Attendance Alerts', description: 'Notify parents when student is absent', enabled: true },
                { label: 'Fee Reminders', description: 'Send automated fee payment reminders', enabled: true },
                { label: 'Notice Push Alerts', description: 'Push notifications for new notices', enabled: false },
                { label: 'Exam Schedule', description: 'Alert students and parents about exam dates', enabled: true },
                { label: 'Result Published', description: 'Notify when exam results are available', enabled: true },
            ]}
        />
    );
}
