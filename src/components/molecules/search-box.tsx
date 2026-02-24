"use client";
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { SearchIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Kbd } from '@/components/ui/kbd';

export const SearchBox = ({ placeholder = "Search...", suggestions, onSearch, shortcut, variant = 'default', className, classNames: cns }: SearchBoxProps) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    return (
        <form onSubmit={handleSubmit} className={cn("@container", className)}>
            <div className={cn(searchVariant({ variant }), cns?.wrapper)}>
                <SearchIcon className={cn("absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground", cns?.icon)} />
                <Input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className={cn("pl-10 pr-10 border-none shadow-none focus-visible:ring-0", cns?.input)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {query && (
                        <Button type="button" variant="ghost" size="icon" className="size-6" onClick={() => setQuery('')}>
                            <XIcon className="size-3" />
                        </Button>
                    )}
                    {shortcut && !query && <Kbd>{shortcut}</Kbd>}
                </div>
            </div>
            {suggestions && suggestions.length > 0 && (
                <div className={cn("flex flex-wrap gap-2 mt-2", cns?.suggestions)}>
                    {suggestions.map((s, i) => (
                        <Badge key={i} variant="secondary" className="cursor-pointer hover:bg-secondary/80" onClick={() => { setQuery(s); onSearch?.(s); }}>
                            {s}
                        </Badge>
                    ))}
                </div>
            )}
        </form>
    );
};


// ============= VARIANTS =============
const searchVariant = cva("relative rounded-lg border", {
    variants: {
        variant: {
            default: "bg-background",
            filled: "bg-muted border-transparent",
            pill: "rounded-full",
        },
    },
});


// ============= TYPES =============
interface SearchBoxProps {
    placeholder?: string;
    suggestions?: string[];
    onSearch?: (query: string) => void;
    shortcut?: string;
    variant?: 'default' | 'filled' | 'pill';
    className?: string;
    classNames?: {
        wrapper?: string;
        icon?: string;
        input?: string;
        suggestions?: string;
    };
}
