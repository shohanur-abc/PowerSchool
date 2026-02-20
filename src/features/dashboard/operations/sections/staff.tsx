import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function StaffManagement({ staff }: IStaffManagement) {
    return (
        <div className="space-y-6">
            <Header />
            <StaffTable staff={staff} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Staff</h1>
            <p className="text-muted-foreground mt-1">Manage teaching and non-teaching staff members</p>
        </div>
        <Button className="gap-2">
            <Plus className="size-4" />
            Add Staff
        </Button>
    </div>
);

const StaffTable = ({ staff }: { staff: IStaffManagement['staff'] }) => (
    <Card>
        <CardHeader>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <CardTitle className="text-base">All Staff</CardTitle>
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input placeholder="Search staff..." className="pl-9" />
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {staff.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{member.name}</p>
                                    <p className="text-xs text-muted-foreground">ID: {member.staffId}</p>
                                </div>
                            </TableCell>
                            <TableCell className="text-muted-foreground">{member.subject}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{member.email}</TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{member.role}</Badge>
                            </TableCell>
                            <TableCell>
                                <StaffStatusBadge status={member.status} />
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

const StaffStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
        'on-leave': { label: 'On Leave', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IStaffManagement {
    staff: {
        id: string;
        staffId: string;
        name: string;
        subject: string;
        email: string;
        role: string;
        status: string;
    }[];
}
