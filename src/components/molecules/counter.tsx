"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useEffect, useRef, useState } from 'react';

export const Counter = ({ from = 0, to, duration = 2000, prefix, suffix, className, classNames: cns, size = 'default' }: CounterProps) => {
    const [count, setCount] = useState(from);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCount(from, to, duration, setCount);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [from, to, duration]);

    return (
        <div ref={ref} className={cn("text-center", className)}>
            <div className={cn(counterVariant({ size }), cns?.value)}>
                {prefix && <span className={cns?.prefix}>{prefix}</span>}
                {formatNumber(count)}
                {suffix && <span className={cns?.suffix}>{suffix}</span>}
            </div>
        </div>
    );
};


// ============= HELPERS =============
const animateCount = (from: number, to: number, duration: number, setter: (v: number) => void) => {
    const start = performance.now();
    const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setter(Math.round(from + (to - from) * eased));
        if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
};

const formatNumber = (n: number) => n.toLocaleString();


// ============= VARIANTS =============
const counterVariant = cva("font-bold tabular-nums", {
    variants: {
        size: {
            sm: "text-2xl",
            default: "text-4xl",
            lg: "text-6xl",
            xl: "text-8xl",
        },
    },
});


// ============= TYPES =============
interface CounterProps {
    from?: number;
    to: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    size?: 'sm' | 'default' | 'lg' | 'xl';
    className?: string;
    classNames?: {
        value?: string;
        prefix?: string;
        suffix?: string;
    };
}
