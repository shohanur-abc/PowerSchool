"use client";
import { GridContainer } from '@/components/molecules/grid-container';
import { Card, CardContent } from '@/components/ui/card';

const Item = ({ label }: { label: string }) => (
    <Card><CardContent className="flex items-center justify-center h-24 text-sm font-medium text-muted-foreground">{label}</CardContent></Card>
);

export default function GridContainerPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns (default)</h2>
                <GridContainer cols={3} gap={4}>
                    {[1, 2, 3, 4, 5, 6].map(i => <Item key={i} label={`Item ${i}`} />)}
                </GridContainer>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Columns</h2>
                <GridContainer cols={2} gap={4}>
                    {[1, 2, 3, 4].map(i => <Item key={i} label={`Item ${i}`} />)}
                </GridContainer>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">4 Columns</h2>
                <GridContainer cols={4} gap={3}>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <Item key={i} label={`Item ${i}`} />)}
                </GridContainer>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">6 Columns, Gap 2</h2>
                <GridContainer cols={6} gap={2}>
                    {[1, 2, 3, 4, 5, 6].map(i => <Item key={i} label={`${i}`} />)}
                </GridContainer>
            </div>
        </div>
    );
}
