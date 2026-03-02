'use client';

import { FormActions } from '@/components/molecules/form-actions';
import { useState } from 'react';

export default function FormActionsPage() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = () => {
        setSubmitting(true);
        setTimeout(() => setSubmitting(false), 2000);
    };

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Right-aligned)</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Form content goes here...</p>
                    <FormActions onCancel={() => alert('Cancelled')} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Left-aligned</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Form content goes here...</p>
                    <FormActions align="left" onCancel={() => alert('Cancelled')} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Center-aligned</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Form content goes here...</p>
                    <FormActions align="center" onCancel={() => alert('Cancelled')} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Space-between</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Form content goes here...</p>
                    <FormActions align="between" onCancel={() => alert('Cancelled')} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Labels</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Form content goes here...</p>
                    <FormActions
                        submitLabel="Publish"
                        cancelLabel="Discard"
                        onCancel={() => alert('Discarded')}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Submitting State</h2>
                <div className="max-w-lg border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-4">Click Save to see submitting state...</p>
                    <FormActions
                        submitting={submitting}
                        onCancel={() => setSubmitting(false)}
                    />
                    <button
                        className="mt-2 text-xs text-primary underline"
                        onClick={handleSubmit}
                    >
                        Simulate submit
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Sticky Variant</h2>
                <div className="max-w-lg border rounded-lg p-4 relative overflow-hidden h-40">
                    <p className="text-sm text-muted-foreground mb-4">Sticky actions stay pinned to the bottom.</p>
                    <FormActions variant="sticky" onCancel={() => alert('Cancelled')} />
                </div>
            </div>
        </div>
    );
}
