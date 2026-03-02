"use client";
import { TabGroup } from '@/components/molecules/tab-group';
import { UserIcon, BellIcon, ShieldIcon, CreditCardIcon } from 'lucide-react';

export default function TabGroupPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant (Horizontal)</h2>
                <TabGroup
                    defaultValue="profile"
                    tabs={[
                        {
                            value: 'profile',
                            label: 'Profile',
                            icon: UserIcon,
                            content: <div className="p-4 text-sm text-muted-foreground">Profile settings content</div>,
                        },
                        {
                            value: 'notifications',
                            label: 'Notifications',
                            icon: BellIcon,
                            content: <div className="p-4 text-sm text-muted-foreground">Notification preferences</div>,
                        },
                        {
                            value: 'security',
                            label: 'Security',
                            icon: ShieldIcon,
                            content: <div className="p-4 text-sm text-muted-foreground">Security settings</div>,
                        },
                        {
                            value: 'billing',
                            label: 'Billing',
                            icon: CreditCardIcon,
                            content: <div className="p-4 text-sm text-muted-foreground">Billing information</div>,
                            disabled: true,
                        },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Line Variant</h2>
                <TabGroup
                    variant="line"
                    defaultValue="overview"
                    tabs={[
                        { value: 'overview', label: 'Overview', content: <div className="py-4 text-sm text-muted-foreground">Overview content</div> },
                        { value: 'analytics', label: 'Analytics', content: <div className="py-4 text-sm text-muted-foreground">Analytics content</div> },
                        { value: 'reports', label: 'Reports', content: <div className="py-4 text-sm text-muted-foreground">Reports content</div> },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Orientation</h2>
                <TabGroup
                    orientation="vertical"
                    defaultValue="account"
                    tabs={[
                        { value: 'account', label: 'Account', icon: UserIcon, content: <div className="p-4 text-sm text-muted-foreground">Account details</div> },
                        { value: 'privacy', label: 'Privacy', icon: ShieldIcon, content: <div className="p-4 text-sm text-muted-foreground">Privacy settings</div> },
                        { value: 'billing', label: 'Billing', icon: CreditCardIcon, content: <div className="p-4 text-sm text-muted-foreground">Billing details</div> },
                    ]}
                />
            </div>
        </div>
    );
}
