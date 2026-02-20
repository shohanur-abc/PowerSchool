import { FileText, Download, Eye, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function FeeStatements({ recentStatements }: IFeeStatements) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GeneratorForm />
                <PreviewArea />
            </div>
            <RecentStatements statements={recentStatements} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Fee Statements</h1>
        <p className="text-muted-foreground mt-1">Generate and download fee statements for students</p>
    </div>
);

const GeneratorForm = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Generate Statement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-medium">Student</p>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="Search student by name or roll no..." className="pl-9" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                    <p className="text-sm font-medium">From Date</p>
                    <Input type="date" />
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium">To Date</p>
                    <Input type="date" />
                </div>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-medium">Statement Type</p>
                <div className="flex flex-wrap gap-2">
                    {['Full Statement', 'Paid Only', 'Pending Only', 'Overdue Only'].map((type, i) => (
                        <Badge
                            key={i}
                            variant={i === 0 ? 'default' : 'outline'}
                            className="cursor-pointer"
                        >
                            {type}
                        </Badge>
                    ))}
                </div>
            </div>
            <Separator />
            <div className="flex gap-2">
                <Button className="flex-1 gap-2">
                    <Eye className="size-4" /> Preview
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                    <Download className="size-4" /> Download PDF
                </Button>
            </div>
        </CardContent>
    </Card>
);

const PreviewArea = () => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Preview</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="min-h-64 flex flex-col items-center justify-center border-2 border-dashed rounded-lg gap-3 text-muted-foreground">
                <FileText className="size-10 opacity-40" />
                <p className="text-sm">Select a student and date range, then click Preview</p>
            </div>
        </CardContent>
    </Card>
);

const RecentStatements = ({ statements }: { statements: IFeeStatements['recentStatements'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Recently Generated</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Period</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Generated</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {statements.map((stmt, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{stmt.studentName}</p>
                                    <p className="text-xs text-muted-foreground">{stmt.class}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{stmt.period}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{stmt.type}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{stmt.generatedAt}</TableCell>
                            <TableCell className="text-right">
                                <Button size="sm" variant="ghost" className="h-7 gap-1 text-xs">
                                    <Download className="size-3" /> Download
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IFeeStatements {
    recentStatements: {
        studentName: string;
        class: string;
        period: string;
        type: string;
        generatedAt: string;
    }[];
}
