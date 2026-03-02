"use client";
import { StatComparison } from '@/components/molecules/stat-comparison';

export default function StatComparisonPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Revenue Comparison</h2>
                <div className="max-w-sm">
                    <StatComparison label="Monthly Revenue" current={42500} previous={39200} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Student Enrollment</h2>
                <div className="max-w-sm">
                    <StatComparison label="Enrollment" current={1284} previous={1320} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Custom Format</h2>
                <div className="max-w-sm">
                    <StatComparison
                        label="Pass Rate"
                        current={94}
                        previous={89}
                        format={(v) => `${v}%`}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Change</h2>
                <div className="max-w-sm">
                    <StatComparison label="Avg Class Size" current={28} previous={28} />
                </div>
            </div>
        </div>
    );
}
