'use client';
import { TabNav } from '@/components/molecules/tab-nav';
import { LayoutDashboardIcon, UsersIcon, BarChartIcon, SettingsIcon } from 'lucide-react';

const tabs = [
    { label: 'Dashboard', href: '#', icon: LayoutDashboardIcon },
    { label: 'Users', href: '#', icon: UsersIcon, badge: '12' },
    { label: 'Analytics', href: '#', icon: BarChartIcon },
    { label: 'Settings', href: '#', icon: SettingsIcon },
];

export default function TabNavPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <TabNav tabs={tabs} variant="default" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Pills Variant</h2>
                <TabNav tabs={tabs} variant="pills" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Underline Variant</h2>
                <TabNav tabs={tabs} variant="underline" />
            </div>
        </div>
    );
}
