"use client";
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export const PopoverMenu = ({ trigger, items, align = 'end', className, classNames: cns }: PopoverMenuProps) => (
    <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent align={align} className={cn("w-48 p-1", className)}>
            {items.map((item, i) => (
                'separator' in item ? <div key={i} className="h-px bg-border my-1" /> : (
                    <Button key={i} variant="ghost" size="sm" onClick={item.onClick} disabled={item.disabled} className={cn("w-full justify-start gap-2 font-normal", item.destructive && "text-destructive hover:text-destructive", cns?.item)}>
                        {item.icon && <item.icon className="size-4" />}
                        {item.label}
                    </Button>
                )
            ))}
        </PopoverContent>
    </Popover>
);

type MenuItem = { label: string; onClick?: () => void; icon?: React.ElementType; disabled?: boolean; destructive?: boolean } | { separator: true };

interface PopoverMenuProps {
    trigger: React.ReactNode; items: MenuItem[]; align?: 'start' | 'center' | 'end';
    className?: string; classNames?: { item?: string };
}
