"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';


export const AccordionList = ({ items, className, classNames: cns, defaultValue, icon: I1, type = 'single' }: AccordionListProps) => {
    const accordionContent = (
        <>
            {items.map(({ icon: I2, title, subtitle, content, badge }, i) => {
                const isContentString = typeof content === 'string'
                const Icon = I2 || I1
                return (
                    <AccordionItem key={i} value={`item-${i}`} className='px-2 '>
                        <AccordionTrigger className={cn('text-base hover:no-underline', cns?.trigger)}>
                            <div className="flex items-center gap-3">
                                {Icon && <Icon className={cn('shrink-0', cns?.icon)} />}
                                <div className="flex flex-col items-start text-left">
                                    <span>{title}</span>
                                    {subtitle && <span className="text-muted-foreground text-sm">{subtitle}</span>}
                                </div>
                                {badge && <Badge variant='secondary' className={cn('size-fit', cns?.badge)}>{badge}</Badge>}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={cn(I2 && 'ps-7', isContentString || cns?.content)}>
                            {isContentString ? <p className={cn('text-muted-foreground leading-relaxed', cns?.content)}>{content}</p> : content}
                        </AccordionContent>
                    </AccordionItem>
                )
            })}
        </>
    );

    return type === 'single' ? (
        <Accordion type="single" collapsible className={className} defaultValue={defaultValue as string}>
            {accordionContent}
        </Accordion>
    ) : (
        <Accordion type="multiple" className={className} defaultValue={defaultValue as string[]}>
            {accordionContent}
        </Accordion>
    );
}



interface AccordionListProps {
    type?: 'single' | 'multiple',
    icon?: React.ElementType
    items: {
        title: string,
        subtitle?: string,
        content: React.ReactNode
        badge?: string
        icon?: React.ElementType
    }[]
    className?: string
    defaultValue?: string | string[]
    classNames?: {
        item: string,
        trigger: string,
        content: string
        badge?: string
        icon: string
    }
}
