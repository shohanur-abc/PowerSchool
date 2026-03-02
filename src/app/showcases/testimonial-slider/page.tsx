'use client';
import { TestimonialSlider } from '@/components/molecules/testimonial-slider';

export default function TestimonialSliderPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Roles</h2>
                <TestimonialSlider
                    testimonials={[
                        {
                            quote: 'This platform has completely transformed how we manage our school. The dashboard is intuitive and the reports are incredibly detailed.',
                            author: 'Sarah Johnson',
                            role: 'Principal, Greenfield Academy',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
                        },
                        {
                            quote: 'As a teacher, tracking student progress has never been easier. I can see at a glance who needs extra attention.',
                            author: 'Michael Chen',
                            role: 'Math Teacher, Westview High School',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
                        },
                        {
                            quote: 'My children\'s grades and attendance are at my fingertips. I feel much more connected to their academic journey now.',
                            author: 'Emily Rodriguez',
                            role: 'Parent',
                            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
                        },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Without Avatars</h2>
                <TestimonialSlider
                    testimonials={[
                        {
                            quote: 'Simple, powerful, and exactly what our institution needed.',
                            author: 'David Kim',
                            role: 'Head of Academics',
                        },
                        {
                            quote: 'Fee collection and notices are now a breeze.',
                            author: 'Priya Sharma',
                            role: 'School Administrator',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
