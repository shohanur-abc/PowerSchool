"use client";
import { SplitView } from '@/components/molecules/split-view';

const Panel = ({ label, color = 'bg-muted' }: { label: string; color?: string }) => (
    <div className={`${color} rounded-lg p-6 flex items-center justify-center h-48 text-sm font-medium`}>{label}</div>
);

export default function SplitViewPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">1:1 Equal Split</h2>
                <SplitView
                    left={<Panel label="Left Panel" />}
                    right={<Panel label="Right Panel" color="bg-primary/10" />}
                    ratio="1:1"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">1:2 Ratio (content-heavy right)</h2>
                <SplitView
                    left={<Panel label="Sidebar" />}
                    right={<Panel label="Main Content (2x)" color="bg-primary/10" />}
                    ratio="1:2"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">2:1 Ratio (content-heavy left)</h2>
                <SplitView
                    left={<Panel label="Main Content (2x)" color="bg-primary/10" />}
                    right={<Panel label="Sidebar" />}
                    ratio="2:1"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">1:3 Ratio</h2>
                <SplitView
                    left={<Panel label="Narrow" />}
                    right={<Panel label="Wide Content (3x)" color="bg-green-50 dark:bg-green-950/20" />}
                    ratio="1:3"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">1:1 Reversed</h2>
                <SplitView
                    left={<Panel label="Visually Second" />}
                    right={<Panel label="Visually First" color="bg-primary/10" />}
                    ratio="1:1"
                    reverse
                />
            </div>
        </div>
    );
}
