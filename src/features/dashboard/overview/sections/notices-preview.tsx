import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function NoticesPreview({ title, notices, }: INoticesPreview) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <NoticeList notices={notices} />
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const NoticeList = ({ notices }: { notices: INoticeItem[] }) => (
    <ScrollArea className="h-95 pr-3">
        <div className="space-y-3">
            {notices.map((notice) => (
                <NoticeRow key={notice.id} {...notice} />
            ))}
        </div>
    </ScrollArea>
);

const NoticeRow = ({ title, content, date, priority, author }: INoticeItem) => (
    <div className="space-y-1.5 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium leading-snug line-clamp-1">
                {title}
            </p>
            <PriorityBadge priority={priority} />
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {content}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{author}</span>
            <span className="tabular-nums">{date}</span>
        </div>
    </div>
);

const PriorityBadge = ({ priority }: { priority: INoticeItem['priority'] }) => {
    const config = priorityConfig[priority];

    return (
        <Badge variant={config.variant} className="text-[10px] px-1.5 py-0 shrink-0">
            {priority}
        </Badge>
    );
};

// ============= HELPERS =============
const priorityConfig: Record<
    INoticeItem['priority'],
    { variant: 'destructive' | 'default' | 'secondary' }
> = {
    high: { variant: 'destructive' },
    medium: { variant: 'default' },
    low: { variant: 'secondary' },
};

// ============= TYPES =============
interface INoticeItem {
    id: string;
    title: string;
    content: string;
    date: string;
    priority: 'high' | 'medium' | 'low';
    author: string;
}

interface INoticesPreview {
    title: string;
    notices: INoticeItem[];
}
