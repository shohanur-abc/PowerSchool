import { FileText, Download, Eye, ChevronDown, Printer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function ReportCards({ classes, terms, generatedCards, selectedClass, selectedTerm }: IReportCards) {
    return (
        <div className="space-y-6">
            <Header />
            <GeneratePanel classes={classes} terms={terms} selectedClass={selectedClass} selectedTerm={selectedTerm} />
            <GeneratedCardsList cards={generatedCards} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Report Cards</h1>
            <p className="text-muted-foreground mt-1">Generate and distribute student report cards</p>
        </div>
        <Button variant="outline" className="gap-2">
            <Printer className="size-4" />
            Print All
        </Button>
    </div>
);

const GeneratePanel = ({ classes, terms, selectedClass, selectedTerm }: Pick<IReportCards, 'classes' | 'terms' | 'selectedClass' | 'selectedTerm'>) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Generate Report Cards</CardTitle>
            <CardDescription>Select class and term to generate report cards for all students</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-4 items-end">
                <div className="space-y-1.5 min-w-[200px]">
                    <p className="text-sm font-medium">Class</p>
                    <Select defaultValue={selectedClass}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                            <ChevronDown className="size-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes.map((cls) => (
                                <SelectItem key={cls.value} value={cls.value}>{cls.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5 min-w-[200px]">
                    <p className="text-sm font-medium">Term / Exam</p>
                    <Select defaultValue={selectedTerm}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select term" />
                            <ChevronDown className="size-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {terms.map((term) => (
                                <SelectItem key={term.value} value={term.value}>{term.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button className="gap-2">
                    <FileText className="size-4" />
                    Generate Report Cards
                </Button>
            </div>
        </CardContent>
    </Card>
);

const GeneratedCardsList = ({ cards }: { cards: IReportCards['generatedCards'] }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-base">Generated Report Cards</CardTitle>
                <CardDescription>{cards.length} report cards available</CardDescription>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Roll No.</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Term</TableHead>
                        <TableHead>Overall Grade</TableHead>
                        <TableHead>Generated On</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cards.map((card, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{card.studentName}</TableCell>
                            <TableCell className="text-muted-foreground">{card.rollNo}</TableCell>
                            <TableCell className="text-muted-foreground">{card.class}</TableCell>
                            <TableCell className="text-muted-foreground">{card.term}</TableCell>
                            <TableCell>
                                <GradeBadge grade={card.overallGrade} />
                            </TableCell>
                            <TableCell className="text-muted-foreground">{card.generatedOn}</TableCell>
                            <TableCell>
                                <CardStatusBadge status={card.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost" size="sm" className="gap-1 h-7 px-2">
                                        <Eye className="size-3" />
                                        View
                                    </Button>
                                    <Button variant="ghost" size="sm" className="gap-1 h-7 px-2">
                                        <Download className="size-3" />
                                        PDF
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const GradeBadge = ({ grade }: { grade: string }) => {
    const map: Record<string, string> = {
        'A+': 'bg-green-100 text-green-700 border-green-200',
        A: 'bg-green-100 text-green-700 border-green-200',
        'A-': 'bg-green-100 text-green-700 border-green-200',
        B: 'bg-blue-100 text-blue-700 border-blue-200',
        C: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        D: 'bg-orange-100 text-orange-700 border-orange-200',
        F: 'bg-red-100 text-red-700 border-red-200',
    };
    return <Badge variant="outline" className={map[grade] ?? ''}>{grade}</Badge>;
};

const CardStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        ready: { label: 'Ready', className: 'bg-green-100 text-green-700 border-green-200' },
        generating: { label: 'Generating', className: 'bg-blue-100 text-blue-700 border-blue-200' },
        distributed: { label: 'Distributed', className: 'bg-purple-100 text-purple-700 border-purple-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IReportCards {
    classes: { value: string; label: string }[];
    terms: { value: string; label: string }[];
    selectedClass: string;
    selectedTerm: string;
    generatedCards: {
        studentName: string;
        rollNo: string;
        class: string;
        term: string;
        overallGrade: string;
        generatedOn: string;
        status: string;
    }[];
}
