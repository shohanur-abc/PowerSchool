'use client';

import { type LucideIcon, Star, Play, Clock } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function FavoriteReports({
    title,
    description,
    reports,
    onRun,
}: IFavoriteReports) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                {reports.length > 0 ? (
                    <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
                        {reports.map((report) => (
                            <FavoriteCard
                                key={report.id}
                                report={report}
                                onRun={onRun}
                            />
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
const FavoriteCard = ({
    report,
    onRun,
}: {
    report: IFavoriteReport;
    onRun?: (reportId: string) => void;
}) => (
    <div className="flex flex-col gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow">
        <div className="flex items-start justify-between gap-2">
            <FavoriteIcon icon={report.icon} />
            <Star className="size-4 text-amber-500 fill-amber-500 shrink-0" />
        </div>

        <div className="space-y-1 flex-1">
            <p className="text-sm font-medium leading-snug">{report.name}</p>
            {report.description && (
                <p className="text-xs text-muted-foreground line-clamp-2">
                    {report.description}
                </p>
            )}
        </div>

        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="size-3" />
                <span>{report.lastRunAt}</span>
            </div>
            {onRun && (
                <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => onRun(report.id)}
                >
                    <Play className="size-3 mr-1" />
                    Run
                </Button>
            )}
        </div>
    </div>
);

const FavoriteIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="size-4 text-primary" />
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <Star className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">
            No favorite reports yet
        </p>
        <p className="text-xs text-muted-foreground mt-1">
            Star reports to access them quickly
        </p>
    </div>
);

// ============= TYPES =============
interface IFavoriteReport {
    id: string;
    name: string;
    description?: string;
    icon: LucideIcon;
    lastRunAt: string;
}

interface IFavoriteReports {
    title: string;
    description?: string;
    reports: IFavoriteReport[];
    onRun?: (reportId: string) => void;
}
