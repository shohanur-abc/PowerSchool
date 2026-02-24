"use client";
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const TruncateText = ({ text, lines = 3, expandLabel = "Show more", collapseLabel = "Show less", className, classNames: cns }: TruncateTextProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={className}>
            <p className={cn("text-sm text-muted-foreground", !expanded && `line-clamp-${lines}`, cns?.text)}>{text}</p>
            <Button variant="link" size="sm" onClick={() => setExpanded(!expanded)} className={cn("px-0 h-auto mt-1", cns?.button)}>
                {expanded ? collapseLabel : expandLabel}
            </Button>
        </div>
    );
};

interface TruncateTextProps {
    text: string;
    lines?: number;
    expandLabel?: string;
    collapseLabel?: string;
    className?: string;
    classNames?: { text?: string; button?: string };
}
