"use client";
import { DualActionCard } from '@/components/molecules/dual-action-card';
import { UserPlusIcon, DownloadIcon, TrashIcon, ShareIcon } from 'lucide-react';

export default function DualActionCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default</h2>
                <DualActionCard
                    icon={UserPlusIcon}
                    title="Invite Team Member"
                    description="Add a new member to your school workspace."
                    primaryAction={{ label: 'Invite', onClick: () => { } }}
                    secondaryAction={{ label: 'Cancel', onClick: () => { } }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Export Report</h2>
                <DualActionCard
                    title="Export Grade Report"
                    description="Download the current term's grade report in CSV or PDF format."
                    primaryAction={{ label: 'Download PDF', onClick: () => { } }}
                    secondaryAction={{ label: 'Download CSV', onClick: () => { } }}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Destructive Action</h2>
                <DualActionCard
                    icon={TrashIcon}
                    title="Delete Student Record"
                    description="This action is permanent and cannot be undone."
                    primaryAction={{ label: 'Delete', onClick: () => { } }}
                    secondaryAction={{ label: 'Keep', onClick: () => { } }}
                />
            </div>
        </div>
    );
}
