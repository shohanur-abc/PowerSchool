"use client";
import { EventCard } from '@/components/molecules/event-card';
import { Button } from '@/components/ui/button';

export default function EventCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Events</h2>
                <div className="grid grid-cols-2 gap-4">
                    <EventCard
                        title="Annual Science Fair"
                        date="March 15, 2025"
                        time="9:00 AM – 4:00 PM"
                        location="Main Hall, Greenwood Academy"
                        description="Students showcase their science projects."
                        badge="Science"
                    />
                    <EventCard
                        title="Parent-Teacher Meeting"
                        date="February 5, 2025"
                        time="3:00 PM – 6:00 PM"
                        location="Conference Room B"
                        description="Annual meeting to discuss student progress."
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Image &amp; Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                    <EventCard
                        title="Sports Day 2025"
                        date="April 20, 2025"
                        time="All Day"
                        location="School Grounds"
                        description="Track, field and team sports competition."
                        image="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600"
                        badge="Sports"
                        actions={
                            <div className="flex gap-2">
                                <Button size="sm">Register</Button>
                                <Button size="sm" variant="outline">Learn More</Button>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
