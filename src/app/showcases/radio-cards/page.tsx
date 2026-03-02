'use client';

import { RadioCards } from '@/components/molecules/radio-cards';
import { useState } from 'react';
import { ZapIcon, ShieldIcon, CrownIcon, StarIcon, HomeIcon, BuildingIcon } from 'lucide-react';

export default function RadioCardsPage() {
    const [plan, setPlan] = useState('');
    const [type, setType] = useState('');

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Radio Cards (3 cols)</h2>
                <RadioCards
                    name="basic"
                    options={[
                        { value: 'a', label: 'Option A' },
                        { value: 'b', label: 'Option B' },
                        { value: 'c', label: 'Option C' },
                    ]}
                    onChange={(v) => console.log(v)}
                />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Descriptions</h2>
                <div className="max-w-2xl">
                    <RadioCards
                        name="plan"
                        cols={2}
                        value={plan}
                        onChange={setPlan}
                        options={[
                            { value: 'starter', label: 'Starter', description: 'Up to 5 users, basic features' },
                            { value: 'pro', label: 'Professional', description: 'Up to 50 users, advanced features' },
                            { value: 'team', label: 'Team', description: 'Up to 200 users, team tools' },
                            { value: 'enterprise', label: 'Enterprise', description: 'Unlimited, custom features' },
                        ]}
                    />
                    <p className="text-sm text-muted-foreground mt-2">Selected: {plan || 'None'}</p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Icons</h2>
                <RadioCards
                    name="role"
                    cols={3}
                    options={[
                        { value: 'basic', label: 'Basic', description: 'Standard access', icon: ZapIcon },
                        { value: 'secure', label: 'Secure', description: 'Enhanced security', icon: ShieldIcon },
                        { value: 'premium', label: 'Premium', description: 'Full access', icon: CrownIcon },
                    ]}
                    onChange={(v) => console.log(v)}
                />
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">4 Columns with Icons</h2>
                <RadioCards
                    name="type"
                    cols={4}
                    value={type}
                    onChange={setType}
                    options={[
                        { value: 'home', label: 'Home', icon: HomeIcon },
                        { value: 'office', label: 'Office', icon: BuildingIcon },
                        { value: 'star', label: 'Featured', icon: StarIcon },
                        { value: 'premium', label: 'Premium', icon: CrownIcon },
                    ]}
                />
                <p className="text-sm text-muted-foreground mt-2">Selected: {type || 'None'}</p>
            </div>
        </div>
    );
}
