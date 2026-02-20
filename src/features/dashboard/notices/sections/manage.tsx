import { Search, Pencil, Trash2, Copy, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function ManageNotices({ notices }: IManageNotices) {
    return (
        <div className="space-y-6">
            <Header />
            <NoticesTable notices={notices} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Manage Notices</h1>
            <p className="text-muted-foreground mt-1">View, edit and organise all school notices</p>
        </div>
    </div>
);

const NoticesTable = ({ notices }: { notices: IManageNotices['notices'] }) => (
    <Card>
        <CardHeader>
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                <CardTitle className="text-base">All Notices</CardTitle>
                <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input placeholder="Search notices..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon">
                        <Filter className="size-4" />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Audience</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {notices.map((notice) => (
                        <TableRow key={notice.id}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{notice.title}</p>
                                    <p className="text-xs text-muted-foreground">{notice.author}</p>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="secondary" className="text-xs">{notice.type}</Badge>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{notice.audience}</TableCell>
                            <TableCell className="text-muted-foreground text-sm">{notice.publishedAt}</TableCell>
                            <TableCell>
                                <StatusBadge status={notice.status} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                    <Button variant="ghost" size="icon" className="size-8">
                                        <Pencil className="size-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="size-8">
                                        <Copy className="size-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="size-8 text-destructive hover:text-destructive">
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
    const map: Record<string, { label: string; className: string }> = {
        published: { label: 'Published', className: 'bg-green-100 text-green-700 border-green-200' },
        draft: { label: 'Draft', className: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        archived: { label: 'Archived', className: 'bg-gray-100 text-gray-600 border-gray-200' },
    };
    const s = map[status] ?? { label: status, className: '' };
    return <Badge variant="outline" className={s.className}>{s.label}</Badge>;
};

// ============= TYPES =============
interface IManageNotices {
    notices: {
        id: string;
        title: string;
        type: string;
        audience: string;
        author: string;
        publishedAt: string;
        status: string;
    }[];
}
