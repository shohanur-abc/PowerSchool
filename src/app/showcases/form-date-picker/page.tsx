'use client';

import { FormDatePicker } from '@/components/molecules/form-date-picker';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormDatePickerPage() {
    const methods = useForm({
        defaultValues: {
            basic: null,
            withDescription: null,
            dob: null,
            deadline: null,
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Date Picker</h2>
                    <div className="max-w-md space-y-4">
                        <FormDatePicker name="basic" label="Select Date" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Custom Placeholder</h2>
                    <div className="max-w-md space-y-4">
                        <FormDatePicker
                            name="withDescription"
                            label="Event Date"
                            placeholder="Choose event date..."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Date of Birth</h2>
                    <div className="max-w-md space-y-4">
                        <FormDatePicker
                            name="dob"
                            label="Date of Birth"
                            placeholder="Select your birthday"
                            description="Used for age verification purposes."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Deadline</h2>
                    <div className="max-w-md space-y-4">
                        <FormDatePicker
                            name="deadline"
                            label="Assignment Deadline"
                            placeholder="Set deadline date"
                            description="Students must submit by this date."
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
