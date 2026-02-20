import type { Metadata } from 'next';
import { StudentsManagement } from '@/features/dashboard/operations';

export const metadata: Metadata = {
    title: 'Students — EduManager',
    description: 'Manage student records, enrolments and information',
};

export default function Page() {
    return (
        <StudentsManagement
            students={[
                { id: '1', name: 'Arif Hossain', email: 'arif@student.edu', class: 'Class 10-A', rollNo: '1001', parent: 'Karim Hossain', status: 'active' },
                { id: '2', name: 'Nadia Islam', email: 'nadia@student.edu', class: 'Class 9-B', rollNo: '0921', parent: 'Shafiq Islam', status: 'active' },
                { id: '3', name: 'Tanvir Ahmed', email: 'tanvir@student.edu', class: 'Class 8-C', rollNo: '0834', parent: 'Jalal Ahmed', status: 'active' },
                { id: '4', name: 'Sumaiya Khanam', email: 'sumaiya@student.edu', class: 'Class 10-A', rollNo: '1002', parent: 'Faruk Khanam', status: 'active' },
                { id: '5', name: 'Raihan Kabir', email: 'raihan@student.edu', class: 'Class 7-A', rollNo: '0712', parent: 'Nurul Kabir', status: 'active' },
                { id: '6', name: 'Farhan Akter', email: 'farhan@student.edu', class: 'Class 9-B', rollNo: '0918', parent: 'Mofiz Akter', status: 'suspended' },
                { id: '7', name: 'Sadia Rahman', email: 'sadia@student.edu', class: 'Class 10-B', rollNo: '1015', parent: 'Nazrul Rahman', status: 'active' },
                { id: '8', name: 'Imran Ali', email: 'imran@student.edu', class: 'Class 8-A', rollNo: '0801', parent: 'Siraj Ali', status: 'inactive' },
            ]}
        />
    );
}
