"use client";
import { InfoCard } from '@/components/molecules/info-card';
import { ShieldIcon, ZapIcon, GlobeIcon, LockIcon } from 'lucide-react';

export default function InfoCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Security" description="End-to-end encryption for all data." icon={ShieldIcon} />
                    <InfoCard title="Performance" description="Lightning-fast responses globally." icon={ZapIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Global Reach" description="Serve users across 100+ countries." icon={GlobeIcon} variant="outline" />
                    <InfoCard title="Privacy" description="Your data never leaves your region." icon={LockIcon} variant="outline" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="Free Plan" description="Get started at no cost." icon={ZapIcon} variant="ghost" />
                    <InfoCard title="Compliance" description="SOC 2 and GDPR compliant." icon={ShieldIcon} variant="ghost" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Elevated Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard title="API Access" description="Full REST API for integrations." icon={GlobeIcon} variant="elevated" />
                    <InfoCard title="SSO" description="Single sign-on support." icon={LockIcon} variant="elevated" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Footer</h2>
                <div className="grid grid-cols-2 gap-4">
                    <InfoCard
                        title="Storage"
                        description="Store up to 500 GB of files."
                        icon={GlobeIcon}
                        footer={<span className="text-xs text-muted-foreground">Included in Pro plan</span>}
                    />
                    <InfoCard
                        title="Support"
                        description="24/7 dedicated support team."
                        icon={ShieldIcon}
                        footer={<span className="text-xs text-muted-foreground">Available on Enterprise</span>}
                    />
                </div>
            </div>
        </div>
    );
}
