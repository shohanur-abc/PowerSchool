import { ArrowRight, type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Migration({ eyebrow, title, subtitle, steps, cta }: IMigration) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <StepsGrid steps={steps} />
            <CtaButton cta={cta} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const StepsGrid = ({ steps }: { steps: IMigration['steps'] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-4 gap-6 mb-12">
        {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} isLast={i === steps.length - 1} />
        ))}
    </div>
);

const StepCard = ({ step, index, isLast }: { step: IMigration['steps'][number]; index: number; isLast: boolean }) => (
    <div className="relative">
        <Card className="h-full hover:shadow-lg transition-shadow">
            <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                    <span className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                        {index + 1}
                    </span>
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="size-5 text-primary" />
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {step.duration && (
                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                        {step.duration}
                    </span>
                )}
            </CardContent>
        </Card>
        {!isLast && (
            <div className="hidden @3xl:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                <ArrowRight className="size-5 text-muted-foreground/40" />
            </div>
        )}
    </div>
);

const CtaButton = ({ cta }: { cta: IMigration['cta'] }) => (
    <div className="flex justify-center">
        <Button size="lg" className="rounded-full px-8" asChild>
            <Link href={cta.href}>
                {cta.text}
                <ArrowRight className="ml-2 size-4" />
            </Link>
        </Button>
    </div>
);

// ============= TYPES =============
interface IMigration {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
        icon: LucideIcon;
        title: string;
        description: string;
        duration?: string;
    }[];
    cta: { text: string; href: string };
}
