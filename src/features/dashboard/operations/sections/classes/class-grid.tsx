import { Users, Layers } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function ClassGrid({ title, description, classes }: IClassGrid) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {classes.length > 0 ? (
                    <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 gap-4">
                        {classes.map((cls) => (
                            <ClassCard key={cls.id} {...cls} />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ClassCard = ({
    name,
    sectionsCount,
    totalStudents,
    classTeacher,
}: IClassItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardContent className="pt-0 space-y-3">
            <div className="flex items-center justify-between">
                <p className="text-base font-semibold">{name}</p>
                <Badge variant="secondary" className="text-xs gap-1">
                    <Layers className="size-3" />
                    {sectionsCount} {sectionsCount === 1 ? 'section' : 'sections'}
                </Badge>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="size-3.5" />
                <span className="tabular-nums">{totalStudents}</span>
                <span>students</span>
            </div>

            <TeacherInfo {...classTeacher} />
        </CardContent>
    </Card>
);

const TeacherInfo = ({ name, avatar }: IClassTeacher) => (
    <div className="flex items-center gap-2 pt-2 border-t">
        <Avatar className="size-7">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-xs">
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Class Teacher</p>
            <p className="text-sm font-medium truncate">{name}</p>
        </div>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No classes configured. Add a class to get started.
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

// TODO: Add click handler to navigate to class detail page
// TODO: Add section breakdown tooltip on hover

// ============= TYPES =============
interface IClassTeacher {
    name: string;
    avatar?: string;
}

interface IClassItem {
    id: string;
    name: string;
    sectionsCount: number;
    totalStudents: number;
    classTeacher: IClassTeacher;
}

interface IClassGrid {
    title: string;
    description?: string;
    classes: IClassItem[];
}
