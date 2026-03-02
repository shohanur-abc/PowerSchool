'use client';

import { SwitchCard } from '@/components/molecules/switch-card';
import { useState } from 'react';
import { BellIcon, ShieldIcon, WifiIcon, SunIcon, MoonIcon } from 'lucide-react';

export default function SwitchCardPage() {
    const [notifications, setNotifications] = useState(false);
    const [twoFactor, setTwoFactor] = useState(true);
    const [wifi, setWifi] = useState(false);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Switch Card</h2>
                <div className="max-w-md">
                    <SwitchCard
                        id="basic"
                        label="Enable Feature"
                        onCheckedChange={(v) => console.log(v)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Description</h2>
                <div className="max-w-md">
                    <SwitchCard
                        id="desc"
                        label="Dark Mode"
                        description="Switch the interface to a dark theme."
                        onCheckedChange={(v) => console.log(v)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon</h2>
                <div className="max-w-md">
                    <SwitchCard
                        id="notifications"
                        label="Push Notifications"
                        description="Receive alerts for important updates."
                        icon={BellIcon}
                        checked={notifications}
                        onCheckedChange={setNotifications}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Pre-enabled (with Icon)</h2>
                <div className="max-w-md">
                    <SwitchCard
                        id="twoFactor"
                        label="Two-Factor Authentication"
                        description="Add an extra layer of security to your account."
                        icon={ShieldIcon}
                        checked={twoFactor}
                        onCheckedChange={setTwoFactor}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Disabled State</h2>
                <div className="max-w-md">
                    <SwitchCard
                        id="wifi"
                        label="WiFi"
                        description="Connect to available networks."
                        icon={WifiIcon}
                        checked={wifi}
                        onCheckedChange={setWifi}
                        disabled
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Settings Group</h2>
                <div className="max-w-md space-y-3">
                    <SwitchCard id="sun" label="Auto Brightness" description="Adjust screen brightness automatically." icon={SunIcon} onCheckedChange={(v) => console.log(v)} />
                    <SwitchCard id="moon" label="Night Mode" description="Reduce blue light after sunset." icon={MoonIcon} checked onCheckedChange={(v) => console.log(v)} />
                    <SwitchCard id="bell2" label="Sound Alerts" description="Play sounds for incoming notifications." icon={BellIcon} onCheckedChange={(v) => console.log(v)} />
                </div>
            </div>
        </div>
    );
}
