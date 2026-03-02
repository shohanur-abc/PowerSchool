"use client";
import { DataList } from '@/components/molecules/data-list';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export default function DataListPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <DataList
                    items={[
                        { label: 'Full Name', value: 'Alice Johnson', icon: UserIcon },
                        { label: 'Email', value: 'alice@example.com', icon: MailIcon },
                        { label: 'Phone', value: '+1 555 234 5678', icon: PhoneIcon },
                        { label: 'Address', value: '123 Main St, Springfield', icon: MapPinIcon },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Variant</h2>
                <DataList
                    variant="horizontal"
                    items={[
                        { label: 'Name', value: 'Bob Smith' },
                        { label: 'Role', value: 'Teacher' },
                        { label: 'Department', value: 'Mathematics' },
                        { label: 'Joined', value: 'Jan 2020' },
                    ]}
                />
            </div>
        </div>
    );
}
