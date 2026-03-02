"use client";
import { BarChartCard } from '@/components/molecules/bar-chart-card';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export default function BarChartCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Bars</h2>
                <BarChartCard
                    title="Monthly Admissions"
                    data={months.map((m, i) => ({ month: m, admissions: [45, 62, 38, 71, 55, 80][i] }))}
                    config={{ admissions: { label: 'Admissions', color: 'hsl(var(--chart-1))' } }}
                    dataKeys={['admissions']}
                    xAxisKey="month"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Bars</h2>
                <BarChartCard
                    title="Students by Subject"
                    data={[
                        { subject: 'Math', count: 320 },
                        { subject: 'Science', count: 285 },
                        { subject: 'English', count: 310 },
                        { subject: 'History', count: 195 },
                        { subject: 'Art', count: 174 },
                    ]}
                    config={{ count: { label: 'Students', color: 'hsl(var(--chart-2))' } }}
                    dataKeys={['count']}
                    xAxisKey="subject"
                    horizontal
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Stacked Bars</h2>
                <BarChartCard
                    title="Pass vs Fail by Month"
                    data={months.map((m, i) => ({
                        month: m,
                        pass: [80, 75, 82, 88, 79, 91][i],
                        fail: [20, 25, 18, 12, 21, 9][i],
                    }))}
                    config={{
                        pass: { label: 'Pass', color: 'hsl(var(--chart-1))' },
                        fail: { label: 'Fail', color: 'hsl(var(--chart-3))' },
                    }}
                    dataKeys={['pass', 'fail']}
                    xAxisKey="month"
                    stacked
                />
            </div>
        </div>
    );
}
