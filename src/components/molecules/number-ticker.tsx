"use client";
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export const NumberTicker = ({ value, duration = 2000, decimals = 0, prefix, suffix, className, classNames: cns }: NumberTickerProps) => {
    const [display, setDisplay] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const start = Date.now();
                const animate = () => {
                    const progress = Math.min((Date.now() - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setDisplay(eased * value);
                    if (progress < 1) requestAnimationFrame(animate);
                };
                animate();
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className={cn("tabular-nums font-bold", className)}>
            {prefix && <span className={cns?.prefix}>{prefix}</span>}
            <span className={cns?.value}>{display.toFixed(decimals)}</span>
            {suffix && <span className={cns?.suffix}>{suffix}</span>}
        </span>
    );
};

interface NumberTickerProps {
    value: number; duration?: number; decimals?: number; prefix?: string; suffix?: string;
    className?: string; classNames?: { prefix?: string; value?: string; suffix?: string };
}
