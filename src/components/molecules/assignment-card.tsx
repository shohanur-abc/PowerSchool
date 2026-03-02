"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cva } from 'class-variance-authority';
import { CalendarIcon } from 'lucide-react';

export const AssignmentCard = ({ title, subject, dueDate, status, score, maxScore, className, classNames: cns }: AssignmentCardProps) => (
    <Card className={cn("@container", className)}>
        <CardContent className={cn("pt-4", cns?.content)}>
            <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                    <h4 className={cn("font-medium text-sm", cns?.title)}>{title}</h4>
                    {subject && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.subject)}>{subject}</p>}
                </div>
                <Badge className={cn(statusVariant({ status }), cns?.status)}>{status}</Badge>
            </div>
            <div className={cn("flex items-center justify-between mt-3 text-xs text-muted-foreground", cns?.footer)}>
                {dueDate && <span className="flex items-center gap-1"><CalendarIcon className="size-3" />{dueDate}</span>}
                {score !== undefined && <span className={cn("font-medium text-foreground", cns?.score)}>{score}/{maxScore || 100}</span>}
            </div>
        </CardContent>
    </Card>
);

const statusVariant = cva("text-xs", {
    variants: {
        status: {
            pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
            submitted: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
            graded: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
            late: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
            missing: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
        },
    },
});

interface AssignmentCardProps {
    title: string; subject?: string; dueDate?: string;
    status: 'pending' | 'submitted' | 'graded' | 'late' | 'missing';
    score?: number; maxScore?: number;
    className?: string; classNames?: { content?: string; title?: string; subject?: string; status?: string; footer?: string; score?: string };
}
