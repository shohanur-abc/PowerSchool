import { Plus, Pencil, Trash2, Search, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function StudentsManagement({ students }: IStudentsManagement) {
    return (
        <div className="space-y-6">
            <Header />
            <StudentsTable students={students} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Students</h1>
            <p className="text-muted-foreground mt-1">Manage student records, enrolments and information</p>
        </div>
        <Button className="gap-2">
            <Plus className="size-4" />
            Add Student
        </Button>
    </div>
);

const StudentsTable = ({ students }: { students: IStudentsManagement['students'] }) => (
    <Card>
        <CardHeader>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <CardTitle className="text-base">All Students</CardTitle>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input placeholder="Search students..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="size-4" />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Roll No</TableHead>
                        <TableHead>Parent / Guardian</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((student) => (
                        <TableRow key={student.id}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{student.name}</p>
                                    <p className="text-xs text-muted-foreground">{student.email}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{student.class}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{student.rollNo}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{student.parent}</TableCell>
                            <TableCell>
                                <StudentStatusBadge status={student.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                    <Button variant="ghost" size="icon" className="size-8">
                                        <Pencil className="size-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="size-8 text-destructive hover:text-destructive">
                                        <Trash2 className="size-4" />
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

const StudentStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
        suspended: { label: 'Suspended', className: 'bg-red-100 text-red-700 border-red-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IStudentsManagement {
    students: {
        id: string;
        name: string;
        email: string;
        class: string;
        rollNo: string;
        parent: string;
        status: string;
    }[];
}
