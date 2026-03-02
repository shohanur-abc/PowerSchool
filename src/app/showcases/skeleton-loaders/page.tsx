"use client";
import { CardSkeleton, TableSkeleton, ListSkeleton } from '@/components/molecules/skeleton-loaders';

export default function SkeletonLoadersPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Card Skeleton (Default)</h2>
                <div className="max-w-xs">
                    <CardSkeleton lines={3} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Card Skeleton with Avatar</h2>
                <div className="max-w-xs">
                    <CardSkeleton lines={2} avatar />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Card Skeleton Variants</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                    <CardSkeleton variant="default" lines={2} />
                    <CardSkeleton variant="ghost" lines={2} />
                    <CardSkeleton variant="filled" lines={2} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Table Skeleton</h2>
                <div className="border rounded-xl p-4">
                    <TableSkeleton rows={5} cols={4} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">List Skeleton (Without Avatar)</h2>
                <div className="max-w-xs border rounded-xl p-4">
                    <ListSkeleton items={4} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">List Skeleton (With Avatar)</h2>
                <div className="max-w-xs border rounded-xl p-4">
                    <ListSkeleton items={3} avatar />
                </div>
            </div>
        </div>
    );
}
