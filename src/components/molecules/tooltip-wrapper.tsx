import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const TooltipWrapper = ({ children, content, side = 'top', align = 'center', className, classNames: cns }: TooltipWrapperProps) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild className={cns?.trigger}>{children}</TooltipTrigger>
            <TooltipContent side={side} align={align} className={cn(className)}>
                {typeof content === 'string' ? <p className={cns?.content}>{content}</p> : content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

interface TooltipWrapperProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    className?: string;
    classNames?: { trigger?: string; content?: string };
}
