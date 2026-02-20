import { getIcon } from '@/lib/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function StaffAttendance({
    title,
    totalStaff,
    present,
    absent,
    onLeave,
    absentStaff,
}: IStaffAttendance) {
    const attendancePercent =
        totalStaff > 0 ? Math.round((present / totalStaff) * 100) : 0;

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Summary stats */}
                <div className="@container grid grid-cols-2 @sm:grid-cols-4 gap-3">
                    <AttendanceStat
                        icon="UserCheck"
                        label="Total Staff"
                        value={totalStaff}
                    />
                    <AttendanceStat
                        icon="UserCheck"
                        label="Present"
                        value={present}
                    />
                    <AttendanceStat
                        icon="UserX"
                        label="Absent"
                        value={absent}
                    />
                    <AttendanceStat
                        icon="Clock"
                        label="On Leave"
                        value={onLeave}
                    />
                </div>

                {/* Progress */}
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Staff Attendance Rate</span>
                        <span className="font-semibold tabular-nums">
                            {attendancePercent}%
                        </span>
                    </div>
                    <Progress value={attendancePercent} className="h-2.5" />
                </div>

                {/* Absent staff list */}
                {absentStaff.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                            Absent Staff
                        </p>
                        <ScrollArea className="h-40 pr-3">
                            <div className="space-y-2">
                                {absentStaff.map((staff) => (
                                    <AbsentStaffRow key={staff.id} {...staff} />
                                ))}
                            </div>
                        </ScrollArea>
                    </div>
                )}
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

const AbsentStaffRow = ({ name, avatar, reason }: IAbsentStaff) => (
    <div className="flex items-center gap-2.5 rounded-lg border p-2 hover:bg-muted/50 transition-colors">
        <Avatar size="sm">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{name}</p>
            <p className="text-xs text-muted-foreground truncate">{reason}</p>
        </div>
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

// ============= TYPES =============
interface IAbsentStaff {
    id: string;
    name: string;
    avatar: string;
    reason: string;
}

interface IStaffAttendance {
    title: string;
    totalStaff: number;
    present: number;
    absent: number;
    onLeave: number;
    absentStaff: IAbsentStaff[];
}
