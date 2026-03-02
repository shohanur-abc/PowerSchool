"use client";
import { Placeholder } from '@/components/molecules/placeholder';
import { ImageIcon, BarChartIcon } from 'lucide-react';

export default function PlaceholderPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Placeholder</h2>
                <Placeholder height={160} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Label</h2>
                <Placeholder height={120} label="Image placeholder" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon</h2>
                <Placeholder height={140} icon={ImageIcon} label="Drop image here" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Dashed</h2>
                <Placeholder height={100} dashed label="Chart area" icon={BarChartIcon} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Tall</h2>
                <Placeholder height={300} label="Content placeholder" dashed />
            </div>
        </div>
    );
}
