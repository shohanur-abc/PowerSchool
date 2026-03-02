"use client";
import { HeroBanner } from '@/components/molecules/hero-banner';
import { Button } from '@/components/ui/button';

export default function HeroBannerPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <div className="border rounded-xl overflow-hidden px-8">
                    <HeroBanner
                        eyebrow="School Management"
                        title="Manage Your School"
                        highlight="Effortlessly"
                        description="A unified platform for teachers, parents, and administrators to streamline education management."
                        variant="default"
                        actions={
                            <>
                                <Button size="lg">Get Started</Button>
                                <Button size="lg" variant="outline">View Demo</Button>
                            </>
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Centered</h2>
                <div className="border rounded-xl overflow-hidden px-8">
                    <HeroBanner
                        eyebrow="Introducing v2.0"
                        title="The Future of"
                        highlight="Student Management"
                        description="Built for modern schools. Fast, accessible, and beautifully designed."
                        variant="centered"
                        actions={
                            <>
                                <Button size="lg">Start Free Trial</Button>
                                <Button size="lg" variant="secondary">Watch Video</Button>
                            </>
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Gradient</h2>
                <div className="border rounded-xl overflow-hidden px-8">
                    <HeroBanner
                        eyebrow="New Feature"
                        title="AI-Powered"
                        highlight="Insights"
                        description="Unlock deep learning analytics and auto-generate progress reports with AI."
                        variant="gradient"
                        actions={<Button size="lg">Explore AI Features</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
