import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
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
export default function EngagementStats({ stats }: IEngagementStats) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <EngagementCard key={i} {...stat} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const EngagementCard = ({
    title,
    value,
    change,
    changeType,
    icon: iconName,
    description,
}: IEngagementItem) => {
    const Icon = getIcon(iconName);
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <EngagementIcon icon={Icon} />
            </CardHeader>
            <CardContent className="space-y-1.5">
                <p className="text-3xl font-bold tracking-tight tabular-nums">
                    {value}
                </p>
                <div className="flex items-center gap-2">
                    <TrendIndicator change={change} changeType={changeType} />
                    <CardDescription className="text-xs">
                        {description}
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    );
};

const EngagementIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <Icon className="size-4 text-muted-foreground" />
    </div>
);

const TrendIndicator = ({
    change,
    changeType,
}: Pick<IEngagementItem, 'change' | 'changeType'>) => {
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
interface IEngagementItem {
    title: string;
    value: string;
    change: string;
    changeType: 'up' | 'down';
    icon: string;
    description: string;
}

interface IEngagementStats {
    stats: IEngagementItem[];
}
