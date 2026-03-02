"use client";
import { BadgeGroup } from '@/components/molecules/badge-group';
import { StarIcon, TagIcon } from 'lucide-react';

export default function BadgeGroupPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Secondary (Default)</h2>
                <BadgeGroup
                    badges={[
                        { label: 'Mathematics' },
                        { label: 'Science' },
                        { label: 'English' },
                        { label: 'History' },
                        { label: 'Geography' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline Variant</h2>
                <BadgeGroup
                    variant="outline"
                    badges={[
                        { label: 'Grade 10' },
                        { label: 'Section A' },
                        { label: 'Morning Shift' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icons</h2>
                <BadgeGroup
                    badges={[
                        { label: 'Featured', icon: StarIcon },
                        { label: 'Tagged', icon: TagIcon },
                        { label: 'Science', icon: TagIcon },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Custom Colors</h2>
                <BadgeGroup
                    badges={[
                        { label: 'Passed', color: '#22c55e' },
                        { label: 'Failed', color: '#ef4444' },
                        { label: 'Pending', color: '#f59e0b' },
                        { label: 'Absent', color: '#6b7280' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Max (Overflow)</h2>
                <BadgeGroup
                    max={3}
                    badges={[
                        { label: 'React' },
                        { label: 'TypeScript' },
                        { label: 'Next.js' },
                        { label: 'Tailwind' },
                        { label: 'Prisma' },
                    ]}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <BadgeGroup
                    size="sm"
                    badges={[
                        { label: 'Admin' },
                        { label: 'Editor' },
                        { label: 'Viewer' },
                    ]}
                />
            </div>
        </div>
    );
}
