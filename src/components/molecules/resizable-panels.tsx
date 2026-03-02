"use client";
import { cn } from '@/lib/utils';
import { Fragment } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export const ResizablePanels = ({ panels, direction = 'horizontal', className, classNames: cns }: ResizablePanelsProps) => (
    <ResizablePanelGroup orientation={direction} className={cn("rounded-lg border", className)}>
        {panels.map(({ content, defaultSize, minSize, maxSize }, i) => (
            <Fragment key={i}>
                {i > 0 && <ResizableHandle withHandle className={cns?.handle} />}
                <ResizablePanel defaultSize={defaultSize || 100 / panels.length} minSize={minSize} maxSize={maxSize} className={cns?.panel}>
                    {content}
                </ResizablePanel>
            </Fragment>
        ))}
    </ResizablePanelGroup>
);

interface ResizablePanelsProps {
    panels: { content: React.ReactNode; defaultSize?: number; minSize?: number; maxSize?: number }[];
    direction?: 'horizontal' | 'vertical';
    className?: string; classNames?: { handle?: string; panel?: string };
}
