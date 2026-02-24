import { cn } from '@/lib/utils';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuTrigger } from '@/components/ui/context-menu';

export const ContextMenuWrapper = ({ children, label, items, className, classNames: cns }: ContextMenuWrapperProps) => (
    <ContextMenu>
        <ContextMenuTrigger className={cn(className)}>{children}</ContextMenuTrigger>
        <ContextMenuContent className={cns?.content}>
            {label && <><ContextMenuLabel className={cns?.label}>{label}</ContextMenuLabel><ContextMenuSeparator /></>}
            {items.map((item, i) => (
                'separator' in item ? <ContextMenuSeparator key={i} /> : (
                    <ContextMenuItem key={i} onClick={item.onClick} disabled={item.disabled} className={cn(item.destructive && "text-destructive focus:text-destructive", cns?.item)}>
                        {item.icon && <item.icon className="size-4 mr-2" />}
                        {item.label}
                        {item.shortcut && <span className="ml-auto text-xs text-muted-foreground">{item.shortcut}</span>}
                    </ContextMenuItem>
                )
            ))}
        </ContextMenuContent>
    </ContextMenu>
);

type ContextItem = { label: string; onClick?: () => void; icon?: React.ElementType; shortcut?: string; disabled?: boolean; destructive?: boolean } | { separator: true };

interface ContextMenuWrapperProps {
    children: React.ReactNode; label?: string; items: ContextItem[];
    className?: string; classNames?: { content?: string; label?: string; item?: string };
}
