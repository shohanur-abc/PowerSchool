import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const FeatureCard = ({ title, description, icon: Icon, className, classNames: cns, variant = 'default' }: FeatureCardProps) => (
    <div className={cn(featureVariant({ variant }), "@container", className)}>
        {Icon && (
            <div className={cn("flex items-center justify-center size-12 rounded-xl bg-primary/10 mb-4", cns?.iconWrapper)}>
                <Icon className={cn("size-6 text-primary", cns?.icon)} />
            </div>
        )}
        <h3 className={cn("text-lg font-semibold mb-2", cns?.title)}>{title}</h3>
        {description && <p className={cn("text-sm text-muted-foreground leading-relaxed", cns?.description)}>{description}</p>}
    </div>
);


// ============= VARIANTS =============
const featureVariant = cva("p-6 rounded-xl transition-all", {
    variants: {
        variant: {
            default: "border bg-card hover:shadow-md hover:border-primary/20",
            ghost: "hover:bg-muted/50",
            filled: "bg-muted",
            outline: "border-2 hover:border-primary/50",
        },
    },
});


// ============= TYPES =============
interface FeatureCardProps {
    title: string;
    description?: string;
    icon?: React.ElementType;
    variant?: 'default' | 'ghost' | 'filled' | 'outline';
    className?: string;
    classNames?: {
        iconWrapper?: string;
        icon?: string;
        title?: string;
        description?: string;
    };
}
