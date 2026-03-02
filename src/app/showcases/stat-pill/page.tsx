"use client";
import { StatPill } from '@/components/molecules/stat-pill';
import { UsersIcon, TrendingUpIcon, StarIcon, CheckCircleIcon } from 'lucide-react';

export default function StatPillPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="flex flex-wrap gap-3">
                    <StatPill label="Students" value="1,284" icon={UsersIcon} />
                    <StatPill label="Growth" value="+24%" icon={TrendingUpIcon} />
                    <StatPill label="Rating" value="4.8" icon={StarIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline Variant</h2>
                <div className="flex flex-wrap gap-3">
                    <StatPill label="Completed" value="86" variant="outline" icon={CheckCircleIcon} />
                    <StatPill label="Active" value="42" variant="outline" icon={UsersIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Primary Variant</h2>
                <div className="flex flex-wrap gap-3">
                    <StatPill label="Revenue" value="$42k" variant="primary" icon={TrendingUpIcon} />
                    <StatPill label="Users" value="500+" variant="primary" icon={UsersIcon} />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Success Variant</h2>
                <div className="flex flex-wrap gap-3">
                    <StatPill label="Passed" value="96%" variant="success" icon={CheckCircleIcon} />
                    <StatPill label="On Time" value="98%" variant="success" />
                </div>
            </div>
        </div>
    );
}
