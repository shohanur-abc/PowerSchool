"use client";
import { SectionHeader } from '@/components/molecules/section-header';
import { Button } from '@/components/ui/button';

export default function SectionHeaderPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Center Aligned (Default)</h2>
                <div className="border rounded-xl p-10">
                    <SectionHeader
                        eyebrow="Features"
                        title="Everything You Need"
                        description="Our platform provides all the tools to manage your school effectively and efficiently."
                        align="center"
                        actions={
                            <>
                                <Button variant="outline">Learn More</Button>
                                <Button>Get Started</Button>
                            </>
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Left Aligned</h2>
                <div className="border rounded-xl p-8">
                    <SectionHeader
                        eyebrow="Recent"
                        title="Latest Updates"
                        description="Stay informed with the most recent changes and announcements."
                        align="left"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Right Aligned</h2>
                <div className="border rounded-xl p-8">
                    <SectionHeader
                        title="View All Results"
                        description="Browse the complete list of examination outcomes."
                        align="right"
                        actions={<Button size="sm">View All</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
