"use client";
import { MenuCard } from '@/components/molecules/menu-card';
import { LayoutDashboardIcon, UsersIcon, BarChartIcon, SettingsIcon, FileTextIcon, BellIcon } from 'lucide-react';

export default function MenuCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-xs">
            <div>
                <h2 className="text-lg font-semibold mb-4">Navigation Menu</h2>
                <MenuCard
                    title="Main Menu"
                    items={[
                        { label: 'Dashboard', href: '#', icon: LayoutDashboardIcon },
                        { label: 'Students', href: '#', icon: UsersIcon, badge: '12' },
                        { label: 'Reports', href: '#', icon: BarChartIcon },
                        { label: 'Notices', href: '#', icon: BellIcon, description: 'School announcements' },
                        { label: 'Documents', href: '#', icon: FileTextIcon },
                        { label: 'Settings', href: '#', icon: SettingsIcon },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Quick Links (no title)</h2>
                <MenuCard
                    items={[
                        { label: 'My Profile', href: '#', icon: UsersIcon, description: 'View and edit your profile' },
                        { label: 'Analytics', href: '#', icon: BarChartIcon, description: 'View your stats' },
                        { label: 'Settings', href: '#', icon: SettingsIcon, description: 'Configure preferences' },
                    ]}
                />
            </div>
        </div>
    );
}
