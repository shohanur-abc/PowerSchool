'use client';

"use client"
import { useState } from 'react';
import { ArrowRightLeft, Edit, Eye, MoreHorizontal, Search, } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function StudentDirectory({
    title,
    description,
    students,
    onView,
    onEdit,
    onTransfer,
    onSearch,
}: IStudentDirectory) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-3">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <SearchInput onSearch={onSearch} />
                </div>
            </CardHeader>
            <CardContent>
                {students.length > 0 ? (
                    <StudentDataTable
                        students={students}
                        onView={onView}
                        onEdit={onEdit}
                        onTransfer={onTransfer}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SearchInput = ({
    onSearch,
}: {
    onSearch?: (query: string) => void;
}) => {
    const [query, setQuery] = useState('');

    const handleChange = (value: string) => {
        setQuery(value);
        onSearch?.(value);
    };

    return (
        <div className="relative w-full @xl:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
                placeholder="Search students..."
                value={query}
                onChange={(e) => handleChange(e.target.value)}
                className="pl-9"
            />
        </div>
    );
};

const StudentDataTable = ({
    students,
    onView,
    onEdit,
    onTransfer,
}: {
    students: IStudentRow[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onTransfer?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Roll No</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Parent Name</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {students.map((student) => (
                    <StudentRow
                        key={student.id}
                        student={student}
                        onView={onView}
                        onEdit={onEdit}
                        onTransfer={onTransfer}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const StudentRow = ({
    student,
    onView,
    onEdit,
    onTransfer,
}: {
    student: IStudentRow;
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onTransfer?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar className="size-8">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="text-xs">
                        {getInitials(student.name)}
                    </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm whitespace-nowrap">
                    {student.name}
                </span>
            </div>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground tabular-nums">
            {student.rollNo}
        </TableCell>
        <TableCell>
            <Badge variant="outline" className="text-xs">
                {student.className}
            </Badge>
        </TableCell>
        <TableCell className="text-sm">{student.section}</TableCell>
        <TableCell className="text-sm">{student.parentName}</TableCell>
        <TableCell className="text-sm text-muted-foreground whitespace-nowrap tabular-nums">
            {student.phone}
        </TableCell>
        <TableCell className="text-center">
            <Badge
                variant={student.status === 'active' ? 'default' : 'secondary'}
                className="text-xs"
            >
                {student.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
        </TableCell>
        <TableCell>
            <StudentActionMenu
                studentId={student.id}
                onView={onView}
                onEdit={onEdit}
                onTransfer={onTransfer}
            />
        </TableCell>
    </TableRow>
);

const StudentActionMenu = ({
    studentId,
    onView,
    onEdit,
    onTransfer,
}: {
    studentId: string;
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onTransfer?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onView?.(studentId)}>
                <Eye className="size-4 mr-2" />
                View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit?.(studentId)}>
                <Edit className="size-4 mr-2" />
                Edit Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onTransfer?.(studentId)}>
                <ArrowRightLeft className="size-4 mr-2" />
                Transfer
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No students found. Try adjusting your search or add new students.
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

// TODO: Add column sorting and pagination
// TODO: Add class/section filter dropdowns
// TODO: Add bulk actions (promote, export, email)

// ============= TYPES =============
interface IStudentRow {
    id: string;
    name: string;
    avatar?: string;
    rollNo: string;
    className: string;
    section: string;
    parentName: string;
    phone: string;
    status: 'active' | 'inactive';
}

interface IStudentDirectory {
    title: string;
    description?: string;
    students: IStudentRow[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onTransfer?: (id: string) => void;
    onSearch?: (query: string) => void;
}
