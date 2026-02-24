"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

export const NumberInput = ({ value: controlledValue, onChange, min = 0, max = 999, step = 1, label, className, classNames: cns }: NumberInputProps) => {
    const [internal, setInternal] = useState(controlledValue ?? min);
    const val = controlledValue ?? internal;

    const update = (v: number) => { const clamped = Math.max(min, Math.min(max, v)); setInternal(clamped); onChange?.(clamped); };

    return (
        <div className={cn("@container", className)}>
            {label && <label className={cn("text-sm font-medium block mb-1.5", cns?.label)}>{label}</label>}
            <div className={cn("flex items-center", cns?.wrapper)}>
                <Button variant="outline" size="icon" className={cn("size-9 rounded-r-none", cns?.decrement)} onClick={() => update(val - step)} disabled={val <= min}>
                    <MinusIcon className="size-3.5" />
                </Button>
                <Input type="number" value={val} onChange={(e) => update(Number(e.target.value))} className={cn("rounded-none text-center w-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none", cns?.input)} min={min} max={max} />
                <Button variant="outline" size="icon" className={cn("size-9 rounded-l-none", cns?.increment)} onClick={() => update(val + step)} disabled={val >= max}>
                    <PlusIcon className="size-3.5" />
                </Button>
            </div>
        </div>
    );
};

interface NumberInputProps {
    value?: number; onChange?: (value: number) => void; min?: number; max?: number; step?: number; label?: string;
    className?: string; classNames?: { label?: string; wrapper?: string; decrement?: string; input?: string; increment?: string };
}
