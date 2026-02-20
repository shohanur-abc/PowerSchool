import { UserPlus, Edit, Trash2, Users, UserCheck, UserX, CalendarPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function UsersOverview({ stats, users }: IUsersOverview) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <StatsGrid stats={stats} />
            <UsersTable users={users} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground mt-1">Manage all system users and their access</p>
        </div>
        <Button>
            <UserPlus className="size-4 mr-2" />
            Add User
        </Button>
    </div>
);

const StatsGrid = ({ stats }: { stats: IUsersOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <StatIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                </CardContent>
            </Card>
        ))}
    </div>
);

const StatIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        total: <Users className="size-5 text-blue-500" />,
        active: <UserCheck className="size-5 text-green-500" />,
        inactive: <UserX className="size-5 text-red-500" />,
        new: <CalendarPlus className="size-5 text-purple-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const UsersTable = ({ users }: { users: IUsersOverview['users'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">All Users</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="text-muted-foreground">{user.email}</TableCell>
                            <TableCell><RoleBadge role={user.role} /></TableCell>
                            <TableCell><StatusBadge status={user.status} /></TableCell>
                            <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <Edit className="size-3 mr-1" />
                                        Edit
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                        <Trash2 className="size-3 mr-1" />
                                        Delete
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
interface IUsersOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
    }[];
    users: {
        name: string;
        email: string;
        role: string;
        status: string;
        lastLogin: string;
    }[];
}
