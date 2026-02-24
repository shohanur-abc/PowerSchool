import { cn } from '@/lib/utils';

export const InlineStat = ({ label, value, prefix, suffix, className, classNames: cns }: InlineStatProps) => (
    <div className={cn("inline-flex items-baseline gap-1", className)}>
        <span className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</span>
        <span className={cn("font-semibold tabular-nums", cns?.value)}>
            {prefix && <span className={cns?.prefix}>{prefix}</span>}
            {value}
            {suffix && <span className={cn("text-sm text-muted-foreground ml-0.5", cns?.suffix)}>{suffix}</span>}
        </span>
    </div>
);

interface InlineStatProps {
    label: string; value: string | number; prefix?: string; suffix?: string;
    className?: string; classNames?: { label?: string; value?: string; prefix?: string; suffix?: string };
}
