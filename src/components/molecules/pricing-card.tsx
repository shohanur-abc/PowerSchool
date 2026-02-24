import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Badge } from '@/components/ui/badge';

export const PricingCard = ({ name, price, period, description, features, cta, badge, highlighted, className, classNames: cns }: PricingCardProps) => (
    <div className={cn(pricingVariant({ highlighted: !!highlighted }), "@container", className)}>
        {badge && <Badge className={cn("absolute -top-3 left-1/2 -translate-x-1/2", cns?.badge)}>{badge}</Badge>}
        <div className={cn("mb-6", cns?.header)}>
            <h3 className={cn("text-lg font-semibold", cns?.name)}>{name}</h3>
            {description && <p className={cn("text-sm text-muted-foreground mt-1", cns?.description)}>{description}</p>}
        </div>
        <div className={cn("mb-6", cns?.priceWrapper)}>
            <span className={cn("text-4xl font-bold", cns?.price)}>{price}</span>
            {period && <span className={cn("text-sm text-muted-foreground ml-1", cns?.period)}>/{period}</span>}
        </div>
        <ul className={cn("space-y-3 mb-8", cns?.features)}>
            {features.map(({ text, included = true }, i) => (
                <li key={i} className={cn("flex items-center gap-2 text-sm", !included && "text-muted-foreground line-through", cns?.feature)}>
                    <span className={cn(included ? "text-green-500" : "text-muted-foreground")}>
                        {included ? '✓' : '✗'}
                    </span>
                    {text}
                </li>
            ))}
        </ul>
        {cta}
    </div>
);


// ============= VARIANTS =============
const pricingVariant = cva("relative rounded-xl border p-6 transition-all", {
    variants: {
        highlighted: {
            true: "border-primary shadow-lg scale-105",
            false: "hover:border-primary/50 hover:shadow-md",
        },
    },
});


// ============= TYPES =============
interface PricingCardProps {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: { text: string; included?: boolean }[];
    cta?: React.ReactNode;
    badge?: string;
    highlighted?: boolean;
    className?: string;
    classNames?: {
        badge?: string;
        header?: string;
        name?: string;
        description?: string;
        priceWrapper?: string;
        price?: string;
        period?: string;
        features?: string;
        feature?: string;
    };
}
