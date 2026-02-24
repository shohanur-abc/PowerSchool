"use client";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const TestimonialSlider = ({ testimonials, className, classNames: cns }: TestimonialSliderProps) => (
    <Carousel className={cn("@container max-w-3xl mx-auto", className)}>
        <CarouselContent>
            {testimonials.map(({ quote, author, role, avatar }, i) => (
                <CarouselItem key={i}>
                    <blockquote className={cn("text-center px-8 py-6", cns?.slide)}>
                        <p className={cn("text-lg @md:text-xl italic text-foreground/90 mb-6", cns?.quote)}>"{quote}"</p>
                        <div className={cn("flex items-center justify-center gap-3", cns?.author)}>
                            <Avatar className={cns?.avatar}>
                                {avatar && <AvatarImage src={avatar} alt={author} />}
                                <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div className="text-left">
                                <div className={cn("text-sm font-semibold", cns?.name)}>{author}</div>
                                {role && <div className={cn("text-xs text-muted-foreground", cns?.role)}>{role}</div>}
                            </div>
                        </div>
                    </blockquote>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className={cns?.prev} />
        <CarouselNext className={cns?.next} />
    </Carousel>
);

interface TestimonialSliderProps {
    testimonials: { quote: string; author: string; role?: string; avatar?: string }[];
    className?: string; classNames?: { slide?: string; quote?: string; author?: string; avatar?: string; name?: string; role?: string; prev?: string; next?: string };
}
