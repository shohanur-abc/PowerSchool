'use client';

import { useState } from 'react';
import { type LucideIcon, FileText, Search } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function ReportCatalog({
    title,
    description,
    categories,
    onGenerate,
}: IReportCatalog) {
    const [search, setSearch] = useState('');

    const allCategoryId = '_all';
    const filteredCategories = categories.map((cat) => ({
        ...cat,
        reports: cat.reports.filter((r) =>
            r.name.toLowerCase().includes(search.toLowerCase())
        ),
    }));
    const allReports = filteredCategories.flatMap((c) => c.reports);

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <div className="relative w-full @xl:w-64">
                        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            placeholder="Search reports..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-8"
                        />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue={allCategoryId}>
                    <TabsList className="flex-wrap h-auto">
                        <TabsTrigger value={allCategoryId}>All</TabsTrigger>
                        {categories.map((cat) => (
                            <TabsTrigger key={cat.id} value={cat.id}>
                                {cat.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={allCategoryId} className="mt-4">
                        <ReportGrid
                            reports={allReports}
                            onGenerate={onGenerate}
                        />
                    </TabsContent>

                    {filteredCategories.map((cat) => (
                        <TabsContent
                            key={cat.id}
                            value={cat.id}
                            className="mt-4"
                        >
                            <ReportGrid
                                reports={cat.reports}
                                onGenerate={onGenerate}
                            />
                        </TabsContent>
                    ))}
                </Tabs>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ReportGrid = ({
    reports,
    onGenerate,
}: {
    reports: ICatalogReport[];
    onGenerate?: (reportId: string) => void;
}) =>
    reports.length > 0 ? (
        <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4">
            {reports.map((report) => (
                <ReportCard
                    key={report.id}
                    report={report}
                    onGenerate={onGenerate}
                />
            ))}
        </div>
    ) : (
        <EmptyState />
    );

const ReportCard = ({
    report,
    onGenerate,
}: {
    report: ICatalogReport;
    onGenerate?: (reportId: string) => void;
}) => (
    <div className="flex flex-col gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow">
        <CatalogIcon icon={report.icon} />
        <div className="space-y-1 flex-1">
            <p className="text-sm font-semibold">{report.name}</p>
            <p className="text-xs text-muted-foreground line-clamp-2">
                {report.description}
            </p>
        </div>
        {onGenerate && (
            <Button
                variant="outline"
                size="sm"
                className="w-full mt-auto"
                onClick={() => onGenerate(report.id)}
            >
                <FileText className="size-3.5 mr-1.5" />
                Generate
            </Button>
        )}
    </div>
);

const CatalogIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-10 rounded-lg bg-muted flex items-center justify-center">
        <Icon className="size-5 text-muted-foreground" />
    </div>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-8 text-center">
        <Search className="size-10 text-muted-foreground/50 mb-3" />
        <p className="text-sm text-muted-foreground">No reports found</p>
    </div>
);

// ============= TYPES =============
interface ICatalogReport {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
}

interface IReportCategory {
    id: string;
    name: string;
    reports: ICatalogReport[];
}

interface IReportCatalog {
    title: string;
    description?: string;
    categories: IReportCategory[];
    onGenerate?: (reportId: string) => void;
}
