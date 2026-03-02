"use client";
import { SidebarLayout } from '@/components/molecules/sidebar-layout';
import { NavItem } from '@/components/molecules/nav-item';
import { LayoutDashboardIcon, UsersIcon, SettingsIcon, FileTextIcon } from 'lucide-react';

const SampleSidebar = () => (
    <div className="p-4 space-y-1">
        <NavItem label="Dashboard" href="#" icon={LayoutDashboardIcon} active />
        <NavItem label="Users" href="#" icon={UsersIcon} />
        <NavItem label="Reports" href="#" icon={FileTextIcon} />
        <NavItem label="Settings" href="#" icon={SettingsIcon} />
    </div>
);

export default function SidebarLayoutPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Width (256px)</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <SidebarLayout sidebar={<SampleSidebar />}>
                        <div className="p-6 flex items-center justify-center text-sm text-muted-foreground h-full">
                            Main content area
                        </div>
                    </SidebarLayout>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Narrow Sidebar (224px)</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <SidebarLayout sidebar={<SampleSidebar />} sidebarWidth="narrow">
                        <div className="p-6 flex items-center justify-center text-sm text-muted-foreground h-full">
                            Main content — narrow sidebar
                        </div>
                    </SidebarLayout>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Wide Sidebar (320px)</h2>
                <div className="border rounded-xl overflow-hidden h-64">
                    <SidebarLayout sidebar={<SampleSidebar />} sidebarWidth="wide">
                        <div className="p-6 flex items-center justify-center text-sm text-muted-foreground h-full">
                            Main content — wide sidebar
                        </div>
                    </SidebarLayout>
                </div>
            </div>
        </div>
    );
}
