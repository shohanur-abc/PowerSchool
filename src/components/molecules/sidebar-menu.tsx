"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';

export const SidebarMenu = ({ sections, collapsed, className, classNames: cns }: SidebarMenuProps) => {
    const pathname = usePathname();

    return (
        <nav className={cn("space-y-4", className)}>
            {sections.map(({ title, items }, i) => (
                <div key={i}>
                    {title && !collapsed && <p className={cn("text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2", cns?.sectionTitle)}>{title}</p>}
                    <div className="space-y-1">
                        {items.map((item, j) => <SidebarMenuItem key={j} item={item} pathname={pathname} collapsed={collapsed} classNames={cns} />)}
                    </div>
                </div>
            ))}
        </nav>
    );
};

const SidebarMenuItem = ({ item, pathname, collapsed, classNames: cns }: { item: SidebarMenuProps['sections'][0]['items'][0]; pathname: string; collapsed?: boolean; classNames?: SidebarMenuProps['classNames'] }) => {
    const { label, href, icon: Icon, children, badge } = item;
    const isActive = href ? pathname === href : children?.some(c => pathname === c.href);
    const [open, setOpen] = useState(isActive || false);

    if (children) {
        return (
            <div>
                <button onClick={() => setOpen(!open)} className={cn(menuItemVariant({ active: !!isActive }), "w-full justify-between", cns?.item)}>
                    <div className="flex items-center gap-2">
                        {Icon && <Icon className={cn("size-4", cns?.icon)} />}
                        {!collapsed && <span>{label}</span>}
                    </div>
                    {!collapsed && <ChevronDownIcon className={cn("size-3.5 transition-transform", open && "rotate-180")} />}
                </button>
                {open && !collapsed && (
                    <div className={cn("ml-6 mt-1 space-y-1", cns?.submenu)}>
                        {children.map((child, i) => (
                            <Link key={i} href={child.href} className={cn(menuItemVariant({ active: pathname === child.href }), "text-sm", cns?.subItem)}>
                                {child.icon && <child.icon className="size-3.5" />}
                                <span>{child.label}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link href={href || '#'} className={cn(menuItemVariant({ active: !!isActive }), cns?.item)}>
            {Icon && <Icon className={cn("size-4", cns?.icon)} />}
            {!collapsed && <span>{label}</span>}
            {badge && !collapsed && <span className={cn("ml-auto text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded-full", cns?.badge)}>{badge}</span>}
        </Link>
    );
};

const menuItemVariant = cva("flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors", {
    variants: { active: { true: "bg-primary/10 text-primary font-medium", false: "text-muted-foreground hover:text-foreground hover:bg-muted" } },
});

interface SidebarMenuProps {
    sections: { title?: string; items: { label: string; href?: string; icon?: React.ElementType; badge?: string | number; children?: { label: string; href: string; icon?: React.ElementType }[] }[] }[];
    collapsed?: boolean; className?: string;
    classNames?: { sectionTitle?: string; item?: string; icon?: string; badge?: string; submenu?: string; subItem?: string };
}
