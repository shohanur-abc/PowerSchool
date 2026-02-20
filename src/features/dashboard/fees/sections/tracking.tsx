import { Filter, Download, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function FeeTracking({ stats, filters, records }: IFeeTracking) {
    return (
        <div className="space-y-6">
            <Header />
            <SummaryCards stats={stats} />
            <TrackingTable filters={filters} records={records} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-start justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Fee Tracking</h1>
            <p className="text-muted-foreground mt-1">Monitor payment statuses and follow up on pending fees</p>
        </div>
        <Button variant="outline" className="gap-2 shrink-0">
            <Download className="size-4" />
            Export
        </Button>
    </div>
);

const SummaryCards = ({ stats }: { stats: IFeeTracking['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-2xl font-bold mt-1">{s.value}</p>
                    {s.count !== undefined && (
                        <p className="text-xs text-muted-foreground">{s.count} students</p>
                    )}
                </CardContent>
            </Card>
        ))}
    </div>
);

const TrackingTable = ({ filters, records }: { filters: IFeeTracking['filters']; records: IFeeTracking['records'] }) => (
    <Card>
        <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <CardTitle className="text-base">Fee Records</CardTitle>
                <div className="flex gap-2 ml-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input placeholder="Search student..." className="pl-9 h-8 w-48" />
                    </div>
                    <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="size-3" /> Filter
                    </Button>
                </div>
            </div>
            {filters.active.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {filters.active.map((f, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{f}</Badge>
                    ))}
                </div>
            )}
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Fee Type</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {records.map((record, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{record.studentName}</p>
                                    <p className="text-xs text-muted-foreground">{record.class}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{record.feeType}</TableCell>
                            <TableCell className="text-right font-semibold">{record.amount}</TableCell>
                            <TableCell className="text-muted-foreground">{record.dueDate}</TableCell>
                            <TableCell>
                                <PaymentStatusBadge status={record.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                    <Button size="sm" variant="ghost" className="h-7 text-xs">View</Button>
                                    {record.status !== 'paid' && (
                                        <Button size="sm" variant="outline" className="h-7 text-xs">Collect</Button>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const PaymentStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, string> = {
        paid: 'bg-green-100 text-green-700 border-green-200',
        pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        overdue: 'bg-red-100 text-red-700 border-red-200',
        partial: 'bg-blue-100 text-blue-700 border-blue-200',
    };
    return (
        <Badge variant="outline" className={map[status] ?? ''}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
};

// ============= TYPES =============
interface IFeeTracking {
    stats: {
        label: string;
        value: string;
        count?: number;
    }[];
    filters: {
        active: string[];
    };
    records: {
        studentName: string;
        class: string;
        feeType: string;
        amount: string;
        dueDate: string;
        status: 'paid' | 'pending' | 'overdue' | 'partial';
    }[];
}
