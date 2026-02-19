import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function RecentActivity({
    title,
    activities,
}: IRecentActivity) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ActivityList activities={activities} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ActivityList = ({ activities }: { activities: IActivityItem[] }) => (
    <ScrollArea className="h-95 pr-3">
        <div className="space-y-4">
            {activities.map((activity) => (
                <ActivityRow key={activity.id} {...activity} />
            ))}
        </div>
    </ScrollArea>
);

const ActivityRow = ({
    user,
    action,
    target,
    time,
    avatar,
    type,
}: IActivityItem) => (
    <div className="flex items-start gap-3">
        <Avatar size="default">
            <AvatarImage src={avatar} alt={user} />
            <AvatarFallback>{getInitials(user)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0 space-y-1">
            <p className="text-sm leading-snug">
                <span className="font-medium">{user}</span>{' '}
                <span className="text-muted-foreground">{action}</span>{' '}
                <span className="font-medium">{target}</span>
            </p>
            <div className="flex items-center gap-2">
                <ActivityTypeBadge type={type} />
                <span className="text-xs text-muted-foreground">{time}</span>
            </div>
        </div>
    </div>
);

const ActivityTypeBadge = ({ type }: { type: IActivityItem['type'] }) => {
    const variantMap: Record<IActivityItem['type'], 'default' | 'secondary' | 'destructive' | 'outline'> = {
        attendance: 'default',
        grade: 'secondary',
        fee: 'outline',
        notice: 'destructive',
    };

    return (
        <Badge variant={variantMap[type]} className="text-[10px] px-1.5 py-0">
            {type}
        </Badge>
    );
};

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= TYPES =============
interface IActivityItem {
    id: string;
    user: string;
    action: string;
    target: string;
    time: string;
    avatar: string;
    type: 'attendance' | 'grade' | 'fee' | 'notice';
}

interface IRecentActivity {
    title: string;
    activities: IActivityItem[];
}
