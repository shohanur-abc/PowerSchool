"use client";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const SectionHeader = ({ eyebrow, title, description, align = 'center', actions, className, classNames: cns }: SectionHeaderProps) => (
    <div className={cn("@container", align === 'center' ? "text-center" : align === 'right' ? "text-right" : "", className)}>
        {eyebrow && <Badge variant="ghost" className={cn("mb-3", cns?.eyebrow)}>{eyebrow}</Badge>}
        <h2 className={cn("text-2xl @md:text-3xl @xl:text-4xl font-bold tracking-tight", cns?.title)}>{title}</h2>
        {description && <p className={cn("text-muted-foreground mt-2 max-w-2xl", align === 'center' && "mx-auto", cns?.description)}>{description}</p>}
        {actions && <div className={cn("flex gap-3 mt-6", align === 'center' && "justify-center", align === 'right' && "justify-end", cns?.actions)}>{actions}</div>}
    </div>
);

interface SectionHeaderProps {
    eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' | 'right'; actions?: React.ReactNode;
    className?: string; classNames?: { eyebrow?: string; title?: string; description?: string; actions?: string };
}
