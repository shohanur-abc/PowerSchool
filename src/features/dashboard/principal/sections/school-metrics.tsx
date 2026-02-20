import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function SchoolMetrics({ metrics }: ISchoolMetrics) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @5xl:grid-cols-5 gap-4">
            {metrics.map((metric, i) => (
                <MetricCard key={i} {...metric} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const MetricCard = ({
    title,
    value,
    suffix,
    change,
    changeType,
    icon: iconName,
}: IMetricItem) => {
    const Icon = getIcon(iconName);

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <MetricIcon icon={Icon} />
            </CardHeader>
            <CardContent className="space-y-1.5">
                <p className="text-3xl font-bold tracking-tight tabular-nums">
                    {value}
                    {suffix && (
                        <span className="text-base font-normal text-muted-foreground ml-0.5">
                            {suffix}
                        </span>
                    )}
                </p>
                <ChangeIndicator change={change} changeType={changeType} />
            </CardContent>
        </Card>
    );
};

const MetricIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <Icon className="size-4 text-muted-foreground" />
    </div>
);

const ChangeIndicator = ({
    change,
    changeType,
}: Pick<IMetricItem, 'change' | 'changeType'>) => {
    const isUp = changeType === 'up';

    return (
        <Badge
            variant={isUp ? 'default' : 'destructive'}
            className="gap-0.5 text-xs px-1.5 py-0"
        >
            {isUp ? (
                <TrendingUp className="size-3" />
            ) : (
                <TrendingDown className="size-3" />
            )}
            {change}
        </Badge>
    );
};

// ============= TYPES =============
interface IMetricItem {
    title: string;
    value: string;
    suffix?: string;
    change: string;
    changeType: 'up' | 'down';
    icon: string;
}

interface ISchoolMetrics {
    metrics: IMetricItem[];
}
