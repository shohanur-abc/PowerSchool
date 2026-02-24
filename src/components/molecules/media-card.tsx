import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export const MediaCard = ({ image, title, description, badge, meta, footer, aspectRatio = 'video', className, classNames: cns }: MediaCardProps) => (
    <div className={cn("rounded-xl border bg-card overflow-hidden @container group", className)}>
        <div className={cn(aspectVariant({ aspectRatio }), "relative overflow-hidden", cns?.imageWrapper)}>
            <Image src={image.src} alt={image.alt || title} fill className={cn("object-cover group-hover:scale-105 transition-transform duration-300", cns?.image)} />
            {badge && <Badge className={cn("absolute top-2 left-2", cns?.badge)}>{badge}</Badge>}
        </div>
        <div className={cn("p-4", cns?.content)}>
            <h3 className={cn("font-semibold line-clamp-2", cns?.title)}>{title}</h3>
            {description && <p className={cn("text-sm text-muted-foreground mt-1 line-clamp-2", cns?.description)}>{description}</p>}
            {meta && <div className={cn("flex items-center gap-2 mt-2 text-xs text-muted-foreground", cns?.meta)}>{meta}</div>}
        </div>
        {footer && <div className={cn("px-4 pb-4 pt-0", cns?.footer)}>{footer}</div>}
    </div>
);


// ============= VARIANTS =============
const aspectVariant = cva("", {
    variants: {
        aspectRatio: {
            square: "aspect-square",
            video: "aspect-video",
            wide: "aspect-[2/1]",
            portrait: "aspect-[3/4]",
        },
    },
});


// ============= TYPES =============
interface MediaCardProps {
    image: { src: string; alt?: string };
    title: string;
    description?: string;
    badge?: string;
    meta?: React.ReactNode;
    footer?: React.ReactNode;
    aspectRatio?: 'square' | 'video' | 'wide' | 'portrait';
    className?: string;
    classNames?: {
        imageWrapper?: string;
        image?: string;
        badge?: string;
        content?: string;
        title?: string;
        description?: string;
        meta?: string;
        footer?: string;
    };
}
