"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Chip = ({ label, icon: Icon, selected, onClick, variant = 'default', size = 'default', className, classNames: cns }: ChipProps) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(chipVariant({ variant, size, selected: !!selected }), className)}
    >
        {Icon && <Icon className={cn("size-3.5", cns?.icon)} />}
        <span className={cns?.label}>{label}</span>
    </button>
);

export const ChipGroup = ({ chips, className, classNames: cns, ...chipProps }: ChipGroupProps) => (
    <div className={cn("flex flex-wrap gap-2", className)}>
        {chips.map((chip, i) => (
            <Chip key={i} {...chipProps} {...chip} className={cns?.chip} />
        ))}
    </div>
);


// ============= VARIANTS =============
const chipVariant = cva("inline-flex items-center gap-1.5 rounded-full font-medium transition-all cursor-pointer", {
    variants: {
        variant: {
            default: "border hover:bg-muted",
            filled: "bg-muted hover:bg-muted/80",
        },
        size: {
            sm: "text-xs px-2.5 py-1",
            default: "text-sm px-3 py-1.5",
            lg: "text-sm px-4 py-2",
        },
        selected: {
            true: "bg-primary text-primary-foreground border-primary hover:bg-primary/90",
            false: "",
        },
    },
});


// ============= TYPES =============
interface ChipProps {
    label: string;
    icon?: React.ElementType;
    selected?: boolean;
    onClick?: () => void;
    variant?: 'default' | 'filled';
    size?: 'sm' | 'default' | 'lg';
    className?: string;
    classNames?: { icon?: string; label?: string };
}

interface ChipGroupProps {
    chips: { label: string; icon?: React.ElementType; selected?: boolean; onClick?: () => void }[];
    variant?: ChipProps['variant'];
    size?: ChipProps['size'];
    className?: string;
    classNames?: { chip?: string };
}
