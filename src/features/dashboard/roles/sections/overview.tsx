import { Shield, Users, Lock, Settings, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function RolesOverview({ roles, stats }: IRolesOverview) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <StatsGrid stats={stats} />
            <RolesTable roles={roles} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Roles &amp; Permissions</h1>
            <p className="text-muted-foreground mt-1">Manage user roles and access control</p>
        </div>
        <Button>
            <Shield className="size-4 mr-2" />
            Add Role
        </Button>
    </div>
);

const StatsGrid = ({ stats }: { stats: IRolesOverview['stats'] }) => (
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
        roles: <Shield className="size-5 text-blue-500" />,
        users: <Users className="size-5 text-green-500" />,
        active: <Lock className="size-5 text-purple-500" />,
        permissions: <Settings className="size-5 text-orange-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const RolesTable = ({ roles }: { roles: IRolesOverview['roles'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">All Roles</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Role Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Permissions</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {roles.map((role, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{role.name}</TableCell>
                            <TableCell className="text-muted-foreground">{role.description}</TableCell>
                            <TableCell>{role.userCount.toLocaleString()}</TableCell>
                            <TableCell>{role.permissionsCount}</TableCell>
                            <TableCell>
                                <RoleStatusBadge status={role.status} />
                            </TableCell>
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

const RoleStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IRolesOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
    }[];
    roles: {
        name: string;
        description: string;
        userCount: number;
        permissionsCount: number;
        status: string;
    }[];
}
