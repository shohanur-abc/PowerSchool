import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const SectionDivider = ({ label, variant = 'default', icon: Icon, className, classNames: cns }: SectionDividerProps) => (
    <div className={cn(dividerVariant({ variant }), className)}>
        <div className={cn("flex-1 h-px bg-border", cns?.line)} />
        {(label || Icon) && (
            <div className={cn("flex items-center gap-1.5 px-3", cns?.label)}>
                {Icon && <Icon className="size-3.5 text-muted-foreground" />}
                {label && <span className="text-xs text-muted-foreground font-medium">{label}</span>}
            </div>
        )}
        <div className={cn("flex-1 h-px bg-border", cns?.line)} />
    </div>
);

const dividerVariant = cva("flex items-center", {
    variants: { variant: { default: "my-6", compact: "my-3", spacious: "my-10" } },
});

interface SectionDividerProps {
    label?: string; variant?: 'default' | 'compact' | 'spacious'; icon?: React.ElementType;
    className?: string; classNames?: { line?: string; label?: string };
}
