"use client";
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export const CollapsibleSection = ({ title, defaultOpen = false, icon: Icon, badge, children, className, classNames: cns }: CollapsibleSectionProps) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <Collapsible open={open} onOpenChange={setOpen} className={cn("border rounded-lg", className)}>
            <CollapsibleTrigger className={cn("flex items-center justify-between w-full p-4 hover:bg-muted/50 transition-colors", cns?.trigger)}>
                <div className="flex items-center gap-2">
                    {Icon && <Icon className={cn("size-4", cns?.icon)} />}
                    <span className={cn("text-sm font-medium", cns?.title)}>{title}</span>
                    {badge && <span className={cn("text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full", cns?.badge)}>{badge}</span>}
                </div>
                <ChevronDownIcon className={cn("size-4 transition-transform", open && "rotate-180", cns?.chevron)} />
            </CollapsibleTrigger>
            <CollapsibleContent className={cn("px-4 pb-4", cns?.content)}>
                {children}
            </CollapsibleContent>
        </Collapsible>
    );
};

interface CollapsibleSectionProps {
    title: string;
    defaultOpen?: boolean;
    icon?: React.ElementType;
    badge?: string | number;
    children: React.ReactNode;
    className?: string;
    classNames?: { trigger?: string; icon?: string; title?: string; badge?: string; chevron?: string; content?: string };
}
