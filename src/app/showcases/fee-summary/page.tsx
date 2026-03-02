"use client";
import { FeeSummary } from '@/components/molecules/fee-summary';

export default function FeeSummaryPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Summary (With Paid and Due)</h2>
                <div className="max-w-xs">
                    <FeeSummary
                        title="Fee Invoice — Nov 2024"
                        items={[
                            { label: 'Tuition Fee', amount: 1200 },
                            { label: 'Library Fee', amount: 50 },
                            { label: 'Sports Fee', amount: 75 },
                            { label: 'Lab Fee', amount: 100 },
                        ]}
                        total={1425}
                        paid={1000}
                        due={425}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Fully Paid</h2>
                <div className="max-w-xs">
                    <FeeSummary
                        title="Annual Fee Receipt"
                        items={[
                            { label: 'Annual Tuition', amount: 8000 },
                            { label: 'Registration', amount: 200 },
                        ]}
                        total={8200}
                        paid={8200}
                        due={0}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Payment Info</h2>
                <div className="max-w-xs">
                    <FeeSummary
                        items={[
                            { label: 'Q1 Fee', amount: 600 },
                            { label: 'Activity Fee', amount: 30 },
                            { label: 'Transport', amount: 120 },
                        ]}
                        total={750}
                    />
                </div>
            </div>
        </div>
    );
}
