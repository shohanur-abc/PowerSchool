"use client";
import { BreadcrumbNav } from '@/components/molecules/breadcrumb-nav';
import { HomeIcon, FolderIcon, FileTextIcon } from 'lucide-react';

export default function BreadcrumbNavPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple Path</h2>
                <BreadcrumbNav
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Dashboard', href: '/dashboard' },
                        { label: 'Settings' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icons</h2>
                <BreadcrumbNav
                    items={[
                        { label: 'Home', href: '/', icon: HomeIcon },
                        { label: 'Projects', href: '/projects', icon: FolderIcon },
                        { label: 'Report.pdf', icon: FileTextIcon },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Deep Navigation</h2>
                <BreadcrumbNav
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Users', href: '/users' },
                        { label: 'Groups', href: '/users/groups' },
                        { label: 'Admins', href: '/users/groups/admins' },
                        { label: 'Edit Role' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Single Crumb</h2>
                <BreadcrumbNav items={[{ label: 'Dashboard' }]} />
            </div>
        </div>
    );
}
