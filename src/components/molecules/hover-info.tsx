import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

export const HoverInfo = ({ trigger, children, side = 'bottom', align = 'center', className, classNames: cns }: HoverInfoProps) => (
    <HoverCard>
        <HoverCardTrigger asChild className={cns?.trigger}>{trigger}</HoverCardTrigger>
        <HoverCardContent side={side} align={align} className={cn("w-80", className)}>
            <div className={cns?.content}>{children}</div>
        </HoverCardContent>
    </HoverCard>
);

interface HoverInfoProps {
    trigger: React.ReactNode; children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left'; align?: 'start' | 'center' | 'end';
    className?: string; classNames?: { trigger?: string; content?: string };
}
