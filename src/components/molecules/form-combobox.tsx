"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList, ComboboxTrigger } from '@/components/ui/combobox';
import { cn } from '@/lib/utils';

export const FormCombobox = ({ name = "", label, description, placeholder, searchPlaceholder, emptyText = "No results found.", options, className, classNames: cns }: FormComboboxProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                    <Combobox value={field.value} onValueChange={field.onChange}>
                        <ComboboxTrigger className={cn(fieldState.invalid && "border-destructive", cns?.trigger)}>{field.value || placeholder || `Select ${label}`}</ComboboxTrigger>
                        <ComboboxContent className={cns?.content}>
                            <ComboboxInput placeholder={searchPlaceholder || "Search..."} className={cns?.input} />
                            <ComboboxList className={cns?.list}>
                                <ComboboxEmpty>{emptyText}</ComboboxEmpty>
                                {options.map(({ value, label: optLabel }) => (
                                    <ComboboxItem key={value} value={value} className={cns?.item}>{optLabel}</ComboboxItem>
                                ))}
                            </ComboboxList>
                        </ComboboxContent>
                    </Combobox>
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormComboboxProps {
    name?: string;
    label: string;
    description?: string;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    options: { value: string; label: string }[];
    className?: string;
    classNames?: {
        label?: string;
        trigger?: string;
        content?: string;
        input?: string;
        list?: string;
        item?: string;
        description?: string;
    };
}
