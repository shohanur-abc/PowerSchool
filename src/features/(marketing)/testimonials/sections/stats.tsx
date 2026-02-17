import { type LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Stats({ eyebrow, title, subtitle, stats }: IStats) {
    return (
        <Section containerClass="bg-muted/50">
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <StatsGrid stats={stats} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const StatsGrid = ({ stats }: { stats: IStatItem[] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
        ))}
    </div>
);

const StatCard = ({ icon: Icon, value, label, description }: IStatItem) => (
    <Card className="text-center group hover:border-primary/50 hover:shadow-md transition-all">
        <CardContent className="pt-6 space-y-3">
            <IconBox icon={Icon} />
            <p className="text-4xl @lg:text-5xl font-bold text-primary">{value}</p>
            <p className="font-semibold text-foreground">{label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);

const IconBox = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
        <Icon className="size-7 text-primary" />
    </div>
);

// ============= TYPES =============
interface IStatItem {
    icon: LucideIcon;
    value: string;
    label: string;
    description: string;
}

interface IStats {
    eyebrow: string;
    title: string;
    subtitle: string;
    stats: IStatItem[];
}
