import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function QuickActions({ actions }: IQuickActions) {
    return (
        <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 gap-3">
            {actions.map((action, i) => (
                <ActionCard key={i} {...action} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const ActionCard = ({
    label,
    icon: Icon,
    href,
    description,
}: IActionItem) => (
    <Link href={href} className="group">
        <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <CardContent className="flex items-start gap-3 pt-0">
                <ActionIcon icon={Icon} />
                <div className="space-y-0.5 min-w-0">
                    <CardTitle className="text-sm group-hover:text-primary transition-colors">
                        {label}
                    </CardTitle>
                    <CardDescription className="text-xs line-clamp-2">
                        {description}
                    </CardDescription>
                </div>
            </CardContent>
        </Card>
    </Link>
);

const ActionIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="size-4 text-primary" />
    </div>
);

// ============= TYPES =============
interface IActionItem {
    label: string;
    icon: LucideIcon;
    href: string;
    description: string;
    variant?: string;
}

interface IQuickActions {
    actions: IActionItem[];
}
