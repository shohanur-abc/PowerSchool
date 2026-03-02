"use client";
import { HoverInfo } from '@/components/molecules/hover-info';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HoverInfoPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Top)</h2>
                <HoverInfo
                    trigger={<Badge variant="outline" className="cursor-default">Pro Plan</Badge>}
                    side="top"
                >
                    <p className="text-sm font-medium mb-1">Pro Plan Features</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5">
                        <li>• Unlimited projects</li>
                        <li>• Priority support</li>
                        <li>• Advanced analytics</li>
                    </ul>
                </HoverInfo>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Right Side</h2>
                <HoverInfo
                    trigger={<Button variant="ghost" size="sm">What&apos;s included?</Button>}
                    side="right"
                >
                    <p className="text-sm">Includes 10GB storage, 5 team seats, and API access.</p>
                </HoverInfo>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Bottom + Align Start</h2>
                <HoverInfo
                    trigger={<span className="underline decoration-dotted cursor-help text-sm">Terms apply</span>}
                    side="bottom"
                    align="start"
                >
                    <p className="text-xs text-muted-foreground max-w-xs">
                        By continuing, you agree to our Terms of Service and Privacy Policy. Prices exclude applicable taxes.
                    </p>
                </HoverInfo>
            </div>
        </div>
    );
}
