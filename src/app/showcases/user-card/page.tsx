"use client";
import { UserCard } from '@/components/molecules/user-card';
import { Button } from '@/components/ui/button';

export default function UserCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <UserCard
                        name="Alice Johnson"
                        email="alice@example.com"
                        role="Student"
                        status="active"
                        avatar="https://i.pravatar.cc/80?img=1"
                        action={<Button variant="outline" size="sm">View Profile</Button>}
                    />
                    <UserCard
                        name="Prof. Robert Lee"
                        email="rlee@school.edu"
                        role="Teacher"
                        status="active"
                        avatar="https://i.pravatar.cc/80?img=4"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <UserCard
                        name="Bob Smith"
                        email="bob@school.edu"
                        role="Parent"
                        status="inactive"
                        variant="ghost"
                    />
                    <UserCard
                        name="Carol White"
                        email="carol@school.edu"
                        role="Admin"
                        status="active"
                        variant="ghost"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Compact Variant</h2>
                <div className="space-y-2 max-w-xs">
                    <UserCard name="Alice Johnson" email="alice@example.com" role="Student" variant="compact" />
                    <UserCard name="Bob Smith" email="bob@example.com" role="Teacher" variant="compact" />
                    <UserCard name="Carol White" email="carol@example.com" role="Admin" variant="compact" />
                </div>
            </div>
        </div>
    );
}
