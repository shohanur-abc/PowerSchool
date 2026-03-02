'use client';
import { Counter } from '@/components/molecules/counter';

export default function CounterPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <Counter to={1250} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Prefix and Suffix</h2>
                <div className="grid grid-cols-3 gap-8">
                    <Counter to={99.9} prefix="$" suffix="M" />
                    <Counter to={4500} suffix="+" />
                    <Counter to={98} suffix="%" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-8 items-end justify-center">
                    <div>
                        <Counter to={42} size="sm" />
                        <p className="text-xs text-center text-muted-foreground mt-1">sm</p>
                    </div>
                    <div>
                        <Counter to={1024} size="default" />
                        <p className="text-xs text-center text-muted-foreground mt-1">default</p>
                    </div>
                    <div>
                        <Counter to={50000} size="lg" />
                        <p className="text-xs text-center text-muted-foreground mt-1">lg</p>
                    </div>
                    <div>
                        <Counter to={999999} size="xl" />
                        <p className="text-xs text-center text-muted-foreground mt-1">xl</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Duration (Fast)</h2>
                <Counter to={500} duration={800} prefix="#" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Stat Grid with Counters</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                        { label: 'Students', value: 2840, suffix: '' },
                        { label: 'Teachers', value: 142, suffix: '' },
                        { label: 'Attendance', value: 97, suffix: '%' },
                        { label: 'Pass Rate', value: 94, suffix: '%' },
                    ].map(({ label, value, suffix }) => (
                        <div key={label} className="border rounded-xl p-4 text-center">
                            <Counter to={value} suffix={suffix} size="lg" />
                            <p className="text-sm text-muted-foreground mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
