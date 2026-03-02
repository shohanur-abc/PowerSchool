"use client";
import { AspectImage } from '@/components/molecules/aspect-image';

export default function AspectImagePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">16:9 (Default)</h2>
                <div className="max-w-xl">
                    <AspectImage
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"
                        alt="Classroom"
                        ratio={16 / 9}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">1:1 (Square)</h2>
                <div className="max-w-xs">
                    <AspectImage
                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400"
                        alt="School"
                        ratio={1}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">4:3</h2>
                <div className="max-w-sm">
                    <AspectImage
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600"
                        alt="Students"
                        ratio={4 / 3}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">3:4 (Portrait)</h2>
                <div className="max-w-xs">
                    <AspectImage
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
                        alt="Graduation"
                        ratio={3 / 4}
                    />
                </div>
            </div>
        </div>
    );
}
