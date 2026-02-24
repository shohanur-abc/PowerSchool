"use client";
import { cn } from '@/lib/utils';
import { ArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export const ScrollToTop = ({ threshold = 300, className, classNames: cns }: ScrollToTopProps) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = () => setVisible(window.scrollY > threshold);
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [threshold]);

    if (!visible) return null;

    return (
        <Button variant="outline" size="icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={cn("fixed bottom-6 right-6 z-50 rounded-full shadow-lg", className)}>
            <ArrowUpIcon className={cn("size-4", cns?.icon)} />
        </Button>
    );
};

interface ScrollToTopProps { threshold?: number; className?: string; classNames?: { icon?: string } }
