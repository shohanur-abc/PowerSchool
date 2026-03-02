'use client';
import { NumberTicker } from '@/components/molecules/number-ticker';

export default function NumberTickerPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Integer Values</h2>
                <div className="flex flex-wrap gap-8">
                    <NumberTicker value={1284} />
                    <NumberTicker value={42500} />
                    <NumberTicker value={99} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Prefix &amp; Suffix</h2>
                <div className="flex flex-wrap gap-8">
                    <NumberTicker value={42500} prefix="$" />
                    <NumberTicker value={94} suffix="%" />
                    <NumberTicker value={1000} prefix="+" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Decimals</h2>
                <div className="flex flex-wrap gap-8">
                    <NumberTicker value={4.87} decimals={2} />
                    <NumberTicker value={99.9} decimals={1} suffix="%" />
                    <NumberTicker value={3.14159} decimals={5} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Slow Duration</h2>
                <NumberTicker value={10000} duration={3000} />
            </div>
        </div>
    );
}
