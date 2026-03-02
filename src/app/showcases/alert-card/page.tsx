"use client";
import { AlertCard } from '@/components/molecules/alert-card';
import { Button } from '@/components/ui/button';

export default function AlertCardPage() {
    return (
        <div className="space-y-8 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Variants</h2>
                <div className="space-y-4">
                    <AlertCard variant="info" title="System Update" description="A system update is scheduled for tonight." />
                    <AlertCard variant="success" title="Upload Complete" description="All student records have been imported successfully." />
                    <AlertCard variant="warning" title="Low Attendance" description="Grade 10 B attendance is below 75% this week." />
                    <AlertCard variant="error" title="Sync Failed" description="Unable to sync data with the external portal." />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action &amp; Closable</h2>
                <AlertCard
                    variant="warning"
                    title="Subscription Expiring"
                    description="Your plan expires in 3 days. Renew to avoid interruption."
                    action={<Button size="sm">Renew Plan</Button>}
                    closable
                />
            </div>
        </div>
    );
}
