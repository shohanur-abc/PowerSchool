import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from 'lucide-react';

export const BreadcrumbTrail = ({ items, showHome = true, className, classNames: cns }: BreadcrumbTrailProps) => (
    <nav className={cn("flex items-center gap-1 text-sm", className)} aria-label="Breadcrumb">
        {showHome && (
            <>
                <Link href="/" className={cn("text-muted-foreground hover:text-foreground no-underline", cns?.link)}><HomeIcon className="size-4" /></Link>
                <ChevronRightIcon className={cn("size-3.5 text-muted-foreground/50", cns?.separator)} />
            </>
        )}
        {items.map(({ label, href }, i) => (
            <span key={i} className="flex items-center gap-1">
                {i > 0 && <ChevronRightIcon className={cn("size-3.5 text-muted-foreground/50", cns?.separator)} />}
                {i < items.length - 1 ? (
                    <Link href={href || '#'} className={cn("text-muted-foreground hover:text-foreground no-underline", cns?.link)}>{label}</Link>
                ) : (
                    <span className={cn("font-medium", cns?.current)}>{label}</span>
                )}
            </span>
        ))}
    </nav>
);

interface BreadcrumbTrailProps {
    items: { label: string; href?: string }[]; showHome?: boolean;
    className?: string; classNames?: { link?: string; separator?: string; current?: string };
}
