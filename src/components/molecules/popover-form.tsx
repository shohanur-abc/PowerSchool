"use client";
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const PopoverForm = ({ trigger, title, children, onSave, onCancel, saveLabel = 'Save', side = 'bottom', className, classNames: cns }: PopoverFormProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent side={side} className={cn("w-80", className)}>
                {title && <p className={cn("text-sm font-semibold mb-3", cns?.title)}>{title}</p>}
                <div className={cns?.content}>{children}</div>
                <div className={cn("flex justify-end gap-2 mt-4", cns?.footer)}>
                    <Button variant="ghost" size="sm" onClick={() => { setOpen(false); onCancel?.(); }} className={cns?.cancel}>Cancel</Button>
                    <Button size="sm" onClick={() => { onSave?.(); setOpen(false); }} className={cns?.save}>{saveLabel}</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

interface PopoverFormProps {
    trigger: React.ReactNode; title?: string; children: React.ReactNode;
    onSave?: () => void; onCancel?: () => void; saveLabel?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    className?: string; classNames?: { title?: string; content?: string; footer?: string; cancel?: string; save?: string };
}
