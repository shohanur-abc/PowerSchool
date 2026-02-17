import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function MobileApp({ eyebrow, title, description, features, cta }: IMobileApp) {
    return (
        <Section containerClass="bg-muted/50">
            <div className="grid grid-cols-1 @xl:grid-cols-2 gap-12 @xl:gap-16 items-center">
                <ContentBlock eyebrow={eyebrow} title={title} description={description} features={features} cta={cta} />
                <PhoneMockup />
            </div>
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const ContentBlock = ({ eyebrow, title, description, features, cta }: Omit<IMobileApp, never>) => (
    <div className="flex flex-col justify-center space-y-6">
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs font-semibold">{eyebrow}</Badge>
        <h2 className="text-3xl @sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="text-muted-foreground text-base @sm:text-lg leading-relaxed">{description}</p>
        <FeatureList features={features} />
        {cta && (
            <div className="pt-2">
                <Button size="lg" className="rounded-full px-8" asChild>
                    <Link href={cta.href}>{cta.text}</Link>
                </Button>
            </div>
        )}
    </div>
);

const FeatureList = ({ features }: { features: IMobileFeature[] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-4 pt-2">
        {features.map((feature, i) => (
            <FeatureItem key={i} {...feature} />
        ))}
    </div>
);

const FeatureItem = ({ icon: Icon, title, description }: IMobileFeature) => (
    <div className="flex items-start gap-3">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Icon className="size-5 text-primary" />
        </div>
        <div>
            <p className="text-sm font-semibold text-foreground">{title}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
    </div>
);

const PhoneMockup = () => (
    <div className="flex items-center justify-center">
        <div className="relative w-[280px] @sm:w-[320px] aspect-[9/19] rounded-[3rem] border-4 border-foreground/20 bg-background shadow-2xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-8 flex items-center justify-center">
                <div className="w-24 h-5 bg-foreground/20 rounded-b-2xl" />
            </div>
            <div className="absolute inset-4 top-10 rounded-2xl bg-muted flex items-center justify-center">
                <div className="text-center space-y-3 px-4">
                    <div className="size-12 rounded-xl bg-primary/20 mx-auto flex items-center justify-center">
                        <div className="size-6 rounded-md bg-primary/40" />
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">App Preview</p>
                    <div className="space-y-2">
                        <div className="h-2 bg-muted-foreground/10 rounded-full w-full" />
                        <div className="h-2 bg-muted-foreground/10 rounded-full w-3/4 mx-auto" />
                        <div className="h-2 bg-muted-foreground/10 rounded-full w-1/2 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// ============= TYPES =============
interface IMobileFeature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface IMobileApp {
    eyebrow: string;
    title: string;
    description: string;
    features: IMobileFeature[];
    cta?: { text: string; href: string };
}
