import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function IntegrationsPreview({ eyebrow, title, subtitle, integrations, cta }: IIntegrationsPreview) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <LogosGrid integrations={integrations} />
            {cta && <CTALink {...cta} />}
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const LogosGrid = ({ integrations }: { integrations: IIntegration[] }) => (
    <div className="grid grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @3xl:grid-cols-6 gap-6 mb-10">
        {integrations.map((integration, i) => (
            <LogoCard key={i} {...integration} />
        ))}
    </div>
);

const LogoCard = ({ name, logo, description }: IIntegration) => (
    <div className="flex flex-col items-center gap-3 p-6 rounded-xl border bg-background hover:border-primary/50 hover:shadow-sm transition-all text-center group">
        <div className="size-12 relative shrink-0">
            <Image src={logo} alt={name} fill className="object-contain" sizes="48px" />
        </div>
        <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
        </div>
    </div>
);

const CTALink = ({ text, href }: { text: string; href: string }) => (
    <div className="flex justify-center">
        <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <Link href={href}>
                {text}
                <ArrowRight className="ml-2 size-4" />
            </Link>
        </Button>
    </div>
);

// ============= TYPES =============
interface IIntegration {
    name: string;
    logo: string;
    description?: string;
}

interface IIntegrationsPreview {
    eyebrow: string;
    title: string;
    subtitle: string;
    integrations: IIntegration[];
    cta?: { text: string; href: string };
}
