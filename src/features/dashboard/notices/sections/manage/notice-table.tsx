'use client';

import {
    Copy,
    Archive,
    Trash2,
    MoreHorizontal,
    Pencil,
    Search,
    FileText,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { cva } from 'class-variance-authority';

// ============= MAIN COMPONENT =============
export default function NoticeTable({
    title,
    description,
    notices,
    searchValue,
    onSearchChange,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
}: INoticeTable) {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col @xl:flex-row @xl:items-center @xl:justify-between gap-4">
                    <div className="space-y-1">
                        <CardTitle>{title}</CardTitle>
                        {description && (
                            <CardDescription>{description}</CardDescription>
                        )}
                    </div>
                    <SearchField
                        value={searchValue}
                        onChange={onSearchChange}
                    />
                </div>
            </CardHeader>
            <CardContent>
                {notices.length > 0 ? (
                    <NoticesTable
                        notices={notices}
                        onEdit={onEdit}
                        onDuplicate={onDuplicate}
                        onArchive={onArchive}
                        onDelete={onDelete}
                    />
                ) : (
                    <EmptyState />
                )}
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SearchField = ({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string) => void;
}) => (
    <div className="relative w-full @xl:w-64">
        <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
        <Input
            placeholder="Search notices..."
            value={value ?? ''}
            onChange={(e) => onChange?.(e.target.value)}
            className="pl-9"
        />
    </div>
);

const NoticesTable = ({
    notices,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
}: {
    notices: INoticeRow[];
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onArchive?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <div className="overflow-auto">
        <Table>
            <TableHeader className="sticky top-0 bg-background z-10">
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-center">Priority</TableHead>
                    <TableHead>Audience</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Views</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notices.map((notice) => (
                    <NoticeRow
                        key={notice.id}
                        {...notice}
                        onEdit={onEdit}
                        onDuplicate={onDuplicate}
                        onArchive={onArchive}
                        onDelete={onDelete}
                    />
                ))}
            </TableBody>
        </Table>
    </div>
);

const NoticeRow = ({
    id,
    title,
    author,
    date,
    priority,
    audience,
    status,
    views,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
}: INoticeRow & {
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onArchive?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <TableRow>
        <TableCell className="font-medium max-w-48 truncate">{title}</TableCell>
        <TableCell className="text-muted-foreground">{author}</TableCell>
        <TableCell className="text-muted-foreground whitespace-nowrap">
            {date}
        </TableCell>
        <TableCell className="text-center">
            <Badge className={priorityVariants({ priority })}>{priority}</Badge>
        </TableCell>
        <TableCell>
            <div className="flex flex-wrap gap-1">
                {audience.map((tag) => (
                    <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] px-1.5 py-0"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>
        </TableCell>
        <TableCell className="text-center">
            <Badge className={statusVariants({ status })}>{status}</Badge>
        </TableCell>
        <TableCell className="text-center tabular-nums">{views}</TableCell>
        <TableCell className="text-right">
            <ActionsMenu
                id={id}
                onEdit={onEdit}
                onDuplicate={onDuplicate}
                onArchive={onArchive}
                onDelete={onDelete}
            />
        </TableCell>
    </TableRow>
);

const ActionsMenu = ({
    id,
    onEdit,
    onDuplicate,
    onArchive,
    onDelete,
}: {
    id: string;
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onArchive?: (id: string) => void;
    onDelete?: (id: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
                <MoreHorizontal className="size-4" />
                <span className="sr-only">Open menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            {onEdit && (
                <DropdownMenuItem onClick={() => onEdit(id)}>
                    <Pencil className="size-4 mr-2" />
                    Edit
                </DropdownMenuItem>
            )}
            {onDuplicate && (
                <DropdownMenuItem onClick={() => onDuplicate(id)}>
                    <Copy className="size-4 mr-2" />
                    Duplicate
                </DropdownMenuItem>
            )}
            {onArchive && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => onArchive(id)}>
                        <Archive className="size-4 mr-2" />
                        Archive
                    </DropdownMenuItem>
                </>
            )}
            {onDelete && (
                <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => onDelete(id)}
                        className="text-destructive focus:text-destructive"
                    >
                        <Trash2 className="size-4 mr-2" />
                        Delete
                    </DropdownMenuItem>
                </>
            )}
        </DropdownMenuContent>
    </DropdownMenu>
);

const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText className="size-8 text-muted-foreground/40 mb-2" />
        <p className="text-sm text-muted-foreground">
            No notices found. Try adjusting your search or filters.
        </p>
    </div>
);

// ============= VARIANTS =============
const priorityVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        priority: {
            urgent: 'bg-red-600 text-white hover:bg-red-700',
            high: 'bg-orange-500 text-white hover:bg-orange-600',
            medium: 'bg-yellow-500 text-white hover:bg-yellow-600',
            low: 'bg-slate-400 text-white hover:bg-slate-500',
        },
    },
    defaultVariants: {
        priority: 'medium',
    },
});

const statusVariants = cva('text-[10px] px-1.5 py-0', {
    variants: {
        status: {
            published: 'bg-emerald-600 text-white hover:bg-emerald-700',
            draft: 'bg-slate-400 text-white hover:bg-slate-500',
            scheduled: 'bg-blue-500 text-white hover:bg-blue-600',
            archived: 'bg-zinc-500 text-white hover:bg-zinc-600',
        },
    },
    defaultVariants: {
        status: 'draft',
    },
});

// ============= TYPES =============
interface INoticeRow {
    id: string;
    title: string;
    author: string;
    date: string;
    priority: 'urgent' | 'high' | 'medium' | 'low';
    audience: string[];
    status: 'published' | 'draft' | 'scheduled' | 'archived';
    views: number;
}

interface INoticeTable {
    title: string;
    description?: string;
    notices: INoticeRow[];
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    onEdit?: (id: string) => void;
    onDuplicate?: (id: string) => void;
    onArchive?: (id: string) => void;
    onDelete?: (id: string) => void;
}
