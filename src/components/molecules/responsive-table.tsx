import { cn } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const ResponsiveTable = ({ headers, rows, className, classNames: cns }: ResponsiveTableProps) => (
    <div className={cn("@container", className)}>
        {/* Desktop table */}
        <div className={cn("hidden @md:block overflow-x-auto", cns?.desktop)}>
            <Table>
                <TableHeader><TableRow className={cns?.headerRow}>{headers.map((h, i) => <TableHead key={i} className={cns?.th}>{h}</TableHead>)}</TableRow></TableHeader>
                <TableBody>{rows.map((row, i) => <TableRow key={i} className={cns?.row}>{row.map((cell, j) => <TableCell key={j} className={cns?.cell}>{cell}</TableCell>)}</TableRow>)}</TableBody>
            </Table>
        </div>
        {/* Mobile cards */}
        <div className={cn("@md:hidden space-y-3", cns?.mobile)}>
            {rows.map((row, i) => (
                <div key={i} className={cn("border rounded-lg p-3 space-y-2", cns?.mobileCard)}>
                    {row.map((cell, j) => (
                        <div key={j} className="flex justify-between items-start">
                            <span className={cn("text-xs font-medium text-muted-foreground", cns?.mobileLabel)}>{headers[j]}</span>
                            <span className={cn("text-sm text-right", cns?.mobileValue)}>{cell}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

interface ResponsiveTableProps {
    headers: string[]; rows: React.ReactNode[][];
    className?: string; classNames?: { desktop?: string; mobile?: string; headerRow?: string; th?: string; row?: string; cell?: string; mobileCard?: string; mobileLabel?: string; mobileValue?: string };
}
