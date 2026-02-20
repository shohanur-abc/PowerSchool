import { FilePenLine, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function AttendanceCorrections({ stats, requests }: IAttendanceCorrections) {
    return (
        <div className="space-y-6">
            <Header />
            <SummaryCards stats={stats} />
            <RequestsTable requests={requests} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-start justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Attendance Corrections</h1>
            <p className="text-muted-foreground mt-1">Review and approve correction requests from students or staff</p>
        </div>
        <Button className="gap-2 shrink-0">
            <FilePenLine className="size-4" />
            New Request
        </Button>
    </div>
);

const SummaryCards = ({ stats }: { stats: IAttendanceCorrections['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-3xl font-bold mt-1">{s.value}</p>
                </CardContent>
            </Card>
        ))}
    </div>
);

const RequestsTable = ({ requests }: { requests: IAttendanceCorrections['requests'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Pending Requests</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Original</TableHead>
                        <TableHead>Requested</TableHead>
                        <TableHead className="hidden md:table-cell">Reason</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {requests.map((req, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{req.studentName}</p>
                                    <p className="text-xs text-muted-foreground">{req.class}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{req.date}</TableCell>
                            <TableCell>
                                <StatusBadge status={req.originalStatus} />
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={req.requestedStatus} />
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-sm text-muted-foreground max-w-xs truncate">
                                {req.reason}
                            </TableCell>
                            <TableCell>
                                <RequestStatusBadge status={req.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                {req.status === 'pending' && (
                                    <div className="flex justify-end gap-2">
                                        <Button size="sm" variant="outline" className="h-7 gap-1 text-green-600 hover:text-green-700">
                                            <CheckCircle className="size-3" /> Approve
                                        </Button>
                                        <Button size="sm" variant="outline" className="h-7 gap-1 text-red-500 hover:text-red-600">
                                            <XCircle className="size-3" /> Reject
                                        </Button>
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, string> = {
        present: 'bg-green-100 text-green-700 border-green-200',
        absent: 'bg-red-100 text-red-700 border-red-200',
        late: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    };
    return (
        <Badge variant="outline" className={map[status] ?? ''}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
};

const RequestStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, string> = {
        pending: 'bg-blue-100 text-blue-700 border-blue-200',
        approved: 'bg-green-100 text-green-700 border-green-200',
        rejected: 'bg-red-100 text-red-700 border-red-200',
    };
    return (
        <Badge variant="outline" className={map[status] ?? ''}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
    );
};

// ============= TYPES =============
interface IAttendanceCorrections {
    stats: { label: string; value: string }[];
    requests: {
        studentName: string;
        class: string;
        date: string;
        originalStatus: string;
        requestedStatus: string;
        reason: string;
        status: 'pending' | 'approved' | 'rejected';
    }[];
}
