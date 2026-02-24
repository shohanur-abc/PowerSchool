"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const ComparisonSlider = ({ before, after, className, classNames: cns }: ComparisonSliderProps) => {
    const [position, setPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
        setPosition(pos);
    };

    return (
        <div ref={containerRef} className={cn("relative aspect-video rounded-lg overflow-hidden cursor-col-resize select-none", className)} onMouseMove={handleMove} onTouchMove={handleMove}>
            <Image src={after.src} alt={after.alt || 'After'} fill className={cn("object-cover", cns?.after)} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
                <Image src={before.src} alt={before.alt || 'Before'} fill className={cn("object-cover", cns?.before)} />
            </div>
            <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg" style={{ left: `${position}%` }}>
                <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-white shadow-md flex items-center justify-center", cns?.handle)}>
                    <span className="text-xs font-bold text-gray-600">⟺</span>
                </div>
            </div>
            <span className={cn("absolute top-3 left-3 text-xs bg-black/50 text-white px-2 py-0.5 rounded", cns?.labelBefore)}>{before.label || 'Before'}</span>
            <span className={cn("absolute top-3 right-3 text-xs bg-black/50 text-white px-2 py-0.5 rounded", cns?.labelAfter)}>{after.label || 'After'}</span>
        </div>
    );
};

interface ComparisonSliderProps {
    before: { src: string; alt?: string; label?: string }; after: { src: string; alt?: string; label?: string };
    className?: string; classNames?: { before?: string; after?: string; handle?: string; labelBefore?: string; labelAfter?: string };
}
