"use client";
import { Divider } from '@/components/molecules/divider';
import { StarIcon } from 'lucide-react';

export default function DividerPage() {
    return (
        <div className="space-y-16 py-8 max-w-2xl">
            <div>
                <h2 className="text-lg font-semibold mb-4">Plain Divider</h2>
                <Divider />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Center Label</h2>
                <Divider label="OR" align="center" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Left Label</h2>
                <Divider label="Section Start" align="left" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Right Label</h2>
                <Divider label="End" align="right" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon (center)</h2>
                <Divider icon={StarIcon} align="center" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Icon &amp; Label</h2>
                <Divider label="Featured" icon={StarIcon} align="center" />
            </div>
        </div>
    );
}
