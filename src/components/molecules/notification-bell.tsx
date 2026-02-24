"use client";
import { cn } from '@/lib/utils';
import { BellIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const NotificationBell = ({ count, children, className, classNames: cns }: NotificationBellProps) => (
    <Popover>
        <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("relative", className)}>
                <BellIcon className={cn("size-5", cns?.icon)} />
                {count !== undefined && count > 0 && (
                    <span className={cn("absolute -top-0.5 -right-0.5 flex items-center justify-center min-w-[18px] h-[18px] text-[10px] font-bold bg-destructive text-white rounded-full px-1", cns?.badge)}>
                        {count > 99 ? '99+' : count}
                    </span>
                )}
            </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className={cn("w-80 p-0", cns?.content)}>
            {children}
        </PopoverContent>
    </Popover>
);

interface NotificationBellProps {
    count?: number; children: React.ReactNode;
    className?: string; classNames?: { icon?: string; badge?: string; content?: string };
}
