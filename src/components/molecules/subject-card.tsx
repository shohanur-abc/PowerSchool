"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export const SubjectCard = ({ name, teacher, schedule, grade, icon: Icon, color, className, classNames: cns }: SubjectCardProps) => (
    <Card className={cn("@container overflow-hidden", className)}>
        <div className={cn("h-1.5", cns?.strip)} style={{ backgroundColor: color || 'hsl(var(--primary))' }} />
        <CardContent className={cn("pt-4", cns?.content)}>
            <div className="flex items-start gap-3">
                {Icon && <div className={cn("p-2 rounded-lg shrink-0", cns?.iconWrapper)} style={{ backgroundColor: `${color || 'hsl(var(--primary))'}15` }}>
                    <Icon className={cn("size-5", cns?.icon)} style={{ color: color }} />
                </div>}
                <div className="flex-1 min-w-0">
                    <h3 className={cn("font-semibold", cns?.name)}>{name}</h3>
                    {teacher && <p className={cn("text-xs text-muted-foreground", cns?.teacher)}>{teacher}</p>}
                    {schedule && <p className={cn("text-xs text-muted-foreground mt-1", cns?.schedule)}>{schedule}</p>}
                </div>
                {grade && <span className={cn("text-sm font-bold px-2 py-0.5 rounded bg-muted", cns?.grade)}>{grade}</span>}
            </div>
        </CardContent>
    </Card>
);

interface SubjectCardProps {
    name: string; teacher?: string; schedule?: string; grade?: string;
    icon?: React.ElementType; color?: string;
    className?: string; classNames?: { strip?: string; content?: string; iconWrapper?: string; icon?: string; name?: string; teacher?: string; schedule?: string; grade?: string };
}
