import { Save, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function EnterResults({ classes, exams, students, selectedClass, selectedExam }: IEnterResults) {
    return (
        <div className="space-y-6">
            <Header />
            <FilterBar classes={classes} exams={exams} selectedClass={selectedClass} selectedExam={selectedExam} />
            <ResultsEntryTable students={students} selectedExam={selectedExam} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Enter Results</h1>
        <p className="text-muted-foreground mt-1">Input exam marks and grades for students</p>
    </div>
);

const FilterBar = ({ classes, exams, selectedClass, selectedExam }: Pick<IEnterResults, 'classes' | 'exams' | 'selectedClass' | 'selectedExam'>) => (
    <Card>
        <CardContent className="pt-6">
            <div className="flex flex-wrap gap-4 items-end">
                <div className="space-y-1.5 min-w-[200px]">
                    <p className="text-sm font-medium">Select Class</p>
                    <Select defaultValue={selectedClass}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose class" />
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
                    <p className="text-sm font-medium">Select Exam</p>
                    <Select defaultValue={selectedExam}>
                        <SelectTrigger>
                            <SelectValue placeholder="Choose exam" />
                            <ChevronDown className="size-4 opacity-50" />
                        </SelectTrigger>
                        <SelectContent>
                            {exams.map((exam) => (
                                <SelectItem key={exam.value} value={exam.value}>{exam.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button variant="outline">Load Students</Button>
            </div>
        </CardContent>
    </Card>
);

const ResultsEntryTable = ({ students, selectedExam }: { students: IEnterResults['students']; selectedExam: string }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle className="text-base">Student Results Entry</CardTitle>
                <CardDescription>Enter marks out of {students[0]?.totalMarks ?? 100} for each student</CardDescription>
            </div>
            <div className="flex gap-2">
                <Badge variant="secondary">{students.length} Students</Badge>
                <Button size="sm" className="gap-2">
                    <Save className="size-4" />
                    Save All
                </Button>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Roll No.</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Total Marks</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Remarks</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((student, i) => (
                        <TableRow key={student.id}>
                            <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                            <TableCell className="font-medium">{student.name}</TableCell>
                            <TableCell className="text-muted-foreground">{student.rollNo}</TableCell>
                            <TableCell>
                                <Input
                                    type="number"
                                    defaultValue={student.marksObtained}
                                    placeholder="0"
                                    className="w-24"
                                    min={0}
                                    max={student.totalMarks}
                                />
                            </TableCell>
                            <TableCell className="text-muted-foreground">{student.totalMarks}</TableCell>
                            <TableCell>
                                {student.grade ? (
                                    <GradeBadge grade={student.grade} />
                                ) : (
                                    <span className="text-muted-foreground text-sm">—</span>
                                )}
                            </TableCell>
                            <TableCell>
                                <Input
                                    defaultValue={student.remarks}
                                    placeholder="Optional remarks"
                                    className="w-36"
                                />
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

// ============= TYPES =============
interface IEnterResults {
    classes: { value: string; label: string }[];
    exams: { value: string; label: string }[];
    selectedClass: string;
    selectedExam: string;
    students: {
        id: string;
        name: string;
        rollNo: string;
        marksObtained?: number;
        totalMarks: number;
        grade?: string;
        remarks?: string;
    }[];
}
