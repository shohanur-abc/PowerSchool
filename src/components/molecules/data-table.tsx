"use client";
import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const DataTable = ({ columns, rows, caption, striped, className, classNames: cns }: DataTableProps) => (
    <div className={cn("@container", className)}>
        <Table className={cns?.table}>
            {caption && <caption className={cn("text-sm text-muted-foreground mb-2 text-left", cns?.caption)}>{caption}</caption>}
            <TableHeader className={cns?.header}>
                <TableRow className={cns?.headerRow}>
                    {columns.map(({ key, label, align }) => (
                        <TableHead key={key} className={cn(align === 'right' && "text-right", align === 'center' && "text-center", cns?.headerCell)}>
                            {label}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody className={cns?.body}>
                {rows.map((row, i) => (
                    <TableRow key={i} className={cn(striped && i % 2 === 1 && "bg-muted/50", cns?.row)}>
                        {columns.map(({ key, align, render }) => (
                            <TableCell key={key} className={cn(align === 'right' && "text-right", align === 'center' && "text-center", cns?.cell)}>
                                {render ? render(row[key], row) : (row[key] as React.ReactNode)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);


// ============= TYPES =============
interface DataTableProps {
    columns: {
        key: string;
        label: string;
        align?: 'left' | 'center' | 'right';
        render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
    }[];
    rows: Record<string, unknown>[];
    caption?: string;
    striped?: boolean;
    className?: string;
    classNames?: {
        table?: string;
        caption?: string;
        header?: string;
        headerRow?: string;
        headerCell?: string;
        body?: string;
        row?: string;
        cell?: string;
    };
}
