"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Timetable = ({ days, periods, slots, className, classNames: cns }: TimetableProps) => (
    <div className={cn("@container overflow-x-auto", className)}>
        <table className={cn("w-full border-collapse text-sm", cns?.table)}>
            <thead>
                <tr>
                    <th className={cn("p-2 border text-left text-xs font-medium text-muted-foreground", cns?.headerCell)}>Period</th>
                    {days.map((day, i) => <th key={i} className={cn("p-2 border text-center text-xs font-medium text-muted-foreground", cns?.headerCell)}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {periods.map((period, pi) => (
                    <tr key={pi}>
                        <td className={cn("p-2 border text-xs text-muted-foreground whitespace-nowrap", cns?.periodCell)}>{period}</td>
                        {days.map((_, di) => {
                            const slot = slots.find(s => s.day === di && s.period === pi);
                            return (
                                <td key={di} className={cn(slotVariant({ variant: slot?.variant }), "p-2 border text-center", cns?.slot)}>
                                    {slot ? (
                                        <>
                                            <span className={cn("text-xs font-medium block", cns?.subject)}>{slot.subject}</span>
                                            {slot.teacher && <span className={cn("text-[10px] text-muted-foreground block", cns?.teacher)}>{slot.teacher}</span>}
                                        </>
                                    ) : <span className="text-muted-foreground/30">—</span>}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const slotVariant = cva("", {
    variants: { variant: { default: "", math: "bg-blue-50 dark:bg-blue-950/20", science: "bg-green-50 dark:bg-green-950/20", language: "bg-yellow-50 dark:bg-yellow-950/20", arts: "bg-purple-50 dark:bg-purple-950/20", break: "bg-muted" } },
});

interface TimetableProps {
    days: string[]; periods: string[];
    slots: { day: number; period: number; subject: string; teacher?: string; variant?: 'default' | 'math' | 'science' | 'language' | 'arts' | 'break' }[];
    className?: string; classNames?: { table?: string; headerCell?: string; periodCell?: string; slot?: string; subject?: string; teacher?: string };
}
