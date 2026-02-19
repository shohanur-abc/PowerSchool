'use client';

import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function FeeSummary({
    title,
    fees,
    onPayNow,
}: IFeeSummary) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <FeeTable fees={fees} onPayNow={onPayNow} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FeeTable = ({
    fees,
    onPayNow,
}: {
    fees: IChildFee[];
    onPayNow?: (childId: string) => void;
}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Child Name</TableHead>
                <TableHead className="text-right">Total Fees</TableHead>
                <TableHead className="text-right">Paid</TableHead>
                <TableHead className="text-right">Pending</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {fees.map((child) => (
                <FeeRow key={child.id} {...child} onPayNow={onPayNow} />
            ))}
        </TableBody>
    </Table>
);

const FeeRow = ({
    id,
    name,
    totalFees,
    paid,
    pending,
    dueDate,
    status,
    onPayNow,
}: IChildFee & { onPayNow?: (childId: string) => void }) => (
    <TableRow>
        <TableCell className="font-medium">{name}</TableCell>
        <TableCell className="text-right tabular-nums">
            {formatCurrency(totalFees)}
        </TableCell>
        <TableCell className="text-right tabular-nums">
            {formatCurrency(paid)}
        </TableCell>
        <TableCell className="text-right tabular-nums">
            {formatCurrency(pending)}
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <span className="text-sm">{dueDate}</span>
                <Badge className={feeStatusBadge({ status })}>{status}</Badge>
            </div>
        </TableCell>
        <TableCell className="text-right">
            {/* TODO: Implement payment flow */}
            <Button
                size="sm"
                variant={status === 'paid' ? 'outline' : 'default'}
                disabled={status === 'paid'}
                onClick={() => onPayNow?.(id)}
            >
                {status === 'paid' ? 'Paid' : 'Pay Now'}
            </Button>
        </TableCell>
    </TableRow>
);

// ============= HELPERS =============
const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(amount);

// ============= VARIANTS =============
const feeStatusBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            status: {
                paid: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
                partial:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                overdue:
                    'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
            },
        },
        defaultVariants: {
            status: 'partial',
        },
    }
);

// ============= TYPES =============
interface IChildFee {
    id: string;
    name: string;
    totalFees: number;
    paid: number;
    pending: number;
    dueDate: string;
    status: 'paid' | 'partial' | 'overdue';
}

interface IFeeSummary {
    title: string;
    fees: IChildFee[];
    /** TODO: Implement payment callback */
    onPayNow?: (childId: string) => void;
}
