"use client";
import { cn } from '@/lib/utils';

export const Topbar = ({ left, center, right, className, classNames: cns }: TopbarProps) => (
    <header className={cn("flex items-center justify-between h-14 px-4 border-b bg-background sticky top-0 z-30", className)}>
        {left && <div className={cn("flex items-center gap-2", cns?.left)}>{left}</div>}
        {center && <div className={cn("flex items-center gap-2", cns?.center)}>{center}</div>}
        {right && <div className={cn("flex items-center gap-2", cns?.right)}>{right}</div>}
    </header>
);

interface TopbarProps {
    left?: React.ReactNode; center?: React.ReactNode; right?: React.ReactNode;
    className?: string; classNames?: { left?: string; center?: string; right?: string };
}
