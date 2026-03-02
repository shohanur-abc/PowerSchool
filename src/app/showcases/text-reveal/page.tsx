'use client';
import { TextReveal } from '@/components/molecules/text-reveal';

export default function TextRevealPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Reveal</h2>
                <TextReveal text="Every word fades in as you scroll into view, creating a smooth and engaging reading experience." />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Heading Style</h2>
                <TextReveal
                    text="The Future of Education Starts Here"
                    classNames={{ text: 'text-3xl font-bold tracking-tight' }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Muted Description</h2>
                <TextReveal
                    text="Manage students, track attendance, and generate reports — all from a single powerful dashboard."
                    classNames={{ text: 'text-muted-foreground text-lg' }}
                />
            </div>
        </div>
    );
}
