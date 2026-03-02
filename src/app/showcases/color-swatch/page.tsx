"use client";
import { ColorSwatch } from '@/components/molecules/color-swatch';

export default function ColorSwatchPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Size with Labels</h2>
                <ColorSwatch
                    showLabel
                    colors={[
                        { color: '#3b82f6', label: 'Blue' },
                        { color: '#22c55e', label: 'Green' },
                        { color: '#f59e0b', label: 'Amber' },
                        { color: '#ef4444', label: 'Red' },
                        { color: '#8b5cf6', label: 'Violet' },
                        { color: '#ec4899', label: 'Pink' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <ColorSwatch
                    size="sm"
                    colors={[
                        { color: '#1e293b' },
                        { color: '#334155' },
                        { color: '#64748b' },
                        { color: '#94a3b8' },
                        { color: '#cbd5e1' },
                        { color: '#f1f5f9' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Size with Hex Labels</h2>
                <ColorSwatch
                    size="lg"
                    showLabel
                    colors={[
                        { color: '#f97316', label: '#f97316' },
                        { color: '#0ea5e9', label: '#0ea5e9' },
                        { color: '#14b8a6', label: '#14b8a6' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Brand Colors Palette</h2>
                <ColorSwatch
                    size="default"
                    showLabel
                    colors={[
                        { color: '#4f46e5', label: 'Primary' },
                        { color: '#7c3aed', label: 'Secondary' },
                        { color: '#0f172a', label: 'Dark' },
                        { color: '#f8fafc', label: 'Light' },
                    ]}
                />
            </div>
        </div>
    );
}
