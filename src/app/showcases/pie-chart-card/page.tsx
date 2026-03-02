"use client";
import { PieChartCard } from '@/components/molecules/pie-chart-card';

export default function PieChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Pie Chart — Student Distribution</h2>
                <div className="max-w-sm">
                    <PieChartCard
                        title="Students by Grade"
                        description="Distribution across all grades"
                        data={[
                            { name: 'Grade 9', value: 320 },
                            { name: 'Grade 10', value: 285 },
                            { name: 'Grade 11', value: 310 },
                            { name: 'Grade 12', value: 195 },
                        ]}
                        config={{
                            'Grade 9': { label: 'Grade 9', color: 'hsl(var(--chart-1))' },
                            'Grade 10': { label: 'Grade 10', color: 'hsl(var(--chart-2))' },
                            'Grade 11': { label: 'Grade 11', color: 'hsl(var(--chart-3))' },
                            'Grade 12': { label: 'Grade 12', color: 'hsl(var(--chart-4))' },
                        }}
                        dataKey="value"
                        nameKey="name"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Donut Style</h2>
                <div className="max-w-sm">
                    <PieChartCard
                        title="Fee Collection"
                        description="Status breakdown for current term"
                        data={[
                            { name: 'Paid', value: 840 },
                            { name: 'Pending', value: 280 },
                            { name: 'Overdue', value: 164 },
                        ]}
                        config={{
                            Paid: { label: 'Paid', color: 'hsl(var(--chart-1))' },
                            Pending: { label: 'Pending', color: 'hsl(var(--chart-2))' },
                            Overdue: { label: 'Overdue', color: 'hsl(var(--chart-3))' },
                        }}
                        dataKey="value"
                        nameKey="name"
                        donut
                    />
                </div>
            </div>
        </div>
    );
}
