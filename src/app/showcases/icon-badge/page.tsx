"use client";
import { IconBadge } from '@/components/molecules/icon-badge';
import { BellIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon, InfoIcon, StarIcon, UserIcon, SettingsIcon } from 'lucide-react';

export default function IconBadgePage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Variants</h2>
                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={InfoIcon} variant="default" />
                        <span className="text-xs text-muted-foreground">Default</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={StarIcon} variant="primary" />
                        <span className="text-xs text-muted-foreground">Primary</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={CheckCircleIcon} variant="success" />
                        <span className="text-xs text-muted-foreground">Success</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={AlertTriangleIcon} variant="warning" />
                        <span className="text-xs text-muted-foreground">Warning</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={XCircleIcon} variant="danger" />
                        <span className="text-xs text-muted-foreground">Danger</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Sizes</h2>
                <div className="flex flex-wrap gap-4 items-end">
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={BellIcon} size="sm" variant="primary" />
                        <span className="text-xs text-muted-foreground">sm</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={BellIcon} size="default" variant="primary" />
                        <span className="text-xs text-muted-foreground">default</span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                        <IconBadge icon={BellIcon} size="lg" variant="primary" />
                        <span className="text-xs text-muted-foreground">lg</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">In Card Context</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                    {[
                        { icon: UserIcon, variant: 'primary' as const, title: 'New Student', desc: 'Enrollment confirmed' },
                        { icon: BellIcon, variant: 'warning' as const, title: 'Reminder', desc: 'Exam in 2 days' },
                        { icon: CheckCircleIcon, variant: 'success' as const, title: 'Payment', desc: 'Fee received' },
                        { icon: SettingsIcon, variant: 'default' as const, title: 'System', desc: 'Scheduled maintenance' },
                    ].map(({ icon, variant, title, desc }) => (
                        <div key={title} className="border rounded-xl p-4 flex items-start gap-3">
                            <IconBadge icon={icon} variant={variant} />
                            <div>
                                <p className="text-sm font-medium">{title}</p>
                                <p className="text-xs text-muted-foreground">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
