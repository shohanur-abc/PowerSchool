"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const TableCard = ({ title, description, headers, rows, actions, className, classNames: cns }: TableCardProps) => (
    <Card className={cn("@container", className)}>
        <CardHeader className={cn("flex-row items-center justify-between space-y-0", cns?.header)}>
            <div>
                <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </div>
            {actions && <div className={cns?.actions}>{actions}</div>}
        </CardHeader>
        <CardContent className={cn("p-0", cns?.content)}>
            <Table>
                <TableHeader>
                    <TableRow className={cns?.headerRow}>
                        {headers.map((h, i) => <TableHead key={i} className={cns?.th}>{h}</TableHead>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i} className={cns?.row}>
                            {row.map((cell, j) => <TableCell key={j} className={cns?.cell}>{cell}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

interface TableCardProps {
    title: string; description?: string; headers: string[]; rows: React.ReactNode[][];
    actions?: React.ReactNode; className?: string;
    classNames?: { header?: string; title?: string; description?: string; actions?: string; content?: string; headerRow?: string; th?: string; row?: string; cell?: string };
}
