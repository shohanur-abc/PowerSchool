import { cva } from 'class-variance-authority';
import { Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function MySchedule({
    title,
    schedule,
    currentPeriod,
}: IMySchedule) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ScheduleTable schedule={schedule} currentPeriod={currentPeriod} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ScheduleTable = ({
    schedule,
    currentPeriod,
}: {
    schedule: IScheduleItem[];
    currentPeriod?: number;
}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-16">Period</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead>Room</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {schedule.map((item) => (
                <ScheduleRow
                    key={item.period}
                    {...item}
                    isCurrent={item.period === currentPeriod}
                />
            ))}
        </TableBody>
    </Table>
);

const ScheduleRow = ({
    period,
    time,
    subject,
    teacher,
    room,
    isCurrent,
}: IScheduleItem & { isCurrent: boolean }) => (
    <TableRow className={periodRowStyle({ active: isCurrent })}>
        <TableCell>
            <span
                className={`inline-flex items-center justify-center size-7 rounded-full text-xs font-bold tabular-nums ${isCurrent
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
            >
                {period}
            </span>
        </TableCell>
        <TableCell>
            <span className="inline-flex items-center gap-1 text-sm">
                <Clock className="size-3 text-muted-foreground" />
                {time}
            </span>
        </TableCell>
        <TableCell className="font-medium">{subject}</TableCell>
        <TableCell className="text-muted-foreground">{teacher}</TableCell>
        <TableCell>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="size-3" />
                {room}
            </span>
        </TableCell>
        {isCurrent && (
            <TableCell className="w-0 p-0">
                <Badge variant="default" className="text-[10px] px-1.5 py-0">
                    Now
                </Badge>
            </TableCell>
        )}
    </TableRow>
);

// ============= VARIANTS =============
const periodRowStyle = cva('transition-colors', {
    variants: {
        active: {
            true: 'bg-primary/5',
            false: '',
        },
    },
    defaultVariants: {
        active: false,
    },
});

// ============= TYPES =============
interface IScheduleItem {
    period: number;
    time: string;
    subject: string;
    teacher: string;
    room: string;
}

interface IMySchedule {
    title: string;
    schedule: IScheduleItem[];
    /** The period number currently active */
    currentPeriod?: number;
}
