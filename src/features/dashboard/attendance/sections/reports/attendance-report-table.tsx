'use client';

import { ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function AttendanceReportTable({
    title,
    description,
    rows,
    onSort,
}: IAttendanceReportTable) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {rows.length > 0 ? (
                    <ReportTable rows={rows} onSort={onSort} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReportTable = ({
    rows,
    onSort,
}: {
    rows: IReportRow[];
    onSort?: (column: TSortableColumn) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <SortableHead
                        label="Student"
                        column="studentName"
                        onSort={onSort}
                    />
                    <SortableHead
                        label="Roll No"
                        column="rollNo"
                        onSort={onSort}
                        className="text-center"
                    />
                    <TableHead className="text-center">Class</TableHead>
                    <SortableHead
                        label="Present"
                        column="daysPresent"
                        onSort={onSort}
                        className="text-center"
                    />
                    <SortableHead
                        label="Absent"
                        column="daysAbsent"
                        onSort={onSort}
                        className="text-center"
                    />
                    <SortableHead
                        label="Late"
                        column="daysLate"
                        onSort={onSort}
                        className="text-center"
                    />
                    <TableHead className="text-center">Total</TableHead>
                    <SortableHead
                        label="Attendance %"
                        column="percentage"
                        onSort={onSort}
                        className="text-right min-w-36"
                    />
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row) => (
                    <ReportRow key={row.studentId} {...row} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const SortableHead = ({
    label,
    column,
    onSort,
    className,
}: {
    label: string;
    column: TSortableColumn;
    onSort?: (column: TSortableColumn) => void;
    className?: string;
}) => (
    <TableHead className={className}>
        {onSort ? (
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onSort(column)}
                className="-ml-3 h-8"
            >
                {label}
                <ArrowUpDown className="size-3.5 ml-1" />
            </Button>
        ) : (
            label
        )}
    </TableHead>
);

const ReportRow = ({
    studentName,
    rollNo,
    className: cls,
    section,
    daysPresent,
    daysAbsent,
    daysLate,
    totalDays,
    percentage,
}: IReportRow) => (
    <TableRow>
        <TableCell className="font-medium">{studentName}</TableCell>
        <TableCell className="text-center tabular-nums">{rollNo}</TableCell>
        <TableCell className="text-center text-muted-foreground">
            {cls}-{section}
        </TableCell>
        <TableCell className="text-center tabular-nums text-emerald-600">
            {daysPresent}
        </TableCell>
        <TableCell className="text-center tabular-nums text-red-600">
            {daysAbsent}
        </TableCell>
        <TableCell className="text-center tabular-nums text-amber-600">
            {daysLate}
        </TableCell>
        <TableCell className="text-center tabular-nums">{totalDays}</TableCell>
        <TableCell className="text-right">
            <PercentageCell percentage={percentage} />
        </TableCell>
    </TableRow>
);

const PercentageCell = ({ percentage }: { percentage: number }) => (
    <div className="flex items-center justify-end gap-2">
        <Progress value={percentage} className="h-2 w-16" />
        <Badge
            variant={getPercentageVariant(percentage)}
            className="min-w-12 justify-center text-xs tabular-nums"
        >
            {percentage}%
        </Badge>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No report data available. Use filters to generate a report.
        </p>
    </div>
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
type TSortableColumn =
    | 'studentName'
    | 'rollNo'
    | 'daysPresent'
    | 'daysAbsent'
    | 'daysLate'
    | 'percentage';

interface IReportRow {
    studentId: string;
    studentName: string;
    rollNo: string;
    className: string;
    section: string;
    daysPresent: number;
    daysAbsent: number;
    daysLate: number;
    totalDays: number;
    percentage: number;
}

interface IAttendanceReportTable {
    title: string;
    description?: string;
    rows: IReportRow[];
    onSort?: (column: TSortableColumn) => void;
}
