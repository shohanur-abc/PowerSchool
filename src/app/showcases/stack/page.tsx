"use client";
import { Stack } from '@/components/molecules/stack';
import { Card, CardContent } from '@/components/ui/card';

const Box = ({ label }: { label: string }) => (
    <Card><CardContent className="flex items-center justify-center h-16 text-sm font-medium">{label}</CardContent></Card>
);

export default function StackPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Stack (default)</h2>
                <Stack>
                    <Box label="Item 1" />
                    <Box label="Item 2" />
                    <Box label="Item 3" />
                </Stack>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Stack</h2>
                <Stack direction="horizontal" gap={4}>
                    <Box label="Left" />
                    <Box label="Center" />
                    <Box label="Right" />
                </Stack>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal with Space Between</h2>
                <Stack direction="horizontal" justify="between">
                    <Box label="Start" />
                    <Box label="End" />
                </Stack>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Center Aligned</h2>
                <Stack align="center" gap={2}>
                    <Box label="Wide Item" />
                    <div className="bg-muted rounded p-3 text-sm text-center w-32">Narrow</div>
                </Stack>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Wrapped</h2>
                <Stack direction="horizontal" wrap gap={3}>
                    {['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta'].map(l => (
                        <div key={l} className="bg-muted rounded px-4 py-2 text-sm">{l}</div>
                    ))}
                </Stack>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Gap (8)</h2>
                <Stack gap={8}>
                    <Box label="Top" />
                    <Box label="Bottom" />
                </Stack>
            </div>
        </div>
    );
}
