import { Plus, Trash2, Download, Save, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// ============= MAIN COMPONENT =============
export default function CustomReports({ dataSourceOptions, fieldOptions, formatOptions, savedReports }: ICustomReports) {
    return (
        <div className="space-y-6">
            <Header />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <ReportBuilder dataSourceOptions={dataSourceOptions} fieldOptions={fieldOptions} formatOptions={formatOptions} />
                </div>
                <SavedReportsList reports={savedReports} />
            </div>
        </div>
    );
}

// ============= CHILD COMPONENTS =============
const Header = () => (
    <div>
        <h1 className="text-3xl font-bold tracking-tight">Custom Reports</h1>
        <p className="text-muted-foreground mt-1">Build tailored reports with custom fields and filters</p>
    </div>
);

const ReportBuilder = ({ dataSourceOptions, fieldOptions, formatOptions }: Pick<ICustomReports, 'dataSourceOptions' | 'fieldOptions' | 'formatOptions'>) => (
    <div className="space-y-4">
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Report Builder</CardTitle>
                <CardDescription>Configure your custom report parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
                <div className="space-y-1.5">
                    <p className="text-sm font-medium">Report Name</p>
                    <Input placeholder="e.g. Monthly Attendance Summary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <p className="text-sm font-medium">Data Source</p>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select data source" />
                                <ChevronDown className="size-4 opacity-50" />
                            </SelectTrigger>
                            <SelectContent>
                                {dataSourceOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-sm font-medium">Output Format</p>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select format" />
                                <ChevronDown className="size-4 opacity-50" />
                            </SelectTrigger>
                            <SelectContent>
                                {formatOptions.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <p className="text-sm font-medium">Date From</p>
                        <Input type="date" defaultValue="2024-01-01" />
                    </div>
                    <div className="space-y-1.5">
                        <p className="text-sm font-medium">Date To</p>
                        <Input type="date" defaultValue="2024-06-30" />
                    </div>
                </div>
                <FieldSelector fieldOptions={fieldOptions} />
                <div className="flex gap-3 pt-2">
                    <Button className="gap-2">
                        <Download className="size-4" />
                        Generate Report
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <Save className="size-4" />
                        Save Template
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
);

const FieldSelector = ({ fieldOptions }: { fieldOptions: ICustomReports['fieldOptions'] }) => (
    <div className="space-y-2">
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Select Fields</p>
            <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs">
                <Plus className="size-3" />
                Add Field
            </Button>
        </div>
        <div className="border rounded-lg divide-y">
            {fieldOptions.map((field, i) => (
                <div key={i} className="flex items-center justify-between px-3 py-2">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked={field.selected} className="rounded" />
                        <span className="text-sm">{field.label}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{field.type}</Badge>
                </div>
            ))}
        </div>
    </div>
);

const SavedReportsList = ({ reports }: { reports: ICustomReports['savedReports'] }) => (
    <Card>
        <CardHeader>
            <CardTitle className="text-base">Saved Templates</CardTitle>
            <CardDescription>{reports.length} saved report templates</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Last Run</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {reports.map((report, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <p className="font-medium text-sm">{report.name}</p>
                                <p className="text-xs text-muted-foreground">{report.source}</p>
                            </TableCell>
                            <TableCell className="text-muted-foreground text-sm">{report.lastRun}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex justify-end gap-1">
                                    <Button variant="ghost" size="sm" className="h-7 px-2">
                                        <Download className="size-3" />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-7 px-2 text-red-500 hover:text-red-600 hover:bg-red-50">
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

// ============= TYPES =============
interface ICustomReports {
    dataSourceOptions: { value: string; label: string }[];
    formatOptions: { value: string; label: string }[];
    fieldOptions: {
        label: string;
        type: string;
        selected: boolean;
    }[];
    savedReports: {
        name: string;
        source: string;
        lastRun: string;
    }[];
}
