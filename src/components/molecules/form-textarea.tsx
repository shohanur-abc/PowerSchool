"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

export const FormTextarea = ({ name = "", label, description, placeholder, rows = 4, maxLength, className, classNames: cns, ...props }: FormTextareaProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                    <Textarea
                        {...field}
                        {...props}
                        id={name}
                        placeholder={placeholder}
                        rows={rows}
                        maxLength={maxLength}
                        className={cn(fieldState.invalid && "border-destructive", cns?.textarea)}
                        aria-invalid={fieldState.invalid}
                    />
                    <div className="flex justify-between">
                        {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                        {maxLength && (
                            <span className={cn("text-xs text-muted-foreground ml-auto tabular-nums", cns?.counter)}>
                                {field.value?.length || 0}/{maxLength}
                            </span>
                        )}
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormTextareaProps extends Omit<React.ComponentProps<typeof Textarea>, 'name'> {
    name?: string;
    label: string;
    description?: string;
    maxLength?: number;
    classNames?: {
        label?: string;
        textarea?: string;
        description?: string;
        counter?: string;
    };
}
