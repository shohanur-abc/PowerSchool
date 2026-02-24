"use client";
import { cn } from '@/lib/utils';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const CopyButton = ({ text, label = "Copy", copiedLabel = "Copied!", variant = 'ghost', size = 'icon', className, classNames: cns }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant={variant} size={size} onClick={handleCopy} className={className} aria-label={label}>
                        {copied ? <CheckIcon className={cn("size-4 text-green-500", cns?.icon)} /> : <CopyIcon className={cn("size-4", cns?.icon)} />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent className={cns?.tooltip}>{copied ? copiedLabel : label}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

interface CopyButtonProps {
    text: string;
    label?: string;
    copiedLabel?: string;
    variant?: React.ComponentProps<typeof Button>['variant'];
    size?: React.ComponentProps<typeof Button>['size'];
    className?: string;
    classNames?: { icon?: string; tooltip?: string };
}
