"use client";
import { EmptyState } from '@/components/molecules/empty-state';
import { Button } from '@/components/ui/button';
import { UsersIcon, FileTextIcon, BarChartIcon } from 'lucide-react';

export default function EmptyStatePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Size</h2>
                <EmptyState
                    icon={UsersIcon}
                    title="No Students Yet"
                    description="Add your first student to get started."
                    action={<Button>Add Student</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <EmptyState
                    icon={FileTextIcon}
                    title="No Reports"
                    description="Generate your first report."
                    size="sm"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Size</h2>
                <EmptyState
                    icon={BarChartIcon}
                    title="No Data Available"
                    description="Start adding records to see analytics here."
                    action={<Button variant="outline">Import Data</Button>}
                    size="lg"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Full Height</h2>
                <div className="h-64 border rounded-xl">
                    <EmptyState
                        title="Nothing Here Yet"
                        description="This section will populate as you add data."
                        size="full"
                    />
                </div>
            </div>
        </div>
    );
}
