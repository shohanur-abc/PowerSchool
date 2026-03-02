'use client';

import { SwitchGroup } from '@/components/molecules/switch-group';
import { useState } from 'react';

export default function SwitchGroupPage() {
    const [settings, setSettings] = useState([
        { id: 'notifications', label: 'Notifications', description: 'Receive push notifications', checked: true, onCheckedChange: (v: boolean) => console.log('notifications', v) },
        { id: 'emails', label: 'Email Updates', description: 'Get weekly digest emails', checked: false, onCheckedChange: (v: boolean) => console.log('emails', v) },
        { id: 'sms', label: 'SMS Alerts', description: 'Critical alerts via text message', checked: true, onCheckedChange: (v: boolean) => console.log('sms', v) },
    ]);

    const toggle = (id: string) => {
        setSettings(prev => prev.map(s => s.id === id ? { ...s, checked: !s.checked } : s));
    };

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Switch Group</h2>
                <div className="max-w-md">
                    <SwitchGroup
                        items={[
                            { id: 'a', label: 'Option A', onCheckedChange: (v) => console.log(v) },
                            { id: 'b', label: 'Option B', onCheckedChange: (v) => console.log(v) },
                            { id: 'c', label: 'Option C', checked: true, onCheckedChange: (v) => console.log(v) },
                        ]}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Descriptions</h2>
                <div className="max-w-md">
                    <SwitchGroup
                        items={[
                            { id: 'dark', label: 'Dark Mode', description: 'Use dark color scheme', onCheckedChange: (v) => console.log(v) },
                            { id: 'compact', label: 'Compact View', description: 'Show more items per page', checked: true, onCheckedChange: (v) => console.log(v) },
                            { id: 'animate', label: 'Animations', description: 'Enable UI animations', checked: true, onCheckedChange: (v) => console.log(v) },
                        ]}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Notification Settings (Controlled)</h2>
                <div className="max-w-md space-y-2">
                    <SwitchGroup
                        items={settings.map(s => ({
                            ...s,
                            onCheckedChange: () => toggle(s.id),
                        }))}
                    />
                    <p className="text-xs text-muted-foreground">
                        Enabled: {settings.filter(s => s.checked).map(s => s.label).join(', ') || 'None'}
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Disabled Item</h2>
                <div className="max-w-md">
                    <SwitchGroup
                        items={[
                            { id: 'x1', label: 'Active Setting', description: 'This can be toggled', checked: true, onCheckedChange: (v) => console.log(v) },
                            { id: 'x2', label: 'Locked Setting', description: 'This setting is locked', disabled: true, onCheckedChange: (v) => console.log(v) },
                            { id: 'x3', label: 'Another Setting', description: 'This can also be toggled', onCheckedChange: (v) => console.log(v) },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
