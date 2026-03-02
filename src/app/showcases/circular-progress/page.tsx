"use client";
import { CircularProgress } from '@/components/molecules/circular-progress';

export default function CircularProgressPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Single Segment</h2>
                <CircularProgress
                    segments={[{ value: 75, color: '#4ade80', label: 'Pass Rate' }]}
                    size={120}
                    strokeWidth={12}
                    showLabel
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Multi-segment (Attendance)</h2>
                <CircularProgress
                    segments={[
                        { value: 85, color: '#4ade80', label: 'Present' },
                        { value: 10, color: '#f97316', label: 'Late' },
                        { value: 5, color: '#ef4444', label: 'Absent' },
                    ]}
                    size={140}
                    strokeWidth={14}
                    showLabel
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Size</h2>
                <CircularProgress
                    segments={[
                        { value: 60, color: '#60a5fa', label: 'Completed' },
                        { value: 25, color: '#fbbf24', label: 'In Progress' },
                        { value: 15, color: '#e5e7eb', label: 'Pending' },
                    ]}
                    size={180}
                    strokeWidth={16}
                    showLabel
                />
            </div>
        </div>
    );
}
