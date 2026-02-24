import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

export const LinkCard = ({ title, description, href, icon: Icon, external, variant = 'default', className, classNames: cns }: LinkCardProps) => (
    <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(linkCardVariant({ variant }), "group @container", className)}
    >
        {Icon && (
            <div className={cn("flex items-center justify-center size-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors", cns?.iconWrapper)}>
                <Icon className={cn("size-5 text-primary", cns?.icon)} />
            </div>
        )}
        <div className="flex-1">
            <h4 className={cn("text-sm font-semibold group-hover:text-primary transition-colors", cns?.title)}>{title}</h4>
            {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
        </div>
        <span className={cn("text-muted-foreground group-hover:translate-x-1 transition-transform", cns?.arrow)}>→</span>
    </Link>
);


// ============= VARIANTS =============
const linkCardVariant = cva("flex items-center gap-4 p-4 rounded-lg transition-all no-underline", {
    variants: {
        variant: {
            default: "border hover:border-primary/30 hover:shadow-sm",
            ghost: "hover:bg-muted/50",
            filled: "bg-muted hover:bg-muted/80",
        },
    },
});


// ============= TYPES =============
interface LinkCardProps {
    title: string;
    description?: string;
    href: string;
    icon?: React.ElementType;
    external?: boolean;
    variant?: 'default' | 'ghost' | 'filled';
    className?: string;
    classNames?: {
        iconWrapper?: string;
        icon?: string;
        title?: string;
        description?: string;
        arrow?: string;
    };
}
