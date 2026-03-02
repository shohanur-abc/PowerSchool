"use client";
import { MetricRow } from '@/components/molecules/metric-row';
import { UsersIcon, DollarSignIcon, BarChartIcon } from 'lucide-react';

export default function MetricRowPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (no divider)</h2>
                <MetricRow
                    items={[
                        { label: 'Students', value: '1,284', icon: UsersIcon, change: { value: '+12%', type: 'positive' } },
                        { label: 'Revenue', value: '$42k', icon: DollarSignIcon, change: { value: '+8%', type: 'positive' } },
                        { label: 'Courses', value: '86', icon: BarChartIcon, change: { value: '±0', type: 'neutral' } },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Divider</h2>
                <MetricRow
                    divider
                    items={[
                        { label: 'Avg Score', value: '83%', change: { value: '+3%', type: 'positive' } },
                        { label: 'Dropout Rate', value: '3.2%', change: { value: '-1%', type: 'negative' } },
                        { label: 'Attendance', value: '91%', change: { value: '±0', type: 'neutral' } },
                        { label: 'Assignments', value: '94% done', change: { value: '+5%', type: 'positive' } },
                    ]}
                />
            </div>
        </div>
    );
}
