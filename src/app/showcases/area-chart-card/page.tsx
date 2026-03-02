"use client";
import { AreaChartCard } from '@/components/molecules/area-chart-card';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function AreaChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Enrollment Trend</h2>
                <AreaChartCard
                    title="Student Enrollment"
                    description="Monthly enrollment over the first half of 2025"
                    data={months.map((m, i) => ({ month: m, students: [900, 980, 1050, 1100, 1200, 1284][i] }))}
                    config={{ students: { label: 'Students', color: 'hsl(var(--chart-1))' } }}
                    dataKeys={['students']}
                    xAxisKey="month"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Stacked Areas</h2>
                <AreaChartCard
                    title="Attendance by Category"
                    data={months.map((m, i) => ({
                        month: m,
                        present: [85, 88, 82, 90, 87, 91][i],
                        absent: [10, 8, 12, 7, 9, 6][i],
                        late: [5, 4, 6, 3, 4, 3][i],
                    }))}
                    config={{
                        present: { label: 'Present', color: 'hsl(var(--chart-1))' },
                        absent: { label: 'Absent', color: 'hsl(var(--chart-2))' },
                        late: { label: 'Late', color: 'hsl(var(--chart-3))' },
                    }}
                    dataKeys={['present', 'absent', 'late']}
                    xAxisKey="month"
                    stacked
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Gradient Fill</h2>
                <AreaChartCard
                    title="Revenue"
                    data={months.map((m, i) => ({ month: m, revenue: [30000, 35000, 28000, 42000, 38000, 45000][i] }))}
                    config={{ revenue: { label: 'Revenue ($)', color: 'hsl(var(--chart-2))' } }}
                    dataKeys={['revenue']}
                    xAxisKey="month"
                    gradient
                />
            </div>
        </div>
    );
}
