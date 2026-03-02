'use client';
import { ImageWithFallback } from '@/components/molecules/image-with-fallback';

export default function ImageWithFallbackPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Valid Image</h2>
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"
                    alt="School"
                    width={400}
                    height={250}
                    className="rounded-xl object-cover"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Broken Image (Shows Fallback Icon)</h2>
                <ImageWithFallback
                    src="https://example.invalid/broken-image.jpg"
                    alt="Broken image"
                    width={300}
                    height={200}
                    className="rounded-xl"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Broken Image with Custom Fallback</h2>
                <ImageWithFallback
                    src="https://example.invalid/avatar.jpg"
                    alt="User avatar"
                    width={80}
                    height={80}
                    fallback={
                        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                            JD
                        </div>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Multiple Cards with Fallback</h2>
                <div className="grid grid-cols-3 gap-4 max-w-md">
                    {[
                        { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=200', name: 'Alice' },
                        { src: 'https://example.invalid/missing.jpg', name: 'Bob' },
                        { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=200', name: 'Carol' },
                    ].map(({ src, name }) => (
                        <div key={name} className="border rounded-xl overflow-hidden">
                            <div className="aspect-square relative bg-muted">
                                <ImageWithFallback
                                    src={src}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-xs text-center py-2 font-medium">{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
