'use client';
import { Chip, ChipGroup } from '@/components/molecules/chip';
import { TagIcon, BookIcon } from 'lucide-react';
import { useState } from 'react';

export default function ChipPage() {
    const subjects = ['All', 'Math', 'Science', 'English', 'History', 'Art'];
    const [selected, setSelected] = useState('All');

    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Individual Chips</h2>
                <div className="flex flex-wrap gap-2">
                    <Chip label="Default" />
                    <Chip label="Selected" selected />
                    <Chip label="With Icon" icon={TagIcon} />
                    <Chip label="Selected + Icon" icon={BookIcon} selected />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filled Variant</h2>
                <div className="flex flex-wrap gap-2">
                    <Chip label="Filled" variant="filled" />
                    <Chip label="Filled Selected" variant="filled" selected />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-2 items-center">
                    <Chip label="Small" size="sm" />
                    <Chip label="Default" size="default" />
                    <Chip label="Large" size="lg" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Filter Chips (Interactive)</h2>
                <ChipGroup
                    chips={subjects.map((s) => ({ label: s, selected: selected === s, onClick: () => setSelected(s) }))}
                />
            </div>
        </div>
    );
}
