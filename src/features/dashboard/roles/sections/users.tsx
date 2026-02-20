import { UserPlus, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function RoleUsers({ users, roles }: IRoleUsers) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <RoleFilter roles={roles} />
            <UsersTable users={users} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Users by Role</h1>
            <p className="text-muted-foreground mt-1">View and manage users assigned to each role</p>
        </div>
        <Button>
            <UserPlus className="size-4 mr-2" />
            Assign Role
        </Button>
    </div>
);

const RoleFilter = ({ roles }: { roles: string[] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Filter by Role</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="cursor-pointer px-4 py-2 text-sm">All</Badge>
                {roles.map((role, i) => (
                    <Badge key={i} variant="outline" className="cursor-pointer px-4 py-2 text-sm">{role}</Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

const UsersTable = ({ users }: { users: IRoleUsers['users'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Users</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="text-muted-foreground">{user.email}</TableCell>
                            <TableCell>
                                <RoleBadge role={user.role} />
                            </TableCell>
                            <TableCell>
                                <StatusBadge status={user.status} />
                            </TableCell>
                            <TableCell className="text-muted-foreground">{user.assignedDate}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Edit className="size-3 mr-1" />
                                        Edit
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                        <Trash2 className="size-3 mr-1" />
                                        Remove
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

const RoleBadge = ({ role }: { role: string }) => {
    const map: Record<string, string> = {
        Admin: 'bg-red-100 text-red-700 border-red-200',
        Principal: 'bg-purple-100 text-purple-700 border-purple-200',
        Teacher: 'bg-blue-100 text-blue-700 border-blue-200',
        Parent: 'bg-yellow-100 text-yellow-700 border-yellow-200',
        Student: 'bg-green-100 text-green-700 border-green-200',
    };
    return <Badge variant="outline" className={map[role] ?? ''}>{role}</Badge>;
};

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IRoleUsers {
    users: {
        name: string;
        email: string;
        role: string;
        status: string;
        assignedDate: string;
    }[];
    roles: string[];
}
