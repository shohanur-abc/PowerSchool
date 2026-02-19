'use client';

import {
    Edit,
    MoreHorizontal,
    Power,
    PowerOff,
    Trash2,
} from 'lucide-react';
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
export default function FeeStructureTable({
    title,
    description,
    feeTypes,
    onEdit,
    onToggle,
    onDelete,
}: IFeeStructureTable) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {feeTypes.length > 0 ? (
                    <StructureTable
                        feeTypes={feeTypes}
                        onEdit={onEdit}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StructureTable = ({
    feeTypes,
    onEdit,
    onToggle,
    onDelete,
}: {
    feeTypes: IFeeType[];
    onEdit?: (id: string) => void;
    onToggle?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Fee Type</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Applicable Classes</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="w-10" />
                </TableRow>
            </TableHeader>
            <TableBody>
                {feeTypes.map((fee) => (
                    <FeeTypeRow
                        key={fee.id}
                        fee={fee}
                        onEdit={onEdit}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const FeeTypeRow = ({
    fee,
    onEdit,
    onToggle,
    onDelete,
}: {
    fee: IFeeType;
    onEdit?: (id: string) => void;
    onToggle?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow className={fee.status === 'disabled' ? 'opacity-60' : undefined}>
        <TableCell>
            <div className="space-y-0.5">
                <p className="font-medium">{fee.name}</p>
                {fee.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                        {fee.description}
                    </p>
                )}
            </div>
        </TableCell>
        <TableCell className="text-right font-medium tabular-nums">
            {formatCurrency(fee.amount)}
        </TableCell>
        <TableCell>
            <FrequencyBadge frequency={fee.frequency} />
        </TableCell>
        <TableCell>
            <ClassesList classes={fee.applicableClasses} />
        </TableCell>
        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
            {fee.dueDate}
        </TableCell>
        <TableCell className="text-center">
            <Badge
                variant={fee.status === 'active' ? 'default' : 'secondary'}
                className="text-xs"
            >
                {fee.status === 'active' ? 'Active' : 'Disabled'}
            </Badge>
        </TableCell>
        <TableCell>
            <FeeActionMenu
                feeId={fee.id}
                isActive={fee.status === 'active'}
                onEdit={onEdit}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </TableCell>
    </TableRow>
);

const FrequencyBadge = ({
    frequency,
}: {
    frequency: IFeeType['frequency'];
}) => (
    <Badge
        variant={frequencyVariantMap[frequency]}
        className="text-xs capitalize"
    >
        {frequency}
    </Badge>
);

const ClassesList = ({ classes }: { classes: string[] }) => (
    <div className="flex flex-wrap gap-1 max-w-48">
        {classes.length <= 3 ? (
            classes.map((cls) => (
                <Badge key={cls} variant="outline" className="text-[10px]">
                    {cls}
                </Badge>
            ))
        ) : (
            <>
                {classes.slice(0, 2).map((cls) => (
                    <Badge key={cls} variant="outline" className="text-[10px]">
                        {cls}
                    </Badge>
                ))}
                <Badge variant="outline" className="text-[10px]">
                    +{classes.length - 2} more
                </Badge>
            </>
        )}
    </div>
);

const FeeActionMenu = ({
    feeId,
    isActive,
    onEdit,
    onToggle,
    onDelete,
}: {
    feeId: string;
    isActive: boolean;
    onEdit?: (id: string) => void;
    onToggle?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(feeId)}>
                <Edit className="size-4 mr-2" />
                Edit Fee Type
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onToggle?.(feeId)}>
                {isActive ? (
                    <>
                        <PowerOff className="size-4 mr-2" />
                        Disable
                    </>
                ) : (
                    <>
                        <Power className="size-4 mr-2" />
                        Enable
                    </>
                )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                onClick={() => onDelete?.(feeId)}
                className="text-destructive focus:text-destructive"
            >
                <Trash2 className="size-4 mr-2" />
                Delete
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-sm text-muted-foreground">
            No fee types configured. Add a fee type to get started.
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

const frequencyVariantMap: Record<
    IFeeType['frequency'],
    'default' | 'secondary' | 'outline'
> = {
    monthly: 'default',
    quarterly: 'secondary',
    annual: 'outline',
    'one-time': 'outline',
};

// TODO: Add bulk enable/disable toggle
// TODO: Add fee type reordering (drag-and-drop)

// ============= TYPES =============
interface IFeeType {
    id: string;
    name: string;
    description?: string;
    amount: number;
    frequency: 'monthly' | 'quarterly' | 'annual' | 'one-time';
    applicableClasses: string[];
    dueDate: string;
    status: 'active' | 'disabled';
}

interface IFeeStructureTable {
    title: string;
    description?: string;
    feeTypes: IFeeType[];
    onEdit?: (id: string) => void;
    onToggle?: (id: string) => void;
    onDelete?: (id: string) => void;
}
