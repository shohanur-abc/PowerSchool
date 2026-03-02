"use client";
import { PageHeader } from '@/components/molecules/page-header';
import { Button } from '@/components/ui/button';
import { PlusIcon, DownloadIcon } from 'lucide-react';

export default function PageHeaderPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <div className="border rounded-xl p-6">
                    <PageHeader
                        title="Student Management"
                        description="View and manage all registered students."
                        variant="default"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Eyebrow + Actions</h2>
                <div className="border rounded-xl p-6">
                    <PageHeader
                        eyebrow="Dashboard"
                        title="Reports & Analytics"
                        description="Track performance across all departments."
                        actions={
                            <>
                                <Button variant="outline"><DownloadIcon className="size-4 mr-2" />Export</Button>
                                <Button><PlusIcon className="size-4 mr-2" />New Report</Button>
                            </>
                        }
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Compact</h2>
                <div className="border rounded-xl p-4">
                    <PageHeader title="Settings" variant="compact" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Clean</h2>
                <div className="border rounded-xl p-6">
                    <PageHeader
                        title="Billing & Payments"
                        description="Manage subscriptions and invoices."
                        variant="clean"
                        actions={<Button size="sm">Upgrade Plan</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
