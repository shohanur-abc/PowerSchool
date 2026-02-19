'use client';

import { Download, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

// ============= MAIN COMPONENT =============
export default function StudentStatement({
    student,
    transactions,
    summary,
    dateRange,
    onDownload,
    onPrint,
}: IStudentStatement) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <CardTitle>Fee Statement</CardTitle>
                        <CardDescription>
                            {dateRange.from} — {dateRange.to}
                        </CardDescription>
                    </div>
                    <div className="flex gap-2 print:hidden">
                        {onDownload && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onDownload}
                            >
                                <Download className="size-4 mr-1.5" />
                                Download
                            </Button>
                        )}
                        {onPrint && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onPrint}
                            >
                                <FileText className="size-4 mr-1.5" />
                                Print
                            </Button>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <StudentInfoHeader student={student} />
                <Separator />
                <TransactionTable transactions={transactions} />
            </CardContent>
            <CardFooter>
                <SummaryFooter summary={summary} />
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StudentInfoHeader = ({ student }: { student: IStudentInfo }) => (
    <div className="flex items-center gap-4">
        <Avatar className="size-14">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback className="text-lg">
                {getInitials(student.name)}
            </AvatarFallback>
        </Avatar>
        <div className="@container grid grid-cols-1 @md:grid-cols-3 gap-x-6 gap-y-1 flex-1">
            <div>
                <p className="text-xs text-muted-foreground">Student Name</p>
                <p className="text-sm font-semibold">{student.name}</p>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">Class</p>
                <p className="text-sm font-medium">
                    {student.className}-{student.section}
                </p>
            </div>
            <div>
                <p className="text-xs text-muted-foreground">Student ID</p>
                <p className="text-sm font-medium tabular-nums">
                    {student.id}
                </p>
            </div>
            {student.rollNo && (
                <div>
                    <p className="text-xs text-muted-foreground">Roll No</p>
                    <p className="text-sm font-medium tabular-nums">
                        {student.rollNo}
                    </p>
                </div>
            )}
            {student.parentName && (
                <div>
                    <p className="text-xs text-muted-foreground">
                        Parent/Guardian
                    </p>
                    <p className="text-sm font-medium">{student.parentName}</p>
                </div>
            )}
        </div>
    </div>
);

const TransactionTable = ({
    transactions,
}: {
    transactions: ITransaction[];
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Debit</TableHead>
                    <TableHead className="text-right">Credit</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((txn) => (
                    <TransactionRow key={txn.id} {...txn} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const TransactionRow = ({
    date,
    description,
    debit,
    credit,
    balance,
    receiptNo,
}: ITransaction) => (
    <TableRow>
        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
            {date}
        </TableCell>
        <TableCell>
            <div className="space-y-0.5">
                <p className="text-sm font-medium">{description}</p>
                {receiptNo && (
                    <p className="text-[10px] text-muted-foreground tabular-nums">
                        Ref: {receiptNo}
                    </p>
                )}
            </div>
        </TableCell>
        <TableCell className="text-right tabular-nums text-red-600">
            {debit > 0 ? formatCurrency(debit) : '—'}
        </TableCell>
        <TableCell className="text-right tabular-nums text-emerald-600">
            {credit > 0 ? formatCurrency(credit) : '—'}
        </TableCell>
        <TableCell className="text-right font-medium tabular-nums">
            {formatCurrency(balance)}
        </TableCell>
    </TableRow>
);

const SummaryFooter = ({ summary }: { summary: IStatementSummary }) => (
    <div className="@container grid grid-cols-1 @lg:grid-cols-4 gap-4 w-full">
        <SummaryItem label="Total Fees" value={summary.totalFees} />
        <SummaryItem
            label="Total Paid"
            value={summary.totalPaid}
            variant="success"
        />
        <SummaryItem
            label="Total Discount"
            value={summary.totalDiscount}
            variant="info"
        />
        <SummaryItem
            label="Outstanding"
            value={summary.outstanding}
            variant={summary.outstanding > 0 ? 'destructive' : 'success'}
        />
    </div>
);

const SummaryItem = ({
    label,
    value,
    variant,
}: {
    label: string;
    value: number;
    variant?: 'success' | 'destructive' | 'info';
}) => (
    <div className="flex flex-col items-center gap-1 p-3 rounded-lg bg-muted/50">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p
            className={cn(
                'text-lg font-bold tabular-nums',
                variant === 'success' && 'text-emerald-600',
                variant === 'destructive' && 'text-red-600',
                variant === 'info' && 'text-blue-600'
            )}
        >
            {formatCurrency(value)}
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

const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

// TODO: Add per-fee-type breakdown summary
// TODO: Add semester/term-wise grouping option

// ============= TYPES =============
interface IStudentInfo {
    id: string;
    name: string;
    avatar: string;
    className: string;
    section: string;
    rollNo?: string;
    parentName?: string;
}

interface ITransaction {
    id: string;
    date: string;
    description: string;
    debit: number;
    credit: number;
    balance: number;
    receiptNo?: string;
}

interface IStatementSummary {
    totalFees: number;
    totalPaid: number;
    totalDiscount: number;
    outstanding: number;
}

interface IStudentStatement {
    student: IStudentInfo;
    transactions: ITransaction[];
    summary: IStatementSummary;
    dateRange: { from: string; to: string };
    onDownload?: () => void;
    onPrint?: () => void;
}
