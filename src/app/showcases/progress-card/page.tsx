"use client";
import { ProgressCard } from '@/components/molecules/progress-card';

export default function ProgressCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Course Progress</h2>
                <ProgressCard
                    title="Learning Progress"
                    items={[
                        { label: 'Mathematics', value: 78, max: 100, color: 'bg-blue-500' },
                        { label: 'Science', value: 92, max: 100, color: 'bg-green-500' },
                        { label: 'English', value: 65, max: 100, color: 'bg-yellow-500' },
                        { label: 'History', value: 45, max: 100, color: 'bg-red-500' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Storage Usage</h2>
                <ProgressCard
                    title="Storage"
                    items={[
                        { label: 'Documents', value: 4.2, max: 20 },
                        { label: 'Images', value: 3.8, max: 20 },
                        { label: 'Videos', value: 6.1, max: 20 },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Onboarding Checklist</h2>
                <ProgressCard
                    items={[
                        { label: 'Create Account', value: 1, max: 1, color: 'bg-emerald-500' },
                        { label: 'Set Up Profile', value: 1, max: 1, color: 'bg-emerald-500' },
                        { label: 'Add Students', value: 0, max: 1, color: 'bg-muted' },
                        { label: 'Configure Classes', value: 0, max: 1, color: 'bg-muted' },
                    ]}
                />
            </div>
        </div>
    );
}
