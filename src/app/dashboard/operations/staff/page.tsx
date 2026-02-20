import type { Metadata } from 'next';
import { StaffManagement } from '@/features/dashboard/operations';

export const metadata: Metadata = {
    title: 'Staff — EduManager',
    description: 'Manage teaching and non-teaching staff members',
};

export default function Page() {
    return (
        <StaffManagement
            staff={[
                { id: '1', staffId: 'ST-001', name: 'Mr. Rafiq Ahmed', subject: 'Mathematics', email: 'rafiq@edumanager.school', role: 'Teacher', status: 'active' },
                { id: '2', staffId: 'ST-002', name: 'Ms. Nasrin Sultana', subject: 'English', email: 'nasrin@edumanager.school', role: 'Teacher', status: 'active' },
                { id: '3', staffId: 'ST-003', name: 'Mr. Kamal Hossain', subject: 'Physics', email: 'kamal@edumanager.school', role: 'Teacher', status: 'on-leave' },
                { id: '4', staffId: 'ST-004', name: 'Ms. Ferdousi Begum', subject: 'Chemistry', email: 'ferdousi@edumanager.school', role: 'Teacher', status: 'active' },
                { id: '5', staffId: 'ST-005', name: 'Mr. Shahidul Islam', subject: 'History', email: 'shahidul@edumanager.school', role: 'HOD', status: 'active' },
                { id: '6', staffId: 'ST-006', name: 'Ms. Laila Akter', subject: 'Biology', email: 'laila@edumanager.school', role: 'Teacher', status: 'active' },
                { id: '7', staffId: 'AD-001', name: 'Mr. Habibur Rahman', subject: '—', email: 'habibur@edumanager.school', role: 'Admin', status: 'active' },
                { id: '8', staffId: 'AD-002', name: 'Ms. Roksana Khatun', subject: '—', email: 'roksana@edumanager.school', role: 'Librarian', status: 'inactive' },
            ]}
        />
    );
}
