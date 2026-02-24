import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DetailCard = ({ title, fields, columns = 2, action, className, classNames: cns }: DetailCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cn("flex-row items-center justify-between space-y-0", cns?.header)}>
            <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
            {action && <div className={cns?.action}>{action}</div>}
        </CardHeader>
        <CardContent className={cns?.content}>
            <dl className={cn("grid gap-x-6 gap-y-3", columns === 2 ? "grid-cols-1 @sm:grid-cols-2" : "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3", cns?.fields)}>
                {fields.map(({ label, value }, i) => (
                    <div key={i} className={cns?.field}>
                        <dt className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</dt>
                        <dd className={cn("text-sm font-medium mt-0.5", cns?.value)}>{value}</dd>
                    </div>
                ))}
            </dl>
        </CardContent>
    </Card>
);

interface DetailCardProps {
    title: string; fields: { label: string; value: React.ReactNode }[]; columns?: 2 | 3;
    action?: React.ReactNode; className?: string;
    classNames?: { header?: string; title?: string; action?: string; content?: string; fields?: string; field?: string; label?: string; value?: string };
}
