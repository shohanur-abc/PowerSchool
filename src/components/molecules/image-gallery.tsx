"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ImageGallery = ({ images, cols = 3, aspectRatio = 'square', className, classNames: cns }: ImageGalleryProps) => {
    const [selected, setSelected] = useState<number | null>(null);
    const aspects = { square: 'aspect-square', video: 'aspect-video', wide: 'aspect-[2/1]', portrait: 'aspect-[3/4]' };

    return (
        <>
            <div className={cn("grid gap-2 @container", cols === 2 ? "grid-cols-2" : cols === 3 ? "grid-cols-2 @md:grid-cols-3" : "grid-cols-2 @md:grid-cols-3 @xl:grid-cols-4", className)}>
                {images.map(({ src, alt }, i) => (
                    <button key={i} onClick={() => setSelected(i)} className={cn("relative rounded-lg overflow-hidden", aspects[aspectRatio], cns?.thumbnail)}>
                        <Image src={src} alt={alt || ''} fill className={cn("object-cover hover:scale-105 transition-transform", cns?.image)} />
                    </button>
                ))}
            </div>
            <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
                <DialogContent className="max-w-4xl p-0">
                    {selected !== null && (
                        <div className="relative">
                            <div className={cn("relative aspect-video", cns?.preview)}>
                                <Image src={images[selected].src} alt={images[selected].alt || ''} fill className="object-contain" />
                            </div>
                            <Button variant="ghost" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2" onClick={() => setSelected(selected > 0 ? selected - 1 : images.length - 1)}>
                                <ChevronLeftIcon className="size-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={() => setSelected(selected < images.length - 1 ? selected + 1 : 0)}>
                                <ChevronRightIcon className="size-5" />
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

interface ImageGalleryProps {
    images: { src: string; alt?: string }[]; cols?: 2 | 3 | 4;
    aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
    className?: string; classNames?: { thumbnail?: string; image?: string; preview?: string };
}
