'use client';
import { ThemeToggle } from '@/components/molecules/theme-toggle';
import { Button } from '@/components/ui/button';

export default function ThemeTogglePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Ghost (Default)</h2>
                <ThemeToggle variant="ghost" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Outline</h2>
                <ThemeToggle variant="outline" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Secondary</h2>
                <ThemeToggle variant="secondary" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Navbar Context</h2>
                <div className="border rounded-xl px-6 py-3 flex items-center justify-between">
                    <span className="font-semibold text-sm">EduManage</span>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">Dashboard</Button>
                        <Button variant="ghost" size="sm">Settings</Button>
                        <ThemeToggle variant="ghost" size="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
