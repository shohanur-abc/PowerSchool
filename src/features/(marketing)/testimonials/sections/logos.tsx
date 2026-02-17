import Image from 'next/image';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Logos({ eyebrow, title, subtitle, logos }: ILogos) {
    return (
        <Section containerClass="bg-muted/30">
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <LogoGrid logos={logos} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const LogoGrid = ({ logos }: { logos: ILogoItem[] }) => (
    <div className="grid grid-cols-2 @sm:grid-cols-3 @lg:grid-cols-4 @xl:grid-cols-5 @3xl:grid-cols-6 gap-8">
        {logos.map((logo, i) => (
            <LogoCell key={i} {...logo} />
        ))}
    </div>
);

const LogoCell = ({ src, alt }: ILogoItem) => (
    <div className="flex items-center justify-center rounded-xl border bg-background p-6 grayscale hover:grayscale-0 transition-all hover:shadow-sm">
        <Image
            src={src}
            alt={alt}
            width={140}
            height={60}
            className="h-10 w-auto object-contain"
        />
    </div>
);

// ============= TYPES =============
interface ILogoItem {
    src: string;
    alt: string;
}

interface ILogos {
    eyebrow: string;
    title: string;
    subtitle: string;
    logos: ILogoItem[];
}
