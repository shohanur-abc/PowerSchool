"use client";
import { ComparisonTable } from '@/components/molecules/comparison-table';

export default function ComparisonTablePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Pricing Plan Comparison</h2>
                <ComparisonTable
                    headers={['Feature', 'Free', 'Pro', 'Enterprise']}
                    highlightColumn={2}
                    rows={[
                        { feature: 'Students', values: ['Up to 50', 'Up to 500', 'Unlimited'] },
                        { feature: 'Teachers', values: ['5', '50', 'Unlimited'] },
                        { feature: 'Storage', values: ['1 GB', '20 GB', '500 GB'] },
                        { feature: 'Analytics', values: ['Basic', 'Advanced', 'Full'] },
                        { feature: 'Support', values: ['Email', 'Priority', 'Dedicated'] },
                        { feature: 'API Access', values: ['❌', '✅', '✅'] },
                        { feature: 'SSO', values: ['❌', '❌', '✅'] },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Product Comparison</h2>
                <ComparisonTable
                    headers={['Spec', 'Basic', 'Advanced']}
                    rows={[
                        { feature: 'CPU', values: ['Dual-core', 'Quad-core'] },
                        { feature: 'RAM', values: ['4 GB', '16 GB'] },
                        { feature: 'Storage', values: ['128 GB SSD', '512 GB NVMe'] },
                        { feature: 'Battery', values: ['4000 mAh', '6000 mAh'] },
                    ]}
                />
            </div>
        </div>
    );
}
