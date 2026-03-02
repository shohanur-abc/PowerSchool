"use client";
import { AspectCard } from '@/components/molecules/aspect-card';

export default function AspectCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Grid of Cards</h2>
                <div className="grid grid-cols-3 gap-4">
                    <AspectCard
                        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600"
                        title="Classroom Technology"
                        description="Modern learning environments"
                        badge="Education"
                        href="#"
                    />
                    <AspectCard
                        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
                        title="Student Life"
                        description="Campus activities"
                    />
                    <AspectCard
                        image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600"
                        title="Library Resources"
                        badge="Books"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Overlay Text</h2>
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                    <AspectCard
                        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
                        title="Sports &amp; Fitness"
                        description="Annual sports meet"
                        overlay
                        href="#"
                    />
                    <AspectCard
                        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600"
                        title="Science Exhibition"
                        overlay
                        href="#"
                    />
                </div>
            </div>
        </div>
    );
}
