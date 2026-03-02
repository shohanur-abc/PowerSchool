"use client";
import { TypingIndicator } from '@/components/molecules/typing-indicator';

export default function TypingIndicatorPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (no label)</h2>
                <TypingIndicator />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Label</h2>
                <TypingIndicator label="Alice is typing..." />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Chat Context</h2>
                <div className="border rounded-xl p-4 max-w-sm space-y-3">
                    <div className="bg-muted rounded-lg px-3 py-2 text-sm max-w-[200px]">
                        Hey, are you free for a meeting tomorrow?
                    </div>
                    <TypingIndicator label="Bob is typing..." />
                </div>
            </div>
        </div>
    );
}
