"use client";
import { HoverGrow } from '@/components/molecules/hover-grow';
import { Card } from '@/components/ui/card';

export default function HoverGrowPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Scale (1.05)</h2>
                <div className="flex flex-wrap gap-4">
                    {['Card 1', 'Card 2', 'Card 3'].map((c) => (
                        <HoverGrow key={c}>
                            <Card className="p-6 w-40 text-center text-sm font-medium cursor-pointer">{c}</Card>
                        </HoverGrow>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Scale (1.1)</h2>
                <div className="flex flex-wrap gap-4">
                    {['Button A', 'Button B'].map((b) => (
                        <HoverGrow key={b} scale={1.1}>
                            <div className="bg-primary text-primary-foreground rounded-lg px-6 py-3 text-sm font-medium cursor-pointer">{b}</div>
                        </HoverGrow>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Subtle Scale (1.02) on Large Cards</h2>
                <HoverGrow scale={1.02}>
                    <Card className="p-8 max-w-sm">
                        <h3 className="font-semibold mb-2">Feature Highlight</h3>
                        <p className="text-sm text-muted-foreground">Hover to see a subtle grow effect on this larger card.</p>
                    </Card>
                </HoverGrow>
            </div>
        </div>
    );
}
