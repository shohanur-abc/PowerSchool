"use client";
import { Banner } from '@/components/molecules/banner';
import { Button } from '@/components/ui/button';

export default function BannerPage() {
    return (
        <div className="space-y-8 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Variants</h2>
                <div className="space-y-4">
                    <Banner variant="default" title="Default Banner" description="General purpose banner for any message." />
                    <Banner variant="info" title="Info Banner" description="Informational message for users." />
                    <Banner variant="success" title="Success Banner" description="Everything is working as expected." />
                    <Banner variant="warning" title="Warning Banner" description="Please review this important information." />
                    <Banner variant="error" title="Error Banner" description="Something went wrong. Please check your configuration." />
                    <Banner variant="neutral" title="Neutral Banner" description="A neutral notice for general awareness." />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <Banner
                    variant="warning"
                    title="Subscription Expiring"
                    description="Your Pro plan expires on February 1, 2025."
                    action={<Button size="sm">Renew Now</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Dismissible</h2>
                <Banner
                    variant="info"
                    title="New Dashboard Features"
                    description="Check out the new analytics dashboard in your account."
                    dismissible
                />
            </div>
        </div>
    );
}
