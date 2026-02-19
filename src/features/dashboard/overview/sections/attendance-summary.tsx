import { Progress } from '@/components/ui/progress';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function AttendanceSummary({
    title,
    summary,
    classBreakdown,
}: IAttendanceSummary) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <SummaryOverview summary={summary} />
                <ClassBreakdownList classBreakdown={classBreakdown} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SummaryOverview = ({ summary }: { summary: ISummaryData }) => (
    <div className="@container grid grid-cols-2 @md:grid-cols-4 gap-3">
        <SummaryItem label="Present" value={summary.present} total={summary.totalStudents} color="text-emerald-600" />
        <SummaryItem label="Absent" value={summary.absent} total={summary.totalStudents} color="text-red-600" />
        <SummaryItem label="Late" value={summary.late} total={summary.totalStudents} color="text-amber-600" />
        <SummaryItem label="On Leave" value={summary.onLeave} total={summary.totalStudents} color="text-blue-600" />
    </div>
);

const SummaryItem = ({
    label,
    value,
    total,
    color,
}: {
    label: string;
    value: number;
    total: number;
    color: string;
}) => (
    <div className="rounded-lg border p-3 text-center space-y-1">
        <p className={`text-2xl font-bold tabular-nums ${color}`}>{value}</p>
        <p className="text-xs text-muted-foreground">
            {label} / {total}
        </p>
    </div>
);

const ClassBreakdownList = ({
    classBreakdown,
}: {
    classBreakdown: IClassBreakdown[];
}) => (
    <div className="space-y-2">
        <p className="text-sm font-medium">Class Breakdown</p>
        <ScrollArea className="h-55 pr-3">
            <div className="space-y-3">
                {classBreakdown.map((item, i) => (
                    <ClassRow key={i} {...item} />
                ))}
            </div>
        </ScrollArea>
    </div>
);

const ClassRow = ({ class: className, present, total, percentage }: IClassBreakdown) => (
    <div className="space-y-1.5">
        <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{className}</span>
            <span className="text-muted-foreground tabular-nums">
                {present}/{total}{' '}
                <span className="text-xs">({percentage}%)</span>
            </span>
        </div>
        <Progress value={percentage} />
    </div>
);

// ============= TYPES =============
interface ISummaryData {
    totalStudents: number;
    present: number;
    absent: number;
    late: number;
    onLeave: number;
}

interface IClassBreakdown {
    class: string;
    present: number;
    total: number;
    percentage: number;
}

interface IAttendanceSummary {
    title: string;
    summary: ISummaryData;
    classBreakdown: IClassBreakdown[];
}
