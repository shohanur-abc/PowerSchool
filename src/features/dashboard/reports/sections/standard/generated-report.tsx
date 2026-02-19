'use client';

import { Printer, Download, FileText } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function GeneratedReport({
    schoolInfo,
    reportTitle,
    reportSubtitle,
    parameters,
    columns,
    rows,
    onPrint,
    onDownload,
}: IGeneratedReport) {
    return (
        <Card className="print:shadow-none print:border-0">
            <CardHeader className="text-center space-y-2">
                <SchoolHeader schoolInfo={schoolInfo} />
                <Separator />
                <div className="space-y-1">
                    <CardTitle className="text-lg">{reportTitle}</CardTitle>
                    {reportSubtitle && (
                        <CardDescription>{reportSubtitle}</CardDescription>
                    )}
                </div>
                {parameters.length > 0 && (
                    <ParametersSummary parameters={parameters} />
                )}
            </CardHeader>

            <CardContent>
                {rows.length > 0 ? (
                    <ReportTable columns={columns} rows={rows} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>

            <CardFooter className="flex items-center justify-between gap-2 border-t pt-4 print:hidden">
                <p className="text-xs text-muted-foreground">
                    Generated on {new Date().toLocaleDateString()}
                </p>
                <div className="flex items-center gap-2">
                    {onPrint && (
                        <Button variant="outline" size="sm" onClick={onPrint}>
                            <Printer className="size-4 mr-1.5" />
                            Print
                        </Button>
                    )}
                    {onDownload && (
                        <Button size="sm" onClick={onDownload}>
                            <Download className="size-4 mr-1.5" />
                            Download
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SchoolHeader = ({ schoolInfo }: { schoolInfo: ISchoolInfo }) => (
    <div className="space-y-0.5">
        <p className="text-lg font-bold tracking-tight">
            {schoolInfo.name}
        </p>
        <p className="text-xs text-muted-foreground">{schoolInfo.address}</p>
        {schoolInfo.phone && (
            <p className="text-xs text-muted-foreground">
                Phone: {schoolInfo.phone}
                {schoolInfo.email && ` | Email: ${schoolInfo.email}`}
            </p>
        )}
    </div>
);

const ParametersSummary = ({
    parameters,
}: {
    parameters: IReportParam[];
}) => (
    <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {parameters.map((param, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
                {param.label}: {param.value}
            </Badge>
        ))}
    </div>
);

const ReportTable = ({
    columns,
    rows,
}: {
    columns: IReportColumn[];
    rows: IReportRow[];
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-12 text-center">#</TableHead>
                    {columns.map((col) => (
                        <TableHead
                            key={col.key}
                            className={col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : ''}
                        >
                            {col.label}
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.id || index}>
                        <TableCell className="text-center text-muted-foreground text-xs">
                            {index + 1}
                        </TableCell>
                        {columns.map((col) => (
                            <TableCell
                                key={col.key}
                                className={col.align === 'right' ? 'text-right tabular-nums' : col.align === 'center' ? 'text-center' : ''}
                            >
                                {row[col.key]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">No data available</p>
    </div>
);

// ============= TYPES =============
interface ISchoolInfo {
    name: string;
    address: string;
    phone?: string;
    email?: string;
}

interface IReportParam {
    label: string;
    value: string;
}

interface IReportColumn {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
}

interface IReportRow {
    id?: string;
    [key: string]: string | number | undefined;
}

interface IGeneratedReport {
    schoolInfo: ISchoolInfo;
    reportTitle: string;
    reportSubtitle?: string;
    parameters: IReportParam[];
    columns: IReportColumn[];
    rows: IReportRow[];
    onPrint?: () => void;
    onDownload?: () => void;
}
