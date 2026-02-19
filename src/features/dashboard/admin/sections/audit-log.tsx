'use client';

import { Search, ClipboardList } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
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
export default function AuditLog({
    title,
    description,
    entries,
    searchValue,
    onSearchChange,
    dateFilter,
    onDateFilterChange,
}: IAuditLog) {
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
                {entries.length > 0 ? (
                    <AuditTable entries={entries} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const DateFilter = ({
    value = '',
    onChange = () => { },
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <Input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full @sm:w-40"
    />
);

const SearchField = ({
    value = '',
    onChange = () => { },
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <div className="relative w-full @sm:w-56">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
            placeholder="Search audit log..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="pl-9"
        />
    </div>
);

const AuditTable = ({ entries }: { entries: IAuditEntry[] }) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Admin User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Module</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>IP</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {entries.map((entry) => (
                    <AuditRow key={entry.id} {...entry} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const AuditRow = ({
    timestamp,
    adminUser,
    action,
    actionType,
    module,
    details,
    ip,
}: IAuditEntry) => (
    <TableRow>
        <TableCell className="text-muted-foreground whitespace-nowrap font-mono text-xs">
            {timestamp}
        </TableCell>
        <TableCell className="font-medium">{adminUser}</TableCell>
        <TableCell>
            <Badge className={actionTypeVariants({ type: actionType })}>
                {action}
            </Badge>
        </TableCell>
        <TableCell className="text-muted-foreground">{module}</TableCell>
        <TableCell className="text-muted-foreground max-w-48 truncate text-sm">
            {details}
        </TableCell>
        <TableCell className="text-muted-foreground font-mono text-xs">
            {ip}
        </TableCell>
    </TableRow>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <ClipboardList className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No audit entries found. Try adjusting your filters.
        </p>
    </div>
);

// ============= VARIANTS =============
const actionTypeVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        type: {
            create: 'bg-emerald-600 text-white hover:bg-emerald-700',
            update: 'bg-blue-500 text-white hover:bg-blue-600',
            delete: 'bg-red-600 text-white hover:bg-red-700',
            login: 'bg-slate-500 text-white hover:bg-slate-600',
            config: 'bg-purple-500 text-white hover:bg-purple-600',
        },
    },
    defaultVariants: {
        type: 'update',
    },
});

// ============= TYPES =============
interface IAuditEntry {
    id: string;
    timestamp: string;
    adminUser: string;
    action: string;
    actionType: 'create' | 'update' | 'delete' | 'login' | 'config';
    module: string;
    details: string;
    ip: string;
}

interface IAuditLog {
    title: string;
    description?: string;
    entries: IAuditEntry[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    dateFilter?: string;
    onDateFilterChange?: (value: string) => void;
}
