'use client';

import {
    Edit,
    Eye,
    MoreHorizontal,
    Trash2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
export default function ClassTable({
    title,
    description,
    classes,
    onView,
    onEdit,
    onDelete,
}: IClassTable) {
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
                    <ClassDataTable
                        classes={classes}
                        onView={onView}
                        onEdit={onEdit}
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
const ClassDataTable = ({
    classes,
    onView,
    onEdit,
    onDelete,
}: {
    classes: IClassRow[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead className="text-center">Students</TableHead>
                    <TableHead>Class Teacher</TableHead>
                    <TableHead>Room No</TableHead>
                    <TableHead className="text-center">Capacity</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {classes.map((cls) => (
                    <ClassRow
                        key={cls.id}
                        row={cls}
                        onView={onView}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const ClassRow = ({
    row,
    onView,
    onEdit,
    onDelete,
}: {
    row: IClassRow;
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell className="font-medium">{row.className}</TableCell>
        <TableCell>
            <Badge variant="outline" className="text-xs">
                {row.section}
            </Badge>
        </TableCell>
        <TableCell className="text-center tabular-nums">
            {row.students}
        </TableCell>
        <TableCell className="text-sm">{row.classTeacher}</TableCell>
        <TableCell className="text-sm text-muted-foreground">
            {row.roomNo}
        </TableCell>
        <TableCell className="text-center tabular-nums">
            {row.capacity}
        </TableCell>
        <TableCell className="text-center">
            <Badge
                variant={row.status === 'active' ? 'default' : 'secondary'}
                className="text-xs"
            >
                {row.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
        </TableCell>
        <TableCell>
            <ClassActionMenu
                classId={row.id}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </TableCell>
    </TableRow>
);

const ClassActionMenu = ({
    classId,
    onView,
    onEdit,
    onDelete,
}: {
    classId: string;
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onView?.(classId)}>
                <Eye className="size-4 mr-2" />
                View Details
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit?.(classId)}>
                <Edit className="size-4 mr-2" />
                Edit Class
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => onDelete?.(classId)}
                className="text-destructive focus:text-destructive"
            >
                <Trash2 className="size-4 mr-2" />
                Delete Class
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No class sections found. Add a class to get started.
        </p>
    </div>
);

// TODO: Add sorting by column headers
// TODO: Add capacity utilization progress bar

// ============= TYPES =============
interface IClassRow {
    id: string;
    className: string;
    section: string;
    students: number;
    classTeacher: string;
    roomNo: string;
    capacity: number;
    status: 'active' | 'inactive';
}

interface IClassTable {
    title: string;
    description?: string;
    classes: IClassRow[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}
