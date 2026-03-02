"use client";
import { StatCard } from '@/components/molecules/stat-card';
import { UsersIcon, TrendingUpIcon, BookOpenIcon, DollarSignIcon } from 'lucide-react';

export default function StatCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Stats</h2>
                <div className="grid grid-cols-2 gap-4">
                    <StatCard title="Total Students" value="1,284" icon={UsersIcon} />
                    <StatCard title="Revenue" value="$42,500" icon={DollarSignIcon} />
                    <StatCard title="Courses" value="86" icon={BookOpenIcon} />
                    <StatCard title="Growth" value="+24%" icon={TrendingUpIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Trends</h2>
                <div className="grid grid-cols-2 gap-4">
                    <StatCard
                        title="Monthly Revenue"
                        value="$12,430"
                        icon={DollarSignIcon}
                        trend={{ value: '+8.5%', direction: 'up' }}
                        description="vs last month"
                    />
                    <StatCard
                        title="Dropout Rate"
                        value="3.2%"
                        icon={UsersIcon}
                        trend={{ value: '-1.1%', direction: 'down' }}
                        description="vs last quarter"
                    />
                    <StatCard
                        title="Attendance"
                        value="91%"
                        icon={BookOpenIcon}
                        trend={{ value: '±0', direction: 'neutral' }}
                        description="No change"
                    />
                    <StatCard
                        title="Active Teachers"
                        value="148"
                        icon={UsersIcon}
                        trend={{ value: '+3', direction: 'up' }}
                    />
                </div>
            </div>
        </div>
    );
}
