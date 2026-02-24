import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

export const Overlay = ({ children, variant = 'default', className, classNames: cns }: OverlayProps) => (
    <div className={cn(overlayVariant({ variant }), className)}>
        <div className={cn("relative z-10", cns?.content)}>{children}</div>
    </div>
);

const overlayVariant = cva("fixed inset-0 z-50 flex items-center justify-center", {
    variants: {
        variant: {
            default: "bg-black/50 backdrop-blur-sm",
            light: "bg-white/80 backdrop-blur-sm",
            dark: "bg-black/80",
            transparent: "",
        },
    },
});

interface OverlayProps {
    children: React.ReactNode; variant?: 'default' | 'light' | 'dark' | 'transparent';
    className?: string; classNames?: { content?: string };
}
