"use client";
import { FeatureList } from '@/components/molecules/feature-list';

export default function FeatureListPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Check Variant (Single Column)</h2>
                <FeatureList
                    variant="check"
                    columns={1}
                    features={[
                        { label: 'Unlimited students', included: true },
                        { label: 'Advanced analytics', included: true },
                        { label: 'Custom branding', included: true },
                        { label: 'White-label export', included: false },
                        { label: 'Dedicated support', included: false },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Check Variant (Two Columns)</h2>
                <FeatureList
                    variant="check"
                    columns={2}
                    features={[
                        { label: 'Student portal' },
                        { label: 'Teacher dashboard' },
                        { label: 'Attendance tracking' },
                        { label: 'Grade management' },
                        { label: 'Fee collection' },
                        { label: 'Parent notifications' },
                        { label: 'Exam scheduling' },
                        { label: 'Report generation' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Check with Descriptions (3 Columns)</h2>
                <FeatureList
                    variant="check"
                    columns={3}
                    features={[
                        { label: 'Smart Reports', description: 'Auto-generated PDF reports' },
                        { label: 'Role-Based Access', description: 'Granular permission control' },
                        { label: 'Mobile Friendly', description: 'Responsive on all devices' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Bullet Variant</h2>
                <FeatureList
                    variant="bullet"
                    columns={2}
                    features={[
                        { label: 'Customizable notifications' },
                        { label: 'Bulk data import' },
                        { label: 'API integrations' },
                        { label: 'Offline mode' },
                    ]}
                />
            </div>
        </div>
    );
}
