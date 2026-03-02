'use client';

import { SettingsRow } from '@/components/molecules/settings-row';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export default function SettingsRowPage() {
    const [notifications, setNotifications] = useState(true);
    const [emails, setEmails] = useState(false);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Settings Row</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow label="Dark Mode">
                        <Switch />
                    </SettingsRow>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Description</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow
                        label="Push Notifications"
                        description="Receive alerts on your device"
                    >
                        <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </SettingsRow>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Select Control</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow label="Language" description="Select your preferred language">
                        <Select>
                            <SelectTrigger className="w-36">
                                <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Spanish</SelectItem>
                                <SelectItem value="fr">French</SelectItem>
                            </SelectContent>
                        </Select>
                    </SettingsRow>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Button Control</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow label="Password" description="Last changed 3 months ago">
                        <Button variant="outline" size="sm">Change</Button>
                    </SettingsRow>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Badge</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow label="Plan" description="Your current subscription tier">
                        <Badge>Pro</Badge>
                    </SettingsRow>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Full Settings Panel</h2>
                <div className="max-w-lg border rounded-lg px-4">
                    <SettingsRow label="Notifications" description="Push alerts for your device">
                        <Switch checked={notifications} onCheckedChange={setNotifications} />
                    </SettingsRow>
                    <SettingsRow label="Marketing Emails" description="Promotional content and offers">
                        <Switch checked={emails} onCheckedChange={setEmails} />
                    </SettingsRow>
                    <SettingsRow label="Timezone" description="Your current timezone setting">
                        <Select>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="UTC+0" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="utc">UTC+0</SelectItem>
                                <SelectItem value="est">EST (UTC-5)</SelectItem>
                                <SelectItem value="pst">PST (UTC-8)</SelectItem>
                            </SelectContent>
                        </Select>
                    </SettingsRow>
                    <SettingsRow label="Account" description="Manage account details">
                        <Button variant="outline" size="sm">Manage</Button>
                    </SettingsRow>
                </div>
            </div>
        </div>
    );
}
