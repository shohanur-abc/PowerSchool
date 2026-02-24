"use client";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { XIcon } from 'lucide-react';
import { useState, useRef } from 'react';

export const TagInput = ({ tags: initialTags = [], onChange, placeholder = 'Add tag...', max, className, classNames: cns }: TagInputProps) => {
    const [tags, setTags] = useState(initialTags);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const addTag = (tag: string) => {
        const trimmed = tag.trim();
        if (!trimmed || tags.includes(trimmed) || (max && tags.length >= max)) return;
        const updated = [...tags, trimmed];
        setTags(updated); setInput(''); onChange?.(updated);
    };

    const removeTag = (index: number) => {
        const updated = tags.filter((_, i) => i !== index);
        setTags(updated); onChange?.(updated);
    };

    return (
        <div className={cn("flex flex-wrap gap-1.5 p-2 border rounded-lg focus-within:ring-2 focus-within:ring-ring @container", className)} onClick={() => inputRef.current?.focus()}>
            {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className={cn("gap-1", cns?.tag)}>
                    {tag}
                    <button onClick={(e) => { e.stopPropagation(); removeTag(i); }} className="hover:text-foreground"><XIcon className="size-3" /></button>
                </Badge>
            ))}
            <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(input); } if (e.key === 'Backspace' && !input && tags.length) removeTag(tags.length - 1); }}
                placeholder={tags.length === 0 ? placeholder : ''}
                className={cn("border-0 shadow-none focus-visible:ring-0 h-7 min-w-[80px] flex-1 p-0", cns?.input)}
            />
        </div>
    );
};

interface TagInputProps {
    tags?: string[]; onChange?: (tags: string[]) => void; placeholder?: string; max?: number;
    className?: string; classNames?: { tag?: string; input?: string };
}
