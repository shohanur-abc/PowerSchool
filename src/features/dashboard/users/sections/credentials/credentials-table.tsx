'use client';

import {
    MoreHorizontal,
    KeyRound,
    ShieldCheck,
    Lock,
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
export default function CredentialsTable({
    title,
    description,
    credentials,
    searchValue,
    onSearchChange,
    onResetPassword,
    onEnableMfa,
    onLock,
}: ICredentialsTable) {
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
                {credentials.length > 0 ? (
                    <CredentialsDataTable
                        credentials={credentials}
                        onResetPassword={onResetPassword}
                        onEnableMfa={onEnableMfa}
                        onLock={onLock}
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
            placeholder="Search credentials..."
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const CredentialsDataTable = ({
    credentials,
    onResetPassword,
    onEnableMfa,
    onLock,
}: {
    credentials: ICredentialRow[];
    onResetPassword?: (id: string) => void;
    onEnableMfa?: (id: string) => void;
    onLock?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Last Password Change</TableHead>
                    <TableHead className="text-center">MFA Status</TableHead>
                    <TableHead className="text-center">Login Attempts</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {credentials.map((cred) => (
                    <CredentialRow
                        key={cred.id}
                        {...cred}
                        onResetPassword={onResetPassword}
                        onEnableMfa={onEnableMfa}
                        onLock={onLock}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const CredentialRow = ({
    id,
    name,
    avatar,
    username,
    lastPasswordChange,
    mfaStatus,
    loginAttempts,
    onResetPassword,
    onEnableMfa,
    onLock,
}: ICredentialRow & {
    onResetPassword?: (id: string) => void;
    onEnableMfa?: (id: string) => void;
    onLock?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <UserInfo name={name} avatar={avatar} />
        </TableCell>
        <TableCell className="text-muted-foreground font-mono text-sm">
            {username}
        </TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {lastPasswordChange}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={mfaStatusVariants({ status: mfaStatus })}>
                {mfaStatus}
            </Badge>
        </TableCell>
        <TableCell className="text-center tabular-nums">
            {loginAttempts}
        </TableCell>
        <TableCell className="text-right">
            <ActionsMenu
                id={id}
                onResetPassword={onResetPassword}
                onEnableMfa={onEnableMfa}
                onLock={onLock}
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
    onResetPassword,
    onEnableMfa,
    onLock,
}: {
    id: string;
    onResetPassword?: (id: string) => void;
    onEnableMfa?: (id: string) => void;
    onLock?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {onResetPassword && (
                <DropdownMenuItem onClick={() => onResetPassword(id)}>
                    <KeyRound className="size-4 mr-2" />
                    Reset Password
                </DropdownMenuItem>
            )}
            {onEnableMfa && (
                <DropdownMenuItem onClick={() => onEnableMfa(id)}>
                    <ShieldCheck className="size-4 mr-2" />
                    Enable MFA
                </DropdownMenuItem>
            )}
            {onLock && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => onLock(id)}
                        className="text-destructive focus:text-destructive"
                    >
                        <Lock className="size-4 mr-2" />
                        Lock Account
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
            No credential records found.
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
const mfaStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            enabled: 'bg-emerald-600 text-white hover:bg-emerald-700',
            disabled: 'bg-slate-400 text-white hover:bg-slate-500',
            pending: 'bg-yellow-500 text-white hover:bg-yellow-600',
        },
    },
    defaultVariants: {
        status: 'disabled',
    },
});

// ============= TYPES =============
interface ICredentialRow {
    id: string;
    name: string;
    avatar?: string;
    username: string;
    lastPasswordChange: string;
    mfaStatus: 'enabled' | 'disabled' | 'pending';
    loginAttempts: number;
}

interface ICredentialsTable {
    title: string;
    description?: string;
    credentials: ICredentialRow[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onResetPassword?: (id: string) => void;
    onEnableMfa?: (id: string) => void;
    onLock?: (id: string) => void;
}
