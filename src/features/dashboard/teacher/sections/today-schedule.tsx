import { cva } from 'class-variance-authority';
import { Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function TodaySchedule({
    title,
    schedule,
    currentPeriod,
}: ITodaySchedule) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-0">
                    {schedule.map((item) => (
                        <ScheduleItem
                            key={item.period}
                            {...item}
                            isCurrent={item.period === currentPeriod}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ScheduleItem = ({
    period,
    time,
    className,
    subject,
    room,
    isCurrent,
}: IScheduleItem & { isCurrent: boolean }) => (
    <div className="relative flex gap-4 pb-6 last:pb-0">
        {/* Timeline connector */}
        <div className="flex flex-col items-center">
            <div
                className={`size-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isCurrent
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
            >
                {period}
            </div>
            <div className="w-px flex-1 bg-border mt-1" />
        </div>

        {/* Content */}
        <div
            className={`flex-1 rounded-lg border p-3 -mt-0.5 ${periodStyle({ active: isCurrent })}`}
        >
            <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium">{className}</p>
                {isCurrent && (
                    <Badge variant="default" className="text-[10px] px-1.5 py-0">
                        Now
                    </Badge>
                )}
            </div>
            <p className="text-sm text-muted-foreground">{subject}</p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" />
                    {time}
                </span>
                <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3" />
                    {room}
                </span>
            </div>
        </div>
    </div>
);

// ============= VARIANTS =============
const periodStyle = cva('transition-colors', {
    variants: {
        active: {
            true: 'border-primary/50 bg-primary/5',
            false: 'hover:bg-muted/50',
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
    className: string;
    subject: string;
    room: string;
}

interface ITodaySchedule {
    title: string;
    schedule: IScheduleItem[];
    /** The period number currently active */
    currentPeriod?: number;
}
