"use client";
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export const Checklist = ({ items: initialItems, onChange, className, classNames: cns }: ChecklistProps) => {
    const [items, setItems] = useState(initialItems);
    const completed = items.filter(i => i.checked).length;

    const toggle = (index: number) => {
        const updated = items.map((item, i) => i === index ? { ...item, checked: !item.checked } : item);
        setItems(updated);
        onChange?.(updated);
    };

    return (
        <div className={cn("@container", className)}>
            <div className={cn("flex items-center justify-between mb-3", cns?.header)}>
                <span className={cn("text-sm text-muted-foreground", cns?.count)}>{completed}/{items.length} completed</span>
                <div className={cn("h-1.5 flex-1 ml-3 rounded-full bg-muted overflow-hidden max-w-32", cns?.progressBar)}>
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(completed / items.length) * 100}%` }} />
                </div>
            </div>
            <div className="space-y-2">
                {items.map(({ label, checked, description }, i) => (
                    <label key={i} className={cn("flex items-start gap-3 cursor-pointer group", cns?.item)}>
                        <Checkbox checked={checked} onCheckedChange={() => toggle(i)} className={cn("mt-0.5", cns?.checkbox)} />
                        <div>
                            <span className={cn("text-sm", checked && "line-through text-muted-foreground", cns?.label)}>{label}</span>
                            {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};

interface ChecklistProps {
    items: { label: string; checked: boolean; description?: string }[];
    onChange?: (items: { label: string; checked: boolean; description?: string }[]) => void;
    className?: string; classNames?: { header?: string; count?: string; progressBar?: string; item?: string; checkbox?: string; label?: string; description?: string };
}
