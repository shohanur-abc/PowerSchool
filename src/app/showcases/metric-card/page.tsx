"use client";
import { MetricCard } from '@/components/molecules/metric-card';
import { UsersIcon, DollarSignIcon, TrendingUpIcon, BookOpenIcon } from 'lucide-react';

export default function MetricCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <MetricCard
                        label="Total Users"
                        value="12,840"
                        icon={UsersIcon}
                        trend={{ direction: 'up', value: '+12%' }}
                        description="Active platform users"
                    />
                    <MetricCard
                        label="Monthly Revenue"
                        value="$84,200"
                        icon={DollarSignIcon}
                        trend={{ direction: 'up', value: '+8.5%', label: 'vs last month' }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Highlight Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <MetricCard
                        label="New Enrollments"
                        value="342"
                        icon={TrendingUpIcon}
                        trend={{ direction: 'up', value: '+21%' }}
                        variant="highlight"
                    />
                    <MetricCard
                        label="Course Completion"
                        value="78%"
                        icon={BookOpenIcon}
                        trend={{ direction: 'down', value: '-3%' }}
                        variant="highlight"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Minimal Variant</h2>
                <div className="grid grid-cols-3 gap-4">
                    <MetricCard label="Sessions" value="4,821" variant="minimal" icon={UsersIcon} trend={{ direction: 'up', value: '+5%' }} />
                    <MetricCard label="Bounce Rate" value="32%" variant="minimal" icon={TrendingUpIcon} trend={{ direction: 'down', value: '-2%' }} />
                    <MetricCard label="Avg Duration" value="4m 12s" variant="minimal" />
                </div>
            </div>
        </div>
    );
}
