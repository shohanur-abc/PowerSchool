'use client';

import { FormTextarea } from '@/components/molecules/form-textarea';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormTextareaPage() {
    const methods = useForm({
        defaultValues: {
            basic: '',
            withPlaceholder: '',
            withDescription: '',
            withMaxLength: '',
            largeRows: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Textarea</h2>
                    <div className="max-w-md space-y-4">
                        <FormTextarea name="basic" label="Message" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Placeholder</h2>
                    <div className="max-w-md space-y-4">
                        <FormTextarea
                            name="withPlaceholder"
                            label="Description"
                            placeholder="Write a brief description..."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormTextarea
                            name="withDescription"
                            label="Bio"
                            placeholder="Tell us about yourself..."
                            description="This will be shown on your public profile."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Max Length</h2>
                    <div className="max-w-md space-y-4">
                        <FormTextarea
                            name="withMaxLength"
                            label="Tweet"
                            placeholder="What's happening?"
                            maxLength={280}
                            description="Maximum 280 characters"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Large (6 Rows)</h2>
                    <div className="max-w-md space-y-4">
                        <FormTextarea
                            name="largeRows"
                            label="Detailed Notes"
                            placeholder="Enter detailed notes here..."
                            rows={6}
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
