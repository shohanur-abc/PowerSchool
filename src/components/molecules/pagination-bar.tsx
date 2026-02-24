import { cn } from '@/lib/utils';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

export const PaginationBar = ({ currentPage, totalPages, onPageChange, siblingCount = 1, className, classNames: cns }: PaginationBarProps) => {
    const pages = generatePages(currentPage, totalPages, siblingCount);

    return (
        <Pagination className={className}>
            <PaginationContent className={cns?.content}>
                <PaginationItem className={cns?.item}>
                    <PaginationPrevious
                        href="#"
                        onClick={(e) => { e.preventDefault(); if (currentPage > 1) onPageChange?.(currentPage - 1); }}
                        className={cn(currentPage <= 1 && "pointer-events-none opacity-50", cns?.prev)}
                    />
                </PaginationItem>
                {pages.map((page, i) => (
                    <PaginationItem key={i} className={cns?.item}>
                        {page === 'ellipsis' ? (
                            <PaginationEllipsis className={cns?.ellipsis} />
                        ) : (
                            <PaginationLink
                                href="#"
                                isActive={page === currentPage}
                                onClick={(e) => { e.preventDefault(); onPageChange?.(page as number); }}
                                className={cns?.link}
                            >
                                {page}
                            </PaginationLink>
                        )}
                    </PaginationItem>
                ))}
                <PaginationItem className={cns?.item}>
                    <PaginationNext
                        href="#"
                        onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) onPageChange?.(currentPage + 1); }}
                        className={cn(currentPage >= totalPages && "pointer-events-none opacity-50", cns?.next)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};


// ============= HELPERS =============
const generatePages = (current: number, total: number, siblings: number): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];
    const left = Math.max(2, current - siblings);
    const right = Math.min(total - 1, current + siblings);

    pages.push(1);
    if (left > 2) pages.push('ellipsis');
    for (let i = left; i <= right; i++) pages.push(i);
    if (right < total - 1) pages.push('ellipsis');
    if (total > 1) pages.push(total);

    return pages;
};


// ============= TYPES =============
interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
    siblingCount?: number;
    className?: string;
    classNames?: {
        content?: string;
        item?: string;
        link?: string;
        prev?: string;
        next?: string;
        ellipsis?: string;
    };
}
