"use client";
import { NoticeCard } from '@/components/molecules/notice-card';

export default function NoticeCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">High Priority</h2>
                <NoticeCard
                    title="School Closed — Flood Advisory"
                    date="Jan 20, 2025"
                    content="Due to severe flooding in the area, the school will remain closed on January 21, 2025. Online classes will proceed as scheduled."
                    priority="high"
                    author="Principal"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Medium Priority</h2>
                <NoticeCard
                    title="Parent-Teacher Meeting"
                    date="Jan 25, 2025"
                    content="The annual parent-teacher meeting is scheduled for February 5th. Please confirm your attendance via the app."
                    priority="medium"
                    author="Admin Office"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Low Priority</h2>
                <NoticeCard
                    title="Library Book Return"
                    date="Jan 10, 2025"
                    content="All overdue library books must be returned by January 31st to avoid late fees."
                    priority="low"
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Priority Badge</h2>
                <NoticeCard
                    title="Annual Sports Day"
                    date="Feb 1, 2025"
                    content="Get ready for our Annual Sports Day! Events will include track, field, and team sports. All students are encouraged to participate."
                    author="Sports Committee"
                />
            </div>
        </div>
    );
}
