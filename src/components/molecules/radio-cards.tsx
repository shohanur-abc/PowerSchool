"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useState } from 'react';

export const RadioCards = ({ options, value: controlledValue, onChange, name, cols = 3, className, classNames: cns }: RadioCardsProps) => {
    const [internalValue, setInternalValue] = useState(controlledValue || '');
    const selected = controlledValue ?? internalValue;

    const handleChange = (val: string) => { setInternalValue(val); onChange?.(val); };

    return (
        <div className={cn("grid gap-3 @container", cols === 2 ? "grid-cols-1 @sm:grid-cols-2" : cols === 3 ? "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3" : "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-4", className)}>
            {options.map(({ value, label, description, icon: Icon }) => (
                <label key={value} className={cn(radioCardVariant({ selected: selected === value }), "cursor-pointer", cns?.card)}>
                    <input type="radio" name={name} value={value} checked={selected === value} onChange={() => handleChange(value)} className="sr-only" />
                    {Icon && <Icon className={cn("size-5 mb-2", selected === value ? "text-primary" : "text-muted-foreground", cns?.icon)} />}
                    <span className={cn("text-sm font-medium", cns?.label)}>{label}</span>
                    {description && <span className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</span>}
                </label>
            ))}
        </div>
    );
};

const radioCardVariant = cva("flex flex-col p-4 rounded-lg border-2 transition-colors", {
    variants: { selected: { true: "border-primary bg-primary/5", false: "border-border hover:border-primary/30" } },
});

interface RadioCardsProps {
    options: { value: string; label: string; description?: string; icon?: React.ElementType }[];
    value?: string; onChange?: (value: string) => void; name?: string; cols?: 2 | 3 | 4;
    className?: string; classNames?: { card?: string; icon?: string; label?: string; description?: string };
}
