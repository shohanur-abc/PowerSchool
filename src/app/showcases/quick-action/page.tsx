"use client";
import { QuickAction } from '@/components/molecules/quick-action';
import { PlusIcon, DownloadIcon, UploadIcon, RefreshCwIcon, TrashIcon } from 'lucide-react';

export default function QuickActionPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <QuickAction
                    items={[
                        { label: 'New Project', href: '#', icon: PlusIcon, variant: 'default', description: 'Start from scratch' },
                        { label: 'Import', href: '#', icon: UploadIcon, variant: 'default', description: 'Upload existing files' },
                        { label: 'Download', href: '#', icon: DownloadIcon, variant: 'default', description: 'Export your data' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <QuickAction
                    items={[
                        { label: 'Refresh', href: '#', icon: RefreshCwIcon, variant: 'filled', description: 'Sync latest data' },
                        { label: 'Delete All', href: '#', icon: TrashIcon, variant: 'filled', description: 'Remove all items' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <QuickAction
                    items={[
                        { label: 'New Item', href: '#', icon: PlusIcon, variant: 'ghost' },
                        { label: 'Export', href: '#', icon: DownloadIcon, variant: 'ghost' },
                        { label: 'Import', href: '#', icon: UploadIcon, variant: 'ghost' },
                        { label: 'Refresh', href: '#', icon: RefreshCwIcon, variant: 'ghost' },
                    ]}
                />
            </div>
        </div>
    );
}
