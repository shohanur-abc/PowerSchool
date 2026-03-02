"use client";
import { LinkCard } from '@/components/molecules/link-card';
import { BookOpenIcon, BarChartIcon, UsersIcon, SettingsIcon } from 'lucide-react';

export default function LinkCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <LinkCard title="Documentation" description="Read the full docs." href="#" icon={BookOpenIcon} />
                    <LinkCard title="Analytics" description="View reports." href="#" icon={BarChartIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <LinkCard title="Team" description="Manage team members." href="#" icon={UsersIcon} variant="ghost" />
                    <LinkCard title="Settings" description="Configure your workspace." href="#" icon={SettingsIcon} variant="ghost" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <LinkCard title="Learn" description="Browse learning paths." href="#" icon={BookOpenIcon} variant="filled" />
                    <LinkCard title="External Link" description="Opens in new tab." href="https://example.com" icon={BarChartIcon} variant="filled" external />
                </div>
            </div>
        </div>
    );
}
