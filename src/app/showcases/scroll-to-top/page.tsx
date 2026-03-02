'use client';
import { ScrollToTop } from '@/components/molecules/scroll-to-top';

export default function ScrollToTopPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Threshold (300px)</h2>
                <p className="text-sm text-muted-foreground mb-2">
                    The scroll-to-top button appears after scrolling down 300px. Scroll the page to see it.
                </p>
                <div className="border rounded-xl p-6 text-sm text-muted-foreground bg-muted/30">
                    <ScrollToTop />
                    <p className="font-medium mb-2">ScrollToTop component is active on this page.</p>
                    <p>Scroll down past the threshold to see the button appear in the bottom-right corner.</p>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Threshold (100px)</h2>
                <p className="text-sm text-muted-foreground">
                    With a lower threshold, the button appears sooner after scrolling.
                </p>
                <ScrollToTop threshold={100} />
            </div>
            {/* Filler to allow scrolling */}
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-24 border rounded-xl bg-muted/20 flex items-center justify-center text-sm text-muted-foreground">
                    Scroll filler block {i + 1}
                </div>
            ))}
        </div>
    );
}
