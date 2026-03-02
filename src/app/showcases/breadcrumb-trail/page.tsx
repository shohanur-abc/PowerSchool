"use client";
import { BreadcrumbTrail } from '@/components/molecules/breadcrumb-trail';

export default function BreadcrumbTrailPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Home Link</h2>
                <BreadcrumbTrail
                    items={[
                        { label: 'Dashboard', href: '/dashboard' },
                        { label: 'Reports', href: '/dashboard/reports' },
                        { label: 'Monthly Summary' },
                    ]}
                    showHome
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Home Link</h2>
                <BreadcrumbTrail
                    items={[
                        { label: 'Products', href: '/products' },
                        { label: 'Electronics', href: '/products/electronics' },
                        { label: 'Laptops' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Shallow (2 levels)</h2>
                <BreadcrumbTrail
                    items={[
                        { label: 'Settings', href: '/settings' },
                        { label: 'Account' },
                    ]}
                    showHome
                />
            </div>
        </div>
    );
}
