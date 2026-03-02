"use client";
import { CardStack } from '@/components/molecules/card-stack';

export default function CardStackPage() {
    return (
        <div className="space-y-16 py-8 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold mb-4">Notification Stack</h2>
                <CardStack
                    cards={[
                        { title: 'New Assignment', description: 'Math homework due Friday', content: 'Chapter 5 — Quadratic Equations' },
                        { title: 'Grade Updated', description: 'Science test graded', content: 'Score: 78/100 — B+' },
                        { title: 'Notice', description: 'School closed Monday', content: 'Flood advisory in effect' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Feature Stack</h2>
                <CardStack
                    cards={[
                        { title: 'Analytics', content: 'Track student performance over time' },
                        { title: 'Attendance', content: 'Automated daily attendance tracking' },
                        { title: 'Fees', content: 'Streamlined fee management' },
                    ]}
                />
            </div>
        </div>
    );
}
