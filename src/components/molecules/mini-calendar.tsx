"use client";
import { cn } from '@/lib/utils';

export const MiniCalendar = ({ month, year, events = [], className, classNames: cns }: MiniCalendarProps) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDay }, (_, i) => i);
    const today = new Date();
    const isCurrentMonth = today.getMonth() + 1 === month && today.getFullYear() === year;

    return (
        <div className={cn("@container", className)}>
            <div className={cn("text-center font-semibold mb-3", cns?.header)}>
                {new Date(year, month - 1).toLocaleDateString('en', { month: 'long', year: 'numeric' })}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className={cn("text-xs text-muted-foreground font-medium py-1", cns?.dayLabel)}>{d}</div>
                ))}
                {blanks.map((_, i) => <div key={`b-${i}`} />)}
                {days.map((day) => {
                    const hasEvent = events.some(e => e.day === day);
                    const isToday = isCurrentMonth && today.getDate() === day;
                    return (
                        <div key={day} className={cn("relative text-xs py-1.5 rounded-md", isToday && "bg-primary text-primary-foreground font-bold", hasEvent && !isToday && "font-medium", cns?.day)}>
                            {day}
                            {hasEvent && <span className={cn("absolute bottom-0.5 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary", isToday && "bg-primary-foreground", cns?.eventDot)} />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

interface MiniCalendarProps {
    month: number;
    year: number;
    events?: { day: number; label?: string }[];
    className?: string;
    classNames?: { header?: string; dayLabel?: string; day?: string; eventDot?: string };
}
