import { cva } from 'class-variance-authority';
import { CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// ============= MAIN COMPONENT =============
export default function FeeStatus({
    title,
    totalFees,
    paidAmount,
    pendingAmount,
    nextDueDate,
    status,
}: IFeeStatus) {
    const completionPercent =
        totalFees > 0 ? Math.round((paidAmount / totalFees) * 100) : 0;

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>{title}</CardTitle>
                    <Badge className={feeStatusBadge({ status })}>{status}</Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="@container grid grid-cols-2 @sm:grid-cols-4 gap-3">
                    <FeeStat label="Total Fees" value={formatCurrency(totalFees)} />
                    <FeeStat label="Paid" value={formatCurrency(paidAmount)} />
                    <FeeStat label="Pending" value={formatCurrency(pendingAmount)} />
                    <FeeStatWithIcon label="Due Date" value={nextDueDate} />
                </div>
                <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Payment Progress</span>
                        <span className="font-semibold tabular-nums">
                            {completionPercent}%
                        </span>
                    </div>
                    <Progress value={completionPercent} className="h-2.5" />
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const FeeStat = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-lg border p-2.5 space-y-0.5">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold tabular-nums">{value}</p>
    </div>
);

const FeeStatWithIcon = ({ label, value }: { label: string; value: string }) => (
    <div className="rounded-lg border p-2.5 space-y-0.5">
        <p className="text-xs text-muted-foreground">{label}</p>
        <div className="flex items-center gap-1">
            <CalendarDays className="size-3 text-muted-foreground" />
            <p className="text-sm font-semibold">{value}</p>
        </div>
    </div>
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
interface IFeeStatus {
    title: string;
    totalFees: number;
    paidAmount: number;
    pendingAmount: number;
    nextDueDate: string;
    status: 'paid' | 'partial' | 'overdue';
}
