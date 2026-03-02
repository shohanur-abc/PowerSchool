"use client";
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export const IconButton = ({ icon: Icon, label, tooltip, variant = 'ghost', size = 'icon', className, classNames: cns, ...props }: IconButtonProps) => {
    const button = (
        <Button variant={variant} size={size} className={cn(className)} aria-label={label} {...props}>
            <Icon className={cn("size-4", cns?.icon)} />
        </Button>
    );

    if (!tooltip) return button;

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{button}</TooltipTrigger>
                <TooltipContent className={cns?.tooltip}>
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};


// ============= TYPES =============
interface IconButtonProps extends Omit<React.ComponentProps<typeof Button>, 'children'> {
    icon: React.ElementType;
    label: string;
    tooltip?: string;
    classNames?: {
        icon?: string;
        tooltip?: string;
    };
}
