"use client";
import { SectionDivider } from '@/components/molecules/section-divider';
import { SparklesIcon } from 'lucide-react';

export default function SectionDividerPage() {
    return (
        <div className="space-y-16 py-8 max-w-2xl">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (no label)</h2>
                <SectionDivider />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Default with Label</h2>
                <SectionDivider label="Our Features" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Compact</h2>
                <SectionDivider label="Compact Section" variant="compact" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Spacious</h2>
                <SectionDivider label="Spacious Section" variant="spacious" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon</h2>
                <SectionDivider label="Highlights" icon={SparklesIcon} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Spacious + Icon</h2>
                <SectionDivider label="Why Choose Us" icon={SparklesIcon} variant="spacious" />
            </div>
        </div>
    );
}
