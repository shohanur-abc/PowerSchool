"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const LogoCloud = ({ logos, title, cols = 5, grayscale = true, className, classNames: cns }: LogoCloudProps) => (
    <div className={cn("@container", className)}>
        {title && <p className={cn("text-sm text-muted-foreground text-center mb-6", cns?.title)}>{title}</p>}
        <div className={cn("flex flex-wrap items-center justify-center gap-8 @md:gap-12", cns?.grid)}>
            {logos.map(({ src, alt, href }, i) => {
                const img = (
                    <Image src={src} alt={alt} width={120} height={40} className={cn("h-8 w-auto object-contain", grayscale && "grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all", cns?.logo)} />
                );
                return href ? <a key={i} href={href} target="_blank" rel="noopener noreferrer">{img}</a> : <div key={i}>{img}</div>;
            })}
        </div>
    </div>
);

interface LogoCloudProps {
    logos: { src: string; alt: string; href?: string }[];
    title?: string; cols?: number; grayscale?: boolean;
    className?: string; classNames?: { title?: string; grid?: string; logo?: string };
}
