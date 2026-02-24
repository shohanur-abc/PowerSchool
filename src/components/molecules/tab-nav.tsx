"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TabNav = ({ tabs, variant = 'default', className, classNames: cns }: TabNavProps) => {
    const pathname = usePathname();

    return (
        <nav className={cn("flex overflow-x-auto @container", variant === 'pills' ? "gap-2" : "border-b gap-0", className)}>
            {tabs.map(({ label, href, icon: Icon, badge }, i) => {
                const active = pathname === href;
                return (
                    <Link key={i} href={href} className={cn(tabVariant({ variant, active }), "no-underline whitespace-nowrap", cns?.tab)}>
                        {Icon && <Icon className={cn("size-4", cns?.icon)} />}
                        <span>{label}</span>
                        {badge && <span className={cn("ml-1.5 text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full", cns?.badge)}>{badge}</span>}
                    </Link>
                );
            })}
        </nav>
    );
};

const tabVariant = cva("inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors", {
    variants: {
        variant: {
            default: "",
            pills: "rounded-lg",
            underline: "",
        },
        active: {
            true: "",
            false: "text-muted-foreground hover:text-foreground",
        },
    },
    compoundVariants: [
        { variant: 'default', active: true, class: "border-b-2 border-primary text-primary" },
        { variant: 'pills', active: true, class: "bg-primary text-primary-foreground" },
        { variant: 'pills', active: false, class: "hover:bg-muted" },
        { variant: 'underline', active: true, class: "border-b-2 border-primary text-primary -mb-px" },
    ],
});

interface TabNavProps {
    tabs: { label: string; href: string; icon?: React.ElementType; badge?: string | number }[];
    variant?: 'default' | 'pills' | 'underline';
    className?: string; classNames?: { tab?: string; icon?: string; badge?: string };
}
