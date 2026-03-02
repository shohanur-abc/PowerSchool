"use client";
import { cn } from '@/lib/utils';

export const CharacterCount = ({ current, max, threshold = 0.9, className, classNames: cns }: CharacterCountProps) => {
    const ratio = current / max;
    const isWarning = ratio >= threshold && ratio < 1;
    const isError = ratio >= 1;

    return (
        <span className={cn("text-xs tabular-nums", isError ? "text-destructive" : isWarning ? "text-yellow-600 dark:text-yellow-400" : "text-muted-foreground", className, cns?.count)}>
            {current}/{max}
        </span>
    );
};

interface CharacterCountProps {
    current: number; max: number; threshold?: number;
    className?: string; classNames?: { count?: string };
}
