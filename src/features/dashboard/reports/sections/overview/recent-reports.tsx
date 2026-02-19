'use client';

import { Download, FileText, Clock } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// ============= MAIN COMPONENT =============
export default function RecentReports({
    title,
    description,
    reports,
    onDownload,
}: IRecentReports) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent className="space-y-3">
                {reports.length > 0 ? (
                    reports.map((report) => (
                        <ReportItem
                            key={report.id}
                            report={report}
                            onDownload={onDownload}
                        />
                    ))
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReportItem = ({
    report,
    onDownload,
}: {
    report: IReportEntry;
    onDownload?: (reportId: string) => void;
}) => (
    <div className="@container flex flex-col @lg:flex-row @lg:items-center gap-3 rounded-lg border p-3 hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-3 flex-1 min-w-0">
            <ReportIcon />
            <div className="min-w-0 flex-1 space-y-0.5">
                <p className="text-sm font-medium truncate">{report.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="size-3 shrink-0" />
                    <span>{report.generatedAt}</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2 @lg:gap-3">
            <TypeBadge type={report.type} />
            <FormatBadge format={report.format} />
            <GeneratorAvatar generator={report.generatedBy} />
            {onDownload && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 shrink-0"
                    onClick={() => onDownload(report.id)}
                >
                    <Download className="size-4" />
                    <span className="sr-only">Download</span>
                </Button>
            )}
        </div>
    </div>
);

const ReportIcon = () => (
    <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <FileText className="size-4 text-primary" />
    </div>
);

const TypeBadge = ({ type }: { type: string }) => (
    <Badge variant="secondary" className="text-xs shrink-0">
        {type}
    </Badge>
);

const FormatBadge = ({ format }: { format: IReportFormat }) => (
    <Badge variant="outline" className="text-xs shrink-0">
        {format}
    </Badge>
);

const GeneratorAvatar = ({ generator }: { generator: IGenerator }) => (
    <Avatar className="size-7 shrink-0">
        {generator.avatar && <AvatarImage src={generator.avatar} alt={generator.name} />}
        <AvatarFallback className="text-xs">
            {getInitials(generator.name)}
        </AvatarFallback>
    </Avatar>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <FileText className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">
            No recently generated reports
        </p>
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string): string =>
    name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

// ============= TYPES =============
type IReportFormat = 'PDF' | 'Excel' | 'CSV';

interface IGenerator {
    name: string;
    avatar?: string;
}

interface IReportEntry {
    id: string;
    name: string;
    type: string;
    generatedAt: string;
    format: IReportFormat;
    generatedBy: IGenerator;
}

interface IRecentReports {
    title: string;
    description?: string;
    reports: IReportEntry[];
    onDownload?: (reportId: string) => void;
}
