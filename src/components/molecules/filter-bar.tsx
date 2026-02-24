"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { XIcon } from 'lucide-react';

export const FilterBar = ({ filters, activeFilters = [], onFilterToggle, onClearAll, className, classNames: cns }: FilterBarProps) => (
    <div className={cn("@container", className)}>
        <div className={cn("flex flex-wrap items-center gap-2", cns?.filters)}>
            {filters.map(({ key, label, icon: Icon }) => {
                const isActive = activeFilters.includes(key);
                return (
                    <Button
                        key={key}
                        variant={isActive ? "default" : "outline"}
                        size="sm"
                        onClick={() => onFilterToggle?.(key)}
                        className={cn("rounded-full", cns?.filter)}
                    >
                        {Icon && <Icon className="size-3.5 mr-1" />}
                        {label}
                    </Button>
                );
            })}
        </div>
        {activeFilters.length > 0 && (
            <div className={cn("flex flex-wrap items-center gap-2 mt-2", cns?.activeFilters)}>
                <span className="text-xs text-muted-foreground">Active:</span>
                {activeFilters.map((key) => {
                    const filter = filters.find(f => f.key === key);
                    return (
                        <Badge key={key} variant="secondary" className={cn("gap-1", cns?.activeBadge)}>
                            {filter?.label || key}
                            <button onClick={() => onFilterToggle?.(key)} className="hover:text-foreground"><XIcon className="size-3" /></button>
                        </Badge>
                    );
                })}
                <Button variant="ghost" size="sm" onClick={onClearAll} className={cns?.clearAll}>Clear all</Button>
            </div>
        )}
    </div>
);

interface FilterBarProps {
    filters: { key: string; label: string; icon?: React.ElementType }[];
    activeFilters?: string[];
    onFilterToggle?: (key: string) => void;
    onClearAll?: () => void;
    className?: string;
    classNames?: { filters?: string; filter?: string; activeFilters?: string; activeBadge?: string; clearAll?: string };
}
