import { cn } from '@/lib/utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const BreadcrumbPageHeader = ({ items, title, description, actions, className, classNames: cns }: BreadcrumbPageHeaderProps) => (
    <div className={cn("@container space-y-4", className)}>
        <Breadcrumb className={cns?.breadcrumb}>
            <BreadcrumbList>
                {items.map(({ label, href }, i) => (
                    <BreadcrumbItem key={i}>
                        {i < items.length - 1 ? (
                            <>
                                <BreadcrumbLink href={href} className={cns?.link}>{label}</BreadcrumbLink>
                                <BreadcrumbSeparator />
                            </>
                        ) : (
                            <BreadcrumbPage className={cns?.current}>{label}</BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-end justify-between">
            <div>
                <h1 className={cn("text-2xl @md:text-3xl font-bold", cns?.title)}>{title}</h1>
                {description && <p className={cn("text-muted-foreground mt-1", cns?.description)}>{description}</p>}
            </div>
            {actions && <div className={cn("flex gap-2", cns?.actions)}>{actions}</div>}
        </div>
    </div>
);

interface BreadcrumbPageHeaderProps {
    items: { label: string; href?: string }[]; title: string; description?: string; actions?: React.ReactNode;
    className?: string; classNames?: { breadcrumb?: string; link?: string; current?: string; title?: string; description?: string; actions?: string };
}
