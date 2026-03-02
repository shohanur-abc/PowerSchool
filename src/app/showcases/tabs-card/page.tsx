"use client";
import { TabsCard } from '@/components/molecules/tabs-card';
import { UserIcon, BarChartIcon, FileTextIcon } from 'lucide-react';

export default function TabsCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Student Profile Tabs</h2>
                <TabsCard
                    title="Student Details"
                    description="Alice Johnson — Grade 10 A"
                    defaultTab="overview"
                    tabs={[
                        {
                            value: 'overview',
                            label: 'Overview',
                            icon: UserIcon,
                            content: (
                                <div className="space-y-2 text-sm">
                                    <p><strong>Student ID:</strong> STU-2024-001</p>
                                    <p><strong>Guardian:</strong> Mr. Robert Johnson</p>
                                    <p><strong>Contact:</strong> +1 555 234 5678</p>
                                </div>
                            ),
                        },
                        {
                            value: 'grades',
                            label: 'Grades',
                            icon: BarChartIcon,
                            content: (
                                <div className="space-y-2 text-sm">
                                    <p><strong>Mathematics:</strong> A+ (92%)</p>
                                    <p><strong>Science:</strong> B+ (78%)</p>
                                    <p><strong>English:</strong> A (85%)</p>
                                </div>
                            ),
                        },
                        {
                            value: 'notes',
                            label: 'Notes',
                            icon: FileTextIcon,
                            content: <p className="text-sm text-muted-foreground">No teacher notes yet.</p>,
                        },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Settings Tabs (no title)</h2>
                <TabsCard
                    defaultTab="account"
                    tabs={[
                        { value: 'account', label: 'Account', content: <p className="text-sm">Account settings here.</p> },
                        { value: 'security', label: 'Security', content: <p className="text-sm">Security settings here.</p> },
                        { value: 'notifications', label: 'Notifications', content: <p className="text-sm">Notification preferences.</p> },
                    ]}
                />
            </div>
        </div>
    );
}
