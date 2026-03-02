"use client";
import { StatGrid } from '@/components/molecules/stat-grid';
import { UsersIcon, BookOpenIcon, DollarSignIcon, TrendingUpIcon } from 'lucide-react';

const stats = [
    { label: 'Total Students', value: '1,284', icon: UsersIcon, change: '+12%', description: 'vs last term' },
    { label: 'Active Courses', value: '86', icon: BookOpenIcon, change: '+4' },
    { label: 'Revenue', value: '$42,500', icon: DollarSignIcon, change: '+8.5%' },
    { label: 'Growth Rate', value: '24%', icon: TrendingUpIcon, change: '+2.1%' },
];

export default function StatGridPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (4 cols)</h2>
                <StatGrid stats={stats} cols={4} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant (3 cols)</h2>
                <StatGrid stats={stats} cols={3} variant="filled" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline Variant (2 cols)</h2>
                <StatGrid stats={stats} cols={2} variant="outline" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant (4 cols)</h2>
                <StatGrid stats={stats} cols={4} variant="ghost" />
            </div>
        </div>
    );
}
