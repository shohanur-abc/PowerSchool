"use client";
import { ScheduleCard } from '@/components/molecules/schedule-card';
import { BookOpenIcon, FlaskConicalIcon, MusicIcon, ActivityIcon } from 'lucide-react';

export default function ScheduleCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Today&apos;s Schedule</h2>
                <ScheduleCard
                    title="Monday — Grade 10 A"
                    events={[
                        { time: '08:00 AM', title: 'Mathematics', description: 'Algebra — Chapter 5', variant: 'primary', icon: BookOpenIcon },
                        { time: '09:45 AM', title: 'Science', description: 'Chemistry Lab', variant: 'default' },
                        { time: '11:30 AM', title: 'English', description: 'Essay writing', variant: 'default', icon: BookOpenIcon },
                        { time: '01:00 PM', title: 'Exam Alert', description: 'History test tomorrow!', variant: 'warning' },
                        { time: '02:30 PM', title: 'Sports', description: 'Physical Education', variant: 'default' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Compact Schedule</h2>
                <ScheduleCard
                    events={[
                        { time: '9 AM', title: 'Staff Meeting', variant: 'primary' },
                        { time: '11 AM', title: 'Grade Review', variant: 'default' },
                        { time: '3 PM', title: 'Parent Meeting', variant: 'warning' },
                        { time: '5 PM', title: 'System Maintenance', variant: 'danger' },
                    ]}
                />
            </div>
        </div>
    );
}
