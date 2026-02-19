import { Clock, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function MyClasses({ classes }: IMyClasses) {
    return (
        <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 gap-4">
            {classes.map((cls) => (
                <ClassCard key={cls.id} {...cls} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const ClassCard = ({
    name,
    section,
    subject,
    studentCount,
    nextClassTime,
}: IClassItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
                {name} — {section}
            </CardTitle>
            <Badge variant="secondary">{subject}</Badge>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="size-3.5" />
                <span>{studentCount} Students</span>
            </div>
            {nextClassTime && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="size-3.5" />
                    <span>Next: {nextClassTime}</span>
                </div>
            )}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IClassItem {
    id: string;
    name: string;
    section: string;
    subject: string;
    studentCount: number;
    nextClassTime?: string;
}

interface IMyClasses {
    classes: IClassItem[];
}
