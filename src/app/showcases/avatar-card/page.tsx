"use client";
import { AvatarCard } from '@/components/molecules/avatar-card';
import { Button } from '@/components/ui/button';

export default function AvatarCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Vertical Layout (default)</h2>
                <div className="grid grid-cols-3 gap-4 max-w-xl">
                    <AvatarCard
                        name="Alice Johnson"
                        subtitle="Grade 10 A"
                        avatar="https://i.pravatar.cc/80?img=1"
                        description="Honor roll student"
                    />
                    <AvatarCard
                        name="Bob Smith"
                        subtitle="Teacher"
                        avatar="https://i.pravatar.cc/80?img=4"
                    />
                    <AvatarCard
                        name="Carol White"
                        subtitle="Admin"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Horizontal Layout</h2>
                <div className="space-y-3 max-w-md">
                    <AvatarCard
                        name="Prof. Robert Lee"
                        subtitle="Math Department Head"
                        avatar="https://i.pravatar.cc/80?img=6"
                        horizontal
                        action={<Button size="sm" variant="outline">Message</Button>}
                    />
                    <AvatarCard
                        name="Ms. Emily Davis"
                        subtitle="Science Teacher"
                        avatar="https://i.pravatar.cc/80?img=5"
                        horizontal
                        action={<Button size="sm" variant="outline">Message</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
