"use client";
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

export const PasswordStrength = ({ password, showLabel = true, className, classNames: cns }: PasswordStrengthProps) => {
    const strength = useMemo(() => getStrength(password), [password]);

    return (
        <div className={cn("space-y-1.5", className)}>
            <div className={cn("flex gap-1", cns?.bars)}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className={cn("h-1.5 flex-1 rounded-full transition-colors", i <= strength.level ? strength.color : "bg-muted", cns?.bar)} />
                ))}
            </div>
            {showLabel && <p className={cn("text-xs", strength.textColor, cns?.label)}>{strength.label}</p>}
        </div>
    );
};

const getStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    const levels = [
        { level: 0, label: 'Too weak', color: 'bg-muted', textColor: 'text-muted-foreground' },
        { level: 1, label: 'Weak', color: 'bg-red-500', textColor: 'text-red-500' },
        { level: 2, label: 'Fair', color: 'bg-yellow-500', textColor: 'text-yellow-500' },
        { level: 3, label: 'Good', color: 'bg-blue-500', textColor: 'text-blue-500' },
        { level: 4, label: 'Strong', color: 'bg-green-500', textColor: 'text-green-500' },
    ];
    return levels[score];
};

interface PasswordStrengthProps {
    password: string; showLabel?: boolean;
    className?: string; classNames?: { bars?: string; bar?: string; label?: string };
}
