import type { Metadata } from 'next';

import {
  AcademicCalendar,
  EventList,
  AddEvent,
} from '@/features/dashboard/operations';

// TODO: Replace static data with API calls to fetch academic calendar events
// TODO: Integrate with calendar service for live event management

const calendarEvents = [
  { id: 'EVT-001', title: 'Republic Day Celebration', startDate: '2026-01-26', type: 'holiday' as const, description: 'National holiday celebration at School Ground' },
  { id: 'EVT-002', title: 'Annual Sports Day', startDate: '2026-02-14', type: 'event' as const, description: 'Sports Complex, 09:00 AM' },
  { id: 'EVT-003', title: 'Parent-Teacher Meeting', startDate: '2026-02-21', type: 'meeting' as const, description: 'Respective Classrooms, 10:00 AM' },
  { id: 'EVT-004', title: 'Science Exhibition', startDate: '2026-03-05', type: 'event' as const, description: 'Exhibition Hall, 09:30 AM' },
  { id: 'EVT-005', title: 'Holi Holiday', startDate: '2026-03-14', type: 'holiday' as const },
  { id: 'EVT-006', title: 'Unit Test 3 Begins', startDate: '2026-03-18', type: 'exam' as const, description: 'Exam Halls, 09:00 AM' },
  { id: 'EVT-007', title: 'Unit Test 3 Ends', startDate: '2026-03-25', type: 'exam' as const, description: 'Exam Halls, 12:00 PM' },
  { id: 'EVT-008', title: 'Annual Day Function', startDate: '2026-04-03', type: 'event' as const, description: 'School Auditorium, 05:00 PM' },
  { id: 'EVT-009', title: 'Summer Vacation Begins', startDate: '2026-05-01', type: 'holiday' as const },
  { id: 'EVT-010', title: 'Independence Day', startDate: '2026-08-15', type: 'holiday' as const, description: 'National holiday celebration at School Ground' },
];

const upcomingEvents = [
  { id: 'EVT-003', title: 'Parent-Teacher Meeting', startDate: '2026-02-21', type: 'meeting' as const, description: 'Respective Classrooms, 10:00 AM' },
  { id: 'EVT-004', title: 'Science Exhibition', startDate: '2026-03-05', type: 'event' as const, description: 'Exhibition Hall, 09:30 AM' },
  { id: 'EVT-005', title: 'Holi Holiday', startDate: '2026-03-14', type: 'holiday' as const },
  { id: 'EVT-006', title: 'Unit Test 3 Begins', startDate: '2026-03-18', type: 'exam' as const, description: 'Exam Halls, 09:00 AM' },
  { id: 'EVT-007', title: 'Unit Test 3 Ends', startDate: '2026-03-25', type: 'exam' as const, description: 'Exam Halls, 12:00 PM' },
  { id: 'EVT-008', title: 'Annual Day Function', startDate: '2026-04-03', type: 'event' as const, description: 'School Auditorium, 05:00 PM' },
];

export const metadata: Metadata = {
  title: 'Academic Calendar',
  description:
    'View the full academic calendar, upcoming events, holidays, examinations, and manage school event scheduling.',
};

export default function Page() {
  return (
    <div className="@container space-y-6">
      <AcademicCalendar
        title="Academic Calendar 2025–26"
        events={calendarEvents}
      />

      <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-6">
        <EventList
          title="Upcoming Events"
          events={upcomingEvents}
        />
        <AddEvent title="Schedule New Event" />
      </div>
    </div>
  );
}
