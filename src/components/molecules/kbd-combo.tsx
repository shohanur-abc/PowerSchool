"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Kbd = ({ children, variant = 'default', className }: KbdProps) => (
    <kbd className={cn(kbdVariant({ variant }), className)}>{children}</kbd>
);

export const KbdCombo = ({ keys, separator = '+', className, classNames: cns }: KbdComboProps) => (
    <span className={cn("inline-flex items-center gap-1", className)}>
        {keys.map((key, i) => (
            <span key={i} className="inline-flex items-center gap-1">
                {i > 0 && <span className={cn("text-xs text-muted-foreground", cns?.separator)}>{separator}</span>}
                <Kbd className={cns?.key}>{key}</Kbd>
            </span>
        ))}
    </span>
);


// ============= VARIANTS =============
const kbdVariant = cva("inline-flex items-center justify-center rounded border font-mono font-medium", {
    variants: {
        variant: {
            default: "text-xs px-1.5 py-0.5 bg-muted border-border shadow-sm",
            ghost: "text-xs px-1 py-0.5 bg-transparent border-transparent text-muted-foreground",
        },
    },
});


// ============= TYPES =============
interface KbdProps {
    children: React.ReactNode;
    variant?: 'default' | 'ghost';
    className?: string;
}

interface KbdComboProps {
    keys: string[];
    separator?: string;
    className?: string;
    classNames?: { key?: string; separator?: string };
}
