"use client";
import { LineChartCard } from '@/components/molecules/line-chart-card';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function LineChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Attendance Trend</h2>
                <LineChartCard
                    title="Monthly Attendance Rate"
                    data={months.map((m, i) => ({ month: m, rate: [88, 85, 90, 87, 92, 91][i] }))}
                    config={{ rate: { label: 'Attendance %', color: 'hsl(var(--chart-1))' } }}
                    dataKeys={['rate']}
                    xAxisKey="month"
                    dots
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Curved Lines (multiple)</h2>
                <LineChartCard
                    title="Score Comparison"
                    data={months.map((m, i) => ({
                        month: m,
                        math: [78, 82, 75, 88, 85, 92][i],
                        science: [72, 68, 80, 76, 84, 87][i],
                    }))}
                    config={{
                        math: { label: 'Math', color: 'hsl(var(--chart-1))' },
                        science: { label: 'Science', color: 'hsl(var(--chart-2))' },
                    }}
                    dataKeys={['math', 'science']}
                    xAxisKey="month"
                    curved
                    dots
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Dots</h2>
                <LineChartCard
                    title="Revenue Trend"
                    data={months.map((m, i) => ({ month: m, revenue: [30000, 35000, 28000, 42000, 38000, 45000][i] }))}
                    config={{ revenue: { label: 'Revenue', color: 'hsl(var(--chart-3))' } }}
                    dataKeys={['revenue']}
                    xAxisKey="month"
                />
            </div>
        </div>
    );
}
