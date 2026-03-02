"use client";
import { AnnouncementBar } from '@/components/molecules/announcement-bar';

export default function AnnouncementBarPage() {
    return (
        <div className="space-y-8 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default Variant</h2>
                <AnnouncementBar message="New feature: AI-powered grade predictions are now live!" href="#" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Muted Variant</h2>
                <AnnouncementBar message="SchoolPro v2.5 has been released. See what&apos;s new." href="#" variant="muted" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Warning Variant</h2>
                <AnnouncementBar message="System maintenance scheduled for Sunday, Jan 26 from 2–4 AM." variant="warning" />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Info Variant (closable)</h2>
                <AnnouncementBar
                    message="Free webinar: Best practices for school management. Register now!"
                    href="#"
                    variant="info"
                    closable
                />
            </div>
        </div>
    );
}
