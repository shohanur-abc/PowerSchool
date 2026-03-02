'use client';
import { CopyButton } from '@/components/molecules/copy-button';

export default function CopyButtonPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <CopyButton text="npm install @shadcn/ui" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Label</h2>
                <CopyButton text="sk-prod-abc123xyz456" label="Copy API Key" copiedLabel="Key Copied!" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="flex flex-wrap gap-4">
                    <CopyButton text="Outline variant" variant="outline" label="Copy (Outline)" />
                    <CopyButton text="Ghost variant" variant="ghost" label="Copy (Ghost)" />
                    <CopyButton text="Secondary variant" variant="secondary" label="Copy (Secondary)" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <CopyButton text="Small" size="sm" label="Small" />
                    <CopyButton text="Default" label="Default" />
                    <CopyButton text="Large" size="lg" label="Large" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Context (Code Snippet)</h2>
                <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-3 max-w-sm">
                    <code className="text-sm flex-1 text-muted-foreground">bunx shadcn@latest add button</code>
                    <CopyButton text="bunx shadcn@latest add button" size="sm" variant="ghost" />
                </div>
            </div>
        </div>
    );
}
