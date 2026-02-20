import type { Metadata } from 'next';
import { PrincipalDashboard } from '@/features/dashboard/principal';

export const metadata: Metadata = {
    title: 'Principal Dashboard — EduManager',
    description: 'School performance metrics and administrative overview',
};

export default function Page() {
    return (
        <PrincipalDashboard
            kpis={[
                { label: 'Overall Pass Rate', value: '87.4%', icon: 'performance', change: '+2.1%', changeUp: true },
                { label: 'Total Students', value: '1,234', icon: 'students', change: '+42', changeUp: true },
                { label: 'Active Courses', value: '56', icon: 'courses' },
                { label: 'Events This Month', value: '4', icon: 'events' },
            ]}
            departments={[
                { name: 'Science', students: 320, passRate: 91 },
                { name: 'Arts', students: 280, passRate: 85 },
                { name: 'Commerce', students: 210, passRate: 78 },
                { name: 'Languages', students: 180, passRate: 89 },
                { name: 'Mathematics', students: 244, passRate: 72 },
            ]}
            staffOverview={[
                { name: 'Farhan Hossain', department: 'Science', classes: 6, status: 'active' },
                { name: 'Sumaiya Khanam', department: 'Arts', classes: 5, status: 'active' },
                { name: 'Tariq Mahmud', department: 'Commerce', classes: 4, status: 'leave' },
                { name: 'Naila Islam', department: 'Languages', classes: 3, status: 'active' },
                { name: 'Raihan Kabir', department: 'Mathematics', classes: 6, status: 'active' },
            ]}
            recentEvents={[
                { title: 'Annual Prize Distribution', description: 'Recognition ceremony for top performers', date: 'Jun 15' },
                { title: 'Staff Development Workshop', description: 'Training on new curriculum guidelines', date: 'Jun 10' },
                { title: 'Board Meeting', description: 'Q2 performance review with board members', date: 'Jun 5' },
            ]}
        />
    );
}
