"use client";
import { StatusBadge } from '@/components/molecules/status-badge';

export default function StatusBadgePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Statuses (dot)</h2>
                <div className="flex flex-wrap gap-4">
                    <StatusBadge status="online" label="Online" dot />
                    <StatusBadge status="offline" label="Offline" dot />
                    <StatusBadge status="busy" label="Busy" dot />
                    <StatusBadge status="away" label="Away" dot />
                    <StatusBadge status="active" label="Active" dot />
                    <StatusBadge status="inactive" label="Inactive" dot />
                    <StatusBadge status="pending" label="Pending" dot />
                    <StatusBadge status="error" label="Error" dot />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Dot</h2>
                <div className="flex flex-wrap gap-4">
                    <StatusBadge status="online" label="Online" />
                    <StatusBadge status="offline" label="Offline" />
                    <StatusBadge status="pending" label="Pending" />
                    <StatusBadge status="error" label="Error" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Label Only (no text prop)</h2>
                <div className="flex flex-wrap gap-4">
                    <StatusBadge status="active" />
                    <StatusBadge status="inactive" />
                    <StatusBadge status="busy" />
                </div>
            </div>
        </div>
    );
}
