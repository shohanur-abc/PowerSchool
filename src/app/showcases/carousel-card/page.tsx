'use client';
import { CarouselCard } from '@/components/molecules/carousel-card';
import { Card, CardContent } from '@/components/ui/card';

const SampleSlide = ({ label, color }: { label: string; color: string }) => (
    <div className={`h-40 rounded-lg flex items-center justify-center font-medium ${color}`}>
        {label}
    </div>
);

export default function CarouselCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Basis (1 slide)</h2>
                <CarouselCard
                    basis="full"
                    showControls
                    items={[
                        { content: <SampleSlide label="Slide 1" color="bg-blue-100 text-blue-800" /> },
                        { content: <SampleSlide label="Slide 2" color="bg-green-100 text-green-800" /> },
                        { content: <SampleSlide label="Slide 3" color="bg-purple-100 text-purple-800" /> },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Half Basis (2 slides)</h2>
                <CarouselCard
                    basis="half"
                    showControls
                    items={[
                        { content: <SampleSlide label="Item A" color="bg-orange-100 text-orange-800" /> },
                        { content: <SampleSlide label="Item B" color="bg-red-100 text-red-800" /> },
                        { content: <SampleSlide label="Item C" color="bg-teal-100 text-teal-800" /> },
                        { content: <SampleSlide label="Item D" color="bg-indigo-100 text-indigo-800" /> },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Third Basis (3 slides)</h2>
                <CarouselCard
                    basis="third"
                    showControls
                    items={[
                        { content: <SampleSlide label="Card 1" color="bg-yellow-100 text-yellow-800" /> },
                        { content: <SampleSlide label="Card 2" color="bg-pink-100 text-pink-800" /> },
                        { content: <SampleSlide label="Card 3" color="bg-cyan-100 text-cyan-800" /> },
                        { content: <SampleSlide label="Card 4" color="bg-lime-100 text-lime-800" /> },
                        { content: <SampleSlide label="Card 5" color="bg-violet-100 text-violet-800" /> },
                    ]}
                />
            </div>
        </div>
    );
}
