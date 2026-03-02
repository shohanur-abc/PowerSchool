'use client';
import { ImageGallery } from '@/components/molecules/image-gallery';

const images = [
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400', alt: 'School hallway' },
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400', alt: 'Classroom' },
    { src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400', alt: 'Library' },
    { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400', alt: 'Students studying' },
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400', alt: 'Graduation' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400', alt: 'Event' },
];

export default function ImageGalleryPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns (Square)</h2>
                <ImageGallery images={images} cols={3} aspectRatio="square" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Columns (Video)</h2>
                <ImageGallery images={images.slice(0, 4)} cols={2} aspectRatio="video" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">4 Columns (Wide)</h2>
                <ImageGallery images={images} cols={4} aspectRatio="wide" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Portrait Aspect</h2>
                <ImageGallery images={images} cols={3} aspectRatio="portrait" />
            </div>
        </div>
    );
}
