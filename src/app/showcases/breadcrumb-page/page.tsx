"use client";
import { BreadcrumbPageHeader } from '@/components/molecules/breadcrumb-page';
import { Button } from '@/components/ui/button';
import { PlusIcon, DownloadIcon } from 'lucide-react';

export default function BreadcrumbPagePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Header</h2>
                <BreadcrumbPageHeader
                    items={[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Users' }]}
                    title="Users"
                    description="Manage all system users and their permissions."
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Actions</h2>
                <BreadcrumbPageHeader
                    items={[{ label: 'Reports', href: '/reports' }, { label: 'Monthly' }]}
                    title="Monthly Reports"
                    description="View and download monthly summaries."
                    actions={
                        <>
                            <Button variant="outline" size="sm"><DownloadIcon className="size-4 mr-1" />Export</Button>
                            <Button size="sm"><PlusIcon className="size-4 mr-1" />New Report</Button>
                        </>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Title Only</h2>
                <BreadcrumbPageHeader
                    items={[{ label: 'Settings' }]}
                    title="Settings"
                />
            </div>
        </div>
    );
}
