"use client";
import { DetailCard } from '@/components/molecules/detail-card';
import { Button } from '@/components/ui/button';

export default function DetailCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Columns (default)</h2>
                <DetailCard
                    title="Student Information"
                    columns={2}
                    fields={[
                        { label: 'Student ID', value: 'STU-2024-001' },
                        { label: 'Full Name', value: 'Alice Johnson' },
                        { label: 'Class', value: 'Grade 10 A' },
                        { label: 'Date of Birth', value: 'Jan 15, 2009' },
                        { label: 'Guardian', value: 'Mr. Robert Johnson' },
                        { label: 'Contact', value: '+1 555 234 5678' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">3 Columns</h2>
                <DetailCard
                    title="School Details"
                    columns={3}
                    fields={[
                        { label: 'School', value: 'Greenwood Academy' },
                        { label: 'Founded', value: '1995' },
                        { label: 'Students', value: '1,284' },
                        { label: 'Teachers', value: '148' },
                        { label: 'Location', value: 'New York, USA' },
                        { label: 'Type', value: 'Private' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <DetailCard
                    title="Account Details"
                    fields={[
                        { label: 'Plan', value: 'Pro Annual' },
                        { label: 'Status', value: 'Active' },
                        { label: 'Members', value: '5 / 10' },
                        { label: 'Storage', value: '12 GB / 20 GB' },
                    ]}
                    action={<Button size="sm" variant="outline">Edit</Button>}
                />
            </div>
        </div>
    );
}
