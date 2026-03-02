"use client";
import { cn } from '@/lib/utils';

export const SettingsRow = ({ label, description, children, className, classNames: cns }: SettingsRowProps) => (
    <div className={cn("flex items-center justify-between py-4 border-b last:border-b-0 @container", className)}>
        <div className={cn("flex-1 mr-4", cns?.text)}>
            <p className={cn("text-sm font-medium", cns?.label)}>{label}</p>
            {description && <p className={cn("text-xs text-muted-foreground mt-0.5", cns?.description)}>{description}</p>}
        </div>
        <div className={cn("shrink-0", cns?.control)}>{children}</div>
    </div>
);

interface SettingsRowProps {
    label: string; description?: string; children: React.ReactNode;
    className?: string; classNames?: { text?: string; label?: string; description?: string; control?: string };
}
