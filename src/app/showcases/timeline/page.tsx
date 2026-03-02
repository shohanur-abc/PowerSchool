"use client";
import { Timeline } from '@/components/molecules/timeline';
import { CheckCircleIcon, ClockIcon, AlertCircleIcon } from 'lucide-react';

export default function TimelinePage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <Timeline
                    items={[
                        { title: 'Application Submitted', description: 'Form was submitted online', date: 'Jan 10, 2025', status: 'completed', icon: CheckCircleIcon },
                        { title: 'Under Review', description: 'Being reviewed by admissions', date: 'Jan 12, 2025', status: 'completed', icon: CheckCircleIcon },
                        { title: 'Interview Scheduled', description: 'Interview on Jan 20, 2025', date: 'Jan 15, 2025', status: 'current', icon: ClockIcon },
                        { title: 'Decision', description: 'Awaiting final decision', status: 'pending' },
                        { title: 'Enrollment', description: 'Complete enrollment process', status: 'pending' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Minimal Variant</h2>
                <Timeline
                    variant="minimal"
                    items={[
                        { title: 'Project kickoff', date: 'Week 1', status: 'completed' },
                        { title: 'Design phase', date: 'Week 2–3', status: 'completed' },
                        { title: 'Development', date: 'Week 4–6', status: 'current' },
                        { title: 'Testing', date: 'Week 7', status: 'pending' },
                        { title: 'Launch', date: 'Week 8', status: 'pending' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Error Status</h2>
                <Timeline
                    items={[
                        { title: 'Backup Started', status: 'completed' },
                        { title: 'Data Export', status: 'error', description: 'Export failed — retrying', icon: AlertCircleIcon },
                        { title: 'Upload to Cloud', status: 'pending' },
                    ]}
                />
            </div>
        </div>
    );
}
