import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function ClassesManagement({ classes }: IClassesManagement) {
    return (
        <div className="space-y-6">
            <Header />
            <ClassesTable classes={classes} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
            <p className="text-muted-foreground mt-1">Manage all classes, sections and assigned teachers</p>
        </div>
        <Button className="gap-2">
            <Plus className="size-4" />
            Add Class
        </Button>
    </div>
);

const ClassesTable = ({ classes }: { classes: IClassesManagement['classes'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">All Classes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Class Name</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Section</TableHead>
                        <TableHead>Class Teacher</TableHead>
                        <TableHead className="text-center">Students</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {classes.map((cls) => (
                        <TableRow key={cls.id}>
                            <TableCell className="font-medium">{cls.name}</TableCell>
                            <TableCell className="text-muted-foreground">{cls.grade}</TableCell>
                            <TableCell>
                                <Badge variant="secondary">{cls.section}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{cls.teacher}</TableCell>
                            <TableCell className="text-center font-semibold">{cls.studentCount}</TableCell>
                            <TableCell>
                                <ClassStatusBadge status={cls.status} />
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

const ClassStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IClassesManagement {
    classes: {
        id: string;
        name: string;
        grade: string;
        section: string;
        teacher: string;
        studentCount: number;
        status: string;
    }[];
}
