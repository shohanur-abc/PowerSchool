'use client';

import {
    MoreHorizontal,
    Pencil,
    Copy,
    Ban,
    Trash2,
    Search,
    Shield,
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
export default function RoleTable({
    title,
    description,
    roles,
    searchValue,
    onSearchChange,
    onEdit,
    onDuplicate,
    onDisable,
    onDelete,
}: IRoleTable) {
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
                {roles.length > 0 ? (
                    <RolesTable
                        roles={roles}
                        onEdit={onEdit}
                        onDuplicate={onDuplicate}
                        onDisable={onDisable}
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
            placeholder="Search roles..."
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const RolesTable = ({
    roles,
    onEdit,
    onDuplicate,
    onDisable,
    onDelete,
}: {
    roles: IRoleRow[];
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onDisable?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Role Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center">Users</TableHead>
                    <TableHead className="text-center">Permissions</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {roles.map((role) => (
                    <RoleRow
                        key={role.id}
                        {...role}
                        onEdit={onEdit}
                        onDuplicate={onDuplicate}
                        onDisable={onDisable}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const RoleRow = ({
    id,
    name,
    description,
    usersCount,
    permissionsCount,
    status,
    created,
    onEdit,
    onDuplicate,
    onDisable,
    onDelete,
}: IRoleRow & {
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onDisable?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell className="text-muted-foreground max-w-48 truncate">
            {description}
        </TableCell>
        <TableCell className="text-center tabular-nums">{usersCount}</TableCell>
        <TableCell className="text-center tabular-nums">
            {permissionsCount}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={statusVariants({ status })}>{status}</Badge>
        </TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {created}
        </TableCell>
        <TableCell className="text-right">
            <ActionsMenu
                id={id}
                onEdit={onEdit}
                onDuplicate={onDuplicate}
                onDisable={onDisable}
                onDelete={onDelete}
            />
        </TableCell>
    </TableRow>
);

const ActionsMenu = ({
    id,
    onEdit,
    onDuplicate,
    onDisable,
    onDelete,
}: {
    id: string;
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onDisable?: (id: string) => void;
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
            {onEdit && (
                <DropdownMenuItem onClick={() => onEdit(id)}>
                    <Pencil className="size-4 mr-2" />
                    Edit
                </DropdownMenuItem>
            )}
            {onDuplicate && (
                <DropdownMenuItem onClick={() => onDuplicate(id)}>
                    <Copy className="size-4 mr-2" />
                    Duplicate
                </DropdownMenuItem>
            )}
            {onDisable && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onDisable(id)}>
                        <Ban className="size-4 mr-2" />
                        Disable
                    </DropdownMenuItem>
                </>
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
        <Shield className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No roles found. Try adjusting your search or create a new role.
        </p>
    </div>
);

// ============= VARIANTS =============
const statusVariants = cva('text-[10px] px-1.5 py-0', {
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
interface IRoleRow {
    id: string;
    name: string;
    description: string;
    usersCount: number;
    permissionsCount: number;
    status: 'active' | 'inactive';
    created: string;
}

interface IRoleTable {
    title: string;
    description?: string;
    roles: IRoleRow[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onDisable?: (id: string) => void;
    onDelete?: (id: string) => void;
}
