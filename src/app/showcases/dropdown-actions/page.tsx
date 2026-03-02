"use client";
import { DropdownActions } from '@/components/molecules/dropdown-actions';
import { Button } from '@/components/ui/button';
import { EditIcon, EyeIcon, ArchiveIcon, TrashIcon, MoreHorizontalIcon } from 'lucide-react';

export default function DropdownActionsPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (icon trigger)</h2>
                <DropdownActions
                    items={[
                        { label: 'View', icon: EyeIcon, onClick: () => { } },
                        { label: 'Edit', icon: EditIcon, onClick: () => { } },
                        { separator: true },
                        { label: 'Archive', icon: ArchiveIcon, onClick: () => { } },
                        { label: 'Delete', icon: TrashIcon, destructive: true, onClick: () => { } },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Trigger &amp; Label</h2>
                <DropdownActions
                    trigger={<Button variant="outline" size="sm">Actions</Button>}
                    items={[
                        { label: 'Export PDF', onClick: () => { } },
                        { label: 'Export CSV', onClick: () => { } },
                        { separator: true },
                        { label: 'Share Link', onClick: () => { } },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Disabled Items</h2>
                <DropdownActions
                    label="Options"
                    items={[
                        { label: 'Approve', icon: EyeIcon, onClick: () => { } },
                        { label: 'Reject', icon: ArchiveIcon, onClick: () => { }, disabled: true },
                        { separator: true },
                        { label: 'Delete', icon: TrashIcon, destructive: true, onClick: () => { } },
                    ]}
                />
            </div>
        </div>
    );
}
