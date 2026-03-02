"use client";
import { cn } from '@/lib/utils';

export const Marquee = ({ children, speed = 30, reverse, pauseOnHover, className, classNames: cns }: MarqueeProps) => (
    <div className={cn("overflow-hidden @container", pauseOnHover && "group", className)}>
        <div className={cn("flex gap-4 w-max", reverse ? "animate-marquee-reverse" : "animate-marquee", pauseOnHover && "group-hover:[animation-play-state:paused]", cns?.track)} style={{ animationDuration: `${speed}s` }}>
            <div className={cn("flex gap-4 shrink-0", cns?.items)}>{children}</div>
            <div className={cn("flex gap-4 shrink-0", cns?.items)} aria-hidden>{children}</div>
        </div>
    </div>
);

interface MarqueeProps {
    children: React.ReactNode; speed?: number; reverse?: boolean; pauseOnHover?: boolean;
    className?: string; classNames?: { track?: string; items?: string };
}
