"use client";
import { ProgressSteps } from '@/components/molecules/progress-steps';

const steps = [
    { label: 'Submitted', description: 'Application received' },
    { label: 'Under Review', description: 'Being evaluated' },
    { label: 'Interview', description: 'Scheduled for interview' },
    { label: 'Offer', description: 'Awaiting final decision' },
];

export default function ProgressStepsPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal — Step 1</h2>
                <ProgressSteps steps={steps} current={0} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal — Step 3</h2>
                <ProgressSteps steps={steps} current={2} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical — Step 2</h2>
                <ProgressSteps steps={steps} current={1} variant="vertical" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical — Completed</h2>
                <ProgressSteps steps={steps} current={3} variant="vertical" />
            </div>
        </div>
    );
}
