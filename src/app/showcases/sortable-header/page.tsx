'use client';
import { useState } from 'react';
import { SortableHeader } from '@/components/molecules/sortable-header';

export default function SortableHeaderPage() {
    const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' }>({ key: 'name', direction: 'asc' });
    const handleSort = (key: string, direction: 'asc' | 'desc') => setSort({ key, direction });

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Sortable Table Headers</h2>
                <p className="text-sm text-muted-foreground mb-4">Current sort: <strong>{sort.key}</strong> ({sort.direction})</p>
                <div className="border rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/40">
                                <th className="text-left p-3">
                                    <SortableHeader label="Name" sortKey="name" currentSort={sort} onSort={handleSort} />
                                </th>
                                <th className="text-left p-3">
                                    <SortableHeader label="Email" sortKey="email" currentSort={sort} onSort={handleSort} />
                                </th>
                                <th className="text-left p-3">
                                    <SortableHeader label="Score" sortKey="score" currentSort={sort} onSort={handleSort} />
                                </th>
                                <th className="text-left p-3">
                                    <SortableHeader label="Created" sortKey="created" currentSort={sort} onSort={handleSort} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Alice', email: 'alice@ex.com', score: 92, created: '2024-01-01' },
                                { name: 'Bob', email: 'bob@ex.com', score: 78, created: '2024-03-15' },
                                { name: 'Carol', email: 'carol@ex.com', score: 85, created: '2024-02-10' },
                            ].map((r) => (
                                <tr key={r.name} className="border-b last:border-0">
                                    <td className="p-3">{r.name}</td>
                                    <td className="p-3">{r.email}</td>
                                    <td className="p-3">{r.score}</td>
                                    <td className="p-3">{r.created}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
