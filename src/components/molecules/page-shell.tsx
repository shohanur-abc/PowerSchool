"use client";
import { cn } from '@/lib/utils';

export const PageShell = ({ header, children, footer, maxWidth = '7xl', className, classNames: cns }: PageShellProps) => {
    const widths = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', '2xl': 'max-w-2xl', '4xl': 'max-w-4xl', '7xl': 'max-w-7xl', full: 'max-w-full' };

    return (
        <div className={cn("min-h-screen flex flex-col", className)}>
            {header && <div className={cns?.header}>{header}</div>}
            <main className={cn("flex-1", cns?.main)}>
                <div className={cn("mx-auto px-4 py-6", widths[maxWidth], cns?.container)}>{children}</div>
            </main>
            {footer && <div className={cns?.footer}>{footer}</div>}
        </div>
    );
};

interface PageShellProps {
    header?: React.ReactNode; children: React.ReactNode; footer?: React.ReactNode;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '7xl' | 'full';
    className?: string; classNames?: { header?: string; main?: string; container?: string; footer?: string };
}
