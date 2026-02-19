'use client';

import {
    AlertTriangle,
    Mail,
    MoreHorizontal,
    Eye,
    Phone,
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function OverdueList({
    title,
    description,
    payments,
    onSendReminder,
    onViewDetails,
}: IOverdueList) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <AlertTriangle className="size-5 text-destructive" />
                    <div>
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {payments.length > 0 ? (
                    <OverdueTable
                        payments={payments}
                        onSendReminder={onSendReminder}
                        onViewDetails={onViewDetails}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const OverdueTable = ({
    payments,
    onSendReminder,
    onViewDetails,
}: {
    payments: IOverduePayment[];
    onSendReminder?: (id: string) => void;
    onViewDetails?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-center">Days Overdue</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {payments.map((payment) => (
                    <OverdueRow
                        key={payment.id}
                        payment={payment}
                        onSendReminder={onSendReminder}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const OverdueRow = ({
    payment,
    onSendReminder,
    onViewDetails,
}: {
    payment: IOverduePayment;
    onSendReminder?: (id: string) => void;
    onViewDetails?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <div className="flex items-center gap-3">
                <Avatar className="size-8">
                    <AvatarImage
                        src={payment.studentAvatar}
                        alt={payment.studentName}
                    />
                    <AvatarFallback className="text-xs">
                        {getInitials(payment.studentName)}
                    </AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm">
                    {payment.studentName}
                </span>
            </div>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">
            {payment.className}-{payment.section}
        </TableCell>
        <TableCell className="text-right font-medium tabular-nums">
            {formatCurrency(payment.amount)}
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">
            {payment.dueDate}
        </TableCell>
        <TableCell className="text-center">
            <OverdueBadge daysOverdue={payment.daysOverdue} />
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">
            {payment.contactNo}
        </TableCell>
        <TableCell>
            <ActionMenu
                paymentId={payment.id}
                onSendReminder={onSendReminder}
                onViewDetails={onViewDetails}
            />
        </TableCell>
    </TableRow>
);

const OverdueBadge = ({ daysOverdue }: { daysOverdue: number }) => (
    <Badge variant="destructive" className="text-xs tabular-nums">
        {daysOverdue} {daysOverdue === 1 ? 'day' : 'days'}
    </Badge>
);

const ActionMenu = ({
    paymentId,
    onSendReminder,
    onViewDetails,
}: {
    paymentId: string;
    onSendReminder?: (id: string) => void;
    onViewDetails?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onViewDetails?.(paymentId)}>
                <Eye className="size-4 mr-2" />
                View Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onSendReminder?.(paymentId)}>
                <Mail className="size-4 mr-2" />
                Send Email Reminder
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onSendReminder?.(paymentId)}>
                <Phone className="size-4 mr-2" />
                Send SMS Reminder
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No overdue payments found. All fees are up to date.
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

// TODO: Add bulk reminder functionality for multiple overdue payments
// TODO: Add configurable overdue thresholds for severity levels

// ============= TYPES =============
interface IOverduePayment {
    id: string;
    studentName: string;
    studentAvatar: string;
    className: string;
    section: string;
    amount: number;
    dueDate: string;
    daysOverdue: number;
    contactNo: string;
}

interface IOverdueList {
    title: string;
    description?: string;
    payments: IOverduePayment[];
    onSendReminder?: (id: string) => void;
    onViewDetails?: (id: string) => void;
}
