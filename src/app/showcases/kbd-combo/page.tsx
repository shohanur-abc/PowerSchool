"use client";
import { KbdCombo } from '@/components/molecules/kbd-combo';

export default function KbdComboPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Single Keys</h2>
                <div className="flex flex-wrap gap-3">
                    <KbdCombo keys={['⌘']} />
                    <KbdCombo keys={['Ctrl']} />
                    <KbdCombo keys={['Shift']} />
                    <KbdCombo keys={['Alt']} />
                    <KbdCombo keys={['Enter']} />
                    <KbdCombo keys={['Esc']} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Combinations</h2>
                <div className="flex flex-wrap gap-4">
                    <KbdCombo keys={['⌘', 'K']} />
                    <KbdCombo keys={['⌘', 'S']} />
                    <KbdCombo keys={['⌘', 'Shift', 'P']} />
                    <KbdCombo keys={['Ctrl', 'Alt', 'Del']} />
                    <KbdCombo keys={['⌘', 'Z']} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Separator</h2>
                <div className="flex flex-wrap gap-4">
                    <KbdCombo keys={['Ctrl', 'C']} separator="then" />
                    <KbdCombo keys={['g', 'g']} separator=" → " />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Shortcut Table</h2>
                <div className="max-w-sm space-y-2">
                    {[
                        { action: 'Open command menu', keys: ['⌘', 'K'] },
                        { action: 'Save document', keys: ['⌘', 'S'] },
                        { action: 'Undo', keys: ['⌘', 'Z'] },
                        { action: 'Redo', keys: ['⌘', 'Shift', 'Z'] },
                        { action: 'Find', keys: ['⌘', 'F'] },
                    ].map(({ action, keys }) => (
                        <div key={action} className="flex items-center justify-between text-sm border-b pb-2 last:border-0">
                            <span className="text-muted-foreground">{action}</span>
                            <KbdCombo keys={keys} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
