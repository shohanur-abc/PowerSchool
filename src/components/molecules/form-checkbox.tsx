"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export const FormCheckbox = ({ name = "", label, description, className, classNames: cns }: FormCheckboxProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={cn("flex flex-row items-start gap-3 space-y-0", className)}>
                    <Checkbox
                        id={name}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={cns?.checkbox}
                    />
                    <div className="space-y-1 leading-none">
                        <FieldLabel htmlFor={name} className={cn("cursor-pointer font-normal", cns?.label)}>{label}</FieldLabel>
                        {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </div>
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormCheckboxProps {
    name?: string;
    label: string;
    description?: string;
    className?: string;
    classNames?: {
        checkbox?: string;
        label?: string;
        description?: string;
    };
}
