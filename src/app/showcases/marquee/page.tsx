"use client";
import { Marquee } from '@/components/molecules/marquee';
import { Badge } from '@/components/ui/badge';

export default function MarqueePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Left to Right)</h2>
                <Marquee pauseOnHover>
                    {['Mathematics', 'Science', 'English', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology'].map((s) => (
                        <Badge key={s} variant="outline" className="text-sm px-4 py-1.5 whitespace-nowrap">{s}</Badge>
                    ))}
                </Marquee>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Reverse Direction</h2>
                <Marquee reverse pauseOnHover>
                    {['Greenfield Academy', 'Westview High', 'Summit School', 'Riverdale College', 'Pinewood Institute', 'Lakeside School'].map((s) => (
                        <div key={s} className="bg-muted rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap">{s}</div>
                    ))}
                </Marquee>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Slow Speed (60s)</h2>
                <Marquee speed={60} pauseOnHover>
                    {['⭐ Rated #1 School Platform', '🏆 Award-Winning Design', '🚀 Trusted by 500+ Schools', '📊 Real-time Analytics', '🔒 Enterprise Security'].map((s) => (
                        <span key={s} className="text-sm text-muted-foreground px-6 whitespace-nowrap">{s}</span>
                    ))}
                </Marquee>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Cards Marquee</h2>
                <Marquee speed={40}>
                    {[
                        { name: 'Alice', grade: 'A+' },
                        { name: 'Bob', grade: 'A' },
                        { name: 'Carol', grade: 'B+' },
                        { name: 'David', grade: 'A-' },
                        { name: 'Eve', grade: 'A+' },
                    ].map(({ name, grade }) => (
                        <div key={name} className="border rounded-xl px-5 py-3 text-sm flex items-center gap-3 whitespace-nowrap bg-background shadow-sm">
                            <span className="font-medium">{name}</span>
                            <Badge>{grade}</Badge>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}
