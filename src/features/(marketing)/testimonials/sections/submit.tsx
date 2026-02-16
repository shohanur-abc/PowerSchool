import { MessageSquarePlus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Submit({ title, description, benefits, cta }: ISubmit) {
    return (
        <Section containerClass="bg-muted/30">
            <SubmitCard title={title} description={description} benefits={benefits} cta={cta} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const SubmitCard = ({ title, description, benefits, cta }: ISubmit) => (
    <Card className="border-dashed border-2 border-primary/30 bg-primary/5">
        <CardContent className="p-8 @lg:p-12 text-center space-y-6">
            <IconHeader />
            <Title text={title} />
            <Description text={description} />
            {benefits && <BenefitsList benefits={benefits} />}
            <CTAButton text={cta.text} href={cta.href} />
        </CardContent>
    </Card>
);

const IconHeader = () => (
    <div className="flex justify-center">
        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquarePlus className="size-8 text-primary" />
        </div>
    </div>
);

const Title = ({ text }: { text: string }) => (
    <h2 className="text-2xl @sm:text-3xl @lg:text-4xl font-bold tracking-tight text-foreground">
        {text}
    </h2>
);

const Description = ({ text }: { text: string }) => (
    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {text}
    </p>
);

const BenefitsList = ({ benefits }: { benefits: string[] }) => (
    <ul className="flex flex-col @sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        {benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" />
                {benefit}
            </li>
        ))}
    </ul>
);

const CTAButton = ({ text, href }: { text: string; href: string }) => (
    <div className="pt-2">
        <Button size="lg" className="rounded-full px-8" asChild>
            <Link href={href}>
                {text}
                <ArrowRight className="ml-2 size-4" />
            </Link>
        </Button>
    </div>
);

// ============= TYPES =============
interface ISubmitCTA {
    text: string;
    href: string;
}

interface ISubmit {
    title: string;
    description: string;
    benefits?: string[];
    cta: ISubmitCTA;
}
