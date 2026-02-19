'use client';

import { cva } from 'class-variance-authority';
import { Check, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
export default function ApprovalQueue({
    title,
    requests,
    onApprove,
    onReject,
}: IApprovalQueue) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ApprovalTable
                    requests={requests}
                    onApprove={onApprove}
                    onReject={onReject}
                />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ApprovalTable = ({
    requests,
    onApprove,
    onReject,
}: {
    requests: IApprovalRequest[];
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
}) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {requests.map((request) => (
                <ApprovalRow
                    key={request.id}
                    {...request}
                    onApprove={onApprove}
                    onReject={onReject}
                />
            ))}
        </TableBody>
    </Table>
);

const ApprovalRow = ({
    id,
    type,
    fromName,
    fromAvatar,
    date,
    priority,
    status,
    onApprove,
    onReject,
}: IApprovalRequest & {
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell>
            <Badge className={requestTypeBadge({ type })}>{type}</Badge>
        </TableCell>
        <TableCell>
            <div className="flex items-center gap-2">
                <Avatar size="sm">
                    <AvatarImage src={fromAvatar} alt={fromName} />
                    <AvatarFallback>{getInitials(fromName)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{fromName}</span>
            </div>
        </TableCell>
        <TableCell className="text-sm text-muted-foreground">{date}</TableCell>
        <TableCell>
            <Badge className={priorityBadge({ priority })}>{priority}</Badge>
        </TableCell>
        <TableCell>
            <Badge variant="outline" className="text-xs capitalize">
                {status}
            </Badge>
        </TableCell>
        <TableCell className="text-right">
            {/* TODO: Implement approval/rejection flow */}
            <div className="flex items-center justify-end gap-1.5">
                <Button
                    size="icon"
                    variant="outline"
                    className="size-7"
                    onClick={() => onApprove?.(id)}
                >
                    <Check className="size-3.5" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    className="size-7 text-destructive hover:text-destructive"
                    onClick={() => onReject?.(id)}
                >
                    <X className="size-3.5" />
                </Button>
            </div>
        </TableCell>
    </TableRow>
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
const requestTypeBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            type: {
                leave: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                expense:
                    'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
                transfer:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                admission:
                    'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
            },
        },
        defaultVariants: {
            type: 'leave',
        },
    }
);

const priorityBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize',
    {
        variants: {
            priority: {
                high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
                medium:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                low: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
            },
        },
        defaultVariants: {
            priority: 'medium',
        },
    }
);

// ============= TYPES =============
interface IApprovalRequest {
    id: string;
    type: 'leave' | 'expense' | 'transfer' | 'admission';
    fromName: string;
    fromAvatar: string;
    date: string;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'approved' | 'rejected';
}

interface IApprovalQueue {
    title: string;
    requests: IApprovalRequest[];
    /** TODO: Implement approval callback */
    onApprove?: (id: string) => void;
    /** TODO: Implement rejection callback */
    onReject?: (id: string) => void;
}
