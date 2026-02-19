import { type LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function SystemHealth({ metrics }: ISystemHealth) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-5 gap-4">
            {metrics.map((metric, i) => (
                <HealthCard key={i} {...metric} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const HealthCard = ({
    title,
    value,
    unit,
    percentage,
    status,
    icon: Icon,
    description,
}: IHealthMetric) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <MetricIcon icon={Icon} />
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold tracking-tight tabular-nums">
                    {value}
                </p>
                {unit && (
                    <span className="text-xs text-muted-foreground">
                        {unit}
                    </span>
                )}
            </div>
            {percentage !== undefined && (
                <Progress value={percentage} className="h-1.5" />
            )}
            <div className="flex items-center justify-between">
                <CardDescription className="text-xs">
                    {description}
                </CardDescription>
                <Badge className={healthStatusVariants({ status })}>
                    {status}
                </Badge>
            </div>
        </CardContent>
    </Card>
);

const MetricIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <Icon className="size-4 text-muted-foreground" />
    </div>
);

// ============= VARIANTS =============
const healthStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            healthy: 'bg-emerald-600 text-white hover:bg-emerald-700',
            warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
            critical: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        status: 'healthy',
    },
});

// ============= TYPES =============
interface IHealthMetric {
    title: string;
    value: string;
    unit?: string;
    percentage?: number;
    status: 'healthy' | 'warning' | 'critical';
    icon: LucideIcon;
    description: string;
}

interface ISystemHealth {
    metrics: IHealthMetric[];
}
