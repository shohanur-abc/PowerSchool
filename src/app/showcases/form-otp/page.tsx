'use client';

import { FormOTP } from '@/components/molecules/form-otp';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormOTPPage() {
    const methods = useForm({
        defaultValues: {
            basic: '',
            withDescription: '',
            withSeparator: '',
            eightDigit: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic OTP (6 digits)</h2>
                    <div className="max-w-md space-y-4">
                        <FormOTP name="basic" label="Verification Code" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Description</h2>
                    <div className="max-w-md space-y-4">
                        <FormOTP
                            name="withDescription"
                            label="One-Time Password"
                            description="Enter the 6-digit code sent to your phone."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Separator</h2>
                    <div className="max-w-md space-y-4">
                        <FormOTP
                            name="withSeparator"
                            label="Authentication Code"
                            separator
                            description="Enter the code from your authenticator app."
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">8-Digit Code</h2>
                    <div className="max-w-md space-y-4">
                        <FormOTP
                            name="eightDigit"
                            label="Recovery Code"
                            length={8}
                            description="Enter one of your 8-digit recovery codes."
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
