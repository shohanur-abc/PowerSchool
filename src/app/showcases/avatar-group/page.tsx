"use client";
import { AvatarGroup } from '@/components/molecules/avatar-group';

const avatars = [
    { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice', name: 'Alice Johnson' },
    { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob', name: 'Bob Smith' },
    { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carol', name: 'Carol White' },
    { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david', name: 'David Lee' },
    { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=eve', name: 'Eve Martinez' },
    { name: 'Frank Brown' },
    { name: 'Grace Wilson' },
    { name: 'Henry Taylor' },
];

export default function AvatarGroupPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Size</h2>
                <AvatarGroup avatars={avatars} max={5} size="default" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Small Size</h2>
                <AvatarGroup avatars={avatars} max={5} size="sm" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Large Size</h2>
                <AvatarGroup avatars={avatars} max={4} size="lg" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Show All (max = total)</h2>
                <AvatarGroup avatars={avatars.slice(0, 4)} max={10} />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Overflow Counter</h2>
                <AvatarGroup avatars={avatars} max={3} />
                <p className="text-xs text-muted-foreground mt-2">Showing 3 of 8 members</p>
            </div>
        </div>
    );
}
