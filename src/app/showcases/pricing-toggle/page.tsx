'use client';
import { PricingToggle } from '@/components/molecules/pricing-toggle';
import { useState } from 'react';

export default function PricingTogglePage() {
    const [isAnnual, setIsAnnual] = useState(false);
    const price = isAnnual ? 99 : 12;

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Monthly)</h2>
                <PricingToggle monthly="Monthly" yearly="Annually" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Annual</h2>
                <PricingToggle monthly="Monthly" yearly="Annually" defaultAnnual />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Badge Labels</h2>
                <PricingToggle monthly="Monthly" yearly="Annually (Save 20%)" onToggle={setIsAnnual} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Controlling Pricing Cards</h2>
                <PricingToggle monthly="Monthly" yearly="Annually" onToggle={setIsAnnual} />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                        { name: 'Starter', monthly: 9, annual: 79 },
                        { name: 'Pro', monthly: 29, annual: 249 },
                        { name: 'Enterprise', monthly: 99, annual: 899 },
                    ].map(({ name, monthly, annual }) => (
                        <div key={name} className="border rounded-xl p-6 text-center">
                            <p className="font-semibold mb-2">{name}</p>
                            <p className="text-3xl font-bold">${isAnnual ? annual : monthly}</p>
                            <p className="text-xs text-muted-foreground mt-1">{isAnnual ? '/year' : '/month'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
