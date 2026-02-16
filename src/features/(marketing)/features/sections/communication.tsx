import { type LucideIcon, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Communication({ eyebrow, title, description, image, highlights, direction = 'ltr' }: IFeatureDetail) {
    return (
        <Section>
            <div className={featureLayoutClass({ direction })}>
                <ImageBlock src={image.src} alt={image.alt} />
                <ContentBlock eyebrow={eyebrow} title={title} description={description} highlights={highlights} />
            </div>
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const ImageBlock = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border bg-muted">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
);

const ContentBlock = ({ eyebrow, title, description, highlights }: Omit<IFeatureDetail, 'image' | 'direction'>) => (
    <div className="flex flex-col justify-center space-y-6">
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-xs font-semibold">{eyebrow}</Badge>
        <h2 className="text-3xl @sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
        <p className="text-muted-foreground text-base @sm:text-lg leading-relaxed">{description}</p>
        <HighlightsList highlights={highlights} />
    </div>
);

const HighlightsList = ({ highlights }: { highlights: IHighlight[] }) => (
    <ul className="space-y-3 pt-2">
        {highlights.map((item, i) => (
            <HighlightItem key={i} {...item} />
        ))}
    </ul>
);

const HighlightItem = ({ icon: Icon = CheckCircle, text }: IHighlight) => (
    <li className="flex items-start gap-3">
        <Icon className="size-5 text-primary mt-0.5 shrink-0" />
        <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
    </li>
);

// ============= HELPERS =============
const featureLayoutClass = ({ direction }: { direction: IFeatureDetail['direction'] }) =>
    `grid grid-cols-1 @xl:grid-cols-2 gap-12 @xl:gap-16 items-center ${direction === 'rtl' ? '[&>*:first-child]:@xl:order-2' : ''}`;

// ============= TYPES =============
interface IHighlight {
    icon?: LucideIcon;
    text: string;
}

interface IFeatureDetail {
    eyebrow: string;
    title: string;
    description: string;
    image: { src: string; alt: string };
    highlights: IHighlight[];
    direction?: 'ltr' | 'rtl';
}
