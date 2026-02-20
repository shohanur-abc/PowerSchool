import { KeyRound, RefreshCw, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function UserCredentials({ users }: IUserCredentials) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <CredentialsTable users={users} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">User Credentials</h1>
        <p className="text-muted-foreground mt-1">Manage passwords and credential security for all users</p>
    </div>
);

const CredentialsTable = ({ users }: { users: IUserCredentials['users'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <KeyRound className="size-4" />
                Credentials Overview
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Last Password Change</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell className="text-muted-foreground">{user.email}</TableCell>
                            <TableCell className="text-muted-foreground">{user.lastPasswordChange}</TableCell>
                            <TableCell><CredentialStatusBadge status={user.credentialStatus} /></TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline">
                                        <RefreshCw className="size-3 mr-1" />
                                        Reset Password
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-orange-600 hover:text-orange-700">
                                        <AlertCircle className="size-3 mr-1" />
                                        Force Change
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

const CredentialStatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        normal: { label: 'Normal', className: 'bg-green-100 text-green-700 border-green-200' },
        'force-change': { label: 'Force Change', className: 'bg-orange-100 text-orange-700 border-orange-200' },
        locked: { label: 'Locked', className: 'bg-red-100 text-red-700 border-red-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IUserCredentials {
    users: {
        name: string;
        email: string;
        lastPasswordChange: string;
        credentialStatus: string;
    }[];
}
