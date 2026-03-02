"use client";
import { StepIndicator } from '@/components/molecules/step-indicator';

const steps = [
    { label: 'Account', description: 'Create your account' },
    { label: 'Profile', description: 'Set up your profile' },
    { label: 'Preferences', description: 'Choose your settings' },
    { label: 'Review', description: 'Confirm and submit' },
];

export default function StepIndicatorPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal — Step 1</h2>
                <StepIndicator steps={steps} current={0} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal — Step 2 (mid)</h2>
                <StepIndicator steps={steps} current={1} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal — Step 4 (last)</h2>
                <StepIndicator steps={steps} current={3} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical — Step 2</h2>
                <StepIndicator steps={steps} current={1} variant="vertical" />
            </div>
        </div>
    );
}
