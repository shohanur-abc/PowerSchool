import Link from 'next/link';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function QuickLinks({ links }: IQuickLinks) {
    return (
        <div className="@container grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-5 gap-3">
            {links.map((link, i) => (
                <LinkCard key={i} {...link} />
            ))}
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const LinkCard = ({
    title,
    description,
    icon: iconName,
    href,
}: IQuickLinkItem) => {
    const Icon = getIcon(iconName);
    return (
        <Link href={href} className="group">
            <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <CardContent className="flex items-start gap-3 pt-0">
                    <LinkIcon icon={Icon} />
                    <div className="flex-1 min-w-0 space-y-0.5">
                        <div className="flex items-center justify-between gap-1">
                            <CardTitle className="text-sm group-hover:text-primary transition-colors">
                                {title}
                            </CardTitle>
                            <ArrowRight className="size-3.5 text-muted-foreground opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                        </div>
                        <CardDescription className="text-xs line-clamp-2">
                            {description}
                        </CardDescription>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

const LinkIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="size-4 text-primary" />
    </div>
);

// TODO: Add badge count for pending items in each module

// ============= TYPES =============
interface IQuickLinkItem {
    title: string;
    description: string;
    icon: string;
    href: string;
}

interface IQuickLinks {
    links: IQuickLinkItem[];
}
