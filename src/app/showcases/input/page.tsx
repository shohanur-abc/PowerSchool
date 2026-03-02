'use client';

import { FormInput } from '@/components/molecules/input';
import { useForm, FormProvider } from 'react-hook-form';

export default function InputPage() {
    const methods = useForm({
        defaultValues: {
            basic: '',
            withPlaceholder: '',
            email: '',
            password: '',
            withDescription: '',
            leftAddon: '',
            rightAddon: '',
            bothAddons: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Input</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput name="basic" label="Username" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Placeholder</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput name="withPlaceholder" label="Full Name" placeholder="Enter your full name" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Email Type</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput name="email" label="Email Address" type="email" placeholder="you@example.com" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Password Type</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput name="password" label="Password" type="password" placeholder="••••••••" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput
                            name="withDescription"
                            label="API Key"
                            placeholder="sk-..."
                            description="Your secret API key. Do not share with anyone."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Left Addon</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput
                            name="leftAddon"
                            label="Website"
                            placeholder="yoursite.com"
                            leftAddon="https://"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Right Addon</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput
                            name="rightAddon"
                            label="Price"
                            placeholder="0.00"
                            rightAddon="USD"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Both Addons</h2>
                    <div className="max-w-md space-y-4">
                        <FormInput
                            name="bothAddons"
                            label="Amount"
                            placeholder="0.00"
                            leftAddon="$"
                            rightAddon=".00"
                            description="Enter the dollar amount without cents"
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
