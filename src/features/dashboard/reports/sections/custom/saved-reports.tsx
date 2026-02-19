'use client';

import {
    MoreHorizontal,
    Play,
    Pencil,
    Clock,
    Trash2,
    FileText,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function SavedReports({
    title,
    description,
    reports,
    onRun,
    onEdit,
    onSchedule,
    onDelete,
}: ISavedReports) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {reports.length > 0 ? (
                    <ReportsTable
                        reports={reports}
                        onRun={onRun}
                        onEdit={onEdit}
                        onSchedule={onSchedule}
                        onDelete={onDelete}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReportsTable = ({
    reports,
    onRun,
    onEdit,
    onSchedule,
    onDelete,
}: Omit<ISavedReports, 'title' | 'description'>) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden @xl:table-cell">
                        Created
                    </TableHead>
                    <TableHead className="hidden @2xl:table-cell">
                        Last Run
                    </TableHead>
                    <TableHead className="text-center hidden @lg:table-cell">
                        Columns
                    </TableHead>
                    <TableHead className="hidden @xl:table-cell">
                        Schedule
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {reports.map((report) => (
                    <ReportRow
                        key={report.id}
                        report={report}
                        onRun={onRun}
                        onEdit={onEdit}
                        onSchedule={onSchedule}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const ReportRow = ({
    report,
    onRun,
    onEdit,
    onSchedule,
    onDelete,
}: {
    report: ISavedReport;
    onRun?: (id: string) => void;
    onEdit?: (id: string) => void;
    onSchedule?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <div className="flex items-center gap-2">
                <FileText className="size-4 text-muted-foreground shrink-0" />
                <span className="font-medium text-sm">{report.name}</span>
            </div>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground hidden @xl:table-cell">
            {report.createdAt}
        </TableCell>
        <TableCell className="text-sm text-muted-foreground hidden @2xl:table-cell">
            {report.lastRunAt || '—'}
        </TableCell>
        <TableCell className="text-center tabular-nums hidden @lg:table-cell">
            {report.columnsCount}
        </TableCell>
        <TableCell className="hidden @xl:table-cell">
            {report.schedule ? (
                <Badge variant="default" className="text-xs">
                    <Clock className="size-3 mr-1" />
                    {report.schedule}
                </Badge>
            ) : (
                <span className="text-sm text-muted-foreground">—</span>
            )}
        </TableCell>
        <TableCell className="text-right">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontal className="size-4" />
                        <span className="sr-only">Actions</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {onRun && (
                        <DropdownMenuItem onClick={() => onRun(report.id)}>
                            <Play className="size-4 mr-2" />
                            Run
                        </DropdownMenuItem>
                    )}
                    {onEdit && (
                        <DropdownMenuItem onClick={() => onEdit(report.id)}>
                            <Pencil className="size-4 mr-2" />
                            Edit
                        </DropdownMenuItem>
                    )}
                    {onSchedule && (
                        <DropdownMenuItem
                            onClick={() => onSchedule(report.id)}
                        >
                            <Clock className="size-4 mr-2" />
                            Schedule
                        </DropdownMenuItem>
                    )}
                    {onDelete && (
                        <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="text-destructive focus:text-destructive"
                                onClick={() => onDelete(report.id)}
                            >
                                <Trash2 className="size-4 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        </>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
    </TableRow>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <FileText className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">No saved reports yet</p>
        <p className="text-xs text-muted-foreground mt-1">
            Build a custom report to save it here
        </p>
    </div>
);

// ============= TYPES =============
interface ISavedReport {
    id: string;
    name: string;
    createdAt: string;
    lastRunAt?: string;
    columnsCount: number;
    schedule?: string;
}

interface ISavedReports {
    title: string;
    description?: string;
    reports: ISavedReport[];
    onRun?: (id: string) => void;
    onEdit?: (id: string) => void;
    onSchedule?: (id: string) => void;
    onDelete?: (id: string) => void;
}
