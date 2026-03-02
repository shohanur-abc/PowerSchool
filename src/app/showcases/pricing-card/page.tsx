"use client";
import { PricingCard } from '@/components/molecules/pricing-card';

export default function PricingCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Three-tier Pricing</h2>
                <div className="grid grid-cols-3 gap-6">
                    <PricingCard
                        name="Free"
                        price="$0"
                        period="forever"
                        description="Perfect for individuals getting started."
                        features={[
                            { text: 'Up to 50 students', included: true },
                            { text: '5 teachers', included: true },
                            { text: 'Basic analytics', included: true },
                            { text: 'API access', included: false },
                            { text: 'Priority support', included: false },
                        ]}
                        cta="Get Started"
                    />
                    <PricingCard
                        name="Pro"
                        price="$49"
                        period="per month"
                        description="For growing schools and academies."
                        highlighted
                        badge="Most Popular"
                        features={[
                            { text: 'Up to 500 students', included: true },
                            { text: '50 teachers', included: true },
                            { text: 'Advanced analytics', included: true },
                            { text: 'API access', included: true },
                            { text: 'Priority support', included: false },
                        ]}
                        cta="Start Free Trial"
                    />
                    <PricingCard
                        name="Enterprise"
                        price="Custom"
                        description="For large institutions."
                        features={[
                            { text: 'Unlimited students', included: true },
                            { text: 'Unlimited teachers', included: true },
                            { text: 'Full analytics suite', included: true },
                            { text: 'API access', included: true },
                            { text: 'Dedicated support', included: true },
                        ]}
                        cta="Contact Sales"
                    />
                </div>
            </div>
        </div>
    );
}
