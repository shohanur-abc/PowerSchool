"use client";
import { Rating } from '@/components/molecules/rating';

export default function RatingPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Various Values</h2>
                <div className="space-y-3">
                    {[5, 4.5, 3.7, 2, 0.5].map((v) => (
                        <div key={v} className="flex items-center gap-3">
                            <Rating value={v} showValue />
                            <span className="text-xs text-muted-foreground">({v})</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="space-y-3">
                    {(['sm', 'default', 'lg', 'xl'] as const).map((size) => (
                        <div key={size} className="flex items-center gap-3">
                            <Rating value={4} size={size} />
                            <span className="text-xs text-muted-foreground">{size}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Max</h2>
                <div className="space-y-2">
                    <Rating value={7} max={10} showValue />
                    <Rating value={3} max={10} size="sm" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Context (Reviews)</h2>
                <div className="space-y-4 max-w-sm">
                    {[
                        { name: 'Alice Johnson', rating: 5, comment: 'Excellent course material!' },
                        { name: 'Bob Smith', rating: 3.5, comment: 'Good but could improve pace.' },
                        { name: 'Carol White', rating: 4, comment: 'Very well structured.' },
                    ].map(({ name, rating, comment }) => (
                        <div key={name} className="border rounded-xl p-4">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">{name}</span>
                                <Rating value={rating} size="sm" showValue />
                            </div>
                            <p className="text-xs text-muted-foreground">{comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
