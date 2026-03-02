"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export const AspectImage = ({ src, alt, ratio = 16 / 9, priority, quality, className, classNames: cns }: AspectImageProps) => (
    <AspectRatio ratio={ratio} className={cn("overflow-hidden rounded-lg", className)}>
        <Image src={src} alt={alt} fill priority={priority} quality={quality} className={cn("object-cover", cns?.image)} />
    </AspectRatio>
);

interface AspectImageProps {
    src: string; alt: string; ratio?: number; priority?: boolean; quality?: number;
    className?: string; classNames?: { image?: string };
}
