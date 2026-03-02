"use client";
import { TeamCard } from '@/components/molecules/team-card';
import { Button } from '@/components/ui/button';

export default function TeamCardPage() {
    return (
        <div className="space-y-16 py-8 max-w-lg">
            <div>
                <h2 className="text-lg font-semibold mb-4">Teaching Staff</h2>
                <TeamCard
                    title="Math Department"
                    members={[
                        { name: 'Prof. Robert Lee', email: 'rlee@school.edu', role: 'Head of Department', status: 'online' },
                        { name: 'Ms. Alice Johnson', email: 'ajohnson@school.edu', role: 'Senior Teacher', status: 'online' },
                        { name: 'Mr. David Brown', email: 'dbrown@school.edu', role: 'Teacher', status: 'away' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <TeamCard
                    title="Admin Team"
                    members={[
                        { name: 'Sarah Smith', email: 'sarah@school.edu', role: 'Principal' },
                        { name: 'John Adams', email: 'jadams@school.edu', role: 'Vice Principal' },
                        { name: 'Carol White', email: 'cwhite@school.edu', role: 'Admin Officer' },
                    ]}
                    action={<Button variant="outline" size="sm">View All</Button>}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Avatar Images</h2>
                <TeamCard
                    members={[
                        { name: 'Emily Davis', avatar: 'https://i.pravatar.cc/80?img=5', role: 'Designer' },
                        { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/80?img=3', role: 'Developer' },
                        { name: 'Jessica Moore', avatar: 'https://i.pravatar.cc/80?img=7', role: 'Manager' },
                    ]}
                />
            </div>
        </div>
    );
}
