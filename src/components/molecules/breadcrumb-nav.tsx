"use client";
import { cn } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const BreadcrumbNav = ({ items, className, classNames: cns }: BreadcrumbNavProps) => (
    <Breadcrumb className={className}>
        <BreadcrumbList className={cns?.list}>
            {items.map(({ label, href, icon: Icon }, i) => (
                <BreadcrumbItem key={i} className={cns?.item}>
                    {i > 0 && <BreadcrumbSeparator className={cns?.separator} />}
                    {i === items.length - 1 ? (
                        <BreadcrumbPage className={cn("flex items-center gap-1.5", cns?.current)}>
                            {Icon && <Icon className="size-3.5" />}
                            {label}
                        </BreadcrumbPage>
                    ) : (
                        <BreadcrumbLink href={href || '#'} className={cn("flex items-center gap-1.5", cns?.link)}>
                            {Icon && <Icon className="size-3.5" />}
                            {label}
                        </BreadcrumbLink>
                    )}
                </BreadcrumbItem>
            ))}
        </BreadcrumbList>
    </Breadcrumb>
);


// ============= TYPES =============
interface BreadcrumbNavProps {
    items: {
        label: string;
        href?: string;
        icon?: React.ElementType;
    }[];
    className?: string;
    classNames?: {
        list?: string;
        item?: string;
        link?: string;
        current?: string;
        separator?: string;
    };
}
