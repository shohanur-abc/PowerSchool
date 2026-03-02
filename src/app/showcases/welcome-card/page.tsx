"use client";
import { WelcomeCard } from '@/components/molecules/welcome-card';
import { Button } from '@/components/ui/button';

export default function WelcomeCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Student Welcome</h2>
                <WelcomeCard
                    greeting="Good Morning"
                    name="Alice Johnson"
                    message="You have 3 assignments due this week and 1 upcoming exam."
                    actions={
                        <div className="flex gap-2">
                            <Button size="sm">View Schedule</Button>
                            <Button size="sm" variant="outline">My Assignments</Button>
                        </div>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Teacher Welcome</h2>
                <WelcomeCard
                    greeting="Welcome back"
                    name="Prof. Robert Lee"
                    message="Today you have 4 classes and 12 ungraded assignments."
                    actions={<Button size="sm">View Timetable</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Name Only</h2>
                <WelcomeCard name="Carol White" />
            </div>
        </div>
    );
}
