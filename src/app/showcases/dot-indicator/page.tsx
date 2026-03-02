"use client";
import { DotIndicator } from '@/components/molecules/dot-indicator';

export default function DotIndicatorPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Statuses</h2>
                <div className="flex flex-wrap gap-4">
                    <DotIndicator status="online" label="Online" />
                    <DotIndicator status="offline" label="Offline" />
                    <DotIndicator status="busy" label="Busy" />
                    <DotIndicator status="away" label="Away" />
                    <DotIndicator status="active" label="Active" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex items-center gap-6">
                    <DotIndicator status="online" label="Small" size="sm" />
                    <DotIndicator status="online" label="Default" size="default" />
                    <DotIndicator status="online" label="Large" size="lg" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Pulsing</h2>
                <div className="flex flex-wrap gap-4">
                    <DotIndicator status="online" label="Live" pulse />
                    <DotIndicator status="active" label="Recording" pulse />
                    <DotIndicator status="busy" label="In Call" pulse />
                </div>
            </div>
        </div>
    );
}
