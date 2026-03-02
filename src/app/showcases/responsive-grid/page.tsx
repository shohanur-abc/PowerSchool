"use client";
import { ResponsiveGrid } from '@/components/molecules/responsive-grid';
import { Card, CardContent } from '@/components/ui/card';

const Item = ({ label }: { label: string }) => (
    <Card><CardContent className="flex items-center justify-center h-24 text-sm font-medium text-muted-foreground">{label}</CardContent></Card>
);

export default function ResponsiveGridPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns — Default Variant</h2>
                <ResponsiveGrid cols={3}>
                    {[1, 2, 3, 4, 5, 6].map(i => <Item key={i} label={`Item ${i}`} />)}
                </ResponsiveGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">4 Columns — Default</h2>
                <ResponsiveGrid cols={4}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Item key={i} label={`Item ${i}`} />)}
                </ResponsiveGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Columns — Compact</h2>
                <ResponsiveGrid cols={2} variant="compact">
                    {[1, 2, 3, 4].map(i => <Item key={i} label={`Item ${i}`} />)}
                </ResponsiveGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns — Loose</h2>
                <ResponsiveGrid cols={3} variant="loose">
                    {[1, 2, 3].map(i => <Item key={i} label={`Item ${i}`} />)}
                </ResponsiveGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">6 Columns</h2>
                <ResponsiveGrid cols={6} gap={2}>
                    {[1, 2, 3, 4, 5, 6].map(i => <Item key={i} label={`${i}`} />)}
                </ResponsiveGrid>
            </div>
        </div>
    );
}
