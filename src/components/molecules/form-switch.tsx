"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export const FormSwitch = ({ name = "", label, description, className, classNames: cns }: FormSwitchProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={cn("flex flex-row items-center justify-between rounded-lg border p-4", className)}>
                    <div className="space-y-0.5">
                        <FieldLabel htmlFor={name} className={cn("cursor-pointer", cns?.label)}>{label}</FieldLabel>
                        {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </div>
                    <Switch
                        id={name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={cns?.switch}
                    />
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormSwitchProps {
    name?: string;
    label: string;
    description?: string;
    className?: string;
    classNames?: {
        label?: string;
        description?: string;
        switch?: string;
    };
}
