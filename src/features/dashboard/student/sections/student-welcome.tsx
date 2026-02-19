import { BookOpen, CalendarDays } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function StudentWelcome({
    name,
    avatar,
    className,
    section,
    rollNo,
    classesToday,
}: IStudentWelcome) {
    return (
        <Card>
            <CardContent className="@container flex flex-col @lg:flex-row items-start @lg:items-center gap-4 pt-6">
                <Avatar size="lg">
                    {/* TODO: Replace with actual student avatar */}
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Welcome back, {name}!
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Class {className} — Section {section} · Roll No: {rollNo}
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <BookOpen className="size-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Today</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CalendarDays className="size-4 text-primary" />
                            <span className="text-sm font-semibold tabular-nums">
                                {classesToday} Classes
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= TYPES =============
interface IStudentWelcome {
    name: string;
    avatar: string;
    className: string;
    section: string;
    rollNo: string;
    classesToday: number;
}
