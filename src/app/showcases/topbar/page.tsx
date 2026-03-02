"use client";
import { Topbar } from '@/components/molecules/topbar';
import { Button } from '@/components/ui/button';
import { BellIcon, SearchIcon, UserCircleIcon, MenuIcon } from 'lucide-react';

export default function TopbarPage() {
    return (
        <div className="space-y-8 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Left + Right</h2>
                <Topbar
                    left={<span className="font-bold text-lg">MyApp</span>}
                    right={
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon"><BellIcon className="size-4" /></Button>
                            <Button variant="ghost" size="icon"><UserCircleIcon className="size-4" /></Button>
                        </div>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Left + Center + Right</h2>
                <Topbar
                    left={
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon"><MenuIcon className="size-4" /></Button>
                            <span className="font-bold">SchoolPro</span>
                        </div>
                    }
                    center={
                        <div className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm text-muted-foreground w-64">
                            <SearchIcon className="size-3.5" /> Search...
                        </div>
                    }
                    right={
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon"><BellIcon className="size-4" /></Button>
                            <Button size="sm">Sign In</Button>
                        </div>
                    }
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Center Only</h2>
                <Topbar
                    center={<nav className="flex gap-6 text-sm font-medium">
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                    </nav>}
                />
            </div>
        </div>
    );
}
