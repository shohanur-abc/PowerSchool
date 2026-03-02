"use client";
import { NavItem } from '@/components/molecules/nav-item';
import { HomeIcon, UsersIcon, BarChartIcon, SettingsIcon, BellIcon } from 'lucide-react';

export default function NavItemPage() {
    return (
        <div className="space-y-16 py-8 max-w-xs">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="space-y-1">
                    <NavItem label="Home" href="#" icon={HomeIcon} active />
                    <NavItem label="Users" href="#" icon={UsersIcon} />
                    <NavItem label="Analytics" href="#" icon={BarChartIcon} />
                    <NavItem label="Settings" href="#" icon={SettingsIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <div className="space-y-1">
                    <NavItem label="Home" href="#" icon={HomeIcon} variant="ghost" active />
                    <NavItem label="Notifications" href="#" icon={BellIcon} variant="ghost" badge="5" />
                    <NavItem label="Analytics" href="#" icon={BarChartIcon} variant="ghost" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Badge</h2>
                <div className="space-y-1">
                    <NavItem label="Dashboard" href="#" icon={HomeIcon} badge="New" />
                    <NavItem label="Alerts" href="#" icon={BellIcon} badge="99+" />
                    <NavItem label="Users" href="#" icon={UsersIcon} />
                </div>
            </div>
        </div>
    );
}
