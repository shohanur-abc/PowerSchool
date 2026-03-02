'use client';

import { FormSelect } from '@/components/molecules/form-select';
import { useForm, FormProvider } from 'react-hook-form';

const COUNTRY_OPTIONS = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
];

const ROLE_OPTIONS = [
    { value: 'admin', label: 'Administrator' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'student', label: 'Student' },
    { value: 'parent', label: 'Parent', disabled: true },
];

const GRADE_OPTIONS = [
    { value: 'a', label: 'Grade A (90-100)' },
    { value: 'b', label: 'Grade B (80-89)' },
    { value: 'c', label: 'Grade C (70-79)' },
    { value: 'd', label: 'Grade D (60-69)' },
    { value: 'f', label: 'Grade F (Below 60)' },
];

export default function FormSelectPage() {
    const methods = useForm({
        defaultValues: {
            country: '',
            role: '',
            grade: '',
            withPlaceholder: '',
            withDescription: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Select</h2>
                    <div className="max-w-md space-y-4">
                        <FormSelect name="country" label="Country" options={COUNTRY_OPTIONS} />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Placeholder</h2>
                    <div className="max-w-md space-y-4">
                        <FormSelect
                            name="withPlaceholder"
                            label="Select Role"
                            placeholder="Choose a role..."
                            options={ROLE_OPTIONS}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Disabled Options</h2>
                    <div className="max-w-md space-y-4">
                        <FormSelect
                            name="role"
                            label="User Role"
                            placeholder="Select role"
                            options={ROLE_OPTIONS}
                            description="Parent role is currently unavailable"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormSelect
                            name="withDescription"
                            label="Grade Scale"
                            placeholder="Select grade"
                            options={GRADE_OPTIONS}
                            description="This grade will appear on the student's transcript"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Many Options</h2>
                    <div className="max-w-md space-y-4">
                        <FormSelect
                            name="grade"
                            label="Final Grade"
                            placeholder="Assign grade..."
                            options={GRADE_OPTIONS}
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
