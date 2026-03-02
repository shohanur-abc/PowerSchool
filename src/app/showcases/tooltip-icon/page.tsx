"use client";
import { TooltipIcon } from '@/components/molecules/tooltip-icon';
import { InfoIcon, AlertCircleIcon, HelpCircleIcon, StarIcon } from 'lucide-react';

export default function TooltipIconPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Info Icon</h2>
                <div className="flex items-center gap-2">
                    <span className="text-sm">Username</span>
                    <TooltipIcon content="Your unique username used to log in" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Icons</h2>
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-sm">
                        Info
                        <TooltipIcon content="General information tooltip" icon={InfoIcon} side="top" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        Warning
                        <TooltipIcon content="This action cannot be undone" icon={AlertCircleIcon} side="right" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        Help
                        <TooltipIcon content="Click here for more help" icon={HelpCircleIcon} side="bottom" />
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        Featured
                        <TooltipIcon content="This is a featured item" icon={StarIcon} side="left" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Inline with Form Labels</h2>
                <div className="space-y-3 max-w-xs">
                    {[
                        { label: 'API Key', hint: 'Keep this secret. Regenerate if compromised.' },
                        { label: 'Webhook URL', hint: 'HTTPS endpoint that receives POST requests.' },
                        { label: 'Rate Limit', hint: 'Maximum requests per minute allowed.' },
                    ].map(({ label, hint }) => (
                        <div key={label} className="flex items-center gap-1.5">
                            <span className="text-sm font-medium">{label}</span>
                            <TooltipIcon content={hint} side="right" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
