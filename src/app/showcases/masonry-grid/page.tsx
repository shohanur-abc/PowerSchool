"use client";
import { MasonryGrid } from '@/components/molecules/masonry-grid';

const Card = ({ h, label }: { h: string; label: string }) => (
    <div className={`rounded-xl bg-muted flex items-center justify-center text-sm font-medium ${h}`}>
        {label}
    </div>
);

export default function MasonryGridPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Columns</h2>
                <MasonryGrid cols={2}>
                    <Card h="h-32" label="Item A" />
                    <Card h="h-48" label="Item B" />
                    <Card h="h-56" label="Item C" />
                    <Card h="h-36" label="Item D" />
                    <Card h="h-40" label="Item E" />
                    <Card h="h-28" label="Item F" />
                </MasonryGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns</h2>
                <MasonryGrid cols={3}>
                    <Card h="h-32" label="Item 1" />
                    <Card h="h-52" label="Item 2" />
                    <Card h="h-40" label="Item 3" />
                    <Card h="h-48" label="Item 4" />
                    <Card h="h-28" label="Item 5" />
                    <Card h="h-60" label="Item 6" />
                    <Card h="h-36" label="Item 7" />
                    <Card h="h-44" label="Item 8" />
                    <Card h="h-32" label="Item 9" />
                </MasonryGrid>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">4 Columns with Large Gap</h2>
                <MasonryGrid cols={4} gap={6}>
                    <Card h="h-36" label="A" />
                    <Card h="h-48" label="B" />
                    <Card h="h-28" label="C" />
                    <Card h="h-56" label="D" />
                    <Card h="h-40" label="E" />
                    <Card h="h-32" label="F" />
                    <Card h="h-52" label="G" />
                    <Card h="h-36" label="H" />
                </MasonryGrid>
            </div>
        </div>
    );
}
