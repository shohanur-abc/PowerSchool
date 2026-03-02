"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const OnboardingStep = ({ step, totalSteps, title, description, illustration, primaryAction, secondaryAction, className, classNames: cns }: OnboardingStepProps) => (
    <div className={cn("@container flex flex-col items-center text-center max-w-lg mx-auto py-12", className)}>
        {illustration && <div className={cn("mb-8", cns?.illustration)}>{illustration}</div>}
        <div className={cn("flex gap-1 mb-6", cns?.dots)}>
            {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className={cn("h-1.5 rounded-full transition-all", i === step ? "w-6 bg-primary" : "w-1.5 bg-muted")} />
            ))}
        </div>
        <h2 className={cn("text-xl font-bold", cns?.title)}>{title}</h2>
        {description && <p className={cn("text-sm text-muted-foreground mt-2 max-w-sm", cns?.description)}>{description}</p>}
        <div className={cn("flex gap-3 mt-8", cns?.actions)}>
            {secondaryAction && <Button variant="outline" onClick={secondaryAction.onClick} className={cns?.secondary}>{secondaryAction.label}</Button>}
            {primaryAction && <Button onClick={primaryAction.onClick} className={cns?.primary}>{primaryAction.label}</Button>}
        </div>
    </div>
);

interface OnboardingStepProps {
    step: number; totalSteps: number; title: string; description?: string; illustration?: React.ReactNode;
    primaryAction?: { label: string; onClick: () => void }; secondaryAction?: { label: string; onClick: () => void };
    className?: string; classNames?: { illustration?: string; dots?: string; title?: string; description?: string; actions?: string; primary?: string; secondary?: string };
}
