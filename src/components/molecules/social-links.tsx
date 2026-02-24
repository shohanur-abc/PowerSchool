import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const SocialLinks = ({ links, size = 'icon', variant = 'ghost', className, classNames: cns }: SocialLinksProps) => (
    <TooltipProvider>
        <div className={cn("flex items-center gap-1", className)}>
            {links.map(({ icon: Icon, href, label }, i) => (
                <Tooltip key={i}>
                    <TooltipTrigger asChild>
                        <Button variant={variant} size={size} asChild className={cns?.button}>
                            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                                <Icon className={cn("size-4", cns?.icon)} />
                            </a>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>{label}</TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
);

interface SocialLinksProps {
    links: { icon: React.ElementType; href: string; label: string }[];
    size?: React.ComponentProps<typeof Button>['size'];
    variant?: React.ComponentProps<typeof Button>['variant'];
    className?: string;
    classNames?: { button?: string; icon?: string };
}
