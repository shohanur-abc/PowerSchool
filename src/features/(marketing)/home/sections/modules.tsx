import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Modules({ eyebrow, title, subtitle, tabs }: IModules) {
    return (
        <Section containerClass="bg-muted/50">
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <ModuleTabs tabs={tabs} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const ModuleTabs = ({ tabs }: { tabs: IModules['tabs'] }) => (
    <Tabs defaultValue={tabs[0]?.value} className="space-y-8">
        <TabsList className="flex flex-wrap justify-center h-auto gap-2 bg-transparent">
            {tabs.map(({ value, label, icon: Icon }) => (
                <TabsTrigger key={value} value={value} className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 gap-2">
                    <Icon className="size-4" />
                    {label}
                </TabsTrigger>
            ))}
        </TabsList>
        {tabs.map(({ value, description, features }) => (
            <TabsContent key={value} value={value} className="space-y-6">
                <p className="text-center text-muted-foreground max-w-2xl mx-auto">{description}</p>
                <div className="grid grid-cols-1 @sm:grid-cols-2 @3xl:grid-cols-4 gap-4">
                    {features.map((feature, i) => (
                        <ModuleFeatureCard key={i} {...feature} />
                    ))}
                </div>
            </TabsContent>
        ))}
    </Tabs>
);

const ModuleFeatureCard = ({ icon: Icon, title, description }: IModules['tabs'][number]['features'][number]) => (
    <Card className="group hover:border-primary/50 transition-colors">
        <CardHeader className="pb-2">
            <Icon className="size-5 text-primary mb-1" />
            <CardTitle className="text-sm font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

// ============= TYPES =============
interface IModules {
    eyebrow: string;
    title: string;
    subtitle: string;
    tabs: {
        value: string;
        label: string;
        icon: LucideIcon;
        description: string;
        features: {
            icon: LucideIcon;
            title: string;
            description: string;
        }[];
    }[];
}
