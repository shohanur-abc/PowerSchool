import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const TestimonialCard = ({ quote, author, variant = 'default', className, classNames: cns }: TestimonialCardProps) => (
    <div className={cn(testimonialVariant({ variant }), "@container", className)}>
        <blockquote className={cn("text-sm leading-relaxed mb-4", cns?.quote)}>
            &ldquo;{quote}&rdquo;
        </blockquote>
        <div className={cn("flex items-center gap-3", cns?.author)}>
            {author.avatar && (
                <Avatar size="default">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            )}
            <div>
                <p className={cn("text-sm font-semibold", cns?.name)}>{author.name}</p>
                {author.role && <p className={cn("text-xs text-muted-foreground", cns?.role)}>{author.role}</p>}
            </div>
        </div>
    </div>
);


// ============= VARIANTS =============
const testimonialVariant = cva("p-6 rounded-xl", {
    variants: {
        variant: {
            default: "border bg-card",
            filled: "bg-muted",
            quote: "border-l-4 border-primary pl-6 bg-transparent rounded-none",
        },
    },
});


// ============= TYPES =============
interface TestimonialCardProps {
    quote: string;
    author: { name: string; role?: string; avatar?: string };
    variant?: 'default' | 'filled' | 'quote';
    className?: string;
    classNames?: {
        quote?: string;
        author?: string;
        name?: string;
        role?: string;
    };
}
