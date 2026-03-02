'use client';

import { FormRadioGroup } from '@/components/molecules/form-radio-group';
import { useForm, FormProvider } from 'react-hook-form';

const PLAN_OPTIONS = [
    { value: 'free', label: 'Free', description: 'Up to 5 users, 1GB storage' },
    { value: 'pro', label: 'Pro', description: 'Up to 50 users, 10GB storage' },
    { value: 'enterprise', label: 'Enterprise', description: 'Unlimited users and storage' },
];

const GENDER_OPTIONS = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not', label: 'Prefer not to say' },
];

const PRIORITY_OPTIONS = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

export default function FormRadioGroupPage() {
    const methods = useForm({
        defaultValues: {
            plan: '',
            gender: '',
            priority: '',
            horizontal: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Radio Group (Vertical)</h2>
                    <div className="max-w-md space-y-4">
                        <FormRadioGroup
                            name="gender"
                            label="Gender"
                            options={GENDER_OPTIONS}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Item Descriptions</h2>
                    <div className="max-w-md space-y-4">
                        <FormRadioGroup
                            name="plan"
                            label="Subscription Plan"
                            options={PLAN_OPTIONS}
                            description="Choose the plan that fits your needs."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Horizontal Orientation</h2>
                    <div className="max-w-md space-y-4">
                        <FormRadioGroup
                            name="horizontal"
                            label="Priority"
                            options={PRIORITY_OPTIONS}
                            orientation="horizontal"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Priority Selection</h2>
                    <div className="max-w-md space-y-4">
                        <FormRadioGroup
                            name="priority"
                            label="Task Priority"
                            options={PRIORITY_OPTIONS}
                            description="How urgent is this task?"
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
