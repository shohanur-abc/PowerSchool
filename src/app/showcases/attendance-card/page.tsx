"use client";
import { AttendanceCard } from '@/components/molecules/attendance-card';

export default function AttendanceCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Monthly Summary</h2>
                <div className="max-w-sm">
                    <AttendanceCard
                        title="Monthly Attendance"
                        date="November 2024"
                        stats={[
                            { label: 'Present', value: 18, variant: 'present' },
                            { label: 'Absent', value: 2, variant: 'absent' },
                            { label: 'Late', value: 1, variant: 'late' },
                            { label: 'Excused', value: 1, variant: 'excused' },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Weekly Summary</h2>
                <div className="max-w-xs">
                    <AttendanceCard
                        title="This Week"
                        date="Nov 18–22"
                        stats={[
                            { label: 'Present', value: 4, variant: 'present' },
                            { label: 'Absent', value: 1, variant: 'absent' },
                        ]}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Class Overview</h2>
                <div className="max-w-sm">
                    <AttendanceCard
                        title="Class 10A — Today"
                        stats={[
                            { label: 'Total', value: 35, variant: 'default' },
                            { label: 'Present', value: 31, variant: 'present' },
                            { label: 'Absent', value: 4, variant: 'absent' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
