'use client';

import {
    MoreHorizontal,
    Pencil,
    Eye,
    KeyRound,
    Lock,
    Unlock,
    Trash2,
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
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function UserTable({
    title,
    description,
    users,
    searchValue,
    onSearchChange,
    onViewProfile,
    onEdit,
    onResetPassword,
    onToggleLock,
    onDelete,
}: IUserTable) {
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
                    <SearchField
                        value={searchValue}
                        onChange={onSearchChange}
                    />
                </div>
            </CardHeader>
            <CardContent>
                {users.length > 0 ? (
                    <UsersDataTable
                        users={users}
                        onViewProfile={onViewProfile}
                        onEdit={onEdit}
                        onResetPassword={onResetPassword}
                        onToggleLock={onToggleLock}
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
const SearchField = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <div className="relative w-full @xl:w-64">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
            placeholder="Search users..."
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const UsersDataTable = ({
    users,
    onViewProfile,
    onEdit,
    onResetPassword,
    onToggleLock,
    onDelete,
}: {
    users: IUserRow[];
    onViewProfile?: (id: string) => void;
    onEdit?: (id: string) => void;
    onResetPassword?: (id: string) => void;
    onToggleLock?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                    <UserRow
                        key={user.id}
                        {...user}
                        onViewProfile={onViewProfile}
                        onEdit={onEdit}
                        onResetPassword={onResetPassword}
                        onToggleLock={onToggleLock}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const UserRow = ({
    id,
    name,
    avatar,
    email,
    role,
    lastLogin,
    status,
    created,
    onViewProfile,
    onEdit,
    onResetPassword,
    onToggleLock,
    onDelete,
}: IUserRow & {
    onViewProfile?: (id: string) => void;
    onEdit?: (id: string) => void;
    onResetPassword?: (id: string) => void;
    onToggleLock?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <UserInfo name={name} avatar={avatar} />
        </TableCell>
        <TableCell className="text-muted-foreground">{email}</TableCell>
        <TableCell>
            <Badge variant="secondary" className="text-xs">
                {role}
            </Badge>
        </TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {lastLogin}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={userStatusVariants({ status })}>{status}</Badge>
        </TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {created}
        </TableCell>
        <TableCell className="text-right">
            <ActionsMenu
                id={id}
                status={status}
                onViewProfile={onViewProfile}
                onEdit={onEdit}
                onResetPassword={onResetPassword}
                onToggleLock={onToggleLock}
                onDelete={onDelete}
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
    id,
    status,
    onViewProfile,
    onEdit,
    onResetPassword,
    onToggleLock,
    onDelete,
}: {
    id: string;
    status: IUserRow['status'];
    onViewProfile?: (id: string) => void;
    onEdit?: (id: string) => void;
    onResetPassword?: (id: string) => void;
    onToggleLock?: (id: string) => void;
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
            {onViewProfile && (
                <DropdownMenuItem onClick={() => onViewProfile(id)}>
                    <Eye className="size-4 mr-2" />
                    View Profile
                </DropdownMenuItem>
            )}
            {onEdit && (
                <DropdownMenuItem onClick={() => onEdit(id)}>
                    <Pencil className="size-4 mr-2" />
                    Edit
                </DropdownMenuItem>
            )}
            {onResetPassword && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onResetPassword(id)}>
                        <KeyRound className="size-4 mr-2" />
                        Reset Password
                    </DropdownMenuItem>
                </>
            )}
            {onToggleLock && (
                <DropdownMenuItem onClick={() => onToggleLock(id)}>
                    {status === 'locked' ? (
                        <Unlock className="size-4 mr-2" />
                    ) : (
                        <Lock className="size-4 mr-2" />
                    )}
                    {status === 'locked' ? 'Unlock' : 'Lock'}
                </DropdownMenuItem>
            )}
            {onDelete && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => onDelete(id)}
                        className="text-destructive focus:text-destructive"
                    >
                        <Trash2 className="size-4 mr-2" />
                        Delete
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
            No users found. Try adjusting your search.
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
            locked: 'bg-red-600 text-white hover:bg-red-700',
        },
    },
    defaultVariants: {
        status: 'active',
    },
});

// ============= TYPES =============
interface IUserRow {
    id: string;
    name: string;
    avatar?: string;
    email: string;
    role: string;
    lastLogin: string;
    status: 'active' | 'inactive' | 'locked';
    created: string;
}

interface IUserTable {
    title: string;
    description?: string;
    users: IUserRow[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onViewProfile?: (id: string) => void;
    onEdit?: (id: string) => void;
    onResetPassword?: (id: string) => void;
    onToggleLock?: (id: string) => void;
    onDelete?: (id: string) => void;
}
