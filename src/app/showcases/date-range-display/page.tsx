"use client";
import { DateRangeDisplay } from '@/components/molecules/date-range-display';
import { CalendarIcon } from 'lucide-react';

export default function DateRangeDisplayPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <DateRangeDisplay from={new Date('2025-01-01')} to={new Date('2025-03-31')} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon</h2>
                <DateRangeDisplay from={new Date('2025-06-01')} to={new Date('2025-08-31')} icon />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Separator</h2>
                <DateRangeDisplay from="2025-01-15" to="2025-02-15" separator="until" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Format</h2>
                <DateRangeDisplay
                    from={new Date('2025-04-01')}
                    to={new Date('2025-04-30')}
                    format={(d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                />
            </div>
        </div>
    );
}
