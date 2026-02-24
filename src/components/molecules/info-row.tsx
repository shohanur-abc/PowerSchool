import { cn } from '@/lib/utils';

export const InfoRow = ({ icon: Icon, label, value, action, className, classNames: cns }: InfoRowProps) => (
    <div className={cn("flex items-center gap-3 py-2.5 @container", className)}>
        {Icon && <div className={cn("p-1.5 rounded-lg bg-muted shrink-0", cns?.iconWrapper)}><Icon className={cn("size-4 text-muted-foreground", cns?.icon)} /></div>}
        <div className="flex-1 min-w-0">
            <p className={cn("text-xs text-muted-foreground", cns?.label)}>{label}</p>
            <p className={cn("text-sm font-medium truncate", cns?.value)}>{typeof value === 'string' ? value : value}</p>
        </div>
        {action && <div className={cn("shrink-0", cns?.action)}>{action}</div>}
    </div>
);

interface InfoRowProps {
    icon?: React.ElementType; label: string; value: React.ReactNode; action?: React.ReactNode;
    className?: string; classNames?: { iconWrapper?: string; icon?: string; label?: string; value?: string; action?: string };
}
