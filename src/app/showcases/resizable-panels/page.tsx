"use client";
import { ResizablePanels } from '@/components/molecules/resizable-panels';

export default function ResizablePanelsPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Two Horizontal Panels</h2>
                <ResizablePanels
                    panels={[
                        { content: <div className="p-6 h-48 flex items-center justify-center text-sm text-muted-foreground">Left Panel — drag handle to resize</div>, defaultSize: 50 },
                        { content: <div className="p-6 h-48 flex items-center justify-center text-sm text-muted-foreground">Right Panel</div>, defaultSize: 50 },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Three Panels</h2>
                <ResizablePanels
                    panels={[
                        { content: <div className="p-4 h-48 flex items-center justify-center text-xs text-muted-foreground bg-muted/30">Sidebar</div>, defaultSize: 20, minSize: 15 },
                        { content: <div className="p-4 h-48 flex items-center justify-center text-xs text-muted-foreground">Main Content</div>, defaultSize: 60 },
                        { content: <div className="p-4 h-48 flex items-center justify-center text-xs text-muted-foreground bg-muted/30">Details</div>, defaultSize: 20, minSize: 15 },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Panels</h2>
                <ResizablePanels
                    direction="vertical"
                    panels={[
                        { content: <div className="p-6 flex items-center justify-center text-sm text-muted-foreground">Top Panel</div>, defaultSize: 40 },
                        { content: <div className="p-6 flex items-center justify-center text-sm text-muted-foreground">Bottom Panel</div>, defaultSize: 60 },
                    ]}
                />
            </div>
        </div>
    );
}
