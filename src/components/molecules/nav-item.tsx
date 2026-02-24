import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

export const NavItem = ({ label, href, icon: Icon, active, badge, children, variant = 'default', className, classNames: cns }: NavItemProps) => {
    const content = (
        <>
            {Icon && <Icon className={cn("size-4 shrink-0", cns?.icon)} />}
            <span className={cn("flex-1", cns?.label)}>{label}</span>
            {badge && <span className={cn("text-xs bg-primary text-primary-foreground rounded-full px-1.5 py-0.5", cns?.badge)}>{badge}</span>}
        </>
    );

    return (
        <div>
            <Link href={href || '#'} className={cn(navItemVariant({ variant, active: !!active }), className)}>
                {content}
            </Link>
            {children && <div className={cn("ml-6 mt-1 space-y-1", cns?.children)}>{children}</div>}
        </div>
    );
};

export const NavGroup = ({ title, items, className, classNames: cns }: NavGroupProps) => (
    <div className={cn("space-y-1", className)}>
        {title && <p className={cn("text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2", cns?.title)}>{title}</p>}
        {items.map((item, i) => (
            <NavItem key={i} {...item} classNames={cns} />
        ))}
    </div>
);


// ============= VARIANTS =============
const navItemVariant = cva("flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors no-underline", {
    variants: {
        variant: {
            default: "hover:bg-muted",
            ghost: "hover:bg-transparent hover:text-primary",
        },
        active: {
            true: "bg-primary/10 text-primary font-medium",
            false: "text-muted-foreground",
        },
    },
});


// ============= TYPES =============
interface NavItemProps {
    label: string;
    href?: string;
    icon?: React.ElementType;
    active?: boolean;
    badge?: string | number;
    children?: React.ReactNode;
    variant?: 'default' | 'ghost';
    className?: string;
    classNames?: {
        icon?: string;
        label?: string;
        badge?: string;
        children?: string;
    };
}

interface NavGroupProps {
    title?: string;
    items: NavItemProps[];
    className?: string;
    classNames?: NavItemProps['classNames'] & { title?: string };
}
