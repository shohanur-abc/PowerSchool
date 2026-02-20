import {
    type LucideIcon,
    Lightbulb,
    TrendingUp,
    TrendingDown,
    Minus,
    ArrowRight,
} from 'lucide-react';
import { getIcon } from '@/lib/icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function DataInsights({
    title,
    description,
    insights,
}: IDataInsights) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Lightbulb className="size-5 text-amber-500" />
                    <CardTitle>{title}</CardTitle>
                </div>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {insights.length > 0 ? (
                    <div className="@container grid grid-cols-1 @xl:grid-cols-2 gap-4">
                        {insights.map((insight, i) => (
                            <InsightCard key={i} {...insight} />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const InsightCard = ({
    icon: iconName,
    title,
    description,
    metric,
    metricLabel,
    trend,
    trendType,
    recommendation,
}: IInsight) => {
    const Icon = getIcon(iconName);
    return (
        <div className="flex flex-col gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start gap-3">
                <InsightIcon icon={Icon} />
                <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-sm font-semibold leading-snug">{title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                    <p className="text-2xl font-bold tabular-nums">{metric}</p>
                    {metricLabel && (
                        <p className="text-xs text-muted-foreground">
                            {metricLabel}
                        </p>
                    )}
                </div>
                <TrendIndicator trend={trend} trendType={trendType} />
            </div>

            {recommendation && (
                <div className="flex items-start gap-2 rounded-md bg-muted/50 p-3 mt-auto">
                    <ArrowRight className="size-3.5 text-primary mt-0.5 shrink-0" />
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        {recommendation}
                    </p>
                </div>
            )}
        </div>
    );
};

const InsightIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
        <Icon className="size-4 text-amber-600" />
    </div>
);

const TrendIndicator = ({
    trend,
    trendType,
}: {
    trend: string;
    trendType: 'up' | 'down' | 'neutral';
}) => {
    const TrendIcon =
        trendType === 'up'
            ? TrendingUp
            : trendType === 'down'
                ? TrendingDown
                : Minus;

    const variant =
        trendType === 'up'
            ? 'default'
            : trendType === 'down'
                ? 'destructive'
                : ('secondary' as const);

    return (
        <Badge variant={variant} className="gap-0.5 text-xs px-1.5 py-0">
            <TrendIcon className="size-3" />
            {trend}
        </Badge>
    );
};

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <Lightbulb className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">
            No insights available yet
        </p>
        <p className="text-xs text-muted-foreground mt-1">
            Insights will appear as more data is collected
        </p>
    </div>
);

// ============= TYPES =============
interface IInsight {
    icon: string;
    title: string;
    description: string;
    metric: string;
    metricLabel?: string;
    trend: string;
    trendType: 'up' | 'down' | 'neutral';
    recommendation?: string;
}

interface IDataInsights {
    title: string;
    description?: string;
    insights: IInsight[];
}
