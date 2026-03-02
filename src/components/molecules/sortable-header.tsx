"use client";
import { cn } from '@/lib/utils';
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SortableHeader = ({ label, sortKey, currentSort, onSort, className, classNames: cns }: SortableHeaderProps) => {
    const isActive = currentSort?.key === sortKey;
    const direction = isActive ? currentSort.direction : null;

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => onSort?.(sortKey, direction === 'asc' ? 'desc' : 'asc')}
            className={cn("h-auto p-0 font-medium hover:bg-transparent", className)}
        >
            <span className={cns?.label}>{label}</span>
            {direction === 'asc' ? (
                <ArrowUpIcon className={cn("size-3.5 ml-1", cns?.icon)} />
            ) : direction === 'desc' ? (
                <ArrowDownIcon className={cn("size-3.5 ml-1", cns?.icon)} />
            ) : (
                <ArrowUpDownIcon className={cn("size-3.5 ml-1 text-muted-foreground/50", cns?.icon)} />
            )}
        </Button>
    );
};

interface SortableHeaderProps {
    label: string;
    sortKey: string;
    currentSort?: { key: string; direction: 'asc' | 'desc' };
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
    className?: string;
    classNames?: { label?: string; icon?: string };
}
