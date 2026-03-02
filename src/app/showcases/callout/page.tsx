"use client";
import { Callout } from '@/components/molecules/callout';
import { LightbulbIcon } from 'lucide-react';

export default function CalloutPage() {
    return (
        <div className="space-y-8 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Variants</h2>
                <div className="space-y-4">
                    <Callout variant="default" title="Default Note" description="This is a general callout for neutral information." />
                    <Callout variant="tip" title="Pro Tip" description="Use keyboard shortcuts to navigate the dashboard faster." />
                    <Callout variant="warning" title="Caution" description="Deleting a student record cannot be undone." />
                    <Callout variant="danger" title="Important" description="Resetting passwords will log out all active sessions." />
                    <Callout variant="note" title="Note" description="Changes will take effect after the next sync cycle." />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Badge</h2>
                <Callout
                    variant="tip"
                    title="Did you know?"
                    description="You can bulk import students via CSV from the Students module."
                    badge="New"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Custom Icon</h2>
                <Callout
                    variant="default"
                    title="Insight"
                    description="Attendance rates improve by 12% when parents receive weekly reports."
                    icon={LightbulbIcon}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Children Content</h2>
                <Callout variant="warning" title="Action Required">
                    <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                        <li>Review 14 pending fee payments</li>
                        <li>Approve 3 leave requests</li>
                        <li>Confirm timetable changes</li>
                    </ul>
                </Callout>
            </div>
        </div>
    );
}
