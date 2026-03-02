'use client';
import { StickyHeader } from '@/components/molecules/sticky-header';
import { Button } from '@/components/ui/button';

export default function StickyHeaderPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Threshold (50px)</h2>
                <div className="border rounded-xl overflow-auto h-48 relative">
                    <StickyHeader>
                        <div className="px-6 py-3 flex items-center justify-between">
                            <span className="font-semibold">Sticky Topbar</span>
                            <Button size="sm" variant="outline">Action</Button>
                        </div>
                    </StickyHeader>
                    <div className="p-6 text-sm text-muted-foreground space-y-3">
                        <p>Scroll down inside this container to see the sticky header take effect.</p>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <p key={i}>Content paragraph {i + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Threshold (100px)</h2>
                <div className="border rounded-xl overflow-auto h-48 relative">
                    <StickyHeader threshold={100}>
                        <div className="px-6 py-3 flex items-center justify-between">
                            <span className="font-semibold">Header (100px threshold)</span>
                            <Button size="sm" variant="ghost">Menu</Button>
                        </div>
                    </StickyHeader>
                    <div className="p-6 text-sm text-muted-foreground space-y-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <p key={i}>Scroll further — header sticks at 100px. Paragraph {i + 1}.</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
