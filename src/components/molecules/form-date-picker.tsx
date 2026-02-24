"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

export const FormDatePicker = ({ name = "", label, description, placeholder = "Pick a date", className, classNames: cns }: FormDatePickerProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground", fieldState.invalid && "border-destructive", cns?.trigger)}
                            >
                                <CalendarIcon className="mr-2 size-4" />
                                {field.value ? format(field.value, "PPP") : placeholder}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className={cn("w-auto p-0", cns?.popover)} align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                className={cns?.calendar}
                            />
                        </PopoverContent>
                    </Popover>
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormDatePickerProps {
    name?: string;
    label: string;
    description?: string;
    placeholder?: string;
    className?: string;
    classNames?: {
        label?: string;
        trigger?: string;
        popover?: string;
        calendar?: string;
        description?: string;
    };
}
