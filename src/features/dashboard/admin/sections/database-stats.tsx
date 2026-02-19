import { type LucideIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function DatabaseStats({ stats }: IDatabaseStats) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <DbStatCard key={i} {...stat} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const DbStatCard = ({
    title,
    value,
    unit,
    icon: Icon,
    description,
}: IDbStat) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <StatIcon icon={Icon} />
        </CardHeader>
        <CardContent className="space-y-1">
            <div className="flex items-baseline gap-1">
                <p className="text-3xl font-bold tracking-tight tabular-nums">
                    {value}
                </p>
                {unit && (
                    <span className="text-sm text-muted-foreground">
                        {unit}
                    </span>
                )}
            </div>
            {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
            )}
        </CardContent>
    </Card>
);

const StatIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
        <Icon className="size-4 text-muted-foreground" />
    </div>
);

// ============= TYPES =============
interface IDbStat {
    title: string;
    value: string;
    unit?: string;
    icon: LucideIcon;
    description?: string;
}

interface IDatabaseStats {
    stats: IDbStat[];
}
