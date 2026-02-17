import { CheckCircle2, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function PricingComparison({ eyebrow, title, subtitle, plans }: IPricingComparison) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <PlansGrid plans={plans} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const PlansGrid = ({ plans }: { plans: IPricingComparison['plans'] }) => (
    <div className="grid grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
        ))}
    </div>
);

const PlanCard = ({ icon: Icon, name, provider, price, period, features, highlighted, cta }: IPricingComparison['plans'][number]) => (
    <Card className={highlighted ? 'border-primary shadow-lg ring-1 ring-primary/20 relative' : 'relative'}>
        {highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default">Best Value</Badge>
            </div>
        )}
        <CardHeader className="space-y-3 text-center">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Icon className="size-6 text-primary" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">{provider}</p>
            </div>
            <div>
                <span className="text-4xl font-bold tracking-tight text-foreground">{price}</span>
                {period && <span className="text-muted-foreground text-sm">/{period}</span>}
            </div>
        </CardHeader>
        <CardContent className="space-y-3">
            {features.map((feature, i) => (
                <FeatureItem key={i} text={feature} />
            ))}
        </CardContent>
        <CardFooter>
            <Button
                variant={highlighted ? 'default' : 'outline'}
                className="w-full rounded-full"
                asChild
            >
                <Link href={cta.href}>{cta.text}</Link>
            </Button>
        </CardFooter>
    </Card>
);

const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-2.5 text-sm">
        <CheckCircle2 className="size-4 text-green-600 shrink-0" />
        <span className="text-muted-foreground">{text}</span>
    </div>
);

// ============= TYPES =============
interface IPricingComparison {
    eyebrow: string;
    title: string;
    subtitle: string;
    plans: {
        icon: LucideIcon;
        name: string;
        provider: string;
        price: string;
        period?: string;
        features: string[];
        highlighted?: boolean;
        cta: { text: string; href: string };
    }[];
}
