'use client';
import { DonutChartCard } from '@/components/molecules/donut-chart-card';

export default function DonutChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Subject Performance</h2>
                <div className="max-w-sm">
                    <DonutChartCard
                        title="Grade Distribution"
                        description="By subject performance"
                        data={[
                            { name: 'A Grade', value: 420 },
                            { name: 'B Grade', value: 310 },
                            { name: 'C Grade', value: 185 },
                            { name: 'D Grade', value: 95 },
                            { name: 'F Grade', value: 40 },
                        ]}
                        colors={['#4ade80', '#60a5fa', '#fbbf24', '#f97316', '#ef4444']}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Size</h2>
                <div className="max-w-md">
                    <DonutChartCard
                        title="Staff Distribution"
                        data={[
                            { name: 'Teaching', value: 148 },
                            { name: 'Admin', value: 24 },
                            { name: 'Support', value: 36 },
                            { name: 'Part-time', value: 18 },
                        ]}
                        innerRadius={60}
                        outerRadius={100}
                        height={280}
                    />
                </div>
            </div>
        </div>
    );
}
