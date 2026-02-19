'use client';

import { Search, Activity } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
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
export default function ActivityLog({
    title,
    description,
    activities,
    searchValue,
    onSearchChange,
    dateFilter,
    onDateFilterChange,
}: IActivityLog) {
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
                        <DateFilter
                            value={dateFilter}
                            onChange={onDateFilterChange}
                        />
                        <SearchField
                            value={searchValue}
                            onChange={onSearchChange}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {activities.length > 0 ? (
                    <ScrollArea className="h-[500px]">
                        <ActivityTable activities={activities} />
                    </ScrollArea>
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const DateFilter = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <Input
        type="date"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full @sm:w-40"
    />
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
            placeholder="Search activity..."
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const ActivityTable = ({ activities }: { activities: IActivityRow[] }) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {activities.map((activity) => (
                    <ActivityRow key={activity.id} {...activity} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const ActivityRow = ({
    timestamp,
    userName,
    userAvatar,
    action,
    ipAddress,
    device,
    status,
}: IActivityRow) => (
    <TableRow>
        <TableCell className="text-muted-foreground whitespace-nowrap font-mono text-xs">
            {timestamp}
        </TableCell>
        <TableCell>
            <UserInfo name={userName} avatar={userAvatar} />
        </TableCell>
        <TableCell className="font-medium">{action}</TableCell>
        <TableCell className="text-muted-foreground font-mono text-xs">
            {ipAddress}
        </TableCell>
        <TableCell className="text-muted-foreground text-sm">
            {device}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={activityStatusVariants({ status })}>
                {status}
            </Badge>
        </TableCell>
    </TableRow>
);

const UserInfo = ({ name, avatar }: { name: string; avatar?: string }) => (
    <div className="flex items-center gap-2">
        <Avatar className="size-6">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-[10px]">
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{name}</span>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <Activity className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No activity records found. Try adjusting your filters.
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
const activityStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            success: 'bg-emerald-600 text-white hover:bg-emerald-700',
            failed: 'bg-red-600 text-white hover:bg-red-700',
            warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
        },
    },
    defaultVariants: {
        status: 'success',
    },
});

// ============= TYPES =============
interface IActivityRow {
    id: string;
    timestamp: string;
    userName: string;
    userAvatar?: string;
    action: string;
    ipAddress: string;
    device: string;
    status: 'success' | 'failed' | 'warning';
}

interface IActivityLog {
    title: string;
    description?: string;
    activities: IActivityRow[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    dateFilter?: string;
    onDateFilterChange?: (value: string) => void;
}
