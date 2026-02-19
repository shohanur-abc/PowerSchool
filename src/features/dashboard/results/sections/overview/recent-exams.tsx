import { CalendarDays, BookOpen } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function RecentExams({ title, description, exams }: IRecentExams) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
                    {exams.map((exam) => (
                        <ExamCard key={exam.id} {...exam} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ExamCard = ({
    name,
    className: cls,
    date,
    subjectCount,
    status,
}: IExamItem) => (
    <Card className="hover:shadow-md transition-shadow">
        <CardContent className="pt-5 space-y-3">
            <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-sm leading-tight">{name}</h4>
                <Badge className={examStatusVariants({ status })}>
                    {status}
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{cls}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <ExamMeta icon={CalendarDays} label={date} />
                <ExamMeta
                    icon={BookOpen}
                    label={`${subjectCount} subject${subjectCount !== 1 ? 's' : ''}`}
                />
            </div>
        </CardContent>
    </Card>
);

const ExamMeta = ({
    icon: Icon,
    label,
}: {
    icon: typeof CalendarDays;
    label: string;
}) => (
    <span className="inline-flex items-center gap-1">
        <Icon className="size-3.5" />
        {label}
    </span>
);

// ============= VARIANTS =============
const examStatusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            completed: 'bg-emerald-600 text-white hover:bg-emerald-700',
            ongoing: 'bg-blue-500 text-white hover:bg-blue-600',
            upcoming: 'bg-amber-500 text-white hover:bg-amber-600',
        },
    },
    defaultVariants: {
        status: 'upcoming',
    },
});

// ============= TYPES =============
interface IExamItem {
    id: string;
    name: string;
    className: string;
    date: string;
    subjectCount: number;
    status: 'completed' | 'ongoing' | 'upcoming';
}

interface IRecentExams {
    title: string;
    description?: string;
    exams: IExamItem[];
}
