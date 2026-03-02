"use client";
import { StatList } from '@/components/molecules/stat-list';
import { UsersIcon, BookOpenIcon, DollarSignIcon, CalendarIcon } from 'lucide-react';

const stats = [
    { label: 'Total Students', value: '1,284', icon: UsersIcon },
    { label: 'Active Courses', value: '86', icon: BookOpenIcon, suffix: 'courses' },
    { label: 'Monthly Revenue', value: '$42,500', icon: DollarSignIcon },
    { label: 'Avg Attendance', value: '91%', icon: CalendarIcon },
];

export default function StatListPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <StatList stats={stats} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Variant</h2>
                <StatList stats={stats} variant="horizontal" />
            </div>
        </div>
    );
}
