import { Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function TopNotices({
    title,
    description,
    notices,
}: ITopNotices) {
    return (
        <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
                <Trophy className="size-5 text-amber-500 shrink-0" />
                <div className="space-y-1">
                    <CardTitle>{title}</CardTitle>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {notices.length > 0 ? (
                    <TopNoticesTable notices={notices} />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const TopNoticesTable = ({ notices }: { notices: ITopNoticeRow[] }) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead className="w-8">#</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-center">Views</TableHead>
                    <TableHead className="text-center">Read Rate</TableHead>
                    <TableHead>Audience</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notices.map((notice, i) => (
                    <TopNoticeRow key={notice.id} rank={i + 1} {...notice} />
                ))}
            </TableBody>
        </Table>
    </div>
);

const TopNoticeRow = ({
    rank,
    title,
    publishedDate,
    views,
    readRate,
    audience,
}: ITopNoticeRow & { rank: number }) => (
    <TableRow>
        <TableCell className="font-medium text-muted-foreground tabular-nums">
            {rank}
        </TableCell>
        <TableCell className="font-medium max-w-48 truncate">{title}</TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {publishedDate}
        </TableCell>
        <TableCell className="text-center tabular-nums">{views}</TableCell>
        <TableCell className="text-center">
            <ReadRateBadge rate={readRate} />
        </TableCell>
        <TableCell>
            <div className="flex flex-wrap gap-1">
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
        </TableCell>
    </TableRow>
);

const ReadRateBadge = ({ rate }: { rate: number }) => (
    <Badge
        variant={getReadRateVariant(rate)}
        className="min-w-12 justify-center text-xs tabular-nums"
    >
        {rate}%
    </Badge>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <Trophy className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No notice performance data available yet
        </p>
    </div>
);

// ============= HELPERS =============
const getReadRateVariant = (
    rate: number
): 'default' | 'secondary' | 'destructive' => {
    if (rate >= 80) return 'default';
    if (rate >= 50) return 'secondary';
    return 'destructive';
};

// ============= TYPES =============
interface ITopNoticeRow {
    id: string;
    title: string;
    publishedDate: string;
    views: number;
    readRate: number;
    audience: string[];
}

interface ITopNotices {
    title: string;
    description?: string;
    notices: ITopNoticeRow[];
}
