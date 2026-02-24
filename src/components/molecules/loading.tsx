import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const LoadingSpinner = ({ size = 'default', variant = 'default', label, className, classNames: cns }: LoadingSpinnerProps) => (
    <div className={cn("flex flex-col items-center justify-center gap-2", className)} role="status">
        <div className={cn(spinnerVariant({ size, variant }), cns?.spinner)} />
        {label && <span className={cn("text-sm text-muted-foreground", cns?.label)}>{label}</span>}
        <span className="sr-only">Loading...</span>
    </div>
);

export const LoadingDots = ({ size = 'default', className, classNames: cns }: { size?: 'sm' | 'default' | 'lg'; className?: string; classNames?: { dot?: string } }) => (
    <div className={cn("flex items-center gap-1", className)} role="status">
        {[0, 1, 2].map((i) => (
            <div
                key={i}
                className={cn(
                    "rounded-full bg-primary animate-bounce",
                    size === 'sm' ? "size-1.5" : size === 'lg' ? "size-3" : "size-2",
                    cns?.dot
                )}
                style={{ animationDelay: `${i * 0.15}s` }}
            />
        ))}
        <span className="sr-only">Loading...</span>
    </div>
);

export const LoadingBar = ({ className }: { className?: string }) => (
    <div className={cn("w-full h-1 bg-muted overflow-hidden rounded-full", className)} role="status">
        <div className="h-full bg-primary animate-pulse w-1/3 rounded-full" style={{ animation: 'loading-bar 1.5s ease-in-out infinite' }} />
        <span className="sr-only">Loading...</span>
    </div>
);


// ============= VARIANTS =============
const spinnerVariant = cva("rounded-full border-2 border-current border-t-transparent animate-spin", {
    variants: {
        size: {
            sm: "size-4",
            default: "size-8",
            lg: "size-12",
            xl: "size-16",
        },
        variant: {
            default: "text-primary",
            muted: "text-muted-foreground",
            white: "text-white",
        },
    },
});


// ============= TYPES =============
interface LoadingSpinnerProps {
    size?: 'sm' | 'default' | 'lg' | 'xl';
    variant?: 'default' | 'muted' | 'white';
    label?: string;
    className?: string;
    classNames?: { spinner?: string; label?: string };
}
