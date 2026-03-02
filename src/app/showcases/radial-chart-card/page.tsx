'use client';
import { RadialChartCard } from '@/components/molecules/radial-chart-card';

export default function RadialChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Attendance by Class</h2>
                <div className="max-w-sm">
                    <RadialChartCard
                        title="Class Attendance"
                        description="Current week attendance rates"
                        data={[
                            { name: 'Grade 9', value: 88, fill: 'hsl(var(--chart-1))' },
                            { name: 'Grade 10', value: 92, fill: 'hsl(var(--chart-2))' },
                            { name: 'Grade 11', value: 85, fill: 'hsl(var(--chart-3))' },
                            { name: 'Grade 12', value: 95, fill: 'hsl(var(--chart-4))' },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Height</h2>
                <div className="max-w-md">
                    <RadialChartCard
                        title="Subject Pass Rates"
                        data={[
                            { name: 'Math', value: 78, fill: 'hsl(var(--chart-1))' },
                            { name: 'Science', value: 85, fill: 'hsl(var(--chart-2))' },
                            { name: 'English', value: 91, fill: 'hsl(var(--chart-3))' },
                        ]}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}
