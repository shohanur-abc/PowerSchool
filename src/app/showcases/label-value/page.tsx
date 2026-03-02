"use client";
import { LabelValue } from '@/components/molecules/label-value';

export default function LabelValuePage() {
    return (
        <div className="space-y-16 py-8 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (vertical)</h2>
                <div className="space-y-4">
                    <LabelValue label="Full Name" value="Alice Johnson" />
                    <LabelValue label="Email" value="alice@example.com" />
                    <LabelValue label="Role" value="Administrator" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal</h2>
                <div className="space-y-3">
                    <LabelValue label="Status" value="Active" direction="horizontal" />
                    <LabelValue label="Plan" value="Pro Annual" direction="horizontal" />
                    <LabelValue label="Members" value="5 / 10" direction="horizontal" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size + Colon</h2>
                <div className="space-y-2">
                    <LabelValue label="ID" value="USR-001" size="sm" colon />
                    <LabelValue label="Created" value="Jan 2025" size="sm" colon />
                    <LabelValue label="Last Login" value="Today" size="sm" colon />
                </div>
            </div>
        </div>
    );
}
