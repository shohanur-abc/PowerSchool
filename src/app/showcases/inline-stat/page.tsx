"use client";
import { InlineStat } from '@/components/molecules/inline-stat';

export default function InlineStatPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Inline Stats</h2>
                <div className="flex flex-wrap gap-6">
                    <InlineStat label="Students" value="1,284" />
                    <InlineStat label="Teachers" value="148" />
                    <InlineStat label="Courses" value="86" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Prefix &amp; Suffix</h2>
                <div className="flex flex-wrap gap-6">
                    <InlineStat label="Revenue" value="42,500" prefix="$" />
                    <InlineStat label="Growth" value="24" suffix="%" />
                    <InlineStat label="Attendance" value="91" prefix="" suffix="%" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Context (Hero section)</h2>
                <div className="rounded-xl bg-muted p-6">
                    <p className="text-sm text-muted-foreground mb-4">Platform overview</p>
                    <div className="flex gap-8">
                        <InlineStat label="Schools" value="200+" />
                        <InlineStat label="Students" value="50k+" />
                        <InlineStat label="Uptime" value="99.9" suffix="%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
