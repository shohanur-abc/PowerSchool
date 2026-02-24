"use client";
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export const TimeAgo = ({ date, className, classNames: cns }: TimeAgoProps) => {
    const [text, setText] = useState(() => getTimeAgo(date));

    useEffect(() => {
        const timer = setInterval(() => setText(getTimeAgo(date)), 60000);
        return () => clearInterval(timer);
    }, [date]);

    const d = typeof date === 'string' ? new Date(date) : date;

    return (
        <time dateTime={d.toISOString()} title={d.toLocaleString()} className={cn("text-sm text-muted-foreground", className, cns?.time)}>
            {text}
        </time>
    );
};

const getTimeAgo = (date: Date | string) => {
    const d = typeof date === 'string' ? new Date(date) : date;
    const seconds = Math.floor((Date.now() - d.getTime()) / 1000);
    const intervals = [
        { label: 'y', seconds: 31536000 }, { label: 'mo', seconds: 2592000 },
        { label: 'd', seconds: 86400 }, { label: 'h', seconds: 3600 },
        { label: 'm', seconds: 60 }, { label: 's', seconds: 1 },
    ];
    for (const { label, seconds: s } of intervals) {
        const count = Math.floor(seconds / s);
        if (count >= 1) return `${count}${label} ago`;
    }
    return 'just now';
};

interface TimeAgoProps { date: Date | string; className?: string; classNames?: { time?: string } }
