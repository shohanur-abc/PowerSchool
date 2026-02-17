import { Play } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Heading from '@/components/heading';
import { Section } from '@/components/section';

// ============= MAIN COMPONENT =============
export default function VideoTestimonials({ eyebrow, title, subtitle, videos }: IVideoTestimonials) {
    return (
        <Section>
            <Heading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <VideoGrid videos={videos} />
        </Section>
    );
}

// ============= CHILD COMPONENTS =============
const VideoGrid = ({ videos }: { videos: IVideoItem[] }) => (
    <div className="grid grid-cols-1 @sm:grid-cols-2 @xl:grid-cols-3 gap-6">
        {videos.map((video, i) => (
            <VideoCard key={i} {...video} />
        ))}
    </div>
);

const VideoCard = ({ thumbnail, title, name, role, school, duration }: IVideoItem) => (
    <Card className="group overflow-hidden hover:shadow-md transition-all">
        <ThumbnailArea thumbnail={thumbnail} title={title} duration={duration} />
        <CardContent className="space-y-1 pt-4">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{role}, {school}</p>
            <p className="text-xs text-muted-foreground font-medium pt-1">{title}</p>
        </CardContent>
    </Card>
);

const ThumbnailArea = ({ thumbnail, title, duration }: { thumbnail: string; title: string; duration: string }) => (
    <div className="relative aspect-video overflow-hidden">
        <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
            <PlayButton />
        </div>
        <DurationBadge duration={duration} />
    </div>
);

const PlayButton = () => (
    <Button
        size="icon-lg"
        variant="secondary"
        className="rounded-full shadow-lg"
    >
        <Play className="size-5 fill-current" />
    </Button>
);

const DurationBadge = ({ duration }: { duration: string }) => (
    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
        {duration}
    </span>
);

// ============= TYPES =============
interface IVideoItem {
    thumbnail: string;
    title: string;
    name: string;
    role: string;
    school: string;
    duration: string;
}

interface IVideoTestimonials {
    eyebrow: string;
    title: string;
    subtitle: string;
    videos: IVideoItem[];
}
