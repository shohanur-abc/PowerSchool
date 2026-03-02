"use client";
import { MiniProfile } from '@/components/molecules/mini-profile';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontalIcon } from 'lucide-react';

export default function MiniProfilePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Size</h2>
                <div className="max-w-xs space-y-3">
                    <MiniProfile
                        name="Alice Johnson"
                        subtitle="Mathematics Teacher"
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=alice"
                    />
                    <MiniProfile
                        name="Bob Smith"
                        subtitle="Grade 10 — Roll #42"
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=bob"
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <div className="max-w-xs space-y-3">
                    <MiniProfile
                        name="Carol White"
                        subtitle="Principal"
                        avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=carol"
                        action={<Badge variant="outline">Admin</Badge>}
                    />
                    <MiniProfile
                        name="David Lee"
                        subtitle="Parent · 2 children"
                        action={<Button variant="ghost" size="icon"><MoreHorizontalIcon className="size-4" /></Button>}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="space-y-4 max-w-xs">
                    <MiniProfile name="Small Profile" subtitle="sm size" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=sm" size="sm" />
                    <MiniProfile name="Default Profile" subtitle="default size" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=def" size="default" />
                    <MiniProfile name="Large Profile" subtitle="lg size" avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=lg" size="lg" />
                </div>
            </div>
        </div>
    );
}
