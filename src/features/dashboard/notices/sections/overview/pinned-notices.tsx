import { Pin, FileText } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// ============= MAIN COMPONENT =============
export default function PinnedNotices({
    title,
    description,
    notices,
}: IPinnedNotices) {
    return (
        <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
                <Pin className="size-5 text-primary shrink-0" />
                <div className="space-y-1">
                    <CardTitle>{title}</CardTitle>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {notices.length > 0 ? (
                    <PinnedList notices={notices} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const PinnedList = ({ notices }: { notices: IPinnedItem[] }) => (
    <ScrollArea className="h-96 pr-3">
        <div className="space-y-1">
            {notices.map((notice, i) => (
                <div key={notice.id}>
                    <PinnedItem {...notice} />
                    {i < notices.length - 1 && <Separator className="my-3" />}
                </div>
            ))}
        </div>
    </ScrollArea>
);

const PinnedItem = ({ title, date, content }: IPinnedItem) => (
    <div className="space-y-2 py-1">
        <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2 min-w-0">
                <Pin className="size-3.5 text-primary shrink-0 mt-0.5" />
                <h4 className="text-sm font-semibold leading-snug">{title}</h4>
            </div>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                {date}
            </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed pl-5.5">
            {content}
        </p>
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No pinned notices at this time
        </p>
    </div>
);

// ============= TYPES =============
interface IPinnedItem {
    id: string;
    title: string;
    date: string;
    content: string;
}

interface IPinnedNotices {
    title: string;
    description?: string;
    notices: IPinnedItem[];
}
