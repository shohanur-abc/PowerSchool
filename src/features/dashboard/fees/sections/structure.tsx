import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// ============= MAIN COMPONENT =============
export default function FeeStructure({ stats, structures }: IFeeStructure) {
    return (
        <div className="space-y-6">
            <Header />
            <SummaryCards stats={stats} />
            <StructureTable structures={structures} />
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div className="flex items-start justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Fee Structure</h1>
            <p className="text-muted-foreground mt-1">Define and manage fee types, amounts and due dates</p>
        </div>
        <Button className="gap-2 shrink-0">
            <Plus className="size-4" />
            Add Fee Type
        </Button>
    </div>
);

const SummaryCards = ({ stats }: { stats: IFeeStructure['stats'] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s, i) => (
            <Card key={i}>
                <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                    <p className="text-3xl font-bold mt-1">{s.value}</p>
                    {s.subtitle && <p className="text-xs text-muted-foreground mt-1">{s.subtitle}</p>}
                </CardContent>
            </Card>
        ))}
    </div>
);

const StructureTable = ({ structures }: { structures: IFeeStructure['structures'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Fee Types</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Fee Name</TableHead>
                        <TableHead>Applicable Class</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Frequency</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {structures.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    {item.description && (
                                        <p className="text-xs text-muted-foreground">{item.description}</p>
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-1">
                                    {item.classes.map((cls, j) => (
                                        <Badge key={j} variant="secondary" className="text-xs">{cls}</Badge>
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell className="text-right font-semibold">{item.amount}</TableCell>
                            <TableCell className="text-muted-foreground">{item.dueDate}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className="text-xs">{item.frequency}</Badge>
                            </TableCell>
                            <TableCell>
                                <ActiveStatusBadge active={item.active} />
                            </TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                                        <Pencil className="size-3" />
                                    </Button>
                                    <Button size="sm" variant="ghost" className="h-7 w-7 p-0 text-red-500 hover:text-red-600">
                                        <Trash2 className="size-3" />
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

const ActiveStatusBadge = ({ active }: { active: boolean }) => (
    <Badge variant="outline" className={active ? 'bg-green-100 text-green-700 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}>
        {active ? 'Active' : 'Inactive'}
    </Badge>
);

// ============= TYPES =============
interface IFeeStructure {
    stats: {
        label: string;
        value: string;
        subtitle?: string;
    }[];
    structures: {
        name: string;
        description?: string;
        classes: string[];
        amount: string;
        dueDate: string;
        frequency: string;
        active: boolean;
    }[];
}
