import { cn } from '@/lib/utils';

export const TypingIndicator = ({ label, className, classNames: cns }: TypingIndicatorProps) => (
    <div className={cn("flex items-center gap-2", className)}>
        <div className={cn("flex gap-1", cns?.dots)}>
            {[0, 1, 2].map(i => (
                <span key={i} className={cn("size-1.5 rounded-full bg-muted-foreground animate-bounce", cns?.dot)} style={{ animationDelay: `${i * 150}ms` }} />
            ))}
        </div>
        {label && <span className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</span>}
    </div>
);

interface TypingIndicatorProps { label?: string; className?: string; classNames?: { dots?: string; dot?: string; label?: string } }
