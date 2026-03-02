"use client";
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const SwitchGroup = ({ items, className, classNames: cns }: SwitchGroupProps) => (
    <div className={cn("space-y-4", className)}>
        {items.map(({ id, label, description, checked, onCheckedChange, disabled }, i) => (
            <div key={i} className={cn("flex items-center justify-between", cns?.item)}>
                <div className="space-y-0.5">
                    <Label htmlFor={id} className={cn("text-sm cursor-pointer", cns?.label)}>{label}</Label>
                    {description && <p className={cn("text-xs text-muted-foreground", cns?.description)}>{description}</p>}
                </div>
                <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} className={cns?.switch} />
            </div>
        ))}
    </div>
);

interface SwitchGroupProps {
    items: { id: string; label: string; description?: string; checked?: boolean; onCheckedChange?: (checked: boolean) => void; disabled?: boolean }[];
    className?: string; classNames?: { item?: string; label?: string; description?: string; switch?: string };
}
