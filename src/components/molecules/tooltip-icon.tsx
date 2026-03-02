"use client";
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const TooltipIcon = ({ content, icon: Icon = InfoIcon, side = 'top', className, classNames: cns }: TooltipIconProps) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Icon className={cn("size-4 text-muted-foreground cursor-help inline-block", className, cns?.icon)} />
            </TooltipTrigger>
            <TooltipContent side={side} className={cns?.content}>
                {typeof content === 'string' ? <p className="max-w-xs text-xs">{content}</p> : content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

interface TooltipIconProps {
    content: React.ReactNode; icon?: React.ElementType; side?: 'top' | 'right' | 'bottom' | 'left';
    className?: string; classNames?: { icon?: string; content?: string };
}
