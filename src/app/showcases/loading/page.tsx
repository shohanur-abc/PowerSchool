"use client";
import { LoadingSpinner, LoadingDots, LoadingBar } from '@/components/molecules/loading';

export default function LoadingPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Spinner — Sizes</h2>
                <div className="flex items-center gap-6">
                    <LoadingSpinner size="sm" />
                    <LoadingSpinner size="default" />
                    <LoadingSpinner size="lg" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Spinner — With Label</h2>
                <div className="space-y-3">
                    <LoadingSpinner label="Loading students..." />
                    <LoadingSpinner size="sm" label="Fetching data..." />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Loading Dots</h2>
                <div className="flex items-center gap-6">
                    <LoadingDots size="sm" />
                    <LoadingDots size="default" />
                    <LoadingDots size="lg" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Loading Bar</h2>
                <div className="max-w-md">
                    <LoadingBar />
                </div>
            </div>
        </div>
    );
}
