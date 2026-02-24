import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const TabsCard = ({ title, description, tabs, defaultTab, className, classNames: cns }: TabsCardProps) => (
    <Card className={cn("@container", className)}>
        {(title || description) && (
            <CardHeader className={cns?.header}>
                {title && <CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle>}
                {description && <CardDescription className={cns?.description}>{description}</CardDescription>}
            </CardHeader>
        )}
        <CardContent className={cns?.content}>
            <Tabs defaultValue={defaultTab || tabs[0]?.value}>
                <TabsList className={cns?.tabsList}>
                    {tabs.map(({ value, label, icon: Icon }) => (
                        <TabsTrigger key={value} value={value} className={cns?.trigger}>
                            {Icon && <Icon className="size-3.5 mr-1.5" />}
                            {label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map(({ value, content }) => (
                    <TabsContent key={value} value={value} className={cn("mt-4", cns?.tabContent)}>{content}</TabsContent>
                ))}
            </Tabs>
        </CardContent>
    </Card>
);

interface TabsCardProps {
    title?: string; description?: string;
    tabs: { value: string; label: string; icon?: React.ElementType; content: React.ReactNode }[];
    defaultTab?: string; className?: string;
    classNames?: { header?: string; title?: string; description?: string; content?: string; tabsList?: string; trigger?: string; tabContent?: string };
}
