import { BarChart2, Download, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function AttendanceReports({ filters, summary, classReports }: IAttendanceReports) {
    return (
        <div className="space-y-6">
            <Header />
            <FilterBar filters={filters} />
            <SummaryCards summary={summary} />
            <ClassReportsTable rows={classReports} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-start justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Attendance Reports</h1>
            <p className="text-muted-foreground mt-1">View and export attendance analytics for all classes</p>
        </div>
        <Button variant="outline" className="gap-2 shrink-0">
            <Download className="size-4" />
            Export
        </Button>
    </div>
);

const FilterBar = ({ filters }: { filters: IAttendanceReports['filters'] }) => (
    <Card>
        <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-3">
                <Filter className="size-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filters:</span>
                <div className="flex flex-wrap gap-2">
                    {filters.dateRange && (
                        <Badge variant="secondary">{filters.dateRange}</Badge>
                    )}
                    {filters.classes.map((cls, i) => (
                        <Badge key={i} variant="outline" className="cursor-pointer">{cls}</Badge>
                    ))}
                </div>
                <Button variant="ghost" size="sm" className="ml-auto text-xs">Clear Filters</Button>
            </div>
        </CardContent>
    </Card>
);

const SummaryCards = ({ summary }: { summary: IAttendanceReports['summary'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {summary.map((s, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                        <BarChart2 className="size-4 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                    </div>
                    <p className="text-3xl font-bold">{s.value}</p>
                    {s.subtitle && <p className="text-xs text-muted-foreground mt-1">{s.subtitle}</p>}
                </CardContent>
            </Card>
        ))}
    </div>
);

const ClassReportsTable = ({ rows }: { rows: IAttendanceReports['classReports'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Class-wise Report</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Class</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead className="text-right">Present</TableHead>
                        <TableHead className="text-right">Absent</TableHead>
                        <TableHead className="text-right">Late</TableHead>
                        <TableHead className="w-40">Rate</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{row.class}</TableCell>
                            <TableCell className="text-right">{row.total}</TableCell>
                            <TableCell className="text-right text-green-600">{row.present}</TableCell>
                            <TableCell className="text-right text-red-500">{row.absent}</TableCell>
                            <TableCell className="text-right text-yellow-600">{row.late}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Progress value={row.rate} className="h-2 flex-1" />
                                    <span className="text-xs font-medium w-10 text-right">{row.rate}%</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IAttendanceReports {
    filters: {
        dateRange: string;
        classes: string[];
    };
    summary: {
        label: string;
        value: string;
        subtitle?: string;
    }[];
    classReports: {
        class: string;
        total: number;
        present: number;
        absent: number;
        late: number;
        rate: number;
    }[];
}
