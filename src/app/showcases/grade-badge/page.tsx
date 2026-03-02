"use client";
import { GradeBadge } from '@/components/molecules/grade-badge';

export default function GradeBadgePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Letter Grades</h2>
                <div className="flex flex-wrap gap-4">
                    {(['A', 'B', 'C', 'D', 'F'] as const).map((g) => (
                        <GradeBadge key={g} grade={g} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Numeric Grades</h2>
                <div className="flex flex-wrap gap-4">
                    {[98, 85, 72, 55, 40].map((g) => (
                        <GradeBadge key={g} grade={g} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Labels</h2>
                <div className="space-y-2 max-w-xs">
                    <GradeBadge grade="A+" label="Mathematics" />
                    <GradeBadge grade="B" label="Science" />
                    <GradeBadge grade="C+" label="English" />
                    <GradeBadge grade={92} label="History" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-4 items-center">
                    <GradeBadge grade="A" size="sm" label="Small" />
                    <GradeBadge grade="B" size="default" label="Default" />
                    <GradeBadge grade="C" size="lg" label="Large" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Table Context</h2>
                <div className="max-w-sm border rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b bg-muted/50">
                                <th className="text-left p-3 font-medium">Subject</th>
                                <th className="text-center p-3 font-medium">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { subject: 'Mathematics', grade: 'A+' },
                                { subject: 'Science', grade: 'B+' },
                                { subject: 'English', grade: 'A' },
                                { subject: 'History', grade: 'C' },
                            ].map(({ subject, grade }) => (
                                <tr key={subject} className="border-b last:border-0">
                                    <td className="p-3">{subject}</td>
                                    <td className="p-3 text-center"><GradeBadge grade={grade} size="sm" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
