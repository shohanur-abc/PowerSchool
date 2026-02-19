import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function ParentWelcome({
    name,
    avatar,
    childrenCount,
    childrenNames,
}: IParentWelcome) {
    return (
        <Card>
            <CardContent className="@container flex flex-col @lg:flex-row items-start @lg:items-center gap-4 pt-6">
                <Avatar size="lg">
                    {/* TODO: Replace with actual parent avatar */}
                    <AvatarImage src={avatar} alt={name} />
                    <AvatarFallback>{getInitials(name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 space-y-1">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Welcome, {name}!
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {childrenNames.join(', ')}
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2">
                    <Users className="size-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Children</span>
                    <Badge variant="secondary" className="tabular-nums">
                        {childrenCount}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
}

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= TYPES =============
interface IParentWelcome {
    name: string;
    avatar: string;
    childrenCount: number;
    childrenNames: string[];
}
