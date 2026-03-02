'use client';
import { ComparisonSlider } from '@/components/molecules/comparison-slider';

export default function ComparisonSliderPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Before / After with Labels</h2>
                <div className="max-w-lg">
                    <ComparisonSlider
                        before={{ src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=60', alt: 'Original photo', label: 'Before' }}
                        after={{ src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&sat=-100', alt: 'Edited photo', label: 'After' }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Design Comparison (No Labels)</h2>
                <div className="max-w-lg">
                    <ComparisonSlider
                        before={{ src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Design A' }}
                        after={{ src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800', alt: 'Design B' }}
                    />
                </div>
            </div>
        </div>
    );
}
