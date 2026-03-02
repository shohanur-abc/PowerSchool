"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export const TabGroup = ({ tabs, defaultValue, variant = 'default', orientation, className, classNames: cns }: TabGroupProps) => (
    <Tabs defaultValue={defaultValue || tabs[0]?.value} orientation={orientation} className={cn("@container", className)}>
        <TabsList variant={variant === 'line' ? 'line' : 'default'} className={cns?.list}>
            {tabs.map(({ value, label, icon: Icon, disabled }) => (
                <TabsTrigger key={value} value={value} disabled={disabled} className={cns?.trigger}>
                    {Icon && <Icon className={cn("size-4", cns?.icon)} />}
                    {label}
                </TabsTrigger>
            ))}
        </TabsList>
        {tabs.map(({ value, content }) => (
            <TabsContent key={value} value={value} className={cns?.content}>
                {content}
            </TabsContent>
        ))}
    </Tabs>
);


// ============= TYPES =============
interface TabGroupProps {
    tabs: {
        value: string;
        label: string;
        icon?: React.ElementType;
        content: React.ReactNode;
        disabled?: boolean;
    }[];
    defaultValue?: string;
    variant?: 'default' | 'line';
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    classNames?: {
        list?: string;
        trigger?: string;
        content?: string;
        icon?: string;
    };
}
