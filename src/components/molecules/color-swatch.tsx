"use client";
import { cn } from '@/lib/utils';

export const ColorSwatch = ({ colors, size = 'default', showLabel, className, classNames: cns }: ColorSwatchProps) => (
    <div className={cn("flex flex-wrap gap-2", className)}>
        {colors.map(({ color, label }, i) => (
            <div key={i} className={cn("flex flex-col items-center gap-1", cns?.item)}>
                <div className={cn("rounded-lg border", size === 'sm' ? "size-8" : size === 'lg' ? "size-14" : "size-10", cns?.swatch)} style={{ backgroundColor: color }} />
                {showLabel && <span className={cn("text-[10px] text-muted-foreground font-mono", cns?.label)}>{label || color}</span>}
            </div>
        ))}
    </div>
);

interface ColorSwatchProps {
    colors: { color: string; label?: string }[]; size?: 'sm' | 'default' | 'lg'; showLabel?: boolean;
    className?: string; classNames?: { item?: string; swatch?: string; label?: string };
}
