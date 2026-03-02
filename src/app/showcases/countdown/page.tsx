'use client';
import { Countdown } from '@/components/molecules/countdown';

const futureDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 30 * 60 * 1000);
const shortFuture = new Date(Date.now() + 45 * 60 * 1000);

export default function CountdownPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Size</h2>
                <Countdown targetDate={futureDate} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <Countdown targetDate={futureDate} size="sm" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Size</h2>
                <Countdown targetDate={futureDate} size="lg" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Labels</h2>
                <Countdown
                    targetDate={shortFuture}
                    labels={{ days: 'Days', hours: 'Hrs', minutes: 'Min', seconds: 'Sec' }}
                />
            </div>
        </div>
    );
}
