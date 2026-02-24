"use client";
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export const AnimatedCounter = ({ items, className, classNames: cns }: AnimatedCounterProps) => {
    return (
        <div className={cn("grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 gap-6 @container text-center", className)}>
            {items.map(({ value, label, prefix, suffix }, i) => (
                <CounterItem key={i} value={value} label={label} prefix={prefix} suffix={suffix} classNames={cns} />
            ))}
        </div>
    );
};

const CounterItem = ({ value, label, prefix, suffix, classNames: cns }: { value: number; label: string; prefix?: string; suffix?: string; classNames?: AnimatedCounterProps['classNames'] }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                const duration = 1500;
                const start = Date.now();
                const tick = () => {
                    const p = Math.min((Date.now() - start) / duration, 1);
                    setCount(Math.round(p * value));
                    if (p < 1) requestAnimationFrame(tick);
                };
                tick();
                observer.disconnect();
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className={cns?.item}>
            <div className={cn("text-3xl font-bold tabular-nums", cns?.value)}>
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <div className={cn("text-sm text-muted-foreground mt-1", cns?.label)}>{label}</div>
        </div>
    );
};

interface AnimatedCounterProps {
    items: { value: number; label: string; prefix?: string; suffix?: string }[];
    className?: string; classNames?: { item?: string; value?: string; label?: string };
}
