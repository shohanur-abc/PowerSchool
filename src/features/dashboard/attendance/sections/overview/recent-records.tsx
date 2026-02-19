import { Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// ============= MAIN COMPONENT =============
export default function RecentRecords({
    title,
    description,
    records,
}: IRecentRecords) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <RecordsList records={records} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const RecordsList = ({ records }: { records: IAttendanceRecord[] }) => (
    <ScrollArea className="h-96 pr-3">
        <div className="space-y-1">
            {records.map((record, i) => (
                <div key={record.id}>
                    <RecordRow {...record} />
                    {i < records.length - 1 && <Separator className="my-2" />}
                </div>
            ))}
        </div>
    </ScrollArea>
);

const RecordRow = ({
    studentName,
    studentAvatar,
    rollNo,
    className: cls,
    section,
    status,
    time,
    markedBy,
}: IAttendanceRecord) => (
    <div className="flex items-center gap-3 py-1">
        <Avatar>
            <AvatarImage src={studentAvatar} alt={studentName} />
            <AvatarFallback>{getInitials(studentName)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{studentName}</p>
                <StatusBadge status={status} />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Roll #{rollNo}</span>
                <span>•</span>
                <span>
                    {cls}-{section}
                </span>
                {markedBy && (
                    <>
                        <span>•</span>
                        <span>by {markedBy}</span>
                    </>
                )}
            </div>
        </div>
        <TimeStamp time={time} />
    </div>
);

const StatusBadge = ({ status }: { status: IAttendanceRecord['status'] }) => (
    <Badge
        variant={statusVariantMap[status]}
        className="text-[10px] px-1.5 py-0"
    >
        {statusLabelMap[status]}
    </Badge>
);

const TimeStamp = ({ time }: { time: string }) => (
    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
        <Clock className="size-3" />
        <span>{time}</span>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

const statusVariantMap: Record<
    IAttendanceRecord['status'],
    'default' | 'destructive' | 'outline' | 'secondary'
> = {
    present: 'outline',
    absent: 'destructive',
    late: 'secondary',
    excused: 'default',
};

const statusLabelMap: Record<IAttendanceRecord['status'], string> = {
    present: 'Present',
    absent: 'Absent',
    late: 'Late',
    excused: 'Excused',
};

// ============= TYPES =============
interface IAttendanceRecord {
    id: string;
    studentName: string;
    studentAvatar: string;
    rollNo: string;
    className: string;
    section: string;
    status: 'present' | 'absent' | 'late' | 'excused';
    time: string;
    markedBy?: string;
}

interface IRecentRecords {
    title: string;
    description?: string;
    records: IAttendanceRecord[];
}
