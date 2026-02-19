import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function OperationsStats({ stats }: IOperationsStats) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <StatCard key={i} {...stat} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const StatCard = ({
    title,
    value,
    change,
    changeType,
    icon: Icon,
    description,
}: IOperationsStatItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <StatIcon icon={Icon} />
        </CardHeader>
        <CardContent className="space-y-1.5">
            <p className="text-3xl font-bold tracking-tight tabular-nums">
                {value}
            </p>
            <div className="flex items-center gap-2">
                <ChangeIndicator change={change} changeType={changeType} />
                <CardDescription className="text-xs">
                    {description}
                </CardDescription>
            </div>
        </CardContent>
    </Card>
);

const StatIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <Icon className="size-4 text-muted-foreground" />
    </div>
);

const ChangeIndicator = ({
    change,
    changeType,
}: Pick<IOperationsStatItem, 'change' | 'changeType'>) => {
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

// TODO: Add sparkline mini-charts inside each stat card
// TODO: Add click-through to detailed view for each stat

// ============= TYPES =============
interface IOperationsStatItem {
    title: string;
    value: string;
    change: string;
    changeType: 'up' | 'down';
    icon: LucideIcon;
    description: string;
}

interface IOperationsStats {
    stats: IOperationsStatItem[];
}
