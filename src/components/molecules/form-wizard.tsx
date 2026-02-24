"use client";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export const FormWizard = ({ steps, onComplete, className, classNames: cns }: FormWizardProps) => {
    const [current, setCurrent] = useState(0);
    const step = steps[current];
    const isLast = current === steps.length - 1;
    const isFirst = current === 0;

    return (
        <Card className={cn("@container", className)}>
            <CardHeader className={cns?.header}>
                <div className="flex items-center justify-between">
                    <CardTitle className={cn("text-base", cns?.title)}>{step.title}</CardTitle>
                    <span className={cn("text-xs text-muted-foreground", cns?.stepCount)}>Step {current + 1} of {steps.length}</span>
                </div>
                <div className={cn("flex gap-1 mt-3", cns?.progress)}>
                    {steps.map((_, i) => (
                        <div key={i} className={cn("h-1 flex-1 rounded-full transition-colors", i <= current ? "bg-primary" : "bg-muted")} />
                    ))}
                </div>
            </CardHeader>
            <CardContent className={cns?.content}>{step.content}</CardContent>
            <CardFooter className={cn("flex justify-between", cns?.footer)}>
                <Button variant="outline" onClick={() => setCurrent(c => c - 1)} disabled={isFirst} className={cns?.prev}>Previous</Button>
                <Button onClick={() => isLast ? onComplete?.() : setCurrent(c => c + 1)} className={cns?.next}>{isLast ? 'Complete' : 'Next'}</Button>
            </CardFooter>
        </Card>
    );
};

interface FormWizardProps {
    steps: { title: string; content: React.ReactNode }[]; onComplete?: () => void;
    className?: string; classNames?: { header?: string; title?: string; stepCount?: string; progress?: string; content?: string; footer?: string; prev?: string; next?: string };
}
