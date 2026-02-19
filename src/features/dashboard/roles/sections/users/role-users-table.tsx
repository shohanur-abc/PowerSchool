'use client';

import {
    MoreHorizontal,
    UserMinus,
    ArrowRightLeft,
    Search,
    Users,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function RoleUsersTable({
    title,
    description,
    users,
    roles,
    selectedRole,
    onRoleFilter,
    searchValue,
    onSearchChange,
    onRemove,
    onReassign,
}: IRoleUsersTable) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <div className="flex flex-col @sm:flex-row gap-3">
                        <RoleFilter
                            roles={roles}
                            selected={selectedRole}
                            onChange={onRoleFilter}
                        />
                        <SearchField
                            value={searchValue}
                            onChange={onSearchChange}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {users.length > 0 ? (
                    <UsersTable
                        users={users}
                        onRemove={onRemove}
                        onReassign={onReassign}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const RoleFilter = ({
    roles,
    selected,
    onChange,
}: {
    roles: { label: string; value: string }[];
    selected: string;
    onChange?: (value: string) => void;
}) => (
    <Select value={selected} onValueChange={(v) => onChange?.(v)}>
        <SelectTrigger className="w-full @sm:w-44">
            <SelectValue placeholder="Filter by role" />
        </SelectTrigger>
        <SelectContent>
            {roles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                    {role.label}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
);

const SearchField = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <div className="relative w-full @sm:w-56">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
            placeholder="Search users..."
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const UsersTable = ({
    users,
    onRemove,
    onReassign,
}: {
    users: IRoleUser[];
    onRemove?: (userId: string) => void;
    onReassign?: (userId: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Assigned Date</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <UserRow
                        key={user.id}
                        {...user}
                        onRemove={onRemove}
                        onReassign={onReassign}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const UserRow = ({
    id,
    name,
    email,
    avatar,
    assignedDate,
    status,
    onRemove,
    onReassign,
}: IRoleUser & {
    onRemove?: (userId: string) => void;
    onReassign?: (userId: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <UserInfo name={name} avatar={avatar} />
        </TableCell>
        <TableCell className="text-muted-foreground">{email}</TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {assignedDate}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={userStatusVariants({ status })}>{status}</Badge>
        </TableCell>
        <TableCell className="text-right">
            <ActionsMenu
                userId={id}
                onRemove={onRemove}
                onReassign={onReassign}
            />
        </TableCell>
    </TableRow>
);

const UserInfo = ({ name, avatar }: { name: string; avatar?: string }) => (
    <div className="flex items-center gap-2">
        <Avatar className="size-7">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-xs">
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
        <span className="font-medium">{name}</span>
    </div>
);

const ActionsMenu = ({
    userId,
    onRemove,
    onReassign,
}: {
    userId: string;
    onRemove?: (userId: string) => void;
    onReassign?: (userId: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {onReassign && (
                <DropdownMenuItem onClick={() => onReassign(userId)}>
                    <ArrowRightLeft className="size-4 mr-2" />
                    Reassign
                </DropdownMenuItem>
            )}
            {onRemove && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => onRemove(userId)}
                        className="text-destructive focus:text-destructive"
                    >
                        <UserMinus className="size-4 mr-2" />
                        Remove
                    </DropdownMenuItem>
                </>
            )}
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <Users className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No users found for the selected role.
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

// ============= VARIANTS =============
const userStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            active: 'bg-emerald-600 text-white hover:bg-emerald-700',
            inactive: 'bg-slate-400 text-white hover:bg-slate-500',
        },
    },
    defaultVariants: {
        status: 'active',
    },
});

// ============= TYPES =============
interface IRoleUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    assignedDate: string;
    status: 'active' | 'inactive';
}

interface IRoleUsersTable {
    title: string;
    description?: string;
    users: IRoleUser[];
    roles: { label: string; value: string }[];
    selectedRole: string;
    onRoleFilter?: (role: string) => void;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onRemove?: (userId: string) => void;
    onReassign?: (userId: string) => void;
}
