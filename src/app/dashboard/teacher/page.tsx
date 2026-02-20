import type { Metadata } from 'next';
import { TeacherDashboard } from '@/features/dashboard/teacher';

export const metadata: Metadata = {
    title: 'Teacher Dashboard — EduManager',
    description: 'Your teaching overview and class management',
};

export default function Page() {
    return (
        <TeacherDashboard
            classes={[
                { name: 'Class 10-A', subject: 'Mathematics' },
                { name: 'Class 9-B', subject: 'Mathematics' },
                { name: 'Class 8-C', subject: 'Mathematics' },
            ]}
            schedule={[
                { time: '8:00 AM', class: 'Class 10-A', subject: 'Mathematics', room: 'Room 101', students: 38 },
                { time: '9:00 AM', class: 'Class 9-B', subject: 'Mathematics', room: 'Room 203', students: 35 },
                { time: '11:00 AM', class: 'Class 8-C', subject: 'Mathematics', room: 'Room 105', students: 40 },
            ]}
            pendingMarkings={[
                { title: 'Chapter 4 Test', class: 'Class 10-A', type: 'Test', submissions: 36 },
                { title: 'Homework #12', class: 'Class 9-B', type: 'Assignment', submissions: 30 },
                { title: 'Mid-Term Paper', class: 'Class 8-C', type: 'Exam', submissions: 40 },
            ]}
            studentStats={[
                { class: 'Class 10-A', totalStudents: 38, avgGrade: 82, passRate: 94 },
                { class: 'Class 9-B', totalStudents: 35, avgGrade: 76, passRate: 88 },
                { class: 'Class 8-C', totalStudents: 40, avgGrade: 79, passRate: 90 },
            ]}
        />
    );
}
