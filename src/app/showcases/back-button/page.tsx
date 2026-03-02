'use client';
import { BackButton } from '@/components/molecules/back-button';

export default function BackButtonPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Label</h2>
                <BackButton href="#" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Label</h2>
                <BackButton label="Back to Dashboard" href="/dashboard" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Label (Settings)</h2>
                <BackButton label="Return to Settings" href="/settings" />
            </div>
        </div>
    );
}
