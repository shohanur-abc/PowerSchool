import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export const ScrollAreaWrapper = ({ children, orientation = 'vertical', height, className, classNames: cns }: ScrollAreaWrapperProps) => (
    <ScrollArea className={cn(className)} style={height ? { height } : undefined}>
        <div className={cns?.content}>{children}</div>
        {orientation === 'horizontal' && <ScrollBar orientation="horizontal" className={cns?.scrollbar} />}
    </ScrollArea>
);

interface ScrollAreaWrapperProps {
    children: React.ReactNode; orientation?: 'vertical' | 'horizontal'; height?: string | number;
    className?: string; classNames?: { content?: string; scrollbar?: string };
}
