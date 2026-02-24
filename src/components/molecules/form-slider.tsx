"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export const FormSlider = ({ name = "", label, description, min = 0, max = 100, step = 1, showValue, className, classNames: cns }: FormSliderProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <div className="flex items-center justify-between">
                        <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                        {showValue && <span className={cn("text-sm text-muted-foreground tabular-nums", cns?.value)}>{field.value ?? min}</span>}
                    </div>
                    <Slider
                        id={name}
                        min={min}
                        max={max}
                        step={step}
                        value={[field.value ?? min]}
                        onValueChange={([v]) => field.onChange(v)}
                        className={cns?.slider}
                    />
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormSliderProps {
    name?: string;
    label: string;
    description?: string;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    className?: string;
    classNames?: {
        label?: string;
        slider?: string;
        value?: string;
        description?: string;
    };
}
