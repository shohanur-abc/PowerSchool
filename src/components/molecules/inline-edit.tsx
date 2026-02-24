"use client";
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useState, useRef, useEffect } from 'react';
import { CheckIcon, XIcon, PencilIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InlineEdit = ({ value, onSave, placeholder, className, classNames: cns }: InlineEditProps) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

    const handleSave = () => { onSave?.(draft); setEditing(false); };
    const handleCancel = () => { setDraft(value); setEditing(false); };

    if (!editing) {
        return (
            <button onClick={() => setEditing(true)} className={cn("group inline-flex items-center gap-1.5 text-left hover:bg-muted/50 rounded px-1 -mx-1 transition-colors", className)}>
                <span className={cn(!value && "text-muted-foreground", cns?.value)}>{value || placeholder || 'Click to edit'}</span>
                <PencilIcon className={cn("size-3 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity", cns?.editIcon)} />
            </button>
        );
    }

    return (
        <div className={cn("inline-flex items-center gap-1", className)}>
            <Input ref={inputRef} value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel(); }} className={cn("h-8 text-sm", cns?.input)} />
            <Button variant="ghost" size="icon" className="size-7" onClick={handleSave}><CheckIcon className="size-3.5 text-green-500" /></Button>
            <Button variant="ghost" size="icon" className="size-7" onClick={handleCancel}><XIcon className="size-3.5 text-muted-foreground" /></Button>
        </div>
    );
};

interface InlineEditProps {
    value: string; onSave?: (value: string) => void; placeholder?: string; className?: string;
    classNames?: { value?: string; editIcon?: string; input?: string };
}
