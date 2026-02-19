import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function ParentNotices({ title, notices }: IParentNotices) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-95 pr-3">
                    <div className="space-y-3">
                        {notices.map((notice) => (
                            <NoticeRow key={notice.id} {...notice} />
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const NoticeRow = ({ title, date, priority, preview }: INoticeItem) => (
    <div className="rounded-lg border p-3 hover:bg-muted/50 transition-colors space-y-1.5">
        <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium truncate">{title}</p>
            <Badge className={priorityBadge({ priority })}>{priority}</Badge>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2">{preview}</p>
        <p className="text-xs text-muted-foreground">{date}</p>
    </div>
);

// ============= VARIANTS =============
const priorityBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize shrink-0',
    {
        variants: {
            priority: {
                high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
                medium:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                low: 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
            },
        },
        defaultVariants: {
            priority: 'medium',
        },
    }
);

// ============= TYPES =============
interface INoticeItem {
    id: string;
    title: string;
    date: string;
    priority: 'high' | 'medium' | 'low';
    /** Filtered for parent audience */
    preview: string;
}

interface IParentNotices {
    title: string;
    notices: INoticeItem[];
}
