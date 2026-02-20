import { Download, Eye, FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ============= MAIN COMPONENT =============
export default function StandardReports({ categories, templates }: IStandardReports) {
    return (
        <div className="space-y-6">
            <Header />
            <CategoryTabs categories={categories} />
            <TemplateGrid templates={templates} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Standard Reports</h1>
        <p className="text-muted-foreground mt-1">Pre-built report templates ready to generate and download</p>
    </div>
);

const CategoryTabs = ({ categories }: { categories: IStandardReports['categories'] }) => (
    <div className="flex flex-wrap gap-2">
        {categories.map((cat, i) => (
            <Button
                key={i}
                variant={cat.active ? 'default' : 'outline'}
                size="sm"
                className="rounded-full"
            >
                {cat.label}
                <Badge
                    variant="secondary"
                    className="ml-2 h-5 min-w-5 rounded-full text-xs px-1"
                >
                    {cat.count}
                </Badge>
            </Button>
        ))}
    </div>
);

const TemplateGrid = ({ templates }: { templates: IStandardReports['templates'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template, i) => (
            <TemplateCard key={i} template={template} />
        ))}
    </div>
);

const TemplateCard = ({ template }: { template: IStandardReports['templates'][number] }) => (
    <Card className="flex flex-col">
        <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-2">
                <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${template.iconBg}`}>
                    <FileText className={`size-5 ${template.iconColor}`} />
                </div>
                <CategoryBadge category={template.category} />
            </div>
            <CardTitle className="text-sm font-semibold mt-2">{template.title}</CardTitle>
            <CardDescription className="text-xs">{template.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 mt-auto">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <Clock className="size-3" />
                <span>Last generated: {template.lastGenerated}</span>
            </div>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 gap-1 text-xs">
                    <Eye className="size-3" />
                    Preview
                </Button>
                <Button size="sm" className="flex-1 gap-1 text-xs">
                    <Download className="size-3" />
                    Generate
                </Button>
            </div>
        </CardContent>
    </Card>
);

const CategoryBadge = ({ category }: { category: string }) => {
    const map: Record<string, string> = {
        Attendance: 'bg-blue-100 text-blue-700 border-blue-200',
        Fees: 'bg-green-100 text-green-700 border-green-200',
        Academic: 'bg-purple-100 text-purple-700 border-purple-200',
        Staff: 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return <Badge variant="outline" className={`text-xs ${map[category] ?? ''}`}>{category}</Badge>;
};

// ============= TYPES =============
interface IStandardReports {
    categories: {
        label: string;
        count: number;
        active: boolean;
    }[];
    templates: {
        title: string;
        description: string;
        category: string;
        iconBg: string;
        iconColor: string;
        lastGenerated: string;
    }[];
}
