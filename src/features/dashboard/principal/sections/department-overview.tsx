import { Users } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

// ============= MAIN COMPONENT =============
export default function DepartmentOverview({
    title,
    departments,
}: IDepartmentOverview) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {departments.map((dept) => (
                        <DepartmentItem key={dept.id} {...dept} />
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const DepartmentItem = ({
    id,
    name,
    staffCount,
    metrics,
    recentUpdates,
}: IDepartmentItem) => (
    <AccordionItem value={id}>
        <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
                <span className="font-medium">{name}</span>
                <Badge variant="secondary" className="text-xs gap-1">
                    <Users className="size-3" />
                    {staffCount}
                </Badge>
            </div>
        </AccordionTrigger>
        <AccordionContent>
            <div className="space-y-3 pt-1">
                {/* Key metrics */}
                <div className="@container grid grid-cols-2 @sm:grid-cols-3 gap-2">
                    {metrics.map((metric) => (
                        <DepartmentMetric key={metric.label} {...metric} />
                    ))}
                </div>

                {/* Recent updates */}
                {recentUpdates.length > 0 && (
                    <div className="space-y-1.5">
                        <p className="text-xs font-medium text-muted-foreground">
                            Recent Updates
                        </p>
                        {recentUpdates.map((update, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                                • {update}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </AccordionContent>
    </AccordionItem>
);

const DepartmentMetric = ({ label, value }: IDepartmentMetric) => (
    <div className="rounded-lg border p-2.5 space-y-0.5">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold tabular-nums">{value}</p>
    </div>
);

// ============= TYPES =============
interface IDepartmentMetric {
    label: string;
    value: string;
}

interface IDepartmentItem {
    id: string;
    name: string;
    staffCount: number;
    metrics: IDepartmentMetric[];
    recentUpdates: string[];
}

interface IDepartmentOverview {
    title: string;
    departments: IDepartmentItem[];
}
