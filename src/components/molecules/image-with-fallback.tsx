"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { ImageOffIcon } from 'lucide-react';

export const ImageWithFallback = ({ src, alt, width, height, fill, fallback, className, classNames: cns, ...rest }: ImageWithFallbackProps) => {
    const [error, setError] = useState(false);

    if (error) {
        return fallback || (
            <div className={cn("flex items-center justify-center bg-muted text-muted-foreground rounded-lg", fill ? "absolute inset-0" : "", className)} style={!fill ? { width, height } : undefined}>
                <ImageOffIcon className={cn("size-6", cns?.fallbackIcon)} />
            </div>
        );
    }

    return <Image src={src} alt={alt} width={!fill ? width : undefined} height={!fill ? height : undefined} fill={fill} onError={() => setError(true)} className={cn(className, cns?.image)} {...rest} />;
};

interface ImageWithFallbackProps {
    src: string; alt: string; width?: number; height?: number; fill?: boolean;
    fallback?: React.ReactNode; priority?: boolean; quality?: number;
    className?: string; classNames?: { image?: string; fallbackIcon?: string };
}
