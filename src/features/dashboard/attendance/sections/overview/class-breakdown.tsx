import { Progress } from '@/components/ui/progress';
import {
    Card,
    CardContent,
    CardDescription,
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
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function ClassBreakdown({
    title,
    description,
    classes,
}: IClassBreakdown) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <ClassTable classes={classes} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ClassTable = ({ classes }: { classes: IClassRow[] }) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Class</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="text-center">Present</TableHead>
                <TableHead className="text-center">Absent</TableHead>
                <TableHead className="text-center">Late</TableHead>
                <TableHead className="text-right min-w-36">
                    Attendance %
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {classes.map((cls) => (
                <ClassRow key={cls.className} {...cls} />
            ))}
        </TableBody>
    </Table>
);

const ClassRow = ({
    className,
    total,
    present,
    absent,
    late,
    percentage,
}: IClassRow) => (
    <TableRow>
        <TableCell className="font-medium">{className}</TableCell>
        <TableCell className="text-center tabular-nums">{total}</TableCell>
        <TableCell className="text-center tabular-nums">{present}</TableCell>
        <TableCell className="text-center tabular-nums">{absent}</TableCell>
        <TableCell className="text-center tabular-nums">{late}</TableCell>
        <TableCell className="text-right">
            <PercentageCell percentage={percentage} />
        </TableCell>
    </TableRow>
);

const PercentageCell = ({ percentage }: { percentage: number }) => (
    <div className="flex items-center justify-end gap-2">
        <Progress value={percentage} className="h-2 w-16" />
        <PercentageBadge percentage={percentage} />
    </div>
);

const PercentageBadge = ({ percentage }: { percentage: number }) => (
    <Badge
        variant={getPercentageVariant(percentage)}
        className="min-w-12 justify-center text-xs tabular-nums"
    >
        {percentage}%
    </Badge>
);

// ============= HELPERS =============
const getPercentageVariant = (
    percentage: number
): 'default' | 'secondary' | 'destructive' | 'outline' => {
    if (percentage >= 90) return 'default';
    if (percentage >= 75) return 'secondary';
    if (percentage >= 60) return 'outline';
    return 'destructive';
};

// ============= TYPES =============
interface IClassRow {
    className: string;
    total: number;
    present: number;
    absent: number;
    late: number;
    percentage: number;
}

interface IClassBreakdown {
    title: string;
    description?: string;
    classes: IClassRow[];
}
