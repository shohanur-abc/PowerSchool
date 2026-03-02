"use client";
import { PopoverMenu } from '@/components/molecules/popover-menu';
import { Button } from '@/components/ui/button';
import { EditIcon, TrashIcon, CopyIcon, EyeIcon, MoreHorizontalIcon, SettingsIcon } from 'lucide-react';

export default function PopoverMenuPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (Icon Trigger)</h2>
                <PopoverMenu
                    trigger={<Button variant="outline" size="icon"><MoreHorizontalIcon className="size-4" /></Button>}
                    items={[
                        { label: 'View', icon: EyeIcon, onClick: () => { } },
                        { label: 'Edit', icon: EditIcon, onClick: () => { } },
                        { label: 'Duplicate', icon: CopyIcon, onClick: () => { } },
                        { separator: true },
                        { label: 'Delete', icon: TrashIcon, destructive: true, onClick: () => { } },
                    ]}
                    align="start"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Trigger + Align End</h2>
                <PopoverMenu
                    trigger={<Button variant="outline"><SettingsIcon className="size-4 mr-2" />Settings</Button>}
                    items={[
                        { label: 'Profile Settings', onClick: () => { } },
                        { label: 'Notifications', onClick: () => { } },
                        { separator: true },
                        { label: 'Sign Out', destructive: true, onClick: () => { } },
                    ]}
                    align="end"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Disabled Items</h2>
                <PopoverMenu
                    trigger={<Button variant="ghost" size="icon"><MoreHorizontalIcon className="size-4" /></Button>}
                    items={[
                        { label: 'Publish', onClick: () => { } },
                        { label: 'Archive', onClick: () => { }, disabled: true },
                        { label: 'Export', onClick: () => { } },
                    ]}
                    align="start"
                />
            </div>
        </div>
    );
}
