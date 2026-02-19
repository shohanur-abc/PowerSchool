'use client';

import { CheckCircle2, XCircle, Clock, UserCheck, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function MarkSummary({
    title,
    description,
    summary,
    onSubmit,
    onReset,
    isSubmitting,
}: IMarkSummary) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="space-y-6">
                <SummaryCards summary={summary} />
                <Separator />
                <AttendanceRate summary={summary} />
            </CardContent>
            <CardFooter className="gap-3 justify-end">
                {onReset && (
                    <Button variant="outline" onClick={onReset}>
                        Reset
                    </Button>
                )}
                <Button onClick={onSubmit} disabled={isSubmitting}>
                    <Send className="size-4 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Attendance'}
                </Button>
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SummaryCards = ({ summary }: { summary: ISummaryData }) => (
    <div className="@container grid grid-cols-2 @lg:grid-cols-4 gap-3">
        <SummaryItem
            label="Present"
            count={summary.present}
            total={summary.total}
            icon={CheckCircle2}
            color="text-emerald-600 bg-emerald-50"
        />
        <SummaryItem
            label="Absent"
            count={summary.absent}
            total={summary.total}
            icon={XCircle}
            color="text-red-600 bg-red-50"
        />
        <SummaryItem
            label="Late"
            count={summary.late}
            total={summary.total}
            icon={Clock}
            color="text-amber-600 bg-amber-50"
        />
        <SummaryItem
            label="Excused"
            count={summary.excused}
            total={summary.total}
            icon={UserCheck}
            color="text-blue-600 bg-blue-50"
        />
    </div>
);

const SummaryItem = ({
    label,
    count,
    total,
    icon: Icon,
    color,
}: {
    label: string;
    count: number;
    total: number;
    icon: typeof CheckCircle2;
    color: string;
}) => {
    const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

    return (
        <div className="rounded-lg border p-3 space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                    {label}
                </span>
                <div
                    className={`size-7 rounded-md flex items-center justify-center ${color}`}
                >
                    <Icon className="size-3.5" />
                </div>
            </div>
            <p className="text-2xl font-bold tabular-nums">{count}</p>
            <div className="flex items-center gap-2">
                <Progress value={percentage} className="h-1.5" />
                <Badge variant="outline" className="text-[10px] tabular-nums">
                    {percentage}%
                </Badge>
            </div>
        </div>
    );
};

const AttendanceRate = ({ summary }: { summary: ISummaryData }) => {
    const rate =
        summary.total > 0
            ? Math.round((summary.present / summary.total) * 100)
            : 0;

    return (
        <div className="flex items-center justify-between">
            <div className="space-y-0.5">
                <p className="text-sm font-medium">Today&apos;s Attendance Rate</p>
                <p className="text-xs text-muted-foreground">
                    {summary.present} of {summary.total} students present
                </p>
            </div>
            <div className="text-right">
                <p className="text-3xl font-bold tabular-nums">{rate}%</p>
                <RateBadge rate={rate} />
            </div>
        </div>
    );
};

const RateBadge = ({ rate }: { rate: number }) => (
    <Badge variant={getRateVariant(rate)} className="text-xs">
        {getRateLabel(rate)}
    </Badge>
);

// ============= HELPERS =============
const getRateVariant = (
    rate: number
): 'default' | 'secondary' | 'destructive' => {
    if (rate >= 90) return 'default';
    if (rate >= 75) return 'secondary';
    return 'destructive';
};

const getRateLabel = (rate: number): string => {
    if (rate >= 90) return 'Excellent';
    if (rate >= 75) return 'Good';
    if (rate >= 60) return 'Average';
    return 'Low';
};

// ============= TYPES =============
interface ISummaryData {
    total: number;
    present: number;
    absent: number;
    late: number;
    excused: number;
}

interface IMarkSummary {
    title: string;
    description?: string;
    summary: ISummaryData;
    onSubmit?: () => void;
    onReset?: () => void;
    isSubmitting?: boolean;
}
