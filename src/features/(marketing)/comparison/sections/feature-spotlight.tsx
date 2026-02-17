import { CheckCircle2, X, type LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function FeatureSpotlight({ eyebrow, title, subtitle, spotlights }: IFeatureSpotlight) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <SpotlightTabs spotlights={spotlights} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const SpotlightTabs = ({ spotlights }: { spotlights: IFeatureSpotlight['spotlights'] }) => (
    <Tabs defaultValue={spotlights[0]?.id} className="space-y-8">
        <div className="flex justify-center">
            <TabsList className="flex-wrap">
                {spotlights.map((spotlight) => (
                    <TabsTrigger key={spotlight.id} value={spotlight.id} className="gap-1.5">
                        <spotlight.icon className="size-4" />
                        {spotlight.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </div>
        {spotlights.map((spotlight) => (
            <TabsContent key={spotlight.id} value={spotlight.id}>
                <SpotlightContent spotlight={spotlight} />
            </TabsContent>
        ))}
    </Tabs>
);

const SpotlightContent = ({ spotlight }: { spotlight: IFeatureSpotlight['spotlights'][number] }) => (
    <div className="grid grid-cols-1 @3xl:grid-cols-2 gap-8">
        <FeatureDetail
            title={spotlight.title}
            description={spotlight.description}
            highlights={spotlight.highlights}
        />
        <ComparisonDetails comparisons={spotlight.comparisons} />
    </div>
);

const FeatureDetail = ({ title, description, highlights }: {
    title: string;
    description: string;
    highlights: string[];
}) => (
    <div className="space-y-6">
        <div className="space-y-3">
            <h3 className="text-2xl @sm:text-3xl font-bold tracking-tight text-foreground">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <div className="space-y-3">
            {highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-5 text-green-600 shrink-0" />
                    <span className="text-sm text-foreground">{highlight}</span>
                </div>
            ))}
        </div>
    </div>
);

const ComparisonDetails = ({ comparisons }: { comparisons: IFeatureSpotlight['spotlights'][number]['comparisons'] }) => (
    <div className="space-y-4">
        {comparisons.map((comparison, i) => (
            <ComparisonCard key={i} {...comparison} />
        ))}
    </div>
);

const ComparisonCard = ({ competitor, ourFeature, theirFeature, verdict }: IFeatureSpotlight['spotlights'][number]['comparisons'][number]) => (
    <Card>
        <CardHeader className="pb-3">
            <h4 className="text-sm font-semibold text-foreground">vs {competitor}</h4>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="flex items-start gap-2">
                <CheckCircle2 className="size-4 text-green-600 shrink-0 mt-0.5" />
                <div>
                    <span className="text-xs font-medium text-muted-foreground">Ours:</span>
                    <p className="text-sm text-foreground">{ourFeature}</p>
                </div>
            </div>
            <div className="flex items-start gap-2">
                <X className="size-4 text-muted-foreground/40 shrink-0 mt-0.5" />
                <div>
                    <span className="text-xs font-medium text-muted-foreground">Theirs:</span>
                    <p className="text-sm text-muted-foreground">{theirFeature}</p>
                </div>
            </div>
            {verdict && (
                <p className="text-xs font-medium text-primary pt-1">{verdict}</p>
            )}
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IFeatureSpotlight {
    eyebrow: string;
    title: string;
    subtitle: string;
    spotlights: {
        id: string;
        label: string;
        icon: LucideIcon;
        title: string;
        description: string;
        highlights: string[];
        comparisons: {
            competitor: string;
            ourFeature: string;
            theirFeature: string;
            verdict?: string;
        }[];
    }[];
}
