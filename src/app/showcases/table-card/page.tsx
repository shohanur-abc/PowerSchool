"use client";
import { TableCard } from '@/components/molecules/table-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DownloadIcon, PlusIcon } from 'lucide-react';

export default function TableCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Table Card</h2>
                <TableCard
                    title="Recent Students"
                    description="Latest enrollments this term"
                    headers={['Name', 'Class', 'Status']}
                    rows={[
                        ['Alice Johnson', 'Grade 10 A', <Badge key="1" variant="outline" className="text-green-600">Active</Badge>],
                        ['Bob Smith', 'Grade 9 B', <Badge key="2" variant="outline" className="text-green-600">Active</Badge>],
                        ['Carol White', 'Grade 11 A', <Badge key="3" variant="secondary">Inactive</Badge>],
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Actions</h2>
                <TableCard
                    title="Fee Records"
                    description="Pending fee payments"
                    headers={['Student', 'Amount', 'Due', 'Status']}
                    rows={[
                        ['Alice', '$500', 'Jan 5', <Badge key="1" variant="destructive">Overdue</Badge>],
                        ['Bob', '$500', 'Feb 5', <Badge key="2" variant="secondary">Pending</Badge>],
                    ]}
                    actions={
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm"><DownloadIcon className="size-3.5 mr-1" />Export</Button>
                            <Button size="sm"><PlusIcon className="size-3.5 mr-1" />Add</Button>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
