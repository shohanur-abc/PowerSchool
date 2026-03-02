"use client";
import { PercentageChange } from '@/components/molecules/percentage-change';

export default function PercentageChangePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Positive Changes</h2>
                <div className="flex flex-wrap gap-4">
                    <PercentageChange value={12.5} showIcon showSign />
                    <PercentageChange value={8} showIcon />
                    <PercentageChange value={0.3} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Negative Changes</h2>
                <div className="flex flex-wrap gap-4">
                    <PercentageChange value={-5.2} showIcon showSign />
                    <PercentageChange value={-12} showIcon />
                    <PercentageChange value={-0.8} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Zero / Neutral</h2>
                <div className="flex flex-wrap gap-4">
                    <PercentageChange value={0} showIcon showSign />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <div className="flex flex-wrap gap-4">
                    <PercentageChange value={15} size="sm" showIcon showSign />
                    <PercentageChange value={-7} size="sm" showIcon showSign />
                </div>
            </div>
        </div>
    );
}
