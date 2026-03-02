"use client";
import { SkeletonForm } from '@/components/molecules/skeleton-form';

export default function SkeletonFormPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Single Column (4 Fields)</h2>
                <div className="max-w-md border rounded-xl p-6">
                    <SkeletonForm fields={4} columns={1} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Two Columns (6 Fields)</h2>
                <div className="max-w-lg border rounded-xl p-6">
                    <SkeletonForm fields={6} columns={2} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Actions</h2>
                <div className="max-w-sm border rounded-xl p-6">
                    <SkeletonForm fields={3} hasActions={false} />
                </div>
            </div>
        </div>
    );
}
