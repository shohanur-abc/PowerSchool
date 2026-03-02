'use client';

import { TagInput } from '@/components/molecules/tag-input';
import { useState } from 'react';

export default function TagInputPage() {
    const [tags1, setTags1] = useState<string[]>([]);
    const [tags2, setTags2] = useState(['React', 'TypeScript']);
    const [tags3, setTags3] = useState<string[]>([]);

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Tag Input</h2>
                <div className="max-w-md">
                    <TagInput tags={tags1} onChange={setTags1} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Tags: {tags1.join(', ') || '(none)'}</p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">With Initial Tags</h2>
                <div className="max-w-md">
                    <TagInput tags={tags2} onChange={setTags2} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Tags: {tags2.join(', ')}</p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Custom Placeholder</h2>
                <div className="max-w-md">
                    <TagInput
                        placeholder="Add skill and press Enter..."
                        onChange={(t) => console.log(t)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Max 3 Tags</h2>
                <div className="max-w-md">
                    <TagInput
                        tags={tags3}
                        onChange={setTags3}
                        max={3}
                        placeholder="Max 3 tags..."
                    />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                    {tags3.length}/3 tags used
                </p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Subject Tags</h2>
                <div className="max-w-md">
                    <TagInput
                        tags={['Mathematics', 'Science', 'English']}
                        placeholder="Add subject..."
                        onChange={(t) => console.log(t)}
                    />
                </div>
            </div>
        </div>
    );
}
