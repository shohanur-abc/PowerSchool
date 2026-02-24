import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Footer = ({ columns, bottom, className, classNames: cns }: FooterProps) => (
    <footer className={cn("@container border-t bg-background", className)}>
        <div className={cn("max-w-7xl mx-auto px-4 py-12", cns?.container)}>
            <div className={cn("grid grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4 gap-8", cns?.columns)}>
                {columns.map(({ title, links }, i) => (
                    <div key={i}>
                        <h4 className={cn("text-sm font-semibold mb-3", cns?.columnTitle)}>{title}</h4>
                        <ul className="space-y-2">
                            {links.map(({ label, href }, j) => (
                                <li key={j}>
                                    <Link href={href} className={cn("text-sm text-muted-foreground hover:text-foreground transition-colors no-underline", cns?.link)}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {bottom && <div className={cn("border-t mt-8 pt-8 text-sm text-muted-foreground", cns?.bottom)}>{bottom}</div>}
        </div>
    </footer>
);

interface FooterProps {
    columns: { title: string; links: { label: string; href: string }[] }[];
    bottom?: React.ReactNode;
    className?: string;
    classNames?: { container?: string; columns?: string; columnTitle?: string; link?: string; bottom?: string };
}
