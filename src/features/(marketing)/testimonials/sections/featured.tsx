import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Featured({ eyebrow, title, subtitle, testimonial }: IFeatured) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <FeaturedCard testimonial={testimonial} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const FeaturedCard = ({ testimonial }: { testimonial: IFeaturedTestimonial }) => (
    <Card className="overflow-hidden border-primary/20">
        <CardContent className="grid grid-cols-1 @lg:grid-cols-5 gap-0 p-0">
            <PhotoColumn image={testimonial.image} name={testimonial.name} />
            <QuoteColumn testimonial={testimonial} />
        </CardContent>
    </Card>
);

const PhotoColumn = ({ image, name }: { image: string; name: string }) => (
    <div className="relative @lg:col-span-2 min-h-64 @lg:min-h-full">
        <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t @lg:bg-gradient-to-r from-background/20 to-transparent" />
    </div>
);

const QuoteColumn = ({ testimonial }: { testimonial: IFeaturedTestimonial }) => (
    <div className="@lg:col-span-3 p-8 @lg:p-12 space-y-6 flex flex-col justify-center">
        <Quote className="size-10 text-primary/30" />
        <StarRating value={testimonial.rating} />
        <blockquote className="text-lg @lg:text-xl leading-relaxed text-foreground italic">
            &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <AuthorInfo
            name={testimonial.name}
            role={testimonial.role}
            school={testimonial.school}
            location={testimonial.location}
        />
        {testimonial.tags && <TagList tags={testimonial.tags} />}
    </div>
);

const StarRating = ({ value }: { value: number }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`size-5 ${i < Math.round(value) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`}
            />
        ))}
    </div>
);

const AuthorInfo = ({ name, role, school, location }: { name: string; role: string; school: string; location: string }) => (
    <div className="space-y-1 pt-2 border-t">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{school} — {location}</p>
    </div>
);

const TagList = ({ tags }: { tags: string[] }) => (
    <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
        ))}
    </div>
);

// ============= TYPES =============
interface IFeaturedTestimonial {
    image: string;
    name: string;
    role: string;
    school: string;
    location: string;
    quote: string;
    rating: number;
    tags?: string[];
}

interface IFeatured {
    eyebrow: string;
    title: string;
    subtitle: string;
    testimonial: IFeaturedTestimonial;
}
