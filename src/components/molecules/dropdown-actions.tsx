import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreHorizontalIcon } from 'lucide-react';

export const DropdownActions = ({ trigger, label, items, align = 'end', className, classNames: cns }: DropdownActionsProps) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            {trigger || (
                <Button variant="ghost" size="icon" className={cn("size-8", className)}>
                    <MoreHorizontalIcon className="size-4" />
                    <span className="sr-only">Actions</span>
                </Button>
            )}
        </DropdownMenuTrigger>
        <DropdownMenuContent align={align} className={cns?.content}>
            {label && <><DropdownMenuLabel className={cns?.label}>{label}</DropdownMenuLabel><DropdownMenuSeparator /></>}
            {items.map((item, i) => (
                'separator' in item ? (
                    <DropdownMenuSeparator key={i} />
                ) : (
                    <DropdownMenuItem key={i} onClick={item.onClick} disabled={item.disabled} className={cn(item.destructive && "text-destructive focus:text-destructive", cns?.item)}>
                        {item.icon && <item.icon className="size-4 mr-2" />}
                        {item.label}
                    </DropdownMenuItem>
                )
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
);

type ActionItem = { label: string; onClick?: () => void; icon?: React.ElementType; disabled?: boolean; destructive?: boolean } | { separator: true };

interface DropdownActionsProps {
    trigger?: React.ReactNode;
    label?: string;
    items: ActionItem[];
    align?: 'start' | 'center' | 'end';
    className?: string;
    classNames?: { content?: string; label?: string; item?: string };
}
