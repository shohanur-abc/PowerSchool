"use client";
import { Controller, useFormContext } from 'react-hook-form';
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/ui/input-otp';
import { cn } from '@/lib/utils';

export const FormOTP = ({ name = "", label, description, length = 6, separator, className, classNames: cns }: FormOTPProps) => {
    const { control } = useFormContext();
    const mid = Math.floor(length / 2);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={className}>
                    <FieldLabel htmlFor={name} className={cns?.label}>{label}</FieldLabel>
                    <InputOTP
                        maxLength={length}
                        value={field.value}
                        onChange={field.onChange}
                        className={cns?.otp}
                    >
                        <InputOTPGroup className={cns?.group}>
                            {Array.from({ length: separator ? mid : length }, (_, i) => (
                                <InputOTPSlot key={i} index={i} className={cn(fieldState.invalid && "border-destructive", cns?.slot)} />
                            ))}
                        </InputOTPGroup>
                        {separator && (
                            <>
                                <InputOTPSeparator />
                                <InputOTPGroup className={cns?.group}>
                                    {Array.from({ length: length - mid }, (_, i) => (
                                        <InputOTPSlot key={mid + i} index={mid + i} className={cn(fieldState.invalid && "border-destructive", cns?.slot)} />
                                    ))}
                                </InputOTPGroup>
                            </>
                        )}
                    </InputOTP>
                    {description && <FieldDescription className={cns?.description}>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
        />
    );
};


// ============= TYPES =============
interface FormOTPProps {
    name?: string;
    label: string;
    description?: string;
    length?: number;
    separator?: boolean;
    className?: string;
    classNames?: {
        label?: string;
        otp?: string;
        group?: string;
        slot?: string;
        description?: string;
    };
}
