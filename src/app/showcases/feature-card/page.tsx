"use client";
import { FeatureCard } from '@/components/molecules/feature-card';
import { ZapIcon, ShieldIcon, BarChartIcon, UsersIcon } from 'lucide-react';

export default function FeatureCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FeatureCard title="Fast Performance" description="Optimized for speed at any scale." icon={ZapIcon} />
                    <FeatureCard title="Secure by Default" description="Military-grade encryption." icon={ShieldIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FeatureCard title="Analytics" description="Deep insights into usage patterns." icon={BarChartIcon} variant="ghost" />
                    <FeatureCard title="Collaboration" description="Real-time team collaboration." icon={UsersIcon} variant="ghost" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FeatureCard title="Speed" description="Sub-100ms response times." icon={ZapIcon} variant="filled" />
                    <FeatureCard title="Security" description="Zero-trust architecture." icon={ShieldIcon} variant="filled" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <FeatureCard title="Reporting" description="Custom dashboards and reports." icon={BarChartIcon} variant="outline" />
                    <FeatureCard title="Team Access" description="Granular role management." icon={UsersIcon} variant="outline" />
                </div>
            </div>
        </div>
    );
}
