"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const TruncateList = ({ items, limit = 5, expandLabel = "Show all", collapseLabel = "Show less", renderItem, className, classNames: cns }: TruncateListProps) => {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? items : items.slice(0, limit);

    return (
        <div className={cn("@container", className)}>
            <div className={cns?.list}>
                {visible.map((item, i) => <div key={i} className={cns?.item}>{renderItem(item, i)}</div>)}
            </div>
            {items.length > limit && (
                <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className={cn("mt-2", cns?.toggle)}>
                    {expanded ? collapseLabel : `${expandLabel} (${items.length - limit} more)`}
                </Button>
            )}
        </div>
    );
};

interface TruncateListProps {
    items: unknown[]; limit?: number; expandLabel?: string; collapseLabel?: string;
    renderItem: (item: unknown, index: number) => React.ReactNode;
    className?: string; classNames?: { list?: string; item?: string; toggle?: string };
}
