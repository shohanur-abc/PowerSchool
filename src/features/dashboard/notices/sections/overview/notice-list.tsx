import { FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function NoticeList({
    title,
    description,
    notices,
}: INoticeList) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {notices.length > 0 ? (
                    <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
                        {notices.map((notice) => (
                            <NoticeCard key={notice.id} {...notice} />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const NoticeCard = ({
    title,
    preview,
    author,
    date,
    priority,
    audience,
}: INoticeItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-2 space-y-2">
            <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-sm font-semibold leading-snug line-clamp-2">
                    {title}
                </CardTitle>
                <PriorityBadge priority={priority} />
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
                {preview}
            </p>
        </CardHeader>
        <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
                {audience.map((tag) => (
                    <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] px-1.5 py-0"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
            <AuthorInfo name={author.name} avatar={author.avatar} date={date} />
        </CardContent>
    </Card>
);

const AuthorInfo = ({
    name,
    avatar,
    date,
}: {
    name: string;
    avatar?: string;
    date: string;
}) => (
    <div className="flex items-center gap-2">
        <Avatar className="size-6">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-[10px]">
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">{name}</p>
        </div>
        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
            {date}
        </span>
    </div>
);

const PriorityBadge = ({
    priority,
}: {
    priority: INoticeItem['priority'];
}) => (
    <Badge className={priorityVariants({ priority })}>{priority}</Badge>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No notices available at this time
        </p>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= VARIANTS =============
const priorityVariants = cva('text-[10px] px-1.5 py-0 shrink-0', {
    variants: {
        priority: {
            urgent: 'bg-red-600 text-white hover:bg-red-700',
            high: 'bg-orange-500 text-white hover:bg-orange-600',
            medium: 'bg-yellow-500 text-white hover:bg-yellow-600',
            low: 'bg-slate-400 text-white hover:bg-slate-500',
        },
    },
    defaultVariants: {
        priority: 'medium',
    },
});

// ============= TYPES =============
interface INoticeItem {
    id: string;
    title: string;
    preview: string;
    author: {
        name: string;
        avatar?: string;
    };
    date: string;
    priority: 'urgent' | 'high' | 'medium' | 'low';
    audience: string[];
}

interface INoticeList {
    title: string;
    description?: string;
    notices: INoticeItem[];
}
