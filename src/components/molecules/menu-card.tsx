import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

export const MenuCard = ({ title, items, className, classNames: cns }: MenuCardProps) => (
    <Card className={cn("@container", className)}>
        {title && <CardHeader className={cns?.header}><CardTitle className={cn("text-base", cns?.title)}>{title}</CardTitle></CardHeader>}
        <CardContent className={cn("p-0", cns?.content)}>
            {items.map(({ label, href, icon: Icon, description, badge }, i) => (
                <Link key={i} href={href} className={cn("flex items-center gap-3 px-6 py-3 hover:bg-muted/50 transition-colors no-underline border-b last:border-b-0", cns?.item)}>
                    {Icon && <Icon className={cn("size-4 text-muted-foreground shrink-0", cns?.icon)} />}
                    <div className="flex-1 min-w-0">
                        <span className={cn("text-sm font-medium", cns?.label)}>{label}</span>
                        {description && <p className={cn("text-xs text-muted-foreground", cns?.description)}>{description}</p>}
                    </div>
                    {badge && <span className={cn("text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full", cns?.badge)}>{badge}</span>}
                    <ChevronRightIcon className={cn("size-4 text-muted-foreground shrink-0", cns?.chevron)} />
                </Link>
            ))}
        </CardContent>
    </Card>
);

interface MenuCardProps {
    title?: string; items: { label: string; href: string; icon?: React.ElementType; description?: string; badge?: string | number }[];
    className?: string; classNames?: { header?: string; title?: string; content?: string; item?: string; icon?: string; label?: string; description?: string; badge?: string; chevron?: string };
}
