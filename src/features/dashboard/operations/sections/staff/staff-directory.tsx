'use client';

"use client"
import { useState } from 'react';
import { cva } from 'class-variance-authority';
import { Edit, Eye, MoreHorizontal, Search, Trash2, } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function StaffDirectory({ title, description, staff, onView, onEdit, onDelete, onSearch, }: IStaffDirectory) {
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
                {staff.length > 0 ? (
                    <StaffDataTable
                        staff={staff}
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
                placeholder="Search staff..."
                value={query}
                onChange={(e) => handleChange(e.target.value)}
                className="pl-9"
            />
        </div>
    );
};

const StaffDataTable = ({
    staff,
    onView,
    onEdit,
    onDelete,
}: {
    staff: IStaffMember[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Designation</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {staff.map((member) => (
                    <StaffRow
                        key={member.id}
                        member={member}
                        onView={onView}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const StaffRow = ({
    member,
    onView,
    onEdit,
    onDelete,
}: {
    member: IStaffMember;
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <div className="flex items-center gap-2.5">
                <Avatar className="size-8">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-xs">
                        {getInitials(member.name)}
                    </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm whitespace-nowrap">
                    {member.name}
                </span>
            </div>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground tabular-nums">
            {member.employeeId}
        </TableCell>
        <TableCell>
            <Badge
                className={departmentBadge({ department: member.department })}
            >
                {member.department}
            </Badge>
        </TableCell>
        <TableCell className="text-sm">{member.designation}</TableCell>
        <TableCell className="text-sm text-muted-foreground whitespace-nowrap tabular-nums">
            {member.phone}
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">
            {member.email}
        </TableCell>
        <TableCell className="text-center">
            <Badge
                variant={member.status === 'active' ? 'default' : 'secondary'}
                className="text-xs"
            >
                {member.status === 'active' ? 'Active' : 'Inactive'}
            </Badge>
        </TableCell>
        <TableCell>
            <StaffActionMenu
                staffId={member.id}
                onView={onView}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </TableCell>
    </TableRow>
);

const StaffActionMenu = ({
    staffId,
    onView,
    onEdit,
    onDelete,
}: {
    staffId: string;
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
            <DropdownMenuItem onClick={() => onView?.(staffId)}>
                <Eye className="size-4 mr-2" />
                View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onEdit?.(staffId)}>
                <Edit className="size-4 mr-2" />
                Edit Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => onDelete?.(staffId)}
                className="text-destructive focus:text-destructive"
            >
                <Trash2 className="size-4 mr-2" />
                Remove Staff
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No staff members found. Try adjusting your search or add new staff.
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
// TODO: Add bulk actions (export, email, deactivate)
// TODO: Add department filter dropdown

// ============= VARIANTS =============
const departmentBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            department: {
                teaching:
                    'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                admin: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                support:
                    'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                management:
                    'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
            },
        },
        defaultVariants: {
            department: 'teaching',
        },
    }
);

// ============= TYPES =============
interface IStaffMember {
    id: string;
    name: string;
    avatar?: string;
    employeeId: string;
    department: 'teaching' | 'admin' | 'support' | 'management';
    designation: string;
    phone: string;
    email: string;
    status: 'active' | 'inactive';
}

interface IStaffDirectory {
    title: string;
    description?: string;
    staff: IStaffMember[];
    onView?: (id: string) => void;
    onEdit?: (id: string) => void;
    onDelete?: (id: string) => void;
    onSearch?: (query: string) => void;
}
