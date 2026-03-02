'use client';

import { Checklist } from '@/components/molecules/checklist';
import { useState } from 'react';

const ONBOARDING_ITEMS = [
    { label: 'Create your account', checked: true },
    { label: 'Complete your profile', checked: true },
    { label: 'Invite team members', checked: false },
    { label: 'Set up notifications', checked: false },
    { label: 'Explore the dashboard', checked: false },
];

const TASK_ITEMS = [
    { label: 'Design wireframes', checked: true, description: 'Low-fidelity mockups for all pages' },
    { label: 'Build API endpoints', checked: true, description: 'REST API with authentication' },
    { label: 'Implement frontend', checked: false, description: 'React components and pages' },
    { label: 'Write tests', checked: false, description: 'Unit and integration tests' },
    { label: 'Deploy to production', checked: false, description: 'CI/CD pipeline setup' },
];

export default function ChecklistPage() {
    const [items1, setItems1] = useState(ONBOARDING_ITEMS);
    const [items2, setItems2] = useState<{ label: string; checked: boolean; description?: string }[]>(TASK_ITEMS);
    const [items3, setItems3] = useState([
        { label: 'Mathematics homework', checked: false },
        { label: 'Science project', checked: true },
        { label: 'Read chapter 5', checked: false },
        { label: 'Submit assignment', checked: false },
    ]);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Checklist</h2>
                <div className="max-w-md">
                    <Checklist
                        items={[
                            { label: 'First item', checked: false },
                            { label: 'Second item', checked: true },
                            { label: 'Third item', checked: false },
                        ]}
                        onChange={(items) => console.log(items)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Onboarding Checklist</h2>
                <div className="max-w-md">
                    <Checklist items={items1} onChange={setItems1} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Descriptions</h2>
                <div className="max-w-md">
                    <Checklist items={items2} onChange={setItems2} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Student Tasks</h2>
                <div className="max-w-md">
                    <Checklist
                        items={items3}
                        onChange={setItems3}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">All Completed</h2>
                <div className="max-w-md">
                    <Checklist
                        items={[
                            { label: 'Step 1: Setup environment', checked: true },
                            { label: 'Step 2: Install dependencies', checked: true },
                            { label: 'Step 3: Configure settings', checked: true },
                            { label: 'Step 4: Run the app', checked: true },
                        ]}
                        onChange={(items) => console.log(items)}
                    />
                </div>
            </div>
        </div>
    );
}
