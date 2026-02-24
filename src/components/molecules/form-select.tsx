"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const FormSelect = ({ name = "", label, description, placeholder, options, className, classNames: cns }: FormSelectProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className={cns?.trigger} data-invalid={fieldState.invalid}>
                            <SelectValue placeholder={placeholder || `Select ${label}`} />
                        </SelectTrigger>
                        <SelectContent className={cns?.content}>
                            {options.map(({ value, label: optLabel, disabled }) => (
                                <SelectItem key={value} value={value} disabled={disabled} className={cns?.item}>
                                    {optLabel}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormSelectProps {
    name?: string;
    label: string;
    description?: string;
    placeholder?: string;
    options: { value: string; label: string; disabled?: boolean }[];
    className?: string;
    classNames?: {
        label?: string;
        trigger?: string;
        content?: string;
        item?: string;
        description?: string;
    };
}
