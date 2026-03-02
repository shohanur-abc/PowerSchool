'use client';
import { SidebarMenu } from '@/components/molecules/sidebar-menu';
import {
    LayoutDashboardIcon,
    UsersIcon,
    BarChartIcon,
    SettingsIcon,
    FileTextIcon,
    ShieldIcon,
} from 'lucide-react';

const sections = [
    {
        title: 'Main',
        items: [
            { label: 'Dashboard', href: '#', icon: LayoutDashboardIcon },
            { label: 'Reports', href: '#', icon: BarChartIcon, badge: '3' },
        ],
    },
    {
        title: 'Management',
        items: [
            { label: 'Users', href: '#', icon: UsersIcon },
            { label: 'Roles', href: '#', icon: ShieldIcon },
            { label: 'Documents', href: '#', icon: FileTextIcon },
        ],
    },
    {
        title: 'System',
        items: [{ label: 'Settings', href: '#', icon: SettingsIcon }],
    },
];

export default function SidebarMenuPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Expanded (default)</h2>
                <div className="w-64 border rounded-xl overflow-hidden">
                    <SidebarMenu sections={sections} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Collapsed</h2>
                <div className="w-16 border rounded-xl overflow-hidden">
                    <SidebarMenu sections={sections} collapsed />
                </div>
            </div>
        </div>
    );
}
