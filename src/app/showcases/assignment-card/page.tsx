"use client";
import { AssignmentCard } from '@/components/molecules/assignment-card';

export default function AssignmentCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">All Statuses</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                    <AssignmentCard title="Algebra Problem Set" subject="Mathematics" dueDate="Nov 25, 2024" status="pending" />
                    <AssignmentCard title="Essay on Climate Change" subject="English" dueDate="Nov 20, 2024" status="submitted" />
                    <AssignmentCard title="Physics Lab Report" subject="Science" dueDate="Nov 18, 2024" status="graded" score={87} maxScore={100} />
                    <AssignmentCard title="History Timeline" subject="History" dueDate="Nov 15, 2024" status="late" />
                    <AssignmentCard title="Art Portfolio" subject="Art" dueDate="Nov 10, 2024" status="missing" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Scores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
                    <AssignmentCard title="Mid-term Exam" subject="Mathematics" status="graded" score={95} maxScore={100} />
                    <AssignmentCard title="Chapter Test" subject="Science" status="graded" score={43} maxScore={50} />
                </div>
            </div>
        </div>
    );
}
