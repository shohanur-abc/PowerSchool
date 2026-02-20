import { Shield, Edit, Trash2, Users, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function ManageRoles({ roles }: IManageRoles) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <RolesGrid roles={roles} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Roles</h1>
            <p className="text-muted-foreground mt-1">Create and configure roles for your organization</p>
        </div>
        <Button>
            <Shield className="size-4 mr-2" />
            Create New Role
        </Button>
    </div>
);

const RolesGrid = ({ roles }: { roles: IManageRoles['roles'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {roles.map((role, i) => (
            <RoleCard key={i} role={role} />
        ))}
    </div>
);

const RoleCard = ({ role }: { role: IManageRoles['roles'][number] }) => (
    <Card>
        <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
                <CardTitle className="text-base">{role.name}</CardTitle>
                <StatusBadge status={role.status} />
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">{role.description}</p>
            <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="size-4" />
                    {role.userCount.toLocaleString()} users
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                    <Lock className="size-4" />
                    {role.permissionsCount} permissions
                </span>
            </div>
            <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="size-3 mr-1" />
                    Edit
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-red-600 hover:text-red-700">
                    <Trash2 className="size-3 mr-1" />
                    Delete
                </Button>
            </div>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        active: { label: 'Active', className: 'bg-green-100 text-green-700 border-green-200' },
        inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IManageRoles {
    roles: {
        name: string;
        description: string;
        userCount: number;
        permissionsCount: number;
        status: string;
    }[];
}
