'use client';
import { TimeAgo } from '@/components/molecules/time-ago';

export default function TimeAgoPage() {
    const now = new Date();
    const minutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
    const hoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000);
    const daysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
    const weeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Various Time Distances</h2>
                <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">5 min ago:</span>
                        <TimeAgo date={minutesAgo} />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">3 hrs ago:</span>
                        <TimeAgo date={hoursAgo} />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">2 days ago:</span>
                        <TimeAgo date={daysAgo} />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">2 weeks ago:</span>
                        <TimeAgo date={weeksAgo} />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">6 months ago:</span>
                        <TimeAgo date="2024-07-15" />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-muted-foreground w-32">1 year ago:</span>
                        <TimeAgo date="2024-01-01" />
                    </div>
                </div>
            </div>
        </div>
    );
}
