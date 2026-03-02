"use client";
import { AccordionCard } from '@/components/molecules/accordion-card';

export default function AccordionCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Single (one open at a time)</h2>
                <AccordionCard
                    title="Frequently Asked Questions"
                    type="single"
                    items={[
                        {
                            trigger: 'How do I enroll a new student?',
                            content: 'Go to Students → Add Student and fill in the required information. The student will receive login credentials via email.',
                        },
                        {
                            trigger: 'Can I export fee reports?',
                            content: 'Yes! Navigate to Fees → Reports and click "Export" to download in CSV or PDF format.',
                        },
                        {
                            trigger: 'How is attendance tracked?',
                            content: 'Teachers mark attendance daily in the Attendance module. Parents receive real-time notifications for absences.',
                        },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Multiple (many can open)</h2>
                <AccordionCard
                    title="Settings Help"
                    type="multiple"
                    items={[
                        {
                            trigger: 'Account Settings',
                            content: 'Manage your profile, password, and two-factor authentication.',
                        },
                        {
                            trigger: 'Notification Preferences',
                            content: 'Configure which events trigger email, SMS, and in-app notifications.',
                        },
                        {
                            trigger: 'Privacy & Security',
                            content: 'Control data sharing, session management, and API access keys.',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
