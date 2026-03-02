"use client";
import { ProfileCard } from '@/components/molecules/profile-card';
import { Button } from '@/components/ui/button';

export default function ProfileCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold mb-4">Student Profile</h2>
                <ProfileCard
                    name="Alice Johnson"
                    email="alice@school.edu"
                    avatar="https://i.pravatar.cc/120?img=1"
                    bio="Grade 10 student passionate about mathematics and science. Member of the robotics club."
                    role="Student"
                    badges={['Honor Roll', 'Math Club']}
                    actions={
                        <div className="flex gap-2 w-full">
                            <Button variant="outline" size="sm" className="flex-1">Message</Button>
                            <Button size="sm" className="flex-1">View Grades</Button>
                        </div>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Teacher Profile</h2>
                <ProfileCard
                    name="Prof. Robert Lee"
                    email="rlee@school.edu"
                    avatar="https://i.pravatar.cc/120?img=4"
                    bio="Math department head with 15 years of teaching experience."
                    role="Head of Math"
                    actions={
                        <Button variant="outline" size="sm" className="w-full">Schedule Meeting</Button>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Minimal Profile</h2>
                <ProfileCard
                    name="Carol White"
                    email="carol@school.edu"
                    role="Administrator"
                />
            </div>
        </div>
    );
}
