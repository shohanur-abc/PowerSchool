import { BookOpen, Users, CalendarDays, GraduationCap, ArrowRight, Settings } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ROUTES from '@/lib/routes';

// ============= MAIN COMPONENT =============
export default function OperationsOverview({ stats, quickLinks }: IOperationsOverview) {
    return (
        <div className="space-y-6">
            <Header />
            <StatsGrid stats={stats} />
            <QuickLinks links={quickLinks} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Operations</h1>
        <p className="text-muted-foreground mt-1">Manage school operations, staff, students and scheduling</p>
    </div>
);

const StatsGrid = ({ stats }: { stats: IOperationsOverview['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <OpsIcon icon={stat.icon} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    {stat.subtitle && <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>}
                </CardContent>
            </Card>
        ))}
    </div>
);

const OpsIcon = ({ icon }: { icon: string }) => {
    const icons: Record<string, React.ReactNode> = {
        classes: <BookOpen className="size-5 text-blue-500" />,
        staff: <Users className="size-5 text-green-500" />,
        students: <GraduationCap className="size-5 text-purple-500" />,
        events: <CalendarDays className="size-5 text-orange-500" />,
    };
    return <>{icons[icon] ?? null}</>;
};

const QuickLinks = ({ links }: { links: IOperationsOverview['quickLinks'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, i) => (
            <Card key={i} className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">{link.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <p className="font-semibold">{link.title}</p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <Button variant="outline" className="w-full justify-between" asChild>
                        <Link href={link.href}>
                            <span>Go to {link.title}</span>
                            <ArrowRight className="size-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        ))}
    </div>
);

// ============= TYPES =============
interface IOperationsOverview {
    stats: {
        label: string;
        value: string;
        icon: string;
        subtitle?: string;
    }[];
    quickLinks: {
        category: string;
        title: string;
        description: string;
        href: string;
    }[];
}
