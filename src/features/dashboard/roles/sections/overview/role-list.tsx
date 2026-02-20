import { type LucideIcon, Users, Shield, ShieldCheck } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function RoleList({ roles }: IRoleList) {
    return (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
            {roles.map((role) => (
                <RoleCard key={role.id} {...role} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const RoleCard = ({
    name,
    description,
    userCount,
    permissionsCount,
    color,
    icon: iconName,
}: IRoleItem) => {
    const Icon = iconName ? getIcon(iconName) : undefined;
    return (
        <Card className="hover:shadow-md transition-shadow overflow-hidden">
            <ColorIndicator color={color} />
            <CardHeader className="flex-row items-start justify-between space-y-0 pb-2">
                <div className="space-y-1">
                    <CardTitle className="text-base flex items-center gap-2">
                        <RoleIcon icon={Icon} />
                        {name}
                    </CardTitle>
                    {description && (
                        <CardDescription className="text-xs line-clamp-2">
                            {description}
                        </CardDescription>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="gap-1 text-xs">
                        <Users className="size-3" />
                        {userCount} users
                    </Badge>
                    <Badge variant="outline" className="gap-1 text-xs">
                        <ShieldCheck className="size-3" />
                        {permissionsCount} permissions
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
};

const ColorIndicator = ({ color }: { color: string }) => (
    <div className="h-1 w-full" style={{ backgroundColor: color }} />
);

const RoleIcon = ({ icon: Icon }: { icon?: LucideIcon }) => {
    const Ic = Icon ?? Shield;
    return (
        <div className="size-7 rounded-md bg-muted flex items-center justify-center shrink-0">
            <Ic className="size-3.5 text-muted-foreground" />
        </div>
    );
};

// ============= TYPES =============
interface IRoleItem {
    id: string;
    name: string;
    description?: string;
    userCount: number;
    permissionsCount: number;
    color: string;
    icon?: string;
}

interface IRoleList {
    roles: IRoleItem[];
}
