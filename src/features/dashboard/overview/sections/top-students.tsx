import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function TopStudents({ title, students }: ITopStudents) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <StudentsTable students={students} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StudentsTable = ({ students }: { students: IStudentItem[] }) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Avg Score</TableHead>
                <TableHead className="text-right">Trend</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {students.map((student) => (
                <StudentRow key={student.rank} {...student} />
            ))}
        </TableBody>
    </Table>
);

const StudentRow = ({
    rank,
    name,
    class: className,
    avgScore,
    avatar,
    trend,
}: IStudentItem) => (
    <TableRow>
        <TableCell>
            <RankBadge rank={rank} />
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">{name}</span>
            </div>
        </TableCell>
        <TableCell className="text-muted-foreground">{className}</TableCell>
        <TableCell className="text-right font-semibold tabular-nums">
            {avgScore}%
        </TableCell>
        <TableCell className="text-right">
            <TrendIndicator trend={trend} />
        </TableCell>
    </TableRow>
);

const RankBadge = ({ rank }: { rank: number }) => {
    const isTop3 = rank <= 3;

    return (
        <span
            className={`inline-flex items-center justify-center size-6 rounded-full text-xs font-bold tabular-nums ${isTop3
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
        >
            {rank}
        </span>
    );
};

const TrendIndicator = ({ trend }: { trend: IStudentItem['trend'] }) => {
    const config = trendConfig[trend];

    return (
        <Badge variant="outline" className={`gap-0.5 text-xs px-1.5 py-0 ${config.color}`}>
            <config.icon className="size-3" />
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

const trendConfig = {
    up: {
        icon: TrendingUp,
        color: 'text-emerald-600 border-emerald-200 dark:border-emerald-800',
    },
    down: {
        icon: TrendingDown,
        color: 'text-red-600 border-red-200 dark:border-red-800',
    },
    stable: {
        icon: Minus,
        color: 'text-muted-foreground',
    },
} as const;

// ============= TYPES =============
interface IStudentItem {
    rank: number;
    name: string;
    class: string;
    avgScore: number;
    avatar: string;
    trend: 'up' | 'down' | 'stable';
}

interface ITopStudents {
    title: string;
    students: IStudentItem[];
}
