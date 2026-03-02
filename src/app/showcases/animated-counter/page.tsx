'use client';
import { AnimatedCounter } from '@/components/molecules/animated-counter';

export default function AnimatedCounterPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Platform Stats</h2>
                <AnimatedCounter
                    items={[
                        { value: 1284, label: 'Students' },
                        { value: 148, label: 'Teachers' },
                        { value: 86, label: 'Courses' },
                        { value: 24, label: 'Schools' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Prefix &amp; Suffix</h2>
                <AnimatedCounter
                    items={[
                        { value: 42500, label: 'Revenue', prefix: '$' },
                        { value: 94, label: 'Pass Rate', suffix: '%' },
                        { value: 99.9, label: 'Uptime', suffix: '%' },
                    ]}
                />
            </div>
        </div>
    );
}
