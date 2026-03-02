'use client';
import { Tag, TagGroup } from '@/components/molecules/tag';
import { TagIcon } from 'lucide-react';
import { useState } from 'react';

export default function TagPage() {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Next.js', 'Tailwind', 'Prisma']);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="flex flex-wrap gap-2">
                    <Tag variant="default">Default</Tag>
                    <Tag variant="outline">Outline</Tag>
                    <Tag variant="filled">Filled</Tag>
                    <Tag variant="success">Success</Tag>
                    <Tag variant="warning">Warning</Tag>
                    <Tag variant="danger">Danger</Tag>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-2 items-center">
                    <Tag size="sm">Small</Tag>
                    <Tag size="default">Default</Tag>
                    <Tag size="lg">Large</Tag>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon</h2>
                <div className="flex flex-wrap gap-2">
                    <Tag icon={TagIcon} variant="default">Mathematics</Tag>
                    <Tag icon={TagIcon} variant="success">Passed</Tag>
                    <Tag icon={TagIcon} variant="danger">Failed</Tag>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Removable Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Tag key={tag} removable onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}>
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Tag Group with Max</h2>
                <TagGroup
                    tags={[
                        { children: 'Science' },
                        { children: 'Math' },
                        { children: 'English' },
                        { children: 'History' },
                        { children: 'Geography' },
                        { children: 'Art' },
                    ]}
                    max={4}
                />
            </div>
        </div>
    );
}
