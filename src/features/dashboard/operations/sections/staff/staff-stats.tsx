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
export default function StaffStats({
    stats,
    genderDistribution,
}: IStaffStats) {
    return (
        <div className="@container space-y-4">
            <div className="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>
            {genderDistribution && (
                <GenderDistribution {...genderDistribution} />
            )}
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
}: IStaffStatItem) => (
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
                {change && changeType && (
                    <ChangeIndicator
                        change={change}
                        changeType={changeType}
                    />
                )}
                {description && (
                    <CardDescription className="text-xs">
                        {description}
                    </CardDescription>
                )}
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
}: {
    change: string;
    changeType: 'up' | 'down';
}) => {
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

const GenderDistribution = ({ male, female, other }: IGenderDistribution) => {
    const total = male + female + (other ?? 0);

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                    Gender Distribution
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <GenderBar total={total} male={male} female={female} other={other} />
                    <div className="flex items-center gap-4 text-xs">
                        <GenderLegendItem
                            label="Male"
                            count={male}
                            total={total}
                            colorClass="bg-blue-500"
                        />
                        <GenderLegendItem
                            label="Female"
                            count={female}
                            total={total}
                            colorClass="bg-pink-500"
                        />
                        {other !== undefined && other > 0 && (
                            <GenderLegendItem
                                label="Other"
                                count={other}
                                total={total}
                                colorClass="bg-gray-400"
                            />
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const GenderBar = ({
    total,
    male,
    female,
    other,
}: {
    total: number;
    male: number;
    female: number;
    other?: number;
}) => (
    <div className="flex h-3 rounded-full overflow-hidden bg-muted">
        <div
            className="bg-blue-500 transition-all"
            style={{ width: `${(male / total) * 100}%` }}
        />
        <div
            className="bg-pink-500 transition-all"
            style={{ width: `${(female / total) * 100}%` }}
        />
        {other !== undefined && other > 0 && (
            <div
                className="bg-gray-400 transition-all"
                style={{ width: `${(other / total) * 100}%` }}
            />
        )}
    </div>
);

const GenderLegendItem = ({
    label,
    count,
    total,
    colorClass,
}: {
    label: string;
    count: number;
    total: number;
    colorClass: string;
}) => (
    <div className="flex items-center gap-1.5">
        <span className={`size-2.5 rounded-full ${colorClass}`} />
        <span className="text-muted-foreground">
            {label}: <span className="font-medium text-foreground tabular-nums">{count}</span>{' '}
            ({total > 0 ? Math.round((count / total) * 100) : 0}%)
        </span>
    </div>
);

// TODO: Add department-wise breakdown chart
// TODO: Add staff attrition / joining trend

// ============= TYPES =============
interface IStaffStatItem {
    title: string;
    value: string;
    change?: string;
    changeType?: 'up' | 'down';
    icon: LucideIcon;
    description?: string;
}

interface IGenderDistribution {
    male: number;
    female: number;
    other?: number;
}

interface IStaffStats {
    stats: IStaffStatItem[];
    genderDistribution?: IGenderDistribution;
}
