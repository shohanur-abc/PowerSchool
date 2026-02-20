import { getIcon } from '@/lib/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function WelcomeBanner({
    name,
    avatar,
    date,
    classesToday,
    pendingTasks,
    upcomingEvents,
}: IWelcomeBanner) {
    return (
        <Card>
            <CardContent className="@container flex flex-col @lg:flex-row items-start @lg:items-center gap-4 pt-6">
                <Avatar size="lg">
                    {/* TODO: Replace with actual avatar URL */}
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Good {getGreeting()}, {name}!
                    </h2>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <QuickStat icon="BookOpen" label="Classes Today" value={classesToday} />
                    <QuickStat icon="ClipboardList" label="Pending Tasks" value={pendingTasks} />
                    <QuickStat icon="CalendarDays" label="Events" value={upcomingEvents} />
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const QuickStat = ({ icon: iconName, label, value }: IQuickStat) => {
    const Icon = getIcon(iconName);

    return (
        <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2">
            <Icon className="size-4 text-muted-foreground shrink-0" />
            <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold tabular-nums">{value}</p>
            </div>
        </div>
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

const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
};

// ============= TYPES =============
interface IQuickStat {
    icon: string;
    label: string;
    value: number;
}

interface IWelcomeBanner {
    name: string;
    avatar: string;
    date: string;
    classesToday: number;
    pendingTasks: number;
    upcomingEvents: number;
}
