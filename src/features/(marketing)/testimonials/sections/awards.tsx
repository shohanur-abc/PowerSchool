import { type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Awards({ eyebrow, title, subtitle, awards }: IAwards) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <AwardsGrid awards={awards} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const AwardsGrid = ({ awards }: { awards: IAwardItem[] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4 gap-6">
        {awards.map((award, i) => (
            <AwardCard key={i} {...award} />
        ))}
    </div>
);

const AwardCard = ({ image, icon: Icon, title, organization, year, description }: IAwardItem) => (
    <Card className="text-center group hover:border-primary/50 hover:shadow-md transition-all overflow-hidden">
        <CardContent className="pt-6 space-y-4">
            {image ? (
                <AwardImage src={image} alt={title} />
            ) : Icon ? (
                <AwardIcon icon={Icon} />
            ) : null}
            <Badge variant="outline" className="text-xs">{year}</Badge>
            <h3 className="font-semibold text-foreground leading-tight">{title}</h3>
            <p className="text-sm text-primary font-medium">{organization}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);

const AwardImage = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex justify-center">
        <Image
            src={src}
            alt={alt}
            width={80}
            height={80}
            className="size-20 object-contain"
        />
    </div>
);

const AwardIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
    <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
        <Icon className="size-8 text-primary" />
    </div>
);

// ============= TYPES =============
interface IAwardItem {
    image?: string;
    icon?: LucideIcon;
    title: string;
    organization: string;
    year: string;
    description: string;
}

interface IAwards {
    eyebrow: string;
    title: string;
    subtitle: string;
    awards: IAwardItem[];
}
