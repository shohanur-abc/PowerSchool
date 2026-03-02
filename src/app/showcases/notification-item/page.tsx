"use client";
import { NotificationItem } from '@/components/molecules/notification-item';
import { Button } from '@/components/ui/button';
import { UserPlusIcon, AlertTriangleIcon, CheckCircleIcon } from 'lucide-react';

export default function NotificationItemPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Style</h2>
                <div className="space-y-2">
                    <NotificationItem
                        title="New student enrolled"
                        description="Alice Johnson joined Grade 10 A"
                        time="2 min ago"
                        icon={UserPlusIcon}
                    />
                    <NotificationItem
                        title="Assignment submitted"
                        description="Bob Smith submitted Math homework"
                        time="15 min ago"
                        read
                    />
                    <NotificationItem
                        title="Fee overdue"
                        description="Carol White — $200 overdue"
                        time="1 hr ago"
                        icon={AlertTriangleIcon}
                        avatar={{ src: 'https://i.pravatar.cc/80?img=2', alt: 'Carol White' }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Card Style</h2>
                <div className="space-y-2">
                    <NotificationItem
                        title="Grade posted"
                        description="Science exam results are now available"
                        time="3 hrs ago"
                        icon={CheckCircleIcon}
                        variant="card"
                    />
                    <NotificationItem
                        title="System update"
                        description="SchoolPro v2.5 released"
                        time="Yesterday"
                        variant="card"
                        read
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <NotificationItem
                    title="Leave request pending"
                    description="David Brown — 3 days leave from Jan 20"
                    time="30 min ago"
                    variant="card"
                    action={
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline">Reject</Button>
                            <Button size="sm">Approve</Button>
                        </div>
                    }
                />
            </div>
        </div>
    );
}
