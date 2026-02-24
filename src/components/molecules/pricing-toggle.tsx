"use client";
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export const PricingToggle = ({ monthly, yearly, defaultAnnual = false, onToggle, className, classNames: cns }: PricingToggleProps) => {
    const [annual, setAnnual] = useState(defaultAnnual);

    const toggle = (v: boolean) => { setAnnual(v); onToggle?.(v); };

    return (
        <div className={cn("flex items-center justify-center gap-3", className)}>
            <Label className={cn("text-sm", !annual && "font-semibold", cns?.monthly)}>{monthly}</Label>
            <Switch checked={annual} onCheckedChange={toggle} className={cns?.switch} />
            <Label className={cn("text-sm", annual && "font-semibold", cns?.yearly)}>{yearly}</Label>
        </div>
    );
};

interface PricingToggleProps {
    monthly: string; yearly: string; defaultAnnual?: boolean; onToggle?: (isAnnual: boolean) => void;
    className?: string; classNames?: { monthly?: string; yearly?: string; switch?: string };
}
