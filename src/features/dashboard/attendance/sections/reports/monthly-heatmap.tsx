'use client';

import { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

// ============= MAIN COMPONENT =============
export default function MonthlyHeatmap({
    title,
    description,
    students,
    days,
    data,
}: IMonthlyHeatmap) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <HeatmapLegend />
                </div>
            </CardHeader>
            <CardContent>
                <HeatmapGrid students={students} days={days} data={data} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const HeatmapLegend = () => (
    <div className="flex items-center gap-2 flex-wrap">
        {legendItems.map((item) => (
            <Badge
                key={item.label}
                variant="outline"
                className={`text-[10px] gap-1.5 ${item.textColor}`}
            >
                <span
                    className={`inline-block size-2.5 rounded-sm ${item.bgColor}`}
                />
                {item.label}
            </Badge>
        ))}
    </div>
);

const HeatmapGrid = ({
    students,
    days,
    data,
}: Pick<IMonthlyHeatmap, 'students' | 'days' | 'data'>) => {
    const dataMap = useMemo(() => buildDataMap(data), [data]);

    return (
        <ScrollArea className="w-full">
            <TooltipProvider delayDuration={100}>
                <div className="min-w-max">
                    <DayHeaders days={days} />
                    <div className="space-y-1">
                        {students.map((student) => (
                            <StudentHeatmapRow
                                key={student.id}
                                student={student}
                                days={days}
                                dataMap={dataMap}
                            />
                        ))}
                    </div>
                </div>
            </TooltipProvider>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};

const DayHeaders = ({ days }: { days: IDayInfo[] }) => (
    <div className="flex items-center gap-1 mb-2">
        <div className="w-36 shrink-0 text-xs font-medium text-muted-foreground pr-2">
            Student
        </div>
        {days.map((day) => (
            <div
                key={day.date}
                className="size-7 flex items-center justify-center text-[10px] text-muted-foreground tabular-nums"
            >
                {day.label}
            </div>
        ))}
    </div>
);

const StudentHeatmapRow = ({
    student,
    days,
    dataMap,
}: {
    student: IHeatmapStudent;
    days: IDayInfo[];
    dataMap: Map<string, TAttendanceStatus>;
}) => (
    <div className="flex items-center gap-1">
        <div className="w-36 shrink-0 text-xs font-medium truncate pr-2">
            {student.name}
        </div>
        {days.map((day) => {
            const key = `${student.id}-${day.date}`;
            const status = dataMap.get(key) || 'unknown';

            return (
                <HeatmapCell
                    key={key}
                    studentName={student.name}
                    date={day.date}
                    status={status}
                    isHoliday={day.isHoliday}
                />
            );
        })}
    </div>
);

const HeatmapCell = ({
    studentName,
    date,
    status,
    isHoliday,
}: {
    studentName: string;
    date: string;
    status: TAttendanceStatus;
    isHoliday?: boolean;
}) => {
    const effectiveStatus = isHoliday ? 'holiday' : status;
    const colors = cellColorMap[effectiveStatus] || cellColorMap.unknown;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div
                    className={`size-7 rounded-sm border cursor-default transition-colors ${colors}`}
                />
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs">
                <p className="font-medium">{studentName}</p>
                <p className="text-muted-foreground">
                    {date} —{' '}
                    <span className="capitalize">{effectiveStatus}</span>
                </p>
            </TooltipContent>
        </Tooltip>
    );
};

// ============= HELPERS =============
type TAttendanceStatus =
    | 'present'
    | 'absent'
    | 'late'
    | 'holiday'
    | 'excused'
    | 'unknown';

const cellColorMap: Record<TAttendanceStatus, string> = {
    present: 'bg-emerald-500/80 border-emerald-600/30',
    absent: 'bg-red-500/80 border-red-600/30',
    late: 'bg-amber-500/80 border-amber-600/30',
    holiday: 'bg-blue-200/60 border-blue-300/30',
    excused: 'bg-sky-400/60 border-sky-500/30',
    unknown: 'bg-muted border-muted-foreground/10',
};

const legendItems = [
    { label: 'Present', bgColor: 'bg-emerald-500', textColor: 'text-emerald-700' },
    { label: 'Absent', bgColor: 'bg-red-500', textColor: 'text-red-700' },
    { label: 'Late', bgColor: 'bg-amber-500', textColor: 'text-amber-700' },
    { label: 'Holiday', bgColor: 'bg-blue-300', textColor: 'text-blue-700' },
    { label: 'Excused', bgColor: 'bg-sky-400', textColor: 'text-sky-700' },
];

const buildDataMap = (data: IHeatmapEntry[]) => {
    const map = new Map<string, TAttendanceStatus>();
    data.forEach((entry) => {
        map.set(`${entry.studentId}-${entry.date}`, entry.status);
    });
    return map;
};

// ============= TYPES =============
interface IHeatmapStudent {
    id: string;
    name: string;
}

interface IDayInfo {
    date: string;
    label: string;
    isHoliday?: boolean;
}

interface IHeatmapEntry {
    studentId: string;
    date: string;
    status: TAttendanceStatus;
}

interface IMonthlyHeatmap {
    title: string;
    description?: string;
    students: IHeatmapStudent[];
    days: IDayInfo[];
    data: IHeatmapEntry[];
}
