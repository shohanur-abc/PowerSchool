"use client";
import { InfoRow } from '@/components/molecules/info-row';
import { Button } from '@/components/ui/button';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon, CalendarIcon } from 'lucide-react';

export default function InfoRowPage() {
    return (
        <div className="space-y-16 py-8 max-w-md">
            <div>
                <h2 className="text-lg font-semibold mb-4">Basic Info Rows</h2>
                <div className="space-y-2">
                    <InfoRow icon={UserIcon} label="Name" value="Alice Johnson" />
                    <InfoRow icon={MailIcon} label="Email" value="alice@example.com" />
                    <InfoRow icon={PhoneIcon} label="Phone" value="+1 555 234 5678" />
                    <InfoRow icon={MapPinIcon} label="Location" value="New York, USA" />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Action</h2>
                <div className="space-y-2">
                    <InfoRow
                        icon={MailIcon}
                        label="Email"
                        value="alice@example.com"
                        action={<Button variant="ghost" size="sm">Edit</Button>}
                    />
                    <InfoRow
                        icon={CalendarIcon}
                        label="Subscription Expiry"
                        value="Dec 31, 2025"
                        action={<Button variant="outline" size="sm">Renew</Button>}
                    />
                </div>
            </div>
        </div>
    );
}
