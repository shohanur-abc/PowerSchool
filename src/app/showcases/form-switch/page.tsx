'use client';

import { FormSwitch } from '@/components/molecules/form-switch';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormSwitchPage() {
    const methods = useForm({
        defaultValues: {
            basic: false,
            darkMode: true,
            notifications: false,
            twoFactor: false,
            autoSave: true,
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Switch</h2>
                    <div className="max-w-md space-y-4">
                        <FormSwitch name="basic" label="Enable feature" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormSwitch
                            name="notifications"
                            label="Push Notifications"
                            description="Receive real-time alerts for important events."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Pre-enabled (Dark Mode)</h2>
                    <div className="max-w-md space-y-4">
                        <FormSwitch
                            name="darkMode"
                            label="Dark Mode"
                            description="Switch between light and dark theme."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Security Setting</h2>
                    <div className="max-w-md space-y-4">
                        <FormSwitch
                            name="twoFactor"
                            label="Two-Factor Authentication"
                            description="Add an extra layer of security to your account."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Auto-Save Setting</h2>
                    <div className="max-w-md space-y-4">
                        <FormSwitch
                            name="autoSave"
                            label="Auto-Save"
                            description="Automatically save your work every 5 minutes."
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
