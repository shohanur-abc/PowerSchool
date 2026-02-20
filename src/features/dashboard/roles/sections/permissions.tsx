import { Shield, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function RolePermissions({ roles, selectedRole, permissions }: IRolePermissions) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <RoleSelector roles={roles} selectedRole={selectedRole} />
            <PermissionsMatrix permissions={permissions} selectedRole={selectedRole} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Role Permissions</h1>
            <p className="text-muted-foreground mt-1">Configure feature access for each role</p>
        </div>
        <Button variant="outline">
            <Shield className="size-4 mr-2" />
            Save Changes
        </Button>
    </div>
);

const RoleSelector = ({ roles, selectedRole }: { roles: string[]; selectedRole: string }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Select Role</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2">
                {roles.map((role, i) => (
                    <Badge
                        key={i}
                        variant={role === selectedRole ? 'default' : 'outline'}
                        className="cursor-pointer px-4 py-2 text-sm"
                    >
                        {role}
                    </Badge>
                ))}
            </div>
        </CardContent>
    </Card>
);

const PermissionsMatrix = ({ permissions, selectedRole }: { permissions: IRolePermissions['permissions']; selectedRole: string }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <Shield className="size-4" />
                Permissions for {selectedRole}
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead className="text-center">Read</TableHead>
                        <TableHead className="text-center">Write</TableHead>
                        <TableHead className="text-center">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {permissions.map((perm, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{perm.feature}</TableCell>
                            <TableCell className="text-center">
                                <PermIcon allowed={perm.read} />
                            </TableCell>
                            <TableCell className="text-center">
                                <PermIcon allowed={perm.write} />
                            </TableCell>
                            <TableCell className="text-center">
                                <PermIcon allowed={perm.delete} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const PermIcon = ({ allowed }: { allowed: boolean }) =>
    allowed
        ? <CheckCircle className="size-5 text-green-500 mx-auto" />
        : <XCircle className="size-5 text-red-400 mx-auto" />;

// ============= TYPES =============
interface IRolePermissions {
    roles: string[];
    selectedRole: string;
    permissions: {
        feature: string;
        read: boolean;
        write: boolean;
        delete: boolean;
    }[];
}
