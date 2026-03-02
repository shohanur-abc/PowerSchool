"use client";
import { Alert } from '@/components/molecules/alert-banner';
import { Button } from '@/components/ui/button';

export default function AlertBannerPage() {
    return (
        <div className="space-y-8 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Variants</h2>
                <div className="space-y-4">
                    <Alert variant="info" title="Information" description="Your profile was updated successfully." />
                    <Alert variant="success" title="Success" description="Student enrolled and credentials sent via email." />
                    <Alert variant="warning" title="Warning" description="Your subscription expires in 7 days." />
                    <Alert variant="error" title="Error" description="Failed to save changes. Please try again." />
                    <Alert variant="neutral" title="Note" description="Maintenance scheduled for Sunday 2 AM." />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <Alert
                    variant="warning"
                    title="Payment Overdue"
                    description="Alice Johnson has an overdue fee of $200."
                    action={<Button variant="outline" size="sm">Collect Now</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Dismissible</h2>
                <Alert
                    variant="info"
                    title="New Feature"
                    description="Timetable generator is now available in the dashboard."
                    dismissible
                />
            </div>
        </div>
    );
}
