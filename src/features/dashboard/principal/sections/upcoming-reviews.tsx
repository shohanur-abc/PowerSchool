import { cva } from 'class-variance-authority';
import { Calendar, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function UpcomingReviews({
    title,
    reviews,
}: IUpcomingReviews) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {reviews.map((review) => (
                    <ReviewRow key={review.id} {...review} />
                ))}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReviewRow = ({
    eventTitle,
    dateTime,
    participantsCount,
    type,
}: IReviewItem) => (
    <div className="flex items-start gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <div className="size-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
            <Calendar className="size-4 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2">
                <p className="text-sm font-medium truncate">{eventTitle}</p>
                <Badge className={reviewTypeBadge({ type })}>{type}</Badge>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{dateTime}</span>
                <span className="inline-flex items-center gap-1">
                    <Users className="size-3" />
                    {participantsCount} participants
                </span>
            </div>
        </div>
    </div>
);

// ============= VARIANTS =============
const reviewTypeBadge = cva(
    'text-[10px] px-1.5 py-0 border-transparent capitalize shrink-0',
    {
        variants: {
            type: {
                meeting:
                    'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
                review:
                    'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
                inspection:
                    'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
                workshop:
                    'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300',
            },
        },
        defaultVariants: {
            type: 'meeting',
        },
    }
);

// ============= TYPES =============
interface IReviewItem {
    id: string;
    eventTitle: string;
    dateTime: string;
    participantsCount: number;
    type: 'meeting' | 'review' | 'inspection' | 'workshop';
}

interface IUpcomingReviews {
    title: string;
    reviews: IReviewItem[];
}
