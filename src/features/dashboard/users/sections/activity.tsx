import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function UserActivity({ activities }: IUserActivity) {
    return (
        <div className="space-y-6">
            <PageHeader />
            <ActivityTable activities={activities} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const PageHeader = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">User Activity</h1>
        <p className="text-muted-foreground mt-1">Monitor and audit user actions across the system</p>
    </div>
);

const ActivityTable = ({ activities }: { activities: IUserActivity['activities'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
                <Activity className="size-4" />
                Activity Log
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Resource</TableHead>
                        <TableHead>IP Address</TableHead>
                        <TableHead>Timestamp</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activities.map((activity, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium">{activity.user}</TableCell>
                            <TableCell className="text-muted-foreground">{activity.action}</TableCell>
                            <TableCell className="text-muted-foreground">{activity.resource}</TableCell>
                            <TableCell className="font-mono text-sm text-muted-foreground">{activity.ipAddress}</TableCell>
                            <TableCell className="text-muted-foreground">{activity.timestamp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IUserActivity {
    activities: {
        user: string;
        action: string;
        resource: string;
        ipAddress: string;
        timestamp: string;
    }[];
}
