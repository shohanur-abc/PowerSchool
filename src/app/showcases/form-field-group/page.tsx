'use client';

import { FormFieldGroup } from '@/components/molecules/form-field-group';
import { FormInput } from '@/components/molecules/input';
import { FormSelect } from '@/components/molecules/form-select';
import { FormTextarea } from '@/components/molecules/form-textarea';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormFieldGroupPage() {
    const methods = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
            role: '',
            notes: '',
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Single Column (Default)</h2>
                    <div className="max-w-lg">
                        <FormFieldGroup title="Personal Info" description="Basic personal details">
                            <FormInput name="firstName" label="First Name" placeholder="John" />
                            <FormInput name="lastName" label="Last Name" placeholder="Doe" />
                        </FormFieldGroup>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Two Column Layout</h2>
                    <div className="max-w-2xl">
                        <FormFieldGroup title="Address" description="Enter your mailing address" columns={2}>
                            <FormInput name="city" label="City" placeholder="New York" />
                            <FormInput name="state" label="State" placeholder="NY" />
                            <FormInput name="zip" label="ZIP Code" placeholder="10001" />
                        </FormFieldGroup>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Three Column Layout</h2>
                    <div className="max-w-4xl">
                        <FormFieldGroup title="Contact Information" columns={3}>
                            <FormInput name="email" label="Email" type="email" placeholder="you@example.com" />
                            <FormInput name="phone" label="Phone" placeholder="+1 555 000 0000" />
                            <FormSelect
                                name="role"
                                label="Role"
                                placeholder="Select role"
                                options={[
                                    { value: 'teacher', label: 'Teacher' },
                                    { value: 'admin', label: 'Admin' },
                                    { value: 'staff', label: 'Staff' },
                                ]}
                            />
                        </FormFieldGroup>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Without Title</h2>
                    <div className="max-w-2xl">
                        <FormFieldGroup columns={2}>
                            <FormInput name="firstName" label="First Name" />
                            <FormInput name="lastName" label="Last Name" />
                            <FormTextarea name="notes" label="Notes" placeholder="Additional notes..." />
                        </FormFieldGroup>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}
