import {
    type LucideIcon,
    TrendingUp,
    TrendingDown,
    Minus,
} from 'lucide-react';
import { getIcon } from '@/lib/icons';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function AnalyticsOverview({ metrics }: IAnalyticsOverview) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
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
    sparkline,
}: IAnalyticsMetric) => {
    const Icon = getIcon(iconName);
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <MetricIcon icon={Icon} />
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-baseline gap-1">
                    <p className="text-3xl font-bold tracking-tight tabular-nums">
                        {value}
                    </p>
                    {suffix && (
                        <span className="text-lg font-medium text-muted-foreground">
                            {suffix}
                        </span>
                    )}
                </div>
                <div className="flex items-center justify-between gap-2">
                    <ChangeIndicator change={change} changeType={changeType} />
                    {sparkline && sparkline.length > 0 && (
                        <MiniSparkline
                            data={sparkline}
                            changeType={changeType}
                        />
                    )}
                </div>
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
}: Pick<IAnalyticsMetric, 'change' | 'changeType'>) => {
    const TrendIcon =
        changeType === 'up'
            ? TrendingUp
            : changeType === 'down'
                ? TrendingDown
                : Minus;

    const variant =
        changeType === 'up'
            ? 'default'
            : changeType === 'down'
                ? 'destructive'
                : ('secondary' as const);

    return (
        <Badge variant={variant} className="gap-0.5 text-xs px-1.5 py-0">
            <TrendIcon className="size-3" />
            {change}
        </Badge>
    );
};

const MiniSparkline = ({
    data,
    changeType,
}: {
    data: number[];
    changeType: 'up' | 'down' | 'neutral';
}) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const height = 24;
    const width = 64;
    const step = width / (data.length - 1);

    const points = data
        .map((val, i) => {
            const x = i * step;
            const y = height - ((val - min) / range) * height;
            return `${x},${y}`;
        })
        .join(' ');

    const strokeColor =
        changeType === 'up'
            ? 'stroke-emerald-500'
            : changeType === 'down'
                ? 'stroke-destructive'
                : 'stroke-muted-foreground';

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            className="shrink-0"
        >
            <polyline
                points={points}
                fill="none"
                className={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

// ============= TYPES =============
interface IAnalyticsMetric {
    title: string;
    value: string;
    suffix?: string;
    change: string;
    changeType: 'up' | 'down' | 'neutral';
    icon: string;
    sparkline?: number[];
}

interface IAnalyticsOverview {
    metrics: IAnalyticsMetric[];
}
