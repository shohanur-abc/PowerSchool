import { GraduationCap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function ChildrenOverview({ children }: IChildrenOverview) {
    return (
        <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 gap-4">
            {children.map((child) => (
                <ChildCard key={child.id} {...child} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const ChildCard = ({
    name,
    avatar,
    className,
    section,
    attendancePercent,
    lastExamGrade,
}: IChildItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center gap-3 space-y-0 pb-2">
            <Avatar size="default">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
                <CardTitle className="text-sm font-medium truncate">{name}</CardTitle>
                <p className="text-xs text-muted-foreground">
                    Class {className} — {section}
                </p>
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                    <GraduationCap className="size-3.5" />
                    <span className="tabular-nums">{attendancePercent}% Attendance</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                    Grade: {lastExamGrade}
                </Badge>
            </div>
        </CardContent>
    </Card>
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
interface IChildItem {
    id: string;
    name: string;
    avatar: string;
    className: string;
    section: string;
    attendancePercent: number;
    lastExamGrade: string;
}

interface IChildrenOverview {
    children: IChildItem[];
}
