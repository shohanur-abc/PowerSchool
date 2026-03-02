"use client";
import { cn } from '@/lib/utils';
import { GripVerticalIcon } from 'lucide-react';

export const SortableList = ({ items, renderItem, className, classNames: cns }: SortableListProps) => (
    <div className={cn("space-y-1", className)} role="list">
        {items.map((item, i) => (
            <div key={item.id || i} className={cn("flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors group", cns?.item)} role="listitem">
                <GripVerticalIcon className={cn("size-4 text-muted-foreground/50 cursor-grab shrink-0 opacity-0 group-hover:opacity-100 transition-opacity", cns?.handle)} />
                <div className="flex-1 min-w-0">{renderItem(item, i)}</div>
            </div>
        ))}
    </div>
);

interface SortableListProps {
    items: { id?: string | number;[key: string]: unknown }[];
    renderItem: (item: { id?: string | number;[key: string]: unknown }, index: number) => React.ReactNode;
    className?: string; classNames?: { item?: string; handle?: string };
}
