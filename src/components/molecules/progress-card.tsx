import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const ProgressCard = ({ title, items, className, classNames: cns }: ProgressCardProps) => (
    <Card className={cn("@container", className)}>
        {title && <CardHeader className={cns?.header}><CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle></CardHeader>}
        <CardContent className={cns?.content}>
            <div className="space-y-4">
                {items.map(({ label, value, max = 100, color }, i) => (
                    <div key={i} className={cns?.item}>
                        <div className={cn("flex justify-between text-sm mb-1", cns?.labelRow)}>
                            <span className={cn("text-muted-foreground", cns?.label)}>{label}</span>
                            <span className={cn("font-medium tabular-nums", cns?.value)}>{value}%</span>
                        </div>
                        <Progress value={value} max={max} className={cn("h-2", cns?.bar)} style={color ? { ['--progress-color' as string]: color } : undefined} />
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

interface ProgressCardProps {
    title?: string; items: { label: string; value: number; max?: number; color?: string }[];
    className?: string; classNames?: { header?: string; title?: string; content?: string; item?: string; labelRow?: string; label?: string; value?: string; bar?: string };
}
