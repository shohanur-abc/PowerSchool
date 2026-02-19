import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function NoticePreview({
    title,
    description,
    notice,
}: INoticePreview) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {notice ? <PreviewContent {...notice} /> : <EmptyPreview />}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const PreviewContent = ({
    noticeTitle,
    content,
    priority,
    audience,
    author,
    date,
}: IPreviewData) => (
    <Card className="border-2">
        <CardHeader className="space-y-3">
            <div className="flex items-start justify-between gap-3">
                <PriorityIndicator priority={priority} />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {date}
                </span>
            </div>
            <CardTitle className="text-lg leading-snug">
                {noticeTitle || 'Untitled Notice'}
            </CardTitle>
            <AuthorRow name={author.name} avatar={author.avatar} />
        </CardHeader>
        <Separator />
        <CardContent className="pt-4 space-y-4">
            <div className="prose prose-sm max-w-none">
                <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                    {content || 'No content yet...'}
                </p>
            </div>
            {audience.length > 0 && (
                <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs text-muted-foreground">To:</span>
                    <div className="flex flex-wrap gap-1">
                        {audience.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}
        </CardContent>
    </Card>
);

const PriorityIndicator = ({
    priority,
}: {
    priority?: IPreviewData['priority'];
}) =>
    priority ? (
        <Badge className={previewPriorityVariants({ priority })}>
            {priority}
        </Badge>
    ) : null;

const AuthorRow = ({
    name,
    avatar,
}: {
    name: string;
    avatar?: string;
}) => (
    <div className="flex items-center gap-2">
        <Avatar className="size-7">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-[10px]">
                {getInitials(name)}
            </AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">{name}</span>
    </div>
);

const EmptyPreview = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed rounded-lg">
        <p className="text-sm text-muted-foreground">
            Start composing to see a live preview
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
const previewPriorityVariants = cva('text-xs px-2 py-0.5', {
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
interface IPreviewData {
    noticeTitle: string;
    content: string;
    priority?: 'urgent' | 'high' | 'medium' | 'low';
    audience: string[];
    author: {
        name: string;
        avatar?: string;
    };
    date: string;
}

interface INoticePreview {
    title: string;
    description?: string;
    notice?: IPreviewData;
}
