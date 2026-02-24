import { cn } from '@/lib/utils';
import Link from 'next/link';

export const SearchResults = ({ results, query, loading, emptyMessage = "No results found", className, classNames: cns }: SearchResultsProps) => {
    if (loading) return <div className={cn("p-4 text-sm text-muted-foreground text-center", className)}>Searching...</div>;
    if (!results.length) return <div className={cn("p-4 text-sm text-muted-foreground text-center", className)}>{emptyMessage}</div>;

    return (
        <div className={cn("@container divide-y", className)}>
            {results.map(({ title, description, href, icon: Icon, badge }, i) => (
                <Link key={i} href={href} className={cn("flex items-start gap-3 p-3 hover:bg-muted/50 transition-colors no-underline", cns?.item)}>
                    {Icon && <Icon className={cn("size-4 mt-0.5 text-muted-foreground shrink-0", cns?.icon)} />}
                    <div className="flex-1 min-w-0">
                        <p className={cn("text-sm font-medium", cns?.title)}>{highlightText(title, query)}</p>
                        {description && <p className={cn("text-xs text-muted-foreground mt-0.5 line-clamp-1", cns?.description)}>{description}</p>}
                    </div>
                    {badge && <span className={cn("text-xs text-muted-foreground shrink-0", cns?.badge)}>{badge}</span>}
                </Link>
            ))}
        </div>
    );
};

const highlightText = (text: string, query?: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => part.toLowerCase() === query?.toLowerCase() ? <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">{part}</mark> : part);
};

interface SearchResultsProps {
    results: { title: string; description?: string; href: string; icon?: React.ElementType; badge?: string }[];
    query?: string; loading?: boolean; emptyMessage?: string;
    className?: string; classNames?: { item?: string; icon?: string; title?: string; description?: string; badge?: string };
}
