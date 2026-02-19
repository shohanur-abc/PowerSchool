'use client';

import { useState } from 'react';
import {
    type LucideIcon,
    Database,
    Columns3,
    Filter,
    ArrowUpDown,
    ChevronRight,
    Check,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// ============= MAIN COMPONENT =============
export default function ReportBuilder({
    title,
    description,
    dataSources,
    onBuild,
}: IReportBuilder) {
    const [activeSource, setActiveSource] = useState('');
    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
    const [filters, setFilters] = useState<IFilterEntry[]>([]);
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [groupBy, setGroupBy] = useState('');

    const currentSource = dataSources.find((s) => s.id === activeSource);
    const availableColumns = currentSource?.columns ?? [];

    // TODO: Add report preview functionality
    // TODO: Add save as template option

    const handleColumnToggle = (columnId: string) => {
        setSelectedColumns((prev) =>
            prev.includes(columnId)
                ? prev.filter((c) => c !== columnId)
                : [...prev, columnId]
        );
    };

    const handleAddFilter = () => {
        setFilters((prev) => [
            ...prev,
            { id: crypto.randomUUID(), field: '', operator: 'equals', value: '' },
        ]);
    };

    const handleUpdateFilter = (
        id: string,
        updates: Partial<IFilterEntry>
    ) => {
        setFilters((prev) =>
            prev.map((f) => (f.id === id ? { ...f, ...updates } : f))
        );
    };

    const handleRemoveFilter = (id: string) => {
        setFilters((prev) => prev.filter((f) => f.id !== id));
    };

    const handleBuild = () => {
        onBuild?.({
            dataSource: activeSource,
            columns: selectedColumns,
            filters,
            sortField,
            sortOrder,
            groupBy,
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <CardContent>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue="step-1"
                    className="w-full"
                >
                    {/* Step 1: Data Source */}
                    <AccordionItem value="step-1">
                        <AccordionTrigger>
                            <StepHeader
                                icon={Database}
                                step={1}
                                label="Select Data Source"
                                completed={!!activeSource}
                            />
                        </AccordionTrigger>
                        <AccordionContent>
                            <DataSourceSelector
                                dataSources={dataSources}
                                activeSource={activeSource}
                                onSelect={(id) => {
                                    setActiveSource(id);
                                    setSelectedColumns([]);
                                    setFilters([]);
                                    setSortField('');
                                    setGroupBy('');
                                }}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 2: Columns */}
                    <AccordionItem value="step-2">
                        <AccordionTrigger>
                            <StepHeader
                                icon={Columns3}
                                step={2}
                                label="Select Columns"
                                completed={selectedColumns.length > 0}
                                count={selectedColumns.length}
                            />
                        </AccordionTrigger>
                        <AccordionContent>
                            <ColumnSelector
                                columns={availableColumns}
                                selected={selectedColumns}
                                onToggle={handleColumnToggle}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 3: Filters */}
                    <AccordionItem value="step-3">
                        <AccordionTrigger>
                            <StepHeader
                                icon={Filter}
                                step={3}
                                label="Add Filters"
                                completed={filters.length > 0}
                                count={filters.length}
                            />
                        </AccordionTrigger>
                        <AccordionContent>
                            <FilterBuilder
                                columns={availableColumns}
                                filters={filters}
                                onAdd={handleAddFilter}
                                onUpdate={handleUpdateFilter}
                                onRemove={handleRemoveFilter}
                            />
                        </AccordionContent>
                    </AccordionItem>

                    {/* Step 4: Sort & Group */}
                    <AccordionItem value="step-4">
                        <AccordionTrigger>
                            <StepHeader
                                icon={ArrowUpDown}
                                step={4}
                                label="Sort & Group"
                                completed={!!sortField || !!groupBy}
                            />
                        </AccordionTrigger>
                        <AccordionContent>
                            <SortGroupOptions
                                columns={availableColumns}
                                sortField={sortField}
                                sortOrder={sortOrder}
                                groupBy={groupBy}
                                onSortFieldChange={setSortField}
                                onSortOrderChange={setSortOrder}
                                onGroupByChange={setGroupBy}
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="mt-6 flex items-center justify-end gap-2">
                    <Button
                        onClick={handleBuild}
                        disabled={!activeSource || selectedColumns.length === 0}
                    >
                        Build Report
                        <ChevronRight className="size-4 ml-1" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const StepHeader = ({
    icon: Icon,
    step,
    label,
    completed,
    count,
}: {
    icon: LucideIcon;
    step: number;
    label: string;
    completed: boolean;
    count?: number;
}) => (
    <div className="flex items-center gap-3">
        <div
            className={`size-7 rounded-full flex items-center justify-center text-xs font-semibold ${completed
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
        >
            {completed ? <Check className="size-3.5" /> : step}
        </div>
        <Icon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">{label}</span>
        {count !== undefined && count > 0 && (
            <Badge variant="secondary" className="text-xs">
                {count}
            </Badge>
        )}
    </div>
);

const DataSourceSelector = ({
    dataSources,
    activeSource,
    onSelect,
}: {
    dataSources: IDataSource[];
    activeSource: string;
    onSelect: (id: string) => void;
}) => (
    <Tabs value={activeSource} onValueChange={onSelect}>
        <TabsList className="flex-wrap h-auto">
            {dataSources.map((source) => (
                <TabsTrigger key={source.id} value={source.id}>
                    {source.name}
                </TabsTrigger>
            ))}
        </TabsList>
        {dataSources.map((source) => (
            <TabsContent key={source.id} value={source.id} className="mt-2">
                <p className="text-sm text-muted-foreground">
                    {source.description}
                </p>
            </TabsContent>
        ))}
    </Tabs>
);

const ColumnSelector = ({
    columns,
    selected,
    onToggle,
}: {
    columns: IColumnDef[];
    selected: string[];
    onToggle: (id: string) => void;
}) => (
    <div className="@container grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-2">
        {columns.map((col) => (
            <Label
                key={col.id}
                className="flex items-center gap-2 rounded-md border p-3 cursor-pointer hover:bg-muted/50 transition-colors"
            >
                <Checkbox
                    checked={selected.includes(col.id)}
                    onCheckedChange={() => onToggle(col.id)}
                />
                <div className="min-w-0">
                    <p className="text-sm font-medium">{col.label}</p>
                    {col.description && (
                        <p className="text-xs text-muted-foreground truncate">
                            {col.description}
                        </p>
                    )}
                </div>
            </Label>
        ))}
    </div>
);

const FilterBuilder = ({
    columns,
    filters,
    onAdd,
    onUpdate,
    onRemove,
}: {
    columns: IColumnDef[];
    filters: IFilterEntry[];
    onAdd: () => void;
    onUpdate: (id: string, updates: Partial<IFilterEntry>) => void;
    onRemove: (id: string) => void;
}) => (
    <div className="space-y-3">
        {filters.map((filter) => (
            <div
                key={filter.id}
                className="@container grid grid-cols-1 @xl:grid-cols-[1fr_1fr_1fr_auto] gap-2 items-end"
            >
                <div className="space-y-1">
                    <Label className="text-xs">Field</Label>
                    <Select
                        value={filter.field}
                        onValueChange={(v) =>
                            onUpdate(filter.id, { field: v })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select field" />
                        </SelectTrigger>
                        <SelectContent>
                            {columns.map((col) => (
                                <SelectItem key={col.id} value={col.id}>
                                    {col.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <Label className="text-xs">Operator</Label>
                    <Select
                        value={filter.operator}
                        onValueChange={(v) =>
                            onUpdate(filter.id, {
                                operator: v as IFilterOperator,
                            })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {FILTER_OPERATORS.map((op) => (
                                <SelectItem key={op.value} value={op.value}>
                                    {op.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1">
                    <Label className="text-xs">Value</Label>
                    <Input
                        value={filter.value}
                        onChange={(e) =>
                            onUpdate(filter.id, { value: e.target.value })
                        }
                        placeholder="Enter value"
                    />
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive"
                    onClick={() => onRemove(filter.id)}
                >
                    Remove
                </Button>
            </div>
        ))}
        <Button variant="outline" size="sm" onClick={onAdd}>
            <Filter className="size-3.5 mr-1.5" />
            Add Filter
        </Button>
    </div>
);

const SortGroupOptions = ({
    columns,
    sortField,
    sortOrder,
    groupBy,
    onSortFieldChange,
    onSortOrderChange,
    onGroupByChange,
}: {
    columns: IColumnDef[];
    sortField: string;
    sortOrder: 'asc' | 'desc';
    groupBy: string;
    onSortFieldChange: (v: string) => void;
    onSortOrderChange: (v: 'asc' | 'desc') => void;
    onGroupByChange: (v: string) => void;
}) => (
    <div className="@container grid grid-cols-1 @xl:grid-cols-3 gap-4">
        <div className="space-y-2">
            <Label>Sort By</Label>
            <Select value={sortField} onValueChange={onSortFieldChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                    {columns.map((col) => (
                        <SelectItem key={col.id} value={col.id}>
                            {col.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label>Sort Order</Label>
            <Select value={sortOrder} onValueChange={(v) => onSortOrderChange(v as 'asc' | 'desc')}>
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label>Group By</Label>
            <Select value={groupBy} onValueChange={onGroupByChange}>
                <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                    {columns.map((col) => (
                        <SelectItem key={col.id} value={col.id}>
                            {col.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </div>
);

// ============= HELPERS =============
const FILTER_OPERATORS: { label: string; value: IFilterOperator }[] = [
    { label: 'Equals', value: 'equals' },
    { label: 'Not Equals', value: 'not_equals' },
    { label: 'Contains', value: 'contains' },
    { label: 'Greater Than', value: 'greater_than' },
    { label: 'Less Than', value: 'less_than' },
    { label: 'Between', value: 'between' },
];

// ============= TYPES =============
type IFilterOperator =
    | 'equals'
    | 'not_equals'
    | 'contains'
    | 'greater_than'
    | 'less_than'
    | 'between';

interface IColumnDef {
    id: string;
    label: string;
    description?: string;
}

interface IDataSource {
    id: string;
    name: string;
    description: string;
    columns: IColumnDef[];
}

interface IFilterEntry {
    id: string;
    field: string;
    operator: IFilterOperator;
    value: string;
}

interface IBuildConfig {
    dataSource: string;
    columns: string[];
    filters: IFilterEntry[];
    sortField: string;
    sortOrder: 'asc' | 'desc';
    groupBy: string;
}

interface IReportBuilder {
    title: string;
    description?: string;
    dataSources: IDataSource[];
    onBuild?: (config: IBuildConfig) => void;
}
