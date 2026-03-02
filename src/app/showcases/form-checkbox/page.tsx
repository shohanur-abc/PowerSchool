'use client';

import { FormCheckbox } from '@/components/molecules/form-checkbox';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormCheckboxPage() {
    const methods = useForm({
        defaultValues: {
            basic: false,
            withDescription: false,
            termsAgree: false,
            newsletter: false,
            preChecked: true,
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Checkbox</h2>
                    <div className="max-w-md space-y-4">
                        <FormCheckbox name="basic" label="Enable notifications" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormCheckbox
                            name="withDescription"
                            label="Marketing emails"
                            description="Receive updates about new features and promotions."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Terms Agreement</h2>
                    <div className="max-w-md space-y-4">
                        <FormCheckbox
                            name="termsAgree"
                            label="I agree to the Terms of Service"
                            description="By checking this, you accept our terms and privacy policy."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Newsletter Subscription</h2>
                    <div className="max-w-md space-y-4">
                        <FormCheckbox
                            name="newsletter"
                            label="Subscribe to newsletter"
                            description="Get weekly updates delivered to your inbox."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Pre-checked</h2>
                    <div className="max-w-md space-y-4">
                        <FormCheckbox
                            name="preChecked"
                            label="Remember me"
                            description="Stay signed in on this device."
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
