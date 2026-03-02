"use client";
import { cn } from '@/lib/utils';

export const Center = ({ children, minHeight, className }: CenterProps) => (
    <div className={cn("flex items-center justify-center", className)} style={minHeight ? { minHeight } : undefined}>
        {children}
    </div>
);

interface CenterProps { children: React.ReactNode; minHeight?: string | number; className?: string }
