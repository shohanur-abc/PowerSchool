"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { useEffect, useState } from 'react';

export const Countdown = ({ targetDate, labels = { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds' }, size = 'default', onComplete, className, classNames: cns }: CountdownProps) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            const left = calculateTimeLeft(targetDate);
            setTimeLeft(left);
            if (left.total <= 0) { clearInterval(timer); onComplete?.(); }
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate, onComplete]);

    const units = [
        { value: timeLeft.days, label: labels.days },
        { value: timeLeft.hours, label: labels.hours },
        { value: timeLeft.minutes, label: labels.minutes },
        { value: timeLeft.seconds, label: labels.seconds },
    ];

    return (
        <div className={cn("flex items-center justify-center gap-3", className)}>
            {units.map(({ value, label }, i) => (
                <div key={i} className={cn(countdownVariant({ size }), cns?.unit)}>
                    <span className={cn("font-bold tabular-nums", size === 'sm' ? "text-lg" : size === 'lg' ? "text-4xl" : "text-2xl", cns?.value)}>
                        {String(value).padStart(2, '0')}
                    </span>
                    <span className={cn("text-xs text-muted-foreground uppercase tracking-wide", cns?.label)}>{label}</span>
                </div>
            ))}
        </div>
    );
};

const calculateTimeLeft = (target: Date) => {
    const diff = target.getTime() - Date.now();
    return {
        total: diff,
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
};

const countdownVariant = cva("flex flex-col items-center rounded-lg", {
    variants: {
        size: {
            sm: "p-2 min-w-[50px]",
            default: "p-3 min-w-[70px] bg-muted",
            lg: "p-4 min-w-[90px] bg-muted border",
        },
    },
});

interface CountdownProps {
    targetDate: Date;
    labels?: { days?: string; hours?: string; minutes?: string; seconds?: string };
    size?: 'sm' | 'default' | 'lg';
    onComplete?: () => void;
    className?: string;
    classNames?: { unit?: string; value?: string; label?: string };
}
