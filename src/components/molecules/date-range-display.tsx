import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

export const DateRangeDisplay = ({ from, to, format: fmt, separator = '→', icon, className, classNames: cns }: DateRangeDisplayProps) => {
    const formatDate = (d: Date | string) => {
        const date = typeof d === 'string' ? new Date(d) : d;
        return fmt ? fmt(date) : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className={cn("inline-flex items-center gap-2 text-sm", className)}>
            {icon !== false && <CalendarIcon className={cn("size-4 text-muted-foreground", cns?.icon)} />}
            <span className={cn("tabular-nums", cns?.from)}>{formatDate(from)}</span>
            <span className={cn("text-muted-foreground", cns?.separator)}>{separator}</span>
            <span className={cn("tabular-nums", cns?.to)}>{formatDate(to)}</span>
        </div>
    );
};

interface DateRangeDisplayProps {
    from: Date | string; to: Date | string; format?: (date: Date) => string;
    separator?: string; icon?: boolean;
    className?: string; classNames?: { icon?: string; from?: string; separator?: string; to?: string };
}
