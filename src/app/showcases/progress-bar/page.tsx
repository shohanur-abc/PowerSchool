"use client";
import { ProgressBar } from '@/components/molecules/progress-bar';

export default function ProgressBarPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="space-y-4">
                    <ProgressBar value={72} max={100} label="Default" variant="default" showValue />
                    <ProgressBar value={88} max={100} label="Success" variant="success" showValue />
                    <ProgressBar value={55} max={100} label="Warning" variant="warning" showValue />
                    <ProgressBar value={25} max={100} label="Danger" variant="danger" showValue />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="space-y-4">
                    <ProgressBar value={60} max={100} label="Small" size="sm" />
                    <ProgressBar value={60} max={100} label="Default" size="default" />
                    <ProgressBar value={60} max={100} label="Large" size="lg" />
                    <ProgressBar value={60} max={100} label="Extra Large" size="xl" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Real-world Examples</h2>
                <div className="space-y-4">
                    <ProgressBar value={92} max={100} label="Attendance" variant="success" showValue />
                    <ProgressBar value={45} max={100} label="Course Completion" variant="warning" showValue />
                    <ProgressBar value={78} max={100} label="Fee Collection" showValue />
                    <ProgressBar value={12} max={100} label="Pending Tasks" variant="danger" showValue />
                </div>
            </div>
        </div>
    );
}
