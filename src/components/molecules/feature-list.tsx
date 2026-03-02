"use client";
import { cn } from '@/lib/utils';
import { CheckIcon, XIcon } from 'lucide-react';

export const FeatureList = ({ features, variant = 'check', columns = 1, className, classNames: cns }: FeatureListProps) => (
    <ul className={cn("@container grid gap-2", columns === 2 ? "grid-cols-1 @sm:grid-cols-2" : columns === 3 ? "grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3" : "", className)}>
        {features.map(({ label, included, description }, i) => (
            <li key={i} className={cn("flex items-start gap-2", cns?.item)}>
                {variant === 'check' && (
                    included !== false ? (
                        <CheckIcon className={cn("size-4 mt-0.5 text-green-500 shrink-0", cns?.icon)} />
                    ) : (
                        <XIcon className={cn("size-4 mt-0.5 text-red-400 shrink-0", cns?.icon)} />
                    )
                )}
                {variant === 'bullet' && <span className={cn("size-1.5 mt-2 rounded-full bg-primary shrink-0", cns?.bullet)} />}
                <div>
                    <span className={cn("text-sm", included === false && "text-muted-foreground", cns?.label)}>{label}</span>
                    {description && <p className={cn("text-xs text-muted-foreground", cns?.description)}>{description}</p>}
                </div>
            </li>
        ))}
    </ul>
);

interface FeatureListProps {
    features: { label: string; included?: boolean; description?: string }[];
    variant?: 'check' | 'bullet'; columns?: 1 | 2 | 3;
    className?: string; classNames?: { item?: string; icon?: string; bullet?: string; label?: string; description?: string };
}
