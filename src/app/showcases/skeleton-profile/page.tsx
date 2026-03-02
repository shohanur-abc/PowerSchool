"use client";
import { SkeletonProfile } from '@/components/molecules/skeleton-profile';

export default function SkeletonProfilePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Card Variant</h2>
                <div className="max-w-xs border rounded-xl">
                    <SkeletonProfile variant="card" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Inline Variant</h2>
                <div className="max-w-xs">
                    <SkeletonProfile variant="inline" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Multiple Inline Profiles</h2>
                <div className="max-w-xs space-y-4 border rounded-xl p-4">
                    {[1, 2, 3].map((i) => <SkeletonProfile key={i} variant="inline" />)}
                </div>
            </div>
        </div>
    );
}
