"use client";
import { TooltipWrapper } from '@/components/molecules/tooltip-wrapper';
import { Button } from '@/components/ui/button';

export default function TooltipWrapperPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Sides</h2>
                <div className="flex flex-wrap gap-4">
                    {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
                        <TooltipWrapper key={side} content={`Tooltip on ${side}`} side={side}>
                            <Button variant="outline" className="capitalize">{side}</Button>
                        </TooltipWrapper>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Alignment Variants</h2>
                <div className="flex flex-wrap gap-4">
                    {(['start', 'center', 'end'] as const).map((align) => (
                        <TooltipWrapper key={align} content={`Aligned: ${align}`} side="top" align={align}>
                            <Button variant="secondary" className="capitalize">Align {align}</Button>
                        </TooltipWrapper>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">On Various Elements</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <TooltipWrapper content="Click to save" side="top">
                        <Button>Save Changes</Button>
                    </TooltipWrapper>
                    <TooltipWrapper content="This field is required" side="right">
                        <span className="text-sm text-muted-foreground underline decoration-dotted cursor-help">
                            Why is this required?
                        </span>
                    </TooltipWrapper>
                    <TooltipWrapper content="User is currently online" side="bottom">
                        <div className="size-3 rounded-full bg-green-500 cursor-default" />
                    </TooltipWrapper>
                </div>
            </div>
        </div>
    );
}
