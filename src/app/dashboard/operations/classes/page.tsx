import type { Metadata } from 'next';
import { ClassesManagement } from '@/features/dashboard/operations';

export const metadata: Metadata = {
    title: 'Classes — EduManager',
    description: 'Manage all classes, sections and assigned teachers',
};

export default function Page() {
    return (
        <ClassesManagement
            classes={[
                { id: '1', name: 'Class 10-A', grade: 'Grade 10', section: 'A', teacher: 'Mr. Rafiq Ahmed', studentCount: 38, status: 'active' },
                { id: '2', name: 'Class 10-B', grade: 'Grade 10', section: 'B', teacher: 'Ms. Nasrin Sultana', studentCount: 36, status: 'active' },
                { id: '3', name: 'Class 9-A', grade: 'Grade 9', section: 'A', teacher: 'Mr. Kamal Hossain', studentCount: 40, status: 'active' },
                { id: '4', name: 'Class 9-B', grade: 'Grade 9', section: 'B', teacher: 'Ms. Ferdousi Begum', studentCount: 37, status: 'active' },
                { id: '5', name: 'Class 8-A', grade: 'Grade 8', section: 'A', teacher: 'Mr. Shahidul Islam', studentCount: 42, status: 'active' },
                { id: '6', name: 'Class 8-B', grade: 'Grade 8', section: 'B', teacher: 'Ms. Laila Akter', studentCount: 39, status: 'active' },
                { id: '7', name: 'Class 7-A', grade: 'Grade 7', section: 'A', teacher: 'Mr. Moinul Haque', studentCount: 35, status: 'active' },
                { id: '8', name: 'Class 6-C', grade: 'Grade 6', section: 'C', teacher: 'TBD', studentCount: 0, status: 'inactive' },
            ]}
        />
    );
}
