import { cva } from 'class-variance-authority';
import { getIcon } from '@/lib/icons';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// ============= MAIN COMPONENT =============
export default function MyAttendance({
    title,
    totalDays,
    present,
    absent,
    late,
    attendancePercent,
}: IMyAttendance) {
    const status = getAttendanceStatus(attendancePercent);

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Badge className={attendanceStatusBadge({ status })}>
                        {status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="@container grid grid-cols-2 @sm:grid-cols-4 gap-3">
                    <AttendanceStat icon="CalendarDays" label="Total Days" value={totalDays} />
                    <AttendanceStat icon="CalendarCheck" label="Present" value={present} />
                    <AttendanceStat icon="CalendarX" label="Absent" value={absent} />
                    <AttendanceStat icon="Clock" label="Late" value={late} />
                </div>
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Attendance Rate</span>
                        <span className="font-semibold tabular-nums">{attendancePercent}%</span>
                    </div>
                    <Progress value={attendancePercent} className="h-2.5" />
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const AttendanceStat = ({
    icon: iconName,
    label,
    value,
}: {
    icon: string;
    label: string;
    value: number;
}) => {
    const Icon = getIcon(iconName);

    return (
        <div className="flex items-center gap-2 rounded-lg border p-2.5">
            <Icon className="size-4 text-muted-foreground shrink-0" />
            <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold tabular-nums">{value}</p>
            </div>
        </div>
    );
};

// ============= HELPERS =============
const getAttendanceStatus = (percent: number): TAttendanceStatus => {
    if (percent >= 90) return 'good';
    if (percent >= 75) return 'average';
    return 'poor';
};

// ============= VARIANTS =============
const attendanceStatusBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            status: {
                good: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                average: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                poor: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
            },
        },
        defaultVariants: {
            status: 'good',
        },
    }
);

// ============= TYPES =============
type TAttendanceStatus = 'good' | 'average' | 'poor';

interface IMyAttendance {
    title: string;
    totalDays: number;
    present: number;
    absent: number;
    late: number;
    attendancePercent: number;
}
