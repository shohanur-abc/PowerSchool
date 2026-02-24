"use client";
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export const PhoneInput = ({ value, onChange, defaultCountryCode = '+1', className, classNames: cns }: PhoneInputProps) => {
    const [code, setCode] = useState(defaultCountryCode);
    const [number, setNumber] = useState(value || '');

    const handleChange = (num: string) => { setNumber(num); onChange?.(`${code}${num}`); };

    return (
        <div className={cn("flex gap-2 @container", className)}>
            <select value={code} onChange={(e) => { setCode(e.target.value); onChange?.(`${e.target.value}${number}`); }} className={cn("w-20 h-9 rounded-md border bg-background px-2 text-sm", cns?.select)}>
                {['+1', '+44', '+91', '+880', '+61', '+81', '+86', '+49', '+33', '+55'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <Input type="tel" value={number} onChange={(e) => handleChange(e.target.value)} placeholder="Phone number" className={cn("flex-1", cns?.input)} />
        </div>
    );
};

interface PhoneInputProps {
    value?: string; onChange?: (value: string) => void; defaultCountryCode?: string;
    className?: string; classNames?: { select?: string; input?: string };
}
