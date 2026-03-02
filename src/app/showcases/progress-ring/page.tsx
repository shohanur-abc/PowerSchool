"use client";
import { ProgressRing } from '@/components/molecules/progress-ring';

export default function ProgressRingPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="flex flex-wrap gap-8">
                    <ProgressRing value={72} max={100} label="Default" showValue />
                    <ProgressRing value={88} max={100} label="Success" variant="success" showValue />
                    <ProgressRing value={55} max={100} label="Warning" variant="warning" showValue />
                    <ProgressRing value={25} max={100} label="Danger" variant="danger" showValue />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex items-end gap-8">
                    <ProgressRing value={70} max={100} size="sm" showValue />
                    <ProgressRing value={70} max={100} size="default" showValue />
                    <ProgressRing value={70} max={100} size="lg" showValue />
                </div>
            </div>
        </div>
    );
}
