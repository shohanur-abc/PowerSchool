import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

export const ScoreCard = ({ subject, score, maxScore = 100, grade, className, classNames: cns }: ScoreCardProps) => {
    const percentage = Math.round((score / maxScore) * 100);
    const level = percentage >= 90 ? 'excellent' : percentage >= 70 ? 'good' : percentage >= 50 ? 'average' : 'poor';

    return (
        <Card className={cn("@container", className)}>
            <CardHeader className={cn("pb-2", cns?.header)}>
                <CardTitle className={cn("text-sm font-medium text-muted-foreground", cns?.subject)}>{subject}</CardTitle>
            </CardHeader>
            <CardContent className={cns?.content}>
                <div className="flex items-end justify-between">
                    <div>
                        <span className={cn("text-3xl font-bold tabular-nums", cns?.score)}>{score}</span>
                        <span className={cn("text-sm text-muted-foreground", cns?.maxScore)}>/{maxScore}</span>
                    </div>
                    {grade && <span className={cn(gradeVariant({ level }), cns?.grade)}>{grade}</span>}
                </div>
                <div className={cn("mt-3 h-2 rounded-full bg-muted overflow-hidden", cns?.bar)}>
                    <div className={cn(barVariant({ level }), "h-full rounded-full transition-all")} style={{ width: `${percentage}%` }} />
                </div>
            </CardContent>
        </Card>
    );
};

const gradeVariant = cva("text-sm font-bold px-2 py-0.5 rounded", {
    variants: {
        level: {
            excellent: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
            good: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
            average: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
            poor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
        }
    },
});

const barVariant = cva("", {
    variants: { level: { excellent: "bg-green-500", good: "bg-blue-500", average: "bg-yellow-500", poor: "bg-red-500" } },
});

interface ScoreCardProps {
    subject: string; score: number; maxScore?: number; grade?: string; className?: string;
    classNames?: { header?: string; subject?: string; content?: string; score?: string; maxScore?: string; grade?: string; bar?: string };
}
