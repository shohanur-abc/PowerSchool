"use client";
import { KeyValue } from '@/components/molecules/key-value';
import { UserIcon, MapPinIcon } from 'lucide-react';

export default function KeyValuePage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical (default)</h2>
                <KeyValue
                    items={[
                        { label: 'Student ID', value: 'STU-20240001' },
                        { label: 'Class', value: 'Grade 10 — Section A' },
                        { label: 'Guardian', value: 'Mr. Robert Johnson' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal</h2>
                <KeyValue
                    direction="horizontal"
                    items={[
                        { label: 'Name', value: 'Alice', icon: UserIcon },
                        { label: 'City', value: 'New York', icon: MapPinIcon },
                        { label: 'Plan', value: 'Pro' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Grid Layout</h2>
                <KeyValue
                    direction="grid"
                    items={[
                        { label: 'First Name', value: 'Alice' },
                        { label: 'Last Name', value: 'Johnson' },
                        { label: 'Email', value: 'alice@example.com' },
                        { label: 'Phone', value: '+1 555 0001' },
                        { label: 'Role', value: 'Admin' },
                        { label: 'Status', value: 'Active' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Separator</h2>
                <KeyValue
                    separator
                    items={[
                        { label: 'Invoice #', value: 'INV-0042' },
                        { label: 'Issued', value: 'Jan 15, 2025' },
                        { label: 'Due', value: 'Feb 15, 2025' },
                    ]}
                />
            </div>
        </div>
    );
}
