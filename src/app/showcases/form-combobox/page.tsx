'use client';

import { FormCombobox } from '@/components/molecules/form-combobox';
import { useForm, FormProvider } from 'react-hook-form';

const LANGUAGE_OPTIONS = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'ar', label: 'Arabic' },
];

const SUBJECT_OPTIONS = [
    { value: 'math', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English Language' },
    { value: 'history', label: 'History' },
    { value: 'geography', label: 'Geography' },
    { value: 'art', label: 'Art & Design' },
    { value: 'music', label: 'Music' },
    { value: 'pe', label: 'Physical Education' },
];

export default function FormComboboxPage() {
    const methods = useForm({
        defaultValues: {
            language: '',
            subject: '',
            withDescription: '',
            empty: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Combobox</h2>
                    <div className="max-w-md space-y-4">
                        <FormCombobox
                            name="language"
                            label="Language"
                            placeholder="Select language"
                            options={LANGUAGE_OPTIONS}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Search Placeholder</h2>
                    <div className="max-w-md space-y-4">
                        <FormCombobox
                            name="subject"
                            label="Subject"
                            placeholder="Choose a subject..."
                            searchPlaceholder="Search subjects..."
                            options={SUBJECT_OPTIONS}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormCombobox
                            name="withDescription"
                            label="Preferred Language"
                            placeholder="Select language"
                            searchPlaceholder="Type to search..."
                            options={LANGUAGE_OPTIONS}
                            description="This will be used as your default interface language."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Custom Empty Text</h2>
                    <div className="max-w-md space-y-4">
                        <FormCombobox
                            name="empty"
                            label="Country"
                            placeholder="Select country"
                            searchPlaceholder="Search countries..."
                            options={[]}
                            emptyText="No countries available."
                            description="No options loaded in this example."
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
