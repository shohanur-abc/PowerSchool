import { AlertTriangle } from 'lucide-react';
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
export default function AttendanceAlerts({
    title,
    description,
    alerts,
}: IAttendanceAlerts) {
    return (
        <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
                <AlertTriangle className="size-5 text-destructive shrink-0" />
                <div className="space-y-1">
                    <CardTitle>{title}</CardTitle>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {alerts.length > 0 ? (
                    <AlertsList alerts={alerts} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const AlertsList = ({ alerts }: { alerts: IAlertItem[] }) => (
    <ScrollArea className="h-80 pr-3">
        <div className="space-y-1">
            {alerts.map((alert, i) => (
                <div key={alert.id}>
                    <AlertRow {...alert} />
                    {i < alerts.length - 1 && <Separator className="my-2" />}
                </div>
            ))}
        </div>
    </ScrollArea>
);

const AlertRow = ({
    studentName,
    studentAvatar,
    className: cls,
    section,
    severity,
    message,
    attendanceRate,
    consecutiveAbsences,
}: IAlertItem) => (
    <div className="flex items-start gap-3 py-1">
        <Avatar>
            <AvatarImage src={studentAvatar} alt={studentName} />
            <AvatarFallback>{getInitials(studentName)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1.5">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{studentName}</p>
                <SeverityBadge severity={severity} />
            </div>
            <p className="text-xs text-muted-foreground">{message}</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                    {cls}-{section}
                </span>
                {attendanceRate !== undefined && (
                    <span className="tabular-nums">
                        Rate: {attendanceRate}%
                    </span>
                )}
                {consecutiveAbsences !== undefined && (
                    <span className="tabular-nums">
                        {consecutiveAbsences} consecutive absences
                    </span>
                )}
            </div>
        </div>
    </div>
);

const SeverityBadge = ({ severity }: { severity: IAlertItem['severity'] }) => (
    <Badge
        variant={severityVariantMap[severity]}
        className="text-[10px] px-1.5 py-0"
    >
        {severity}
    </Badge>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <AlertTriangle className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No attendance alerts at this time
        </p>
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

const severityVariantMap: Record<
    IAlertItem['severity'],
    'default' | 'destructive' | 'secondary' | 'outline'
> = {
    critical: 'destructive',
    warning: 'secondary',
    info: 'outline',
};

// ============= TYPES =============
interface IAlertItem {
    id: string;
    studentName: string;
    studentAvatar: string;
    className: string;
    section: string;
    severity: 'critical' | 'warning' | 'info';
    message: string;
    attendanceRate?: number;
    consecutiveAbsences?: number;
}

interface IAttendanceAlerts {
    title: string;
    description?: string;
    alerts: IAlertItem[];
}
