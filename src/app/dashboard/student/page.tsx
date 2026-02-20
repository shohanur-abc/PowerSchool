import type { Metadata } from 'next';
import { StudentDashboard } from '@/features/dashboard/student';

export const metadata: Metadata = {
    title: 'Student Dashboard — EduManager',
    description: 'Your academic overview and daily schedule',
};

export default function Page() {
    return (
        <StudentDashboard
            attendance={{ percent: 93 }}
            schedule={[
                { period: '1st', subject: 'Mathematics', teacher: 'Mr. Kabir', room: 'Room 101' },
                { period: '2nd', subject: 'Physics', teacher: 'Ms. Khanam', room: 'Lab 2' },
                { period: '3rd', subject: 'English', teacher: 'Ms. Islam', room: 'Room 205' },
                { period: '4th', subject: 'Chemistry', teacher: 'Mr. Hossain', room: 'Lab 1' },
                { period: '5th', subject: 'Bengali', teacher: 'Mr. Ahmed', room: 'Room 108' },
            ]}
            grades={[
                { subject: 'Mathematics', grade: 'A+', percentage: 94 },
                { subject: 'Physics', grade: 'A', percentage: 88 },
                { subject: 'Chemistry', grade: 'A-', percentage: 82 },
                { subject: 'English', grade: 'B', percentage: 76 },
                { subject: 'Bengali', grade: 'A', percentage: 90 },
            ]}
            assignments={[
                { title: 'Chapter 5 Problems', subject: 'Mathematics', dueDate: 'Jun 14', status: 'pending' },
                { title: 'Lab Report — Titration', subject: 'Chemistry', dueDate: 'Jun 16', status: 'pending' },
                { title: 'Essay: Climate Change', subject: 'English', dueDate: 'Jun 18', status: 'pending' },
                { title: 'Mid-Term Test', subject: 'Physics', dueDate: 'Jun 22', status: 'upcoming' },
            ]}
            notices={[
                { title: 'Annual Sports Day — June 20', date: 'Jun 10, 2024' },
                { title: 'Term 2 Exam Schedule Released', date: 'Jun 8, 2024' },
                { title: 'Library Books Return Deadline', date: 'Jun 5, 2024' },
            ]}
        />
    );
}
