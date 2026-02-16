import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function Grid({ eyebrow, title, subtitle, testimonials }: IGrid) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <MasonryGrid testimonials={testimonials} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const MasonryGrid = ({ testimonials }: { testimonials: ITestimonialCard[] }) => (
    <div className="columns-1 @sm:columns-2 @xl:columns-3 gap-6 space-y-6">
        {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
        ))}
    </div>
);

const TestimonialCard = ({ avatar, name, role, school, quote, rating }: ITestimonialCard) => (
    <Card className="break-inside-avoid group hover:border-primary/50 hover:shadow-md transition-all">
        <CardHeader className="flex-row items-center gap-3 space-y-0">
            <UserAvatar src={avatar} name={name} />
            <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{name}</p>
                <p className="text-xs text-muted-foreground truncate">{role}, {school}</p>
            </div>
        </CardHeader>
        <CardContent className="space-y-3">
            <StarRating value={rating} />
            <blockquote className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{quote}&rdquo;
            </blockquote>
        </CardContent>
    </Card>
);

const UserAvatar = ({ src, name }: { src: string; name: string }) => (
    <Avatar>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
);

const StarRating = ({ value }: { value: number }) => (
    <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                className={`size-4 ${i < Math.round(value) ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`}
            />
        ))}
    </div>
);

// ============= HELPERS =============
const getInitials = (name: string) =>
    name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

// ============= TYPES =============
interface ITestimonialCard {
    avatar: string;
    name: string;
    role: string;
    school: string;
    quote: string;
    rating: number;
}

interface IGrid {
    eyebrow: string;
    title: string;
    subtitle: string;
    testimonials: ITestimonialCard[];
}
