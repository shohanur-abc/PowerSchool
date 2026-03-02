"use client";
import { ActivityFeed } from '@/components/molecules/activity-feed';
import { UserPlusIcon, FileCheckIcon, AlertTriangleIcon, InfoIcon } from 'lucide-react';

export default function ActivityFeedPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Feed</h2>
                <ActivityFeed
                    items={[
                        {
                            icon: UserPlusIcon,
                            title: 'New student enrolled',
                            description: 'Alice Johnson joined Grade 10 A',
                            time: '2 min ago',
                            actor: 'Admin',
                            variant: 'success',
                        },
                        {
                            icon: FileCheckIcon,
                            title: 'Assignment submitted',
                            description: 'Math homework by Bob Smith',
                            time: '15 min ago',
                            actor: 'Bob Smith',
                        },
                        {
                            icon: AlertTriangleIcon,
                            title: 'Attendance alert',
                            description: 'Carol White was absent today',
                            time: '1 hr ago',
                            variant: 'warning',
                        },
                        {
                            icon: InfoIcon,
                            title: 'Notice published',
                            description: 'Annual sports day announced',
                            time: '3 hrs ago',
                            variant: 'info',
                        },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Error Items</h2>
                <ActivityFeed
                    items={[
                        { title: 'Payment failed', description: 'Fee payment for David Brown failed', time: '5 min ago', variant: 'error' },
                        { title: 'Login attempt', description: 'Suspicious login from unknown device', time: '20 min ago', variant: 'warning' },
                        { title: 'System backup', description: 'Nightly backup completed', time: '6 hrs ago', variant: 'success' },
                    ]}
                />
            </div>
        </div>
    );
}
