'use client';

import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function MyStudents({
    title,
    students,
    classes,
    selectedClass,
    searchQuery,
    onClassChange,
    onSearchChange,
}: IMyStudents) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-3">
                    <CardTitle>{title}</CardTitle>
                    <StudentFilters
                        classes={classes}
                        selectedClass={selectedClass}
                        searchQuery={searchQuery}
                        onClassChange={onClassChange}
                        onSearchChange={onSearchChange}
                    />
                </div>
            </CardHeader>
            <CardContent>
                <StudentsTable students={students} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StudentFilters = ({
    classes,
    selectedClass,
    searchQuery,
    onClassChange,
    onSearchChange,
}: IStudentFilters) => (
    <div className="@container flex flex-col @sm:flex-row gap-2">
        {/* TODO: Wire up class filter with API */}
        <Select value={selectedClass} onValueChange={onClassChange}>
            <SelectTrigger className="@sm:w-40">
                <SelectValue placeholder="All Classes" />
            </SelectTrigger>
            <SelectContent>
                {classes.map((cls) => (
                    <SelectItem key={cls} value={cls}>
                        {cls}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
        <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-8"
            />
        </div>
    </div>
);

const StudentsTable = ({ students }: { students: IStudentItem[] }) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Student</TableHead>
                <TableHead className="text-center">Roll No</TableHead>
                <TableHead className="text-right">Attendance</TableHead>
                <TableHead className="text-right">Last Grade</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {students.map((student) => (
                <StudentRow key={student.id} {...student} />
            ))}
        </TableBody>
    </Table>
);

const StudentRow = ({
    name,
    avatar,
    rollNo,
    attendancePercent,
    lastGrade,
}: IStudentItem) => (
    <TableRow>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">{name}</span>
            </div>
        </TableCell>
        <TableCell className="text-center tabular-nums">{rollNo}</TableCell>
        <TableCell className="text-right tabular-nums">{attendancePercent}%</TableCell>
        <TableCell className="text-right font-medium">{lastGrade}</TableCell>
    </TableRow>
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
interface IStudentItem {
    id: string;
    name: string;
    avatar: string;
    rollNo: string;
    attendancePercent: number;
    lastGrade: string;
}

interface IStudentFilters {
    classes: string[];
    selectedClass?: string;
    searchQuery?: string;
    onClassChange?: (value: string) => void;
    onSearchChange?: (value: string) => void;
}

interface IMyStudents {
    title: string;
    students: IStudentItem[];
    classes: string[];
    selectedClass?: string;
    searchQuery?: string;
    /** TODO: Implement filter callbacks */
    onClassChange?: (value: string) => void;
    onSearchChange?: (value: string) => void;
}
