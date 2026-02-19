'use client';

import { ArrowUpDown, Filter, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
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
export default function PaymentTracker({
    title,
    description,
    records,
    filters,
    onFilter,
    onSearch,
    onSort,
}: IPaymentTracker) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                <TrackerFilters
                    filters={filters}
                    onFilter={onFilter}
                    onSearch={onSearch}
                />
                {records.length > 0 ? (
                    <TrackerTable records={records} onSort={onSort} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TrackerFilters = ({
    filters,
    onFilter,
    onSearch,
}: {
    filters?: ITrackerFilters;
    onFilter?: (key: string, value: string) => void;
    onSearch?: (query: string) => void;
}) => (
    <div className="@container flex flex-col @lg:flex-row gap-3">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
                placeholder="Search by receipt, student, or ID..."
                onChange={(e) => onSearch?.(e.target.value)}
                className="pl-9"
            />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
            <Filter className="size-4 text-muted-foreground shrink-0" />
            <Select
                defaultValue={filters?.status}
                onValueChange={(v) => onFilter?.('status', v)}
            >
                <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
            </Select>
            <Select
                defaultValue={filters?.method}
                onValueChange={(v) => onFilter?.('method', v)}
            >
                <SelectTrigger className="w-36">
                    <SelectValue placeholder="Method" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Methods</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="cheque">Cheque</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
);

const TrackerTable = ({
    records,
    onSort,
}: {
    records: IPaymentRecord[];
    onSort?: (column: TSortableColumn) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <SortableHead
                        label="Receipt #"
                        column="receiptNo"
                        onSort={onSort}
                    />
                    <SortableHead
                        label="Student"
                        column="studentName"
                        onSort={onSort}
                    />
                    <TableHead>Class</TableHead>
                    <TableHead>Fee Type</TableHead>
                    <SortableHead
                        label="Amount"
                        column="amount"
                        onSort={onSort}
                        className="text-right"
                    />
                    <TableHead>Method</TableHead>
                    <SortableHead
                        label="Date"
                        column="date"
                        onSort={onSort}
                    />
                    <TableHead className="text-center">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {records.map((record) => (
                    <PaymentRow key={record.receiptNo} {...record} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const SortableHead = ({
    label,
    column,
    onSort,
    className,
}: {
    label: string;
    column: TSortableColumn;
    onSort?: (column: TSortableColumn) => void;
    className?: string;
}) => (
    <TableHead className={className}>
        {onSort ? (
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onSort(column)}
                className="-ml-3 h-8"
            >
                {label}
                <ArrowUpDown className="size-3.5 ml-1" />
            </Button>
        ) : (
            label
        )}
    </TableHead>
);

const PaymentRow = ({
    receiptNo,
    studentName,
    className: cls,
    section,
    feeType,
    amount,
    method,
    date,
    status,
}: IPaymentRecord) => (
    <TableRow>
        <TableCell className="font-mono text-xs tabular-nums">
            {receiptNo}
        </TableCell>
        <TableCell className="font-medium">{studentName}</TableCell>
        <TableCell className="text-muted-foreground">
            {cls}-{section}
        </TableCell>
        <TableCell>{feeType}</TableCell>
        <TableCell className="text-right font-medium tabular-nums">
            {formatCurrency(amount)}
        </TableCell>
        <TableCell>
            <Badge variant="outline" className="text-xs">
                {method}
            </Badge>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">{date}</TableCell>
        <TableCell className="text-center">
            <StatusBadge status={status} />
        </TableCell>
    </TableRow>
);

const StatusBadge = ({ status }: { status: IPaymentRecord['status'] }) => (
    <Badge
        variant={statusVariantMap[status]}
        className="text-xs min-w-16 justify-center"
    >
        {statusLabelMap[status]}
    </Badge>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No payment records found. Try adjusting your filters.
        </p>
    </div>
);

// ============= HELPERS =============
const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

const statusVariantMap: Record<
    IPaymentRecord['status'],
    'default' | 'secondary' | 'destructive' | 'outline'
> = {
    paid: 'default',
    partial: 'secondary',
    pending: 'destructive',
};

const statusLabelMap: Record<IPaymentRecord['status'], string> = {
    paid: 'Paid',
    partial: 'Partial',
    pending: 'Pending',
};

// TODO: Add pagination for large datasets
// TODO: Add export functionality (CSV, PDF)
// TODO: Add date range filter

// ============= TYPES =============
type TSortableColumn = 'receiptNo' | 'studentName' | 'amount' | 'date';

interface ITrackerFilters {
    status?: string;
    method?: string;
}

interface IPaymentRecord {
    receiptNo: string;
    studentName: string;
    className: string;
    section: string;
    feeType: string;
    amount: number;
    method: string;
    date: string;
    status: 'paid' | 'partial' | 'pending';
}

interface IPaymentTracker {
    title: string;
    description?: string;
    records: IPaymentRecord[];
    filters?: ITrackerFilters;
    onFilter?: (key: string, value: string) => void;
    onSearch?: (query: string) => void;
    onSort?: (column: TSortableColumn) => void;
}
