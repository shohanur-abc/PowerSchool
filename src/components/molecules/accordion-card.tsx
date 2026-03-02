"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const AccordionCard = ({ title, items, type = 'single', className, classNames: cns }: AccordionCardProps) => (
    <Card className={cn("@container", className)}>
        {title && <CardHeader className={cns?.header}><CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle></CardHeader>}
        <CardContent className={cns?.content}>
            <Accordion type={type as 'single'} collapsible className={cns?.accordion}>
                {items.map(({ trigger, content, value }, i) => (
                    <AccordionItem key={i} value={value || `item-${i}`} className={cns?.item}>
                        <AccordionTrigger className={cn("text-sm", cns?.trigger)}>{trigger}</AccordionTrigger>
                        <AccordionContent className={cns?.accordionContent}>{content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
    </Card>
);

interface AccordionCardProps {
    title?: string; items: { trigger: string; content: React.ReactNode; value?: string }[];
    type?: 'single' | 'multiple'; className?: string;
    classNames?: { header?: string; title?: string; content?: string; accordion?: string; item?: string; trigger?: string; accordionContent?: string };
}
