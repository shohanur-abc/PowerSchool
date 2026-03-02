"use client";
import { Spotlight } from '@/components/molecules/spotlight';

export default function SpotlightPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Spotlight number={1} title="Set Up Account" description="Create your profile and configure preferences." variant="default" />
                    <Spotlight number={2} title="Invite Team" description="Add teammates and assign appropriate roles." variant="default" />
                    <Spotlight number={3} title="Go Live" description="Launch your project and start collaborating." variant="default" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Bordered Variant</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Spotlight number={1} title="Connect Data" description="Link your data sources securely." variant="bordered" />
                    <Spotlight number={2} title="Build Reports" description="Create custom dashboards." variant="bordered" />
                    <Spotlight number={3} title="Share Insights" description="Export and share with stakeholders." variant="bordered" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Spotlight number={42} title="Active Users" variant="filled" />
                    <Spotlight number={8} title="Pending Tasks" variant="filled" />
                    <Spotlight number={5} title="Open Issues" variant="filled" />
                </div>
            </div>
        </div>
    );
}
