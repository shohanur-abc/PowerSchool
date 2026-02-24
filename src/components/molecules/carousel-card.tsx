"use client";
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const CarouselCard = ({ items, showControls = true, basis = 'full', className, classNames: cns }: CarouselCardProps) => {
    const basisMap = { full: 'basis-full', half: 'basis-1/2', third: 'basis-1/3' };

    return (
        <Card className={cn("@container", className)}>
            <CardContent className={cn("pt-6", cns?.content)}>
                <Carousel className={cns?.carousel}>
                    <CarouselContent>
                        {items.map(({ content }, i) => (
                            <CarouselItem key={i} className={cn(basisMap[basis], cns?.item)}>{content}</CarouselItem>
                        ))}
                    </CarouselContent>
                    {showControls && (
                        <>
                            <CarouselPrevious className={cns?.prev} />
                            <CarouselNext className={cns?.next} />
                        </>
                    )}
                </Carousel>
            </CardContent>
        </Card>
    );
};

interface CarouselCardProps {
    items: { content: React.ReactNode }[];
    showControls?: boolean; basis?: 'full' | 'half' | 'third';
    className?: string; classNames?: { content?: string; carousel?: string; item?: string; prev?: string; next?: string };
}
