import type { Metadata } from 'next';
import { OperationsCalendar } from '@/features/dashboard/operations';

export const metadata: Metadata = {
    title: 'Calendar — EduManager',
    description: 'View and manage school events and schedules',
};

export default function Page() {
    return (
        <OperationsCalendar
            month="January"
            year={2025}
            events={[
                { day: 5, title: 'Science Fair', time: '10:00 AM – 2:00 PM', type: 'academic' },
                { day: 10, title: 'Mid-Term Exams Begin', time: 'All Day', type: 'exam' },
                { day: 15, title: 'Parent-Teacher Meeting', time: '3:00 PM – 6:00 PM', type: 'academic' },
                { day: 18, title: 'Annual Sports Day', time: '8:00 AM – 4:00 PM', type: 'sports' },
                { day: 22, title: 'Republic Day Celebration', time: 'All Day', type: 'holiday' },
                { day: 26, title: 'Cultural Festival', time: '11:00 AM – 5:00 PM', type: 'cultural' },
                { day: 30, title: 'Staff Development Day', time: '9:00 AM – 1:00 PM', type: 'academic' },
            ]}
        />
    );
}
