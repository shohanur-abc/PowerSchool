'use client';

import { type LucideIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// ============= MAIN COMPONENT =============
export default function ExportCenter({
    title,
    description,
    options,
}: IExportCenter) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-4 gap-4">
                    {options.map((option, i) => (
                        <ExportOption key={i} {...option} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const ExportOption = ({
    icon: Icon,
    title,
    description,
    format,
    onExport,
}: IExportOption) => (
    <div className="flex flex-col gap-3 rounded-lg border p-4 hover:shadow-sm transition-shadow text-center">
        <ExportIcon icon={Icon} />
        <div className="space-y-1 flex-1">
            <div className="flex items-center justify-center gap-2">
                <p className="text-sm font-semibold">{title}</p>
                {format && (
                    <Badge variant="outline" className="text-xs">
                        {format}
                    </Badge>
                )}
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
                {description}
            </p>
        </div>
        <Button
            variant="outline"
            size="sm"
            className="w-full mt-auto"
            onClick={onExport}
        >
            <Icon className="size-3.5 mr-1.5" />
            Export
        </Button>
    </div>
);

const ExportIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-12 rounded-lg bg-muted flex items-center justify-center mx-auto">
        <Icon className="size-6 text-muted-foreground" />
    </div>
);

// ============= TYPES =============
interface IExportOption {
    icon: LucideIcon;
    title: string;
    description: string;
    format?: string;
    onExport?: () => void;
}

interface IExportCenter {
    title: string;
    description?: string;
    options: IExportOption[];
}
