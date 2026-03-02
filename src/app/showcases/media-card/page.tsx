"use client";
import { MediaCard } from '@/components/molecules/media-card';
import { Button } from '@/components/ui/button';

export default function MediaCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Video Aspect Ratio</h2>
                <div className="grid grid-cols-2 gap-4">
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600', alt: 'Classroom' }}
                        title="Modern Learning Environments"
                        description="Explore how technology transforms classrooms today."
                        badge="Education"
                        aspectRatio="video"
                    />
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', alt: 'Students' }}
                        title="Student Success Stories"
                        description="Real stories from students who changed their lives."
                        aspectRatio="video"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Square Aspect Ratio</h2>
                <div className="grid grid-cols-3 gap-4">
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400', alt: 'Library' }}
                        title="School Library"
                        aspectRatio="square"
                    />
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400', alt: 'Lab' }}
                        title="Science Lab"
                        aspectRatio="square"
                    />
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400', alt: 'Sports' }}
                        title="Sports Day"
                        aspectRatio="square"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Footer</h2>
                <div className="grid grid-cols-2 gap-4">
                    <MediaCard
                        image={{ src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600', alt: 'Event' }}
                        title="Annual Science Fair"
                        description="Join us for this year's science fair."
                        aspectRatio="wide"
                        meta={<span className="text-xs">March 15, 2025</span>}
                        footer={<Button size="sm" className="w-full">Register Now</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
