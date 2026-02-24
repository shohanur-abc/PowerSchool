"use client";
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const StickyHeader = ({ children, threshold = 0, className, classNames: cns }: StickyHeaderProps) => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handler = () => setIsSticky(window.scrollY > threshold);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [threshold]);

    return (
        <div className={cn("sticky top-0 z-40 transition-all", isSticky && "bg-background/80 backdrop-blur-md border-b shadow-sm", className, cns?.wrapper)}>
            <div className={cns?.content}>{children}</div>
        </div>
    );
};

interface StickyHeaderProps {
    children: React.ReactNode; threshold?: number;
    className?: string; classNames?: { wrapper?: string; content?: string };
}
