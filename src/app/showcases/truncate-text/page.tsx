'use client';
import { TruncateText } from '@/components/molecules/truncate-text';

export default function TruncateTextPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default (3 Lines)</h2>
                <TruncateText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">2 Lines with Custom Labels</h2>
                <TruncateText
                    text="This is a student's performance note. The student has shown consistent improvement across all subjects over the past semester, particularly excelling in Mathematics and Science. Their attendance record is exemplary with 98% presence throughout the academic year."
                    lines={2}
                    expandLabel="Read full note"
                    collapseLabel="Collapse"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Short Text (No Truncation Needed)</h2>
                <TruncateText text="This is a short description that doesn't need truncation." lines={3} />
            </div>
        </div>
    );
}
