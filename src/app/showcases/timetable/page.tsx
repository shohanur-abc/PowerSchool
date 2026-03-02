"use client";
import { Timetable } from '@/components/molecules/timetable';

export default function TimetablePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Class 10A Weekly Timetable</h2>
                <Timetable
                    days={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                    periods={[
                        '8:00–8:45 AM',
                        '9:00–9:45 AM',
                        '10:00–10:45 AM',
                        '11:00–11:45 AM',
                        'Lunch Break',
                        '1:00–1:45 PM',
                        '2:00–2:45 PM',
                    ]}
                    slots={[
                        { day: 0, period: 0, subject: 'Mathematics', teacher: 'Mr. Carter', variant: 'math' },
                        { day: 0, period: 1, subject: 'English', teacher: 'Mrs. White', variant: 'language' },
                        { day: 0, period: 2, subject: 'Science', teacher: 'Ms. Lee', variant: 'science' },
                        { day: 0, period: 3, subject: 'History', teacher: 'Mr. Kim' },
                        { day: 0, period: 4, subject: 'Lunch Break', variant: 'break' },
                        { day: 0, period: 5, subject: 'Art', teacher: 'Ms. Rodriguez', variant: 'arts' },
                        { day: 0, period: 6, subject: 'Geography', teacher: 'Mr. Patel' },

                        { day: 1, period: 0, subject: 'Science', teacher: 'Ms. Lee', variant: 'science' },
                        { day: 1, period: 1, subject: 'Mathematics', teacher: 'Mr. Carter', variant: 'math' },
                        { day: 1, period: 2, subject: 'English', teacher: 'Mrs. White', variant: 'language' },
                        { day: 1, period: 4, subject: 'Lunch Break', variant: 'break' },
                        { day: 1, period: 5, subject: 'Mathematics', teacher: 'Mr. Carter', variant: 'math' },

                        { day: 2, period: 0, subject: 'History', teacher: 'Mr. Kim' },
                        { day: 2, period: 1, subject: 'Science', teacher: 'Ms. Lee', variant: 'science' },
                        { day: 2, period: 4, subject: 'Lunch Break', variant: 'break' },
                        { day: 2, period: 5, subject: 'English', teacher: 'Mrs. White', variant: 'language' },
                        { day: 2, period: 6, subject: 'Art', teacher: 'Ms. Rodriguez', variant: 'arts' },

                        { day: 3, period: 0, subject: 'Mathematics', teacher: 'Mr. Carter', variant: 'math' },
                        { day: 3, period: 2, subject: 'Geography', teacher: 'Mr. Patel' },
                        { day: 3, period: 4, subject: 'Lunch Break', variant: 'break' },
                        { day: 3, period: 6, subject: 'Science', teacher: 'Ms. Lee', variant: 'science' },

                        { day: 4, period: 0, subject: 'English', teacher: 'Mrs. White', variant: 'language' },
                        { day: 4, period: 1, subject: 'History', teacher: 'Mr. Kim' },
                        { day: 4, period: 4, subject: 'Lunch Break', variant: 'break' },
                        { day: 4, period: 5, subject: 'Art', teacher: 'Ms. Rodriguez', variant: 'arts' },
                    ]}
                />
            </div>
        </div>
    );
}
