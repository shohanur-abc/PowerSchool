"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export const AspectCard = ({ image, title, description, badge, overlay, href, className, classNames: cns }: AspectCardProps) => {
    const content = (
        <Card className={cn("@container overflow-hidden group", className)}>
            <>
                <div className={cn("relative aspect-video", cns?.imageWrapper)}>
                    <Image src={image} alt={title || ''} fill className={cn("object-cover group-hover:scale-105 transition-transform duration-300", cns?.image)} />
                    {overlay && <div className={cn("absolute inset-0 bg-gradient-to-t from-black/60 to-transparent", cns?.overlay)} />}
                    {badge && <span className={cn("absolute top-3 left-3 text-xs bg-black/50 text-white px-2 py-0.5 rounded", cns?.badge)}>{badge}</span>}
                </div>
                {(title || description) && (
                    <CardContent className={cn("pt-3", overlay ? "absolute bottom-0 left-0 right-0 text-white pb-4" : "", cns?.content)}>
                        {title && <h3 className={cn("font-semibold text-sm", cns?.title)}>{title}</h3>}
                        {description && <p className={cn("text-xs mt-0.5", overlay ? "text-white/80" : "text-muted-foreground", cns?.description)}>{description}</p>}
                    </CardContent>
                )}
            </>
        </Card>
    );

    return href ? <a href={href} className="no-underline">{content}</a> : content;
};

interface AspectCardProps {
    image: string; title?: string; description?: string; badge?: string; overlay?: boolean; href?: string;
    className?: string; classNames?: { imageWrapper?: string; image?: string; overlay?: string; badge?: string; content?: string; title?: string; description?: string };
}
