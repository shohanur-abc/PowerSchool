import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function ByRole({ eyebrow, title, subtitle, roles }: IByRole) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <RoleTabs roles={roles} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const RoleTabs = ({ roles }: { roles: IRoleGroup[] }) => (
    <Tabs defaultValue={roles[0]?.value} className="w-full">
        <div className="flex justify-center mb-8">
            <TabsList>
                {roles.map((role) => (
                    <TabsTrigger key={role.value} value={role.value}>
                        {role.label}
                    </TabsTrigger>
                ))}
            </TabsList>
        </div>
        {roles.map((role) => (
            <TabsContent key={role.value} value={role.value}>
                <RoleTestimonialGrid testimonials={role.testimonials} />
            </TabsContent>
        ))}
    </Tabs>
);

const RoleTestimonialGrid = ({ testimonials }: { testimonials: IRoleTestimonial[] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
            <RoleTestimonialCard key={i} {...testimonial} />
        ))}
    </div>
);

const RoleTestimonialCard = ({ avatar, name, school, quote, rating }: IRoleTestimonial) => (
    <Card className="group hover:border-primary/50 hover:shadow-md transition-all">
        <CardHeader className="flex-row items-center gap-3 space-y-0">
            <UserAvatar src={avatar} name={name} />
            <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{name}</p>
                <p className="text-xs text-muted-foreground truncate">{school}</p>
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
interface IRoleTestimonial {
    avatar: string;
    name: string;
    school: string;
    quote: string;
    rating: number;
}

interface IRoleGroup {
    label: string;
    value: string;
    testimonials: IRoleTestimonial[];
}

interface IByRole {
    eyebrow: string;
    title: string;
    subtitle: string;
    roles: IRoleGroup[];
}
