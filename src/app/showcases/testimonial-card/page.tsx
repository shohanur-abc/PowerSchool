"use client";
import { TestimonialCard } from '@/components/molecules/testimonial-card';

export default function TestimonialCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <TestimonialCard
                        quote="SchoolPro completely transformed how we manage our institution. The analytics are incredible."
                        author={{ name: 'Sarah Johnson', role: 'Principal, Greenwood Academy', avatar: 'https://i.pravatar.cc/80?img=1' }}
                    />
                    <TestimonialCard
                        quote="As a parent, I love being able to track my child's progress in real time."
                        author={{ name: 'Michael Chen', role: 'Parent', avatar: 'https://i.pravatar.cc/80?img=3' }}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <TestimonialCard
                        quote="The fee management module saved us so many hours every month."
                        author={{ name: 'Emily Davis', role: 'Bursar, Sunrise School' }}
                        variant="filled"
                    />
                    <TestimonialCard
                        quote="Students love the assignment tracking feature. Submission rates are up 40%."
                        author={{ name: 'Prof. Robert Lee', role: 'Teacher, Math Dept.' }}
                        variant="filled"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Quote Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <TestimonialCard
                        quote="An absolute game-changer for school administration. Highly recommend."
                        author={{ name: 'Jessica Moore', role: 'Head of IT', avatar: 'https://i.pravatar.cc/80?img=5' }}
                        variant="quote"
                    />
                    <TestimonialCard
                        quote="The best investment our school has made in the past decade."
                        author={{ name: 'David Wilson', role: 'Board Member' }}
                        variant="quote"
                    />
                </div>
            </div>
        </div>
    );
}
