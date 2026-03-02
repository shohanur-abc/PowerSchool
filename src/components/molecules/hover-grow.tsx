"use client";
import { cn } from '@/lib/utils';

export const HoverGrow = ({ children, scale = 1.03, className }: HoverGrowProps) => (
    <div className={cn("transition-transform duration-200 hover:shadow-lg rounded-lg", className)} style={{ ['--tw-scale-x' as string]: 1, ['--tw-scale-y' as string]: 1 }} onMouseEnter={(e) => { e.currentTarget.style.transform = `scale(${scale})`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
        {children}
    </div>
);

interface HoverGrowProps { children: React.ReactNode; scale?: number; className?: string }
