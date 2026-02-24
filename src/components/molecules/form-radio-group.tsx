"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export const FormRadioGroup = ({ name = "", label, description, options, orientation = 'vertical', className, classNames: cns }: FormRadioGroupProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel className={cns?.label}>{label}</FieldLabel>
                    <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className={cn(orientation === 'horizontal' ? "flex flex-row gap-4" : "space-y-2", cns?.group)}
                    >
                        {options.map(({ value, label: optLabel, description: optDesc }) => (
                            <div key={value} className={cn("flex items-start gap-2", cns?.item)}>
                                <RadioGroupItem value={value} id={`${name}-${value}`} className={cns?.radio} />
                                <div className="space-y-0.5">
                                    <Label htmlFor={`${name}-${value}`} className={cn("cursor-pointer font-normal", cns?.itemLabel)}>{optLabel}</Label>
                                    {optDesc && <p className={cn("text-xs text-muted-foreground", cns?.itemDescription)}>{optDesc}</p>}
                                </div>
                            </div>
                        ))}
                    </RadioGroup>
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormRadioGroupProps {
    name?: string;
    label: string;
    description?: string;
    options: { value: string; label: string; description?: string }[];
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    classNames?: {
        label?: string;
        group?: string;
        item?: string;
        radio?: string;
        itemLabel?: string;
        itemDescription?: string;
        description?: string;
    };
}
