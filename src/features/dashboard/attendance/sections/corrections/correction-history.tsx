'use client';

import { MoreHorizontal, ArrowRight } from 'lucide-react';
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
export default function CorrectionHistory({
    title,
    description,
    corrections,
    onApprove,
    onReject,
    onView,
}: ICorrectionHistory) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {corrections.length > 0 ? (
                    <CorrectionTable
                        corrections={corrections}
                        onApprove={onApprove}
                        onReject={onReject}
                        onView={onView}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const CorrectionTable = ({
    corrections,
    onApprove,
    onReject,
    onView,
}: Omit<ICorrectionHistory, 'title' | 'description'>) => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-center">Change</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead className="text-right">Actions</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {corrections.map((correction) => (
                <CorrectionRow
                    key={correction.id}
                    correction={correction}
                    onApprove={onApprove}
                    onReject={onReject}
                    onView={onView}
                />
            ))}
        </TableBody>
    </Table>
);

const CorrectionRow = ({
    correction,
    onApprove,
    onReject,
    onView,
}: {
    correction: ICorrectionRecord;
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
    onView?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell className="font-mono text-xs tabular-nums">
            {correction.id}
        </TableCell>
        <TableCell className="font-medium">{correction.studentName}</TableCell>
        <TableCell className="text-muted-foreground">
            {correction.date}
        </TableCell>
        <TableCell className="text-center">
            <StatusTransition
                oldStatus={correction.oldStatus}
                newStatus={correction.newStatus}
            />
        </TableCell>
        <TableCell className="max-w-48 truncate text-muted-foreground">
            {correction.reason}
        </TableCell>
        <TableCell className="text-center">
            <CorrectionStatusBadge status={correction.status} />
        </TableCell>
        <TableCell className="text-muted-foreground">
            {correction.requestedBy}
        </TableCell>
        <TableCell className="text-right">
            <CorrectionActions
                id={correction.id}
                status={correction.status}
                onApprove={onApprove}
                onReject={onReject}
                onView={onView}
            />
        </TableCell>
    </TableRow>
);

const StatusTransition = ({
    oldStatus,
    newStatus,
}: {
    oldStatus: string;
    newStatus: string;
}) => (
    <div className="flex items-center justify-center gap-1.5 text-xs">
        <Badge variant="outline" className="text-[10px] capitalize">
            {oldStatus}
        </Badge>
        <ArrowRight className="size-3 text-muted-foreground shrink-0" />
        <Badge variant="secondary" className="text-[10px] capitalize">
            {newStatus}
        </Badge>
    </div>
);

const CorrectionStatusBadge = ({
    status,
}: {
    status: ICorrectionRecord['status'];
}) => (
    <Badge
        variant={correctionStatusVariant[status]}
        className="text-[10px] capitalize"
    >
        {status}
    </Badge>
);

const CorrectionActions = ({
    id,
    status,
    onApprove,
    onReject,
    onView,
}: {
    id: string;
    status: ICorrectionRecord['status'];
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
    onView?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Actions</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {onView && (
                <DropdownMenuItem onClick={() => onView(id)}>
                    View Details
                </DropdownMenuItem>
            )}
            {status === 'pending' && (
                <>
                    <DropdownMenuSeparator />
                    {onApprove && (
                        <DropdownMenuItem onClick={() => onApprove(id)}>
                            Approve
                        </DropdownMenuItem>
                    )}
                    {onReject && (
                        <DropdownMenuItem
                            onClick={() => onReject(id)}
                            className="text-destructive"
                        >
                            Reject
                        </DropdownMenuItem>
                    )}
                </>
            )}
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No correction requests found
        </p>
    </div>
);

// ============= HELPERS =============
const correctionStatusVariant: Record<
    ICorrectionRecord['status'],
    'default' | 'destructive' | 'secondary' | 'outline'
> = {
    pending: 'secondary',
    approved: 'default',
    rejected: 'destructive',
};

// ============= TYPES =============
interface ICorrectionRecord {
    id: string;
    studentName: string;
    date: string;
    oldStatus: string;
    newStatus: string;
    reason: string;
    status: 'pending' | 'approved' | 'rejected';
    requestedBy: string;
}

interface ICorrectionHistory {
    title: string;
    description?: string;
    corrections: ICorrectionRecord[];
    onApprove?: (id: string) => void;
    onReject?: (id: string) => void;
    onView?: (id: string) => void;
}
