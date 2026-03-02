'use client';
import { TruncateList } from '@/components/molecules/truncate-list';
import { Badge } from '@/components/ui/badge';

const subjects = ['Mathematics', 'Science', 'English', 'History', 'Geography', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Art'];
const students = [
    { name: 'Alice Johnson', grade: 'A+' },
    { name: 'Bob Smith', grade: 'B+' },
    { name: 'Carol White', grade: 'A' },
    { name: 'David Lee', grade: 'B' },
    { name: 'Eve Martinez', grade: 'A-' },
    { name: 'Frank Brown', grade: 'C+' },
    { name: 'Grace Wilson', grade: 'A' },
    { name: 'Henry Taylor', grade: 'B+' },
];

export default function TruncateListPage() {
    return (
        <div className="space-y-16 py-8 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold mb-4">Simple List (limit 4)</h2>
                <TruncateList
                    items={subjects}
                    limit={4}
                    renderItem={(item) => (
                        <div className="py-1.5 text-sm border-b last:border-0">{item as string}</div>
                    )}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Cards List (limit 3)</h2>
                <TruncateList
                    items={students}
                    limit={3}
                    expandLabel="View all students"
                    collapseLabel="Show fewer"
                    classNames={{ list: 'space-y-2', item: '' }}
                    renderItem={(item) => {
                        const s = item as { name: string; grade: string };
                        return (
                            <div className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm">
                                <span>{s.name}</span>
                                <Badge variant="outline">{s.grade}</Badge>
                            </div>
                        );
                    }}
                />
            </div>
        </div>
    );
}
