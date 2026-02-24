"use client";
import { cn } from '@/lib/utils';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { useEffect, useState } from 'react';

export const CommandMenu = ({ groups, placeholder = "Type a command or search...", shortcut = "k", onSelect, className, classNames: cns }: CommandMenuProps) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === shortcut && (e.metaKey || e.ctrlKey)) { e.preventDefault(); setOpen(o => !o); }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [shortcut]);

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <Command className={cn(className)}>
                <CommandInput placeholder={placeholder} className={cns?.input} />
                <CommandList className={cns?.list}>
                    <CommandEmpty className={cns?.empty}>No results found.</CommandEmpty>
                    {groups.map(({ heading, items }, i) => (
                        <CommandGroup key={i} heading={heading} className={cns?.group}>
                            {items.map(({ label, icon: Icon, shortcut: sc, onSelect: itemSelect }, j) => (
                                <CommandItem key={j} onSelect={() => { (itemSelect || onSelect)?.(label); setOpen(false); }} className={cns?.item}>
                                    {Icon && <Icon className="size-4 mr-2" />}
                                    <span>{label}</span>
                                    {sc && <span className="ml-auto text-xs text-muted-foreground">{sc}</span>}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
        </CommandDialog>
    );
};

interface CommandMenuProps {
    groups: { heading?: string; items: { label: string; icon?: React.ElementType; shortcut?: string; onSelect?: (value: string) => void }[] }[];
    placeholder?: string; shortcut?: string; onSelect?: (value: string) => void;
    className?: string; classNames?: { input?: string; list?: string; empty?: string; group?: string; item?: string };
}
