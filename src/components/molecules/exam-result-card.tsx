import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ExamResultCard = ({ examName, date, subjects, totalMarks, obtainedMarks, percentage, grade, className, classNames: cns }: ExamResultCardProps) => {
    const status = percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : percentage >= 40 ? 'average' : 'poor';
    const statusColors = { excellent: 'text-green-600', good: 'text-blue-600', average: 'text-yellow-600', poor: 'text-red-600' };

    return (
        <Card className={cn("@container", className)}>
            <CardHeader className={cn("flex-row items-center justify-between space-y-0", cns?.header)}>
                <div>
                    <CardTitle className={cn("text-base", cns?.title)}>{examName}</CardTitle>
                    {date && <p className={cn("text-xs text-muted-foreground", cns?.date)}>{date}</p>}
                </div>
                {grade && <Badge variant="outline" className={cn("text-lg font-bold", statusColors[status], cns?.grade)}>{grade}</Badge>}
            </CardHeader>
            <CardContent className={cns?.content}>
                <div className={cn("grid grid-cols-3 gap-3 mb-4 text-center", cns?.summary)}>
                    <div><p className="text-xs text-muted-foreground">Total</p><p className="font-bold tabular-nums">{totalMarks}</p></div>
                    <div><p className="text-xs text-muted-foreground">Obtained</p><p className="font-bold tabular-nums">{obtainedMarks}</p></div>
                    <div><p className="text-xs text-muted-foreground">Percentage</p><p className={cn("font-bold tabular-nums", statusColors[status])}>{percentage}%</p></div>
                </div>
                {subjects && subjects.length > 0 && (
                    <div className={cn("space-y-2 border-t pt-3", cns?.subjects)}>
                        {subjects.map(({ name, marks, total, grade: g }, i) => (
                            <div key={i} className={cn("flex items-center justify-between text-sm", cns?.subject)}>
                                <span className="text-muted-foreground">{name}</span>
                                <div className="flex items-center gap-2">
                                    <span className="tabular-nums">{marks}/{total}</span>
                                    {g && <Badge variant="secondary" className="text-xs">{g}</Badge>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

interface ExamResultCardProps {
    examName: string; date?: string; totalMarks: number; obtainedMarks: number; percentage: number; grade?: string;
    subjects?: { name: string; marks: number; total: number; grade?: string }[];
    className?: string; classNames?: { header?: string; title?: string; date?: string; grade?: string; content?: string; summary?: string; subjects?: string; subject?: string };
}
