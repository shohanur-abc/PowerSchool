"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const NoticeCard = ({ title, date, content, priority, author, className, classNames: cns }: NoticeCardProps) => (
    <Card className={cn("@container", priority === 'high' && "border-red-200 dark:border-red-800", priority === 'medium' && "border-yellow-200 dark:border-yellow-800", className)}>
        <CardHeader className={cns?.header}>
            <div className="flex items-center justify-between gap-2">
                <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
                {priority && (
                    <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full font-medium",
                        priority === 'high' && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
                        priority === 'medium' && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
                        priority === 'low' && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
                        cns?.priority
                    )}>{priority}</span>
                )}
            </div>
            {(date || author) && (
                <div className={cn("flex items-center gap-2 text-xs text-muted-foreground", cns?.meta)}>
                    {date && <time>{date}</time>}
                    {date && author && <span>•</span>}
                    {author && <span>{author}</span>}
                </div>
            )}
        </CardHeader>
        <CardContent className={cns?.content}>
            {typeof content === 'string' ? <p className="text-sm text-muted-foreground">{content}</p> : content}
        </CardContent>
    </Card>
);


// ============= TYPES =============
interface NoticeCardProps {
    title: string;
    date?: string;
    content: React.ReactNode;
    priority?: 'high' | 'medium' | 'low';
    author?: string;
    className?: string;
    classNames?: {
        header?: string;
        title?: string;
        priority?: string;
        meta?: string;
        content?: string;
    };
}
