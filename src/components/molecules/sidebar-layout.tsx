"use client";
import { cn } from '@/lib/utils';

export const SidebarLayout = ({ sidebar, children, sidebarWidth = 'default', className, classNames: cns }: SidebarLayoutProps) => (
    <div className={cn("flex min-h-screen @container", className)}>
        <aside className={cn("border-r bg-background shrink-0 hidden @md:block", sidebarWidth === 'narrow' ? "w-56" : sidebarWidth === 'wide' ? "w-80" : "w-64", cns?.sidebar)}>
            {sidebar}
        </aside>
        <main className={cn("flex-1 min-w-0", cns?.main)}>{children}</main>
    </div>
);

interface SidebarLayoutProps {
    sidebar: React.ReactNode; children: React.ReactNode; sidebarWidth?: 'narrow' | 'default' | 'wide';
    className?: string; classNames?: { sidebar?: string; main?: string };
}
