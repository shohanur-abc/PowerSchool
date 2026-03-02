"use client";
import { CtaSection } from '@/components/molecules/cta-section';
import { Button } from '@/components/ui/button';

export default function CtaSectionPage() {
    return (
        <div className="space-y-12 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <CtaSection
                    title="Ready to Get Started?"
                    description="Join thousands of schools already using our platform to improve outcomes."
                    variant="default"
                    actions={
                        <>
                            <Button size="lg">Start Free Trial</Button>
                            <Button size="lg" variant="outline">Contact Sales</Button>
                        </>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Primary</h2>
                <CtaSection
                    title="Upgrade Your School Today"
                    description="Get access to all features with our premium plan."
                    variant="primary"
                    actions={
                        <>
                            <Button size="lg" variant="secondary">View Plans</Button>
                            <Button size="lg" variant="ghost" className="text-primary-foreground border-primary-foreground/30 border">Learn More</Button>
                        </>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline</h2>
                <CtaSection
                    title="Have Questions?"
                    description="Our team is here to help. Reach out anytime."
                    variant="outline"
                    actions={<Button size="lg">Talk to Us</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Gradient</h2>
                <CtaSection
                    title="Start Your Journey with AI"
                    description="Powered by advanced machine learning to surface actionable insights."
                    variant="gradient"
                    actions={
                        <>
                            <Button size="lg">Try for Free</Button>
                            <Button size="lg" variant="ghost">Watch Demo</Button>
                        </>
                    }
                />
            </div>
        </div>
    );
}
