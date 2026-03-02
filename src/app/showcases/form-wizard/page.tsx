'use client';

import { FormWizard } from '@/components/molecules/form-wizard';
import { FormInput } from '@/components/molecules/input';
import { FormSelect } from '@/components/molecules/form-select';
import { FormTextarea } from '@/components/molecules/form-textarea';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormWizardPage() {
    const methods = useForm({
        defaultValues: {
            firstName: '', lastName: '', email: '',
            role: '', department: '',
            bio: '',
        },
    });

    const personalStep = (
        <FormProvider {...methods}>
            <div className="space-y-4">
                <FormInput name="firstName" label="First Name" placeholder="John" />
                <FormInput name="lastName" label="Last Name" placeholder="Doe" />
                <FormInput name="email" label="Email" type="email" placeholder="john@example.com" />
            </div>
        </FormProvider>
    );

    const roleStep = (
        <FormProvider {...methods}>
            <div className="space-y-4">
                <FormSelect
                    name="role"
                    label="Role"
                    placeholder="Select role"
                    options={[
                        { value: 'teacher', label: 'Teacher' },
                        { value: 'admin', label: 'Administrator' },
                        { value: 'staff', label: 'Staff' },
                    ]}
                />
                <FormInput name="department" label="Department" placeholder="Mathematics" />
            </div>
        </FormProvider>
    );

    const bioStep = (
        <FormProvider {...methods}>
            <div className="space-y-4">
                <FormTextarea
                    name="bio"
                    label="Biography"
                    placeholder="Tell us about yourself..."
                    rows={4}
                />
            </div>
        </FormProvider>
    );

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">3-Step Wizard</h2>
                <div className="max-w-lg">
                    <FormWizard
                        steps={[
                            { title: 'Personal Information', content: personalStep },
                            { title: 'Role & Department', content: roleStep },
                            { title: 'Biography', content: bioStep },
                        ]}
                        onComplete={() => alert('Wizard completed!')}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">2-Step Wizard</h2>
                <div className="max-w-lg">
                    <FormWizard
                        steps={[
                            {
                                title: 'Account Setup',
                                content: (
                                    <FormProvider {...methods}>
                                        <div className="space-y-4">
                                            <FormInput name="firstName" label="Name" placeholder="Your name" />
                                            <FormInput name="email" label="Email" type="email" placeholder="email@example.com" />
                                        </div>
                                    </FormProvider>
                                ),
                            },
                            {
                                title: 'Confirmation',
                                content: (
                                    <p className="text-sm text-muted-foreground">
                                        Review your information and click Complete to finish setup.
                                    </p>
                                ),
                            },
                        ]}
                        onComplete={() => alert('Setup complete!')}
                    />
                </div>
            </div>
        </div>
    );
}
