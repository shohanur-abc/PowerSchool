"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

export const AttendanceCard = ({ title, date, stats, className, classNames: cns }: AttendanceCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cns?.header}>
            <div className="flex items-center justify-between">
                <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
                {date && <span className={cn("text-xs text-muted-foreground", cns?.date)}>{date}</span>}
            </div>
        </CardHeader>
        <CardContent className={cns?.content}>
            <div className="flex gap-3">
                {stats.map(({ label, value, variant = 'default' }, i) => (
                    <div key={i} className={cn(attendanceVariant({ variant }), "flex-1 text-center", cns?.stat)}>
                        <span className={cn("text-2xl font-bold tabular-nums block", cns?.value)}>{value}</span>
                        <span className={cn("text-xs block mt-1", cns?.label)}>{label}</span>
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

const attendanceVariant = cva("p-3 rounded-lg", {
    variants: {
        variant: {
            default: "bg-muted",
            present: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
            absent: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
            late: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
            excused: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        },
    },
});

interface AttendanceCardProps {
    title: string;
    date?: string;
    stats: { label: string; value: number | string; variant?: 'default' | 'present' | 'absent' | 'late' | 'excused' }[];
    className?: string;
    classNames?: { header?: string; title?: string; date?: string; content?: string; stat?: string; value?: string; label?: string };
}
