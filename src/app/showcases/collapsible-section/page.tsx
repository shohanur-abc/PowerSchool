'use client';
import { CollapsibleSection } from '@/components/molecules/collapsible-section';
import { InfoIcon, SettingsIcon, BellIcon } from 'lucide-react';

export default function CollapsibleSectionPage() {
    return (
        <div className="space-y-16 py-8 max-w-xl">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Collapsed)</h2>
                <CollapsibleSection title="Advanced Settings">
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <p>These are advanced configuration options. Proceed with caution.</p>
                        <p>• Enable debug mode</p>
                        <p>• Override cache TTL</p>
                    </div>
                </CollapsibleSection>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Open</h2>
                <CollapsibleSection title="About This Feature" icon={InfoIcon} defaultOpen>
                    <p className="text-sm text-muted-foreground">
                        This feature allows you to customize your dashboard layout. Drag and drop widgets to rearrange them.
                    </p>
                </CollapsibleSection>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon and Badge</h2>
                <CollapsibleSection title="Notifications" icon={BellIcon} badge="3">
                    <div className="space-y-2">
                        {['New assignment posted', 'Exam result published', 'Fee payment due'].map((n) => (
                            <div key={n} className="text-sm p-2 rounded bg-muted">{n}</div>
                        ))}
                    </div>
                </CollapsibleSection>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Settings Group</h2>
                <CollapsibleSection title="Account Settings" icon={SettingsIcon}>
                    <div className="divide-y text-sm">
                        {['Email', 'Password', 'Two-factor Authentication', 'Active Sessions'].map((s) => (
                            <div key={s} className="py-2 flex justify-between items-center">
                                <span>{s}</span>
                                <span className="text-muted-foreground text-xs">Manage</span>
                            </div>
                        ))}
                    </div>
                </CollapsibleSection>
            </div>
        </div>
    );
}
