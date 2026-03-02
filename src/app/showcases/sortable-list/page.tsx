'use client';
import { SortableList } from '@/components/molecules/sortable-list';
import { GripVerticalIcon } from 'lucide-react';

const items = [
    { id: '1', label: 'Mathematics', order: 1 },
    { id: '2', label: 'Science', order: 2 },
    { id: '3', label: 'English', order: 3 },
    { id: '4', label: 'History', order: 4 },
    { id: '5', label: 'Art', order: 5 },
];

export default function SortableListPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Drag to Reorder</h2>
                <SortableList
                    items={items}
                    renderItem={(item) => (
                        <div className="flex items-center gap-3 px-4 py-3 bg-card border rounded-lg">
                            <GripVerticalIcon className="size-4 text-muted-foreground cursor-grab" />
                            <span className="text-sm font-medium">{String(item.label)}</span>
                        </div>
                    )}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Priority Queue</h2>
                <SortableList
                    items={[
                        { id: 'a', task: 'Fix login bug', priority: 'High' },
                        { id: 'b', task: 'Update docs', priority: 'Medium' },
                        { id: 'c', task: 'Add dark mode', priority: 'Low' },
                    ]}
                    renderItem={(item) => (
                        <div className="flex items-center justify-between px-4 py-3 bg-card border rounded-lg">
                            <div className="flex items-center gap-3">
                                <GripVerticalIcon className="size-4 text-muted-foreground cursor-grab" />
                                <span className="text-sm">{String(item.task)}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{String(item.priority)}</span>
                        </div>
                    )}
                />
            </div>
        </div>
    );
}
