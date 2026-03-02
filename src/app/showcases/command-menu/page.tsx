'use client';
import { CommandMenu } from '@/components/molecules/command-menu';
import { Button } from '@/components/ui/button';
import { SearchIcon, HomeIcon, SettingsIcon, UsersIcon, FileTextIcon, PlusIcon } from 'lucide-react';

export default function CommandMenuPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (⌘K to open)</h2>
                <p className="text-sm text-muted-foreground mb-4">Press <kbd className="px-1.5 py-0.5 rounded border bg-muted text-xs">⌘K</kbd> (or <kbd className="px-1.5 py-0.5 rounded border bg-muted text-xs">Ctrl+K</kbd>) to open the command menu.</p>
                <CommandMenu
                    groups={[
                        {
                            heading: 'Navigation',
                            items: [
                                { label: 'Dashboard', icon: HomeIcon, shortcut: '⌘D' },
                                { label: 'Users', icon: UsersIcon },
                                { label: 'Settings', icon: SettingsIcon, shortcut: '⌘,' },
                            ],
                        },
                        {
                            heading: 'Actions',
                            items: [
                                { label: 'Create New', icon: PlusIcon, shortcut: '⌘N' },
                                { label: 'Search Files', icon: SearchIcon },
                                { label: 'View Reports', icon: FileTextIcon },
                            ],
                        },
                    ]}
                    placeholder="Search commands..."
                    onSelect={(val) => console.log('Selected:', val)}
                />
                <div className="border rounded-xl p-6 text-center text-sm text-muted-foreground">
                    CommandMenu is globally active. Use the keyboard shortcut above.
                </div>
            </div>
        </div>
    );
}
