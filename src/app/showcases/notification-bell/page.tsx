'use client';
import { NotificationBell } from '@/components/molecules/notification-bell';
import { NotificationItem } from '@/components/molecules/notification-item';

export default function NotificationBellPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Badge Count</h2>
                <div className="flex gap-8">
                    <NotificationBell count={3}>
                        <div className="w-72 p-2 space-y-1">
                            <NotificationItem title="New enrollment" description="Alice Johnson joined" time="2m" />
                            <NotificationItem title="Fee overdue" description="Bob Smith — $200" time="1h" />
                            <NotificationItem title="Assignment graded" description="Math homework graded" time="3h" />
                        </div>
                    </NotificationBell>
                    <NotificationBell count={99}>
                        <div className="w-64 p-3 text-sm text-muted-foreground">99+ notifications</div>
                    </NotificationBell>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Unread</h2>
                <NotificationBell>
                    <div className="w-64 p-4 text-sm text-center text-muted-foreground">
                        All caught up! No new notifications.
                    </div>
                </NotificationBell>
            </div>
        </div>
    );
}
