"use client";
import { ContextMenuWrapper } from '@/components/molecules/context-menu-wrapper';
import { EditIcon, CopyIcon, TrashIcon, EyeIcon } from 'lucide-react';

export default function ContextMenuWrapperPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Right-click on the Card</h2>
                <ContextMenuWrapper
                    items={[
                        { label: 'View Details', icon: EyeIcon, onClick: () => { } },
                        { label: 'Edit', icon: EditIcon, onClick: () => { } },
                        { label: 'Copy ID', icon: CopyIcon, onClick: () => { }, shortcut: '⌘C' },
                        { separator: true },
                        { label: 'Delete', icon: TrashIcon, destructive: true, onClick: () => { } },
                    ]}
                >
                    <div className="border rounded-xl p-8 text-center text-sm text-muted-foreground cursor-context-menu hover:bg-muted/50 transition-colors">
                        Right-click me to open the context menu
                    </div>
                </ContextMenuWrapper>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">On a List Item</h2>
                <div className="space-y-2 max-w-sm">
                    {['Alice Johnson', 'Bob Smith', 'Carol White'].map((name) => (
                        <ContextMenuWrapper
                            key={name}
                            label={name}
                            items={[
                                { label: 'View Profile', icon: EyeIcon, onClick: () => { } },
                                { label: 'Edit', icon: EditIcon, onClick: () => { } },
                                { separator: true },
                                { label: 'Remove', icon: TrashIcon, destructive: true, onClick: () => { } },
                            ]}
                        >
                            <div className="border rounded-lg px-4 py-3 text-sm cursor-context-menu hover:bg-muted/50 transition-colors">
                                {name}
                            </div>
                        </ContextMenuWrapper>
                    ))}
                </div>
            </div>
        </div>
    );
}
